import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, url } = body;

    if (!name || !email || !url) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    // Lógica para comunicarse con tu backend principal (app-adrielssystems)
    // El backend principal es quien ya tiene configurado nodemailer/Gmail API (EVA)
    
    // URL dinámica que será enviada al cliente en el correo
    const reportUrl = `https://app.adrielssystems.com/reporte?url=${encodeURIComponent(url)}`;

    // NOTA: Reemplazar 'https://api.adrielssystems.com' con la URL real de tu backend principal.
    /*
    const backendRes = await fetch("https://api.adrielssystems.com/api/bot/send-audit-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.INTERNAL_API_KEY}` // Seguridad recomendada
      },
      body: JSON.stringify({
        clientName: name,
        clientEmail: email,
        websiteUrl: url,
        reportLink: reportUrl
      })
    });
    
    if (!backendRes.ok) throw new Error("Error enviando al backend principal");
    */

    console.log(`[AUDITORÍA] Nueva solicitud procesada.`);
    console.log(`- Cliente: ${name} (${email})`);
    console.log(`- Enlace de Reporte: ${reportUrl}`);
    console.log(`- Pendiente: Enviar este enlace por correo usando el backend principal.`);
    
    // Simulación de éxito (reemplazar con el envío real de correo o trigger a la base de datos)
    return NextResponse.json({ success: true, message: "Solicitud procesada correctamente" });

  } catch (error) {
    console.error("Error processing audit request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
