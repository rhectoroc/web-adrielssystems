import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const urlParams = req.nextUrl.searchParams;
  const targetUrl = urlParams.get("url");

  if (!targetUrl) {
    return NextResponse.json({ error: "Falta la URL objetivo" }, { status: 400 });
  }

  // The API key is securely retrieved from the server environment
  const apiKey = process.env.PAGESPEED_API_KEY;

  if (!apiKey) {
    console.warn("PAGESPEED_API_KEY no está configurada en las variables de entorno.");
  }

  try {
    const encodedUrl = encodeURIComponent(targetUrl);
    // Append the key if available
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodedUrl}&strategy=mobile${apiKey ? `&key=${apiKey}` : ""}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Error al consultar PageSpeed API");
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("PageSpeed API Proxy Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
