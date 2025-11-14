import { NextResponse } from "next/server";
import { TELECRM_CONFIG, type TeleCRMLeadData } from "@/lib/utils/telecrm";

export async function POST(request: Request) {
  try {
    const leadData: TeleCRMLeadData = await request.json();

    if (!leadData.phone || !leadData.email) {
      return NextResponse.json(
        { error: "Phone and email are required" },
        { status: 400 },
      );
    }

    const requestBody = {
      fields: leadData,
      actions: [
        {
          type: "SYSTEM_NOTE",
          message: "Source: PVT LTD Registration Website",
        },
      ],
    };

    const response = await fetch(
      `${TELECRM_CONFIG.baseUrl}/${TELECRM_CONFIG.enterpriseId}/autoupdatelead`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TELECRM_CONFIG.apiKey}`,
        },
        body: JSON.stringify(requestBody),
      },
    );

    if (!response.ok) {
      console.error(
        "TeleCRM API Error: ",
        response.status,
        response.statusText,
      );

      let errorMsg = "Failed to update lead";
      try {
        const errorData = await response.json();
        errorMsg = errorData.message ?? errorMsg;
      } catch (_error) {}

      throw new Error(errorMsg);
    }

    let result: Record<string, unknown> = {};
    const responseBody = await response.text();
    if (responseBody) {
      try {
        result = JSON.parse(responseBody);
      } catch (_error) {
        console.log(
          "TeleCRM returned non-JSON response (expected for async API)",
          responseBody,
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead updated successfully",
      ...result,
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}
