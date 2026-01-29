import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useCauses() {
  return useQuery({
    queryKey: [api.causes.list.path],
    queryFn: async () => {
      const res = await fetch(api.causes.list.path);
      if (!res.ok) throw new Error("Failed to fetch causes");
      return api.causes.list.responses[200].parse(await res.json());
    },
  });
}

export function useCause(id: number) {
  return useQuery({
    queryKey: [api.causes.get.path, id],
    queryFn: async () => {
      // Manually replace :id since buildUrl isn't exported from routes in this context
      // Note: In a real app, ensure buildUrl is used. 
      const url = api.causes.get.path.replace(':id', id.toString());
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch cause details");
      return api.causes.get.responses[200].parse(await res.json());
    },
  });
}
