"use client";

import { createCheckoutSession } from "@/services/payment.service";

export default function StripeCheckoutButton({ userId,
    planId }: any) {
    const payload = { userId, planId }
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