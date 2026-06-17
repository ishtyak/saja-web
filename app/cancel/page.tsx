import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br  flex justify-center from-red-50 via-white to-red-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 text-center border border-red-100">

        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Payment Cancelled
        </h1>

        <p className="mt-3 text-gray-600">
          Your payment was not completed. No amount has been charged.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200">
          <p className="text-sm text-red-700">
            You can try again anytime.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/pricing"
            className="w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-medium py-3 rounded-xl"
          >
            Try Again
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