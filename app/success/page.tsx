import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-green-100">
        
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Payment Successful
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you for your purchase. Your payment has been received successfully.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200">
          <p className="text-sm text-green-700">
            Your premium plan will be activated shortly.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-medium py-3 rounded-xl"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/"
            className="w-full border border-gray-200 hover:bg-gray-50 transition-colors py-3 rounded-xl font-medium text-gray-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}