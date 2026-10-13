export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { name?: unknown; phone?: unknown; website?: unknown };
    const name = clean(body.name, 80);
    const phone = clean(body.phone, 24);
    const website = clean(body.website, 120);
    if (website) return Response.json({ ok: true });
    if (name.length < 2 || phone.replace(/\D/g, "").length < 8) return Response.json({ ok: false, error: "invalid_form" }, { status: 400 });
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      console.error("Telegram environment variables are missing");
      return Response.json({ ok: false, error: "service_unavailable" }, { status: 503 });
    }
    const text = ["🦷 Нова заявка з сайту Primak Dent", "", `Ім’я: ${name}`, `Телефон: ${phone}`, `Час: ${new Intl.DateTimeFormat("uk-UA", { timeZone: "Europe/Kyiv", dateStyle: "medium", timeStyle: "short" }).format(new Date())}`].join("\n");
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }) });
    if (!telegramResponse.ok) {
      console.error("Telegram API request failed", telegramResponse.status);
      return Response.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
}
