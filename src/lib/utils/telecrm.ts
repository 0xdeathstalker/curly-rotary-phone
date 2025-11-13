import { env } from "@/env";

type TeleCRMBaseData = {
  phone: string;
  email: string;
};

type TeleCRMLeadData = {
  email: string;
  phone: string;
  state?: string;

  company_name?: string;
  company_size?: string;

  // Payment fields
  payment_status?: "pending" | "completed" | "failed";
  payment_amount?: number;
  payment_id?: string;
  order_id?: string;
  payment_date?: string;

  source?: string;

  // Allow any additional fields without type errors
  [key: string]: any;
} & TeleCRMBaseData;

const TELECRM_CONFIG = {
  baseUrl: "https://next-api.telecrm.in/enterprise",
  enterpriseId: env.NEXT_PUBLIC_TELECRM_ENTERPRISE_ID ?? "",
  apiKey: env.NEXT_PUBLIC_TELECRM_API_KEY ?? "",
  useMock: env.NEXT_PUBLIC_TELECRM_USE_MOCK ?? "true",
};

async function mockAutoUpdateLead(
  data: TeleCRMLeadData,
): Promise<{ success: boolean; message: string }> {
  console.log("mock telecrm api call");
  console.log("fields: ", { data });

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: "Successfully mock lead generated",
  };
}

async function prodAutoUpdateLead(data: TeleCRMLeadData) {
  const response = await fetch("/api/telecrm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message ?? "Failed to update lead");
  }

  return response.json();
}

async function updateTeleCRMLead(data: TeleCRMLeadData) {
  const isMockMode = isTeleCRMMockMode();
  if (isMockMode) {
    return mockAutoUpdateLead(data);
  } else {
    return prodAutoUpdateLead({
      ...data,
      page_title: "Private Limited Company",
      page_url: "https://taxocity.com",
    });
  }
}

function isTeleCRMMockMode(): boolean {
  return TELECRM_CONFIG.useMock === "true";
}

export {
  updateTeleCRMLead,
  isTeleCRMMockMode,
  TELECRM_CONFIG,
  type TeleCRMLeadData,
};
