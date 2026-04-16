import { API_BASE_URL } from "@/lib/constants";

export async function GET() {
  const res = await fetch(`${API_BASE_URL}/api/openapi.json`, {
    next: { revalidate: 300 }, // 5-min ISR cache
  });

  if (!res.ok) {
    return Response.json(
      { error: "Failed to fetch OpenAPI spec" },
      { status: res.status },
    );
  }

  const spec = await res.json();

  return Response.json(spec, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
