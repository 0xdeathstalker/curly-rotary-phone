import { Loader } from "lucide-react";

export function PaymentProcessingOverlay({
  isVisible,
}: {
  isVisible: boolean;
}) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-white/95 backdrop-blur-sm flex items-center justify-center">
      <div className="max-w-md w-full mx-4 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <div className="space-y-6 flex flex-col items-center justify-center">
          <Loader className="animate-spin size-12 text-[#58B09C]" />
          <div className="text-center space-y-2">
            <p className="text-[#1E293B] font-bold text-2xl">
              Processing Payment
            </p>
            <p className="text-[#3F3F3F] text-sm">
              Please wait while we confirm your payment and process your order.
              Do not close this window.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
