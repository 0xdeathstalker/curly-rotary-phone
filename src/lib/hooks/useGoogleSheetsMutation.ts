import { useMutation } from "@tanstack/react-query";
import { updateGoogleSheetViaAPI } from "@/lib/utils/google-sheets-client";

export function useGoogleSheetsMutation() {
  return useMutation({
    mutationFn: updateGoogleSheetViaAPI,
    onSuccess: (data) => {
      console.log("google sheets updated:: ", { data });
    },
    onError: (error: Error) => {
      console.error("failed to update google sheets:: ", error.message);
    },
  });
}
