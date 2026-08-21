import { Elements, useStripe, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useMemo, useState } from 'react';

const stripePromise = loadStripe("pk_test_51TozhrCjuVlv6C0Yb8FYODaTYD1puywX3K5QrtcmLzfSyoL1PoTqOQbAXu65KIJrvJmwXCB0TUMmxd3bEpH5QZbB008QsXWcdY");

// Types
interface Plan {
    id?: string;
    planId?: string;
    planName: string;
    price: number;
    currency: string;
    billingCycle: string;
    description?: string;
    totalNoOfUsers?: number;
    totalNoOfResponses?: number;
    totalNoOfSurveys?: number;
    totalNoOfQuestions?: number;
    config?: Record<string, any>;
}

interface PaymentUiProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPlan: Plan | null;
    userEmail?: string;
}

// Turns config booleans into a human readable add-on/feature list without hardcoding any labels or counts
const getConfigFeatureList = (config: any): string[] => {
    if (!config || typeof config !== 'object') return [];

    const toLabel = (key: string) =>
        key
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            .replace(/^./, (c) => c.toUpperCase())
            .trim();

    const features: string[] = [];

    const walk = (obj: any) => {
        Object.entries(obj || {}).forEach(([key, value]) => {
            if (value === true) {
                features.push(toLabel(key));
            } else if (value && typeof value === 'object' && !Array.isArray(value)) {
                walk(value);
            }
        });
    };

    walk(config);
    return features;
};

const PaymentUi: React.FC<PaymentUiProps> = ({ isOpen, onClose, selectedPlan, userEmail = "" }) => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const options = useMemo(() => {
        if (!clientSecret) return null;

        return {
            clientSecret: clientSecret,
            appearance: {
                theme: 'stripe' as const,
                variables: {
                    colorPrimary: '#0570de',
                    colorBackground: '#ffffff',
                    colorText: '#30313d',
                    fontFamily: 'Ideal Sans, system-ui, sans-serif',
                },
                rules: {
                    '.Label': {
                        color: '#your-custom-label-color',
                        fontWeight: 'bold',
                    },
                    '.Input': {
                        border: '1px solid #e6e6e6',
                        padding: '12px',
                    },
                },
            },
        };
    }, [clientSecret]);

    const getClientSecret = async () => {
        setLoading(true);
        setError(null);

        try {
            if (!selectedPlan) {
                throw new Error('No plan selected');
            }

            const planId = selectedPlan.planId || selectedPlan.id;
            if (!planId) {
                throw new Error('The selected plan is missing its plan ID');
            }

            const payload = {
                amount: selectedPlan.price * 12 || 0,
                currency: selectedPlan.currency || 'usd',
                planId,
                description: selectedPlan.description || "Test payment for order",
                name: selectedPlan.planName || "",
                period: selectedPlan.billingCycle || "yearly",
                metadata: {
                    planId,
                    planName: selectedPlan.planName || "",
                    price: selectedPlan.price || '',
                    totalNoQues: selectedPlan.totalNoOfQuestions || "",
                    totalNoResponses: selectedPlan.totalNoOfResponses || "",
                    totalNoSurveys: selectedPlan?.totalNoOfSurveys || "",
                    totalNoUsers: selectedPlan.totalNoOfUsers || "",
                    userEmail: userEmail || "",
                }
            };

            const response: any = await fetch(`https://api.saja.biz/saja/api/payments/stripe/payment-intent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            }).then(r => r.json());
            console.log("response", response)
            if (response?.clientSecret) {
                setClientSecret(response?.clientSecret);
            } else {
                throw new Error('No clientSecret received from server');
            }
        } catch (error: any) {
            console.error("Error occurred:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (selectedPlan) {
            setClientSecret(null);
            getClientSecret();
        }
    }, [selectedPlan]);
    return (
        // Change z-index to a higher value like z-[9999]
        <div className="fixed inset-0 h-[100vh] w-[100vh] overflow-scroll flex items-center justify-center p-3 sm:p-5 z-[9999]">
            <div
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div
                className="relative flex max-h-[94vh] w-full max-w-5xl flex-col  rounded-2xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
                role="dialog"
                aria-modal="true"
            >
                {/* Rest of your component remains the same */}
                {loading && (
                    <div className="flex items-center justify-center min-h-100">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading payment options...</p>
                        </div>
                    </div>
                )}

                {!loading && error && (
                    <div className="flex items-center justify-center min-h-100 px-6 text-center text-red-600">
                        Error: {error}
                    </div>
                )}

                {!loading && !error && (!clientSecret || !options) && (
                    <div className="flex items-center justify-center min-h-100 px-6 text-center text-red-600">
                        Error: Could not initialize payment. Please try again.
                    </div>
                )}

                {!loading && !error && clientSecret && options && (
                    <Elements stripe={stripePromise} options={options}>
                        <CheckOutForm onClose={onClose} clientSecret={clientSecret} userEmail={userEmail} selectedPlan={selectedPlan} />
                    </Elements>
                )}
            </div>
        </div>
    );
};

interface CheckOutFormProps {
    onClose: () => void;
    clientSecret: string;
    userEmail?: string;
    selectedPlan: Plan | null;
}

const CheckOutForm: React.FC<CheckOutFormProps> = ({ onClose, clientSecret, userEmail = "", selectedPlan }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardholderName, setCardholderName] = useState('');
    const [email, setEmail] = useState(userEmail || '');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [gstNumber, setGstNumber] = useState('');
    const [showGst, setShowGst] = useState(false);
    const [showAddons, setShowAddons] = useState(false);
    const [showBillingInfo, setShowBillingInfo] = useState(true);
    const [showDiscount, setShowDiscount] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');
    const [planLoaded, setPlanLoaded] = useState(false);

    useEffect(() => {
        if (selectedPlan && selectedPlan.price > 0) {
            setPlanLoaded(true);
        }
    }, [selectedPlan]);

    const planDetails = useMemo(() => ({
        name: selectedPlan?.planName || "Business",
        price: selectedPlan?.price || 0,
        currency: selectedPlan?.currency || '₹',
        period: selectedPlan?.billingCycle?.toLowerCase() || "yearly",
        users: selectedPlan?.totalNoOfUsers || 1,
        responses: selectedPlan?.totalNoOfResponses || 0,
        conversations: 0,
    }), [selectedPlan]);

    const addonList = useMemo(() => getConfigFeatureList(selectedPlan?.config), [selectedPlan]);

    const pricing = useMemo(() => {
        let basePrice = planDetails.price;
        let periodLabel = planDetails.period;
        let multiplier = 1;
        let savings = 0;

        switch (planDetails.period) {
            case 'yearly':
                multiplier = 12;
                periodLabel = 'yearly';
                savings = basePrice * 12 - basePrice;
                break;
            case 'quarterly':
                multiplier = 3;
                periodLabel = 'quarterly';
                savings = basePrice * 3 - basePrice;
                break;
            case 'monthly':
                multiplier = 1;
                periodLabel = 'monthly';
                savings = 0;
                break;
            case 'one time':
            case 'one-time':
            case 'onetime':
                multiplier = 1;
                periodLabel = 'one time';
                savings = 0;
                break;
            default:
                multiplier = 1;
                periodLabel = 'monthly';
                savings = 0;
        }

        const totalPrice = basePrice * multiplier;
        const subtotal = totalPrice;
        const gst = subtotal * 0.18;
        const total = subtotal;

        return {
            basePrice,
            totalPrice,
            multiplier,
            periodLabel,
            savings,
            subtotal,
            gst,
            total
        };
    }, [planDetails]);

    const formatCurrency = useMemo(() => {
        return (amount: number) => {
            const formatted = new Intl.NumberFormat('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(amount);

            const currencySymbols: Record<string, string> = {
                'usd': '$',
                'inr': '₹',
                'eur': '€',
                'gbp': '£',
                'jpy': '¥'
            };

            const symbol = currencySymbols[planDetails.currency.toLowerCase()] || planDetails.currency;
            return `${symbol}${formatted}`;
        };
    }, [planDetails.currency]);

    const nextPaymentDate = useMemo(() => {
        const date = new Date();
        switch (pricing.periodLabel) {
            case 'yearly':
                date.setFullYear(date.getFullYear() + 1);
                break;
            case 'quarterly':
                date.setMonth(date.getMonth() + 3);
                break;
            case 'monthly':
                date.setMonth(date.getMonth() + 1);
                break;
            default:
                break;
        }
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }, [pricing.periodLabel]);

    // Country data with ISO codes
    const countryData = [
        { name: 'India', code: 'IN' },
        { name: 'United States', code: 'US' },
        { name: 'United Kingdom', code: 'GB' },
        { name: 'Canada', code: 'CA' },
        { name: 'Australia', code: 'AU' },
        { name: 'Germany', code: 'DE' },
        { name: 'France', code: 'FR' },
        { name: 'Japan', code: 'JP' },
        { name: 'Brazil', code: 'BR' },
        { name: 'Mexico', code: 'MX' },
        { name: 'Italy', code: 'IT' },
        { name: 'Spain', code: 'ES' },
        { name: 'Netherlands', code: 'NL' },
        { name: 'Singapore', code: 'SG' },
        { name: 'UAE', code: 'AE' },
    ];

    const statesData: Record<string, string[]> = {
        'IN': ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Delhi', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal'],
        'US': ['California', 'Texas', 'New York', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia'],
        'GB': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
        'CA': ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba'],
        'AU': ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia'],
        'DE': ['Bavaria', 'Berlin', 'Hamburg', 'Hesse', 'North Rhine-Westphalia'],
        'FR': ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine'],
        'JP': ['Tokyo', 'Osaka', 'Kyoto', 'Hokkaido', 'Fukuoka'],
        'BR': ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná'],
        'MX': ['Mexico City', 'Jalisco', 'Nuevo León', 'Puebla', 'Guanajuato'],
        'IT': ['Lombardy', 'Lazio', 'Campania', 'Veneto', 'Piedmont'],
        'ES': ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Málaga'],
        'NL': ['North Holland', 'South Holland', 'Utrecht', 'Gelderland', 'North Brabant'],
        'SG': ['Central', 'East', 'North', 'North-East', 'West'],
        'AE': ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Fujairah'],
    };

    const citiesData: Record<string, string[]> = {
        'IN': ['Mumbai', 'Bangalore', 'Chennai', 'Delhi', 'Ahmedabad', 'Hyderabad', 'Pune', 'Kolkata'],
        'US': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'],
        'GB': ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Newcastle', 'Sheffield'],
        'CA': ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton', 'Ottawa', 'Quebec City', 'Winnipeg'],
        'AU': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle'],
        'DE': ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund'],
        'FR': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier'],
        'JP': ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto'],
        'BR': ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba'],
        'MX': ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Toluca', 'Tijuana', 'León', 'Juárez'],
        'IT': ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence'],
        'ES': ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma'],
        'NL': ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere'],
        'SG': ['Central Singapore', 'East Singapore', 'North Singapore', 'North-East Singapore', 'West Singapore'],
        'AE': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'],
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!stripe || !elements) {
            setError('Stripe is not initialized');
            return;
        }

        setIsProcessing(true);
        setError('');

        // Get the ISO country code
        const selectedCountry = countryData.find(c => c.name === country);
        const countryCode = selectedCountry ? selectedCountry.code : '';

        const payload = {
            paymentIntentId: clientSecret?.split('_secret_')[0],
            metadata: {
                billing_email: email,
                billing_phone: phone,
                billing_company: company,
                billing_address_line1: addressLine1,
                billing_address_line2: addressLine2,
                billing_city: city,
                billing_state: state,
                billing_zip: zipCode,
                billing_country: country,
                billing_country_code: countryCode,
                gst_number: gstNumber,
                cardholder_name: cardholderName,
                discount_code: discountCode,
            }
        };

        try {
            await fetch(`https://api.saja.biz/saja/api/payment/update-payment-intent`, {
                method: "POST", headers: {
                    "Content-Type": 'application/json'
                }, body: JSON.stringify(payload)
            });

            const { error: submitError } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment-success`,
                    payment_method_data: {
                        billing_details: {
                            email: email,
                            name: cardholderName || company,
                            phone: phone,
                            address: {
                                line1: addressLine1,
                                line2: addressLine2,
                                city: city,
                                state: state,
                                postal_code: zipCode,
                                country: countryCode,
                            }
                        },
                    },
                },
            });

            if (submitError) {
                setError(submitError?.message as any);
                setIsProcessing(false);
            }
        } catch (err: any) {
            setError(err?.message || 'An unexpected error occurred');
            setIsProcessing(false);
        }
    };

    if (!selectedPlan || !planLoaded) {
        return (
            <div className="flex items-center justify-center min-h-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading plan details...</p>
                </div>
            </div>
        );
    }

    const getPeriodDisplay = () => {
        switch (pricing.periodLabel) {
            case 'yearly': return 'Yearly';
            case 'quarterly': return 'Quarterly';
            case 'monthly': return 'Monthly';
            case 'one time': return 'One Time';
            default: return pricing.periodLabel;
        }
    };

    const getStates = () => {
        const selected = countryData.find(c => c.name === country);
        return selected ? statesData[selected.code] || [] : [];
    };

    const getCities = () => {
        const selected = countryData.find(c => c.name === country);
        return selected ? citiesData[selected.code] || [] : [];
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-[90vh] max-h-[94vh] overflow-scroll">
            {/* Header - Fixed at top */}
            <div className="flex items-center justify-between px-6 py-2 border-b border-gray-100 shrink-0">
                <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close payment modal"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>

            {/* Main content - Scrollable */}
            <div className="flex-1 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                    {/* Left Column - Scrollable */}
                    <div className="lg:col-span-3 h-full overflow-y-auto p-6 space-y-6 lg:border-r border-gray-100">
                        {/* Plan chosen */}
                        <div className="rounded-xl px-4">
                            <p className="text-xs text-gray-500 mb-3">Plan chosen</p>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                    {planDetails.name?.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-1">
                                        <span className="font-semibold text-gray-900">{planDetails.name}</span>
                                        <span className="text-gray-500 text-sm">
                                            • {formatCurrency(planDetails.price)}/{getPeriodDisplay().toLowerCase() === 'yearly' ? 'month' : getPeriodDisplay().toLowerCase()}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {planDetails.users} {Number(planDetails.users) === 1 ? 'user' : 'users'} • {planDetails.responses} responses
                                    </p>
                                </div>
                            </div>
                            {addonList.length > 0 && (
                                <div className="mt-3">
                                    <button
                                        type="button"
                                        className="text-xs font-medium text-blue-600 hover:underline"
                                        onClick={() => setShowAddons(!showAddons)}
                                    >
                                        {showAddons ? '−' : '+'} View Add-ons ({addonList.length})
                                    </button>
                                    {showAddons && (
                                        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {addonList.map((feature) => (
                                                <li key={feature} className="text-xs text-gray-600 flex items-center gap-1.5">
                                                    <span className="text-green-500">✓</span>{feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Add new card */}
                        <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Add new card</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Card number</label>
                                    <div className="border border-gray-300 rounded-lg p-2.5 bg-white transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                                        <PaymentElement />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Name on Card</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        placeholder="Eg: John Doe"
                                        value={cardholderName}
                                        onChange={(e) => setCardholderName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="text-xs text-gray-600 p-3 bg-blue-50 rounded-lg border border-blue-100">
                                    <span className="inline-block mr-1.5">🔒</span>
                                    Your card info will be saved securely. You can remove it anytime from card settings.
                                </div>
                            </div>
                        </div>

                        {/* Billing Information - collapsible */}
                        <div>
                            <button
                                type="button"
                                className="w-full flex items-center justify-between text-base font-semibold text-gray-900 mb-4"
                                onClick={() => setShowBillingInfo(!showBillingInfo)}
                            >
                                <span>Billing Information</span>
                                <span className="text-gray-400 text-sm">{showBillingInfo ? '⌃' : '⌄'}</span>
                            </button>

                            {showBillingInfo && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Billing Name */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Billing Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            placeholder="Company Name"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            placeholder="Phone Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    {/* Billing Email */}
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Billing Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            placeholder="billing@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {/* Address Line 1 */}
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Address Line 1</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            placeholder="Street address"
                                            value={addressLine1}
                                            onChange={(e) => setAddressLine1(e.target.value)}
                                        />
                                    </div>

                                    {/* Address Line 2 */}
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Address Line 2</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            placeholder="Apartment, suite, unit, etc."
                                            value={addressLine2}
                                            onChange={(e) => setAddressLine2(e.target.value)}
                                        />
                                    </div>

                                    {/* Billing Country */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Billing Country</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                                            value={country}
                                            onChange={(e) => {
                                                setCountry(e.target.value);
                                                setState('');
                                                setCity('');
                                            }}
                                        >
                                            <option value="">Select Country</option>
                                            {countryData.map((c) => (
                                                <option key={c.code} value={c.name}>{c.name}</option>
                                            ))}
                                        </select>
                                        {country === 'India' && (
                                            <p className="text-xs text-green-600 mt-1">✓ Country must be India for INR payments</p>
                                        )}
                                        {country && country !== 'India' && planDetails.currency === 'inr' && (
                                            <p className="text-xs text-amber-600 mt-1">
                                                ⚠️ Country must be India for INR payments. <button className="text-blue-600 hover:underline" type="button">Change currency</button>
                                            </p>
                                        )}
                                        <p className="text-xs text-gray-400 mt-0.5">Select a country</p>
                                    </div>

                                    {/* Zip Code */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Zip Code</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            placeholder="Zip Code"
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                        />
                                    </div>

                                    {/* State */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">State</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            disabled={!country}
                                        >
                                            <option value="">Select State</option>
                                            {getStates().map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">City</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            disabled={!state}
                                        >
                                            <option value="">Select City</option>
                                            {getCities().map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                                ⚠️ {error}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-2 p-6 bg-gray-50/60 overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-gray-600">Paying {getPeriodDisplay()}</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                                {planDetails.name}
                            </span>
                        </div>

                        <div className="flex justify-between mb-3">
                            <span className="text-sm text-gray-600">{planDetails.name}</span>
                            <span className="text-sm font-semibold">{formatCurrency(pricing.totalPrice)}</span>
                        </div>

                        {showDiscount && (
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                                    placeholder="Discount Code"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                />
                                <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors" type="button">
                                    Apply
                                </button>
                            </div>
                        )}

                        <div className="flex justify-between pt-3 mt-3 border-t border-gray-900">
                            <span className="text-base font-bold">Total</span>
                            <span className="text-base font-bold">{formatCurrency(pricing.total)}</span>
                        </div>

                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="btn-all w-full mt-4"
                                disabled={!stripe || isProcessing}
                            >
                                {isProcessing ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    'Complete Purchase →'
                                )}
                            </button>
                        </div>

                        <div className="mt-4 space-y-1.5">
                            <p className="text-xs text-gray-600 text-center">Your next payment will be on {nextPaymentDate}</p>
                            <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                                By clicking "Complete Purchase", you agree to the Terms & Conditions of SAJA.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PaymentUi;