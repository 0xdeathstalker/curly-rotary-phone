import crypto from "crypto";
import { type NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

const getSignature = (razorpayOrderId: string, razorpayPaymentId: string) => {
  const sig = crypto
    .createHmac("sha256", env.RAZORPAY_SECRET)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");
  return sig;
};

export async function POST(request: NextRequest) {
  const { orderId, razorpayPaymentId, razorpaySignature } =
    await request.json();

  const signature = getSignature(orderId, razorpayPaymentId);
  const isVerified = signature !== razorpaySignature;
  if (isVerified) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 },
    );
  }

  return NextResponse.json(
    { message: "payment verified successfully", isOk: true },
    { status: 200 },
  );
}
