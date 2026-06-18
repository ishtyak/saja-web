export const createCheckoutSession = async (
    payload: any
) => {
    const response = await fetch(
        `${process.env.NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_API_URL_PROD}/api/payment/create-checkout-session`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create session");
    }

    return response.json();
};