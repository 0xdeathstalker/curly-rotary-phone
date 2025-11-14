import { type NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { env } from "@/env";

const razorpay = new Razorpay({
  key_id: env.RAZORPAY_KEY_ID,
  key_secret: env.RAZORPAY_SECRET,
});

export async function POST(request: NextRequest) {
  const { amount } = await request.json();

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  });

  return NextResponse.json(order);
}
