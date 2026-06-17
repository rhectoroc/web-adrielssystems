import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, url } = body;

    if (!name || !email || !url) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    // Aquí se integra la lógica de envío de correo o webhook hacia EVA.
    // Ejemplo de cómo se llamaría al motor de EVA:
    /*
      await fetch("https://eva.adrielssystems.com/webhook/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, url })
      });
    */

    console.log(`[AUDITORÍA] Nueva solicitud recibida: ${name} (${email}) - Sitio: ${url}`);
    
    // Simulación de éxito (reemplazar con el envío real de correo o trigger a la base de datos)
    return NextResponse.json({ success: true, message: "Solicitud procesada correctamente" });

  } catch (error) {
    console.error("Error processing audit request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
