import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise  = await  loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)