import { QueryClient } from "@tanstack/react-query";

// Static portfolio website - no server API calls needed
// QueryClient is kept minimal for potential future enhancements
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
      enabled: false, // Disable queries by default for static site
    },
    mutations: {
      retry: false,
    },
  },
});
