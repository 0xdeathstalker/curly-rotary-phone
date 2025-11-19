"use client";

import { CheckCircle, Loader, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { REDIRECTION_TIME } from "@/lib/constants";

interface PaymentData {
  paymentId: string;
  orderId: string;
  amount: string;
  plan: string;
  paymentDate: string;
}

function PaymentSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = React.useState(REDIRECTION_TIME);
  const [isValidating, setIsValidating] = React.useState(true);
  const [paymentData, setPaymentData] = React.useState<PaymentData | null>(
    null
  );
  const [error, setError] = React.useState<string | null>(null);

  const token = searchParams.get("token");

  // validating token on mount
  React.useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setError("No payment token found");
        setIsValidating(false);
        // redirecting to home after 2 seconds if no token
        setTimeout(() => router.push("/"), 2000);
        return;
      }

      try {
        const response = await fetch(`/api/verify-payment?token=${token}`);
        const data = await response.json();

        if (data.isValid && data.paymentData) {
          setPaymentData(data.paymentData);
          setIsValidating(false);
        } else {
          setError(data.message || "Invalid payment token");
          setIsValidating(false);
          // redirecting to home after 2 seconds if invalid token
          setTimeout(() => router.push("/"), 2000);
        }
      } catch (_e) {
        setError("Failed to validate payment");
        setIsValidating(false);
        setTimeout(() => router.push("/"), 2000);
      }
    };

    validateToken();
  }, [token, router]);

  // starting countdown only after successful validation
  React.useEffect(() => {
    if (!isValidating && paymentData) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isValidating, paymentData]);

  React.useEffect(() => {
    if (countdown === 0 && paymentData) {
      router.push("/");
    }
  }, [countdown, router, paymentData]);

  const handleReturnHome = () => {
    router.push("/");
  };

  // loading state
  if (isValidating) {
    return (
      <div className="font-sans min-h-screen flex items-center justify-center bg-[#1E293B]/5 px-4 py-28">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col items-center justify-center">
            <Loader className="animate-spin size-14" />
            <p className="text-[#1E293B] font-medium">Validating payment...</p>
          </div>
        </div>
      </div>
    );
  }

  // error state
  if (error || !paymentData) {
    return (
      <div className="font-sans min-h-screen flex items-center justify-center bg-[#1E293B]/5 px-4 py-28">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-col items-center justify-center">
            <div className="size-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <X className="text-destructive size-8" />
            </div>
            <h1 className="text-2xl font-bold text-center text-[#1E293B] mb-2">
              Access Denied
            </h1>
            <p className="text-center font-semibold text-[#3F3F3F] mb-4">
              {error || "Invalid or expired payment session"}
            </p>
            <p className="text-center text-sm text-[#3F3F3F]">
              Redirecting to home...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-[#1E293B]/5 px-4 py-28">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-[#1E293B] mb-2">
          Payment Successful
        </h1>

        <p className="text-center text-[#1A1A1A] font-medium mb-8">
          Thank you for your payment. Your order is being processed.
        </p>

        <div className="space-y-4 mb-8 border-t border-b border-gray-200 py-6">
          <div className="flex justify-between items-center">
            <span className="text-[#3F3F3F]">Plan:</span>
            <span className="font-medium text-[#1E293B]">
              {paymentData.plan}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#3F3F3F]">Amount Paid:</span>
            <span className="font-medium text-[#1E293B]">
              ₹{(Number(paymentData.amount) / 100).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#3F3F3F]">Payment ID:</span>
            <span className="font-medium text-[#1E293B] text-sm truncate ml-4">
              {paymentData.paymentId}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#3F3F3F]">Order ID:</span>
            <span className="font-medium text-[#1E293B] text-sm truncate ml-4">
              {paymentData.orderId}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#3F3F3F]">Date & Time:</span>
            <span className="font-medium text-[#1E293B]">
              {paymentData.paymentDate}
            </span>
          </div>
        </div>

        <Button
          variant="brand"
          size="lg"
          onClick={handleReturnHome}
          className="w-full"
        >
          Return home
        </Button>

        <p className="text-center text-sm text-[#3F3F3F] mt-4">
          Redirecting to home in {countdown} seconds...
        </p>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <React.Suspense
      fallback={
        <div className="font-sans min-h-screen flex items-center justify-center bg-[#1E293B]/5 px-4 py-28">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E293B] mb-4"></div>
              <p className="text-[#1E293B] font-medium">Loading...</p>
            </div>
          </div>
        </div>
      }
    >
      <PaymentSuccessContent />
    </React.Suspense>
  );
}
