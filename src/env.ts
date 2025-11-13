import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_TELECRM_API_KEY: z.string().min(1),
    NEXT_PUBLIC_TELECRM_ENTERPRISE_ID: z.string().min(1),
    NEXT_PUBLIC_TELECRM_USE_MOCK: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NEXT_PUBLIC_TELECRM_API_KEY: process.env.NEXT_PUBLIC_TELECRM_API_KEY,
    NEXT_PUBLIC_TELECRM_ENTERPRISE_ID:
      process.env.NEXT_PUBLIC_TELECRM_ENTERPRISE_ID,
    NEXT_PUBLIC_TELECRM_USE_MOCK: process.env.NEXT_PUBLIC_TELECRM_USE_MOCK,
  },
});
