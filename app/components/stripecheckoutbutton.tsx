"use client";

import { createCheckoutSession } from "@/services/payment.service";

export default function StripeCheckoutButton({ plan }: any) {
    const payload = plan
    const handleCheckout = async () => {
        try {
            const { checkoutUrl } =
                await createCheckoutSession(payload);

            window.location.href = checkoutUrl;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button onClick={handleCheckout}>
            Pay Now
        </button>
    );
}