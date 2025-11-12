import { useMutation } from "@tanstack/react-query";
import { updateTeleCRMLead } from "@/lib/utils/telecrm";

export function useTeleCRMMutation() {
  return useMutation({
    mutationFn: updateTeleCRMLead,
    onSuccess: (data) => {
      console.log("lead updated:: ", { data });
    },
    onError: (error: Error) => {
      console.error("failed to update lead:: ", error.message);
    },
  });
}
