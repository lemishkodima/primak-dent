# Primak Dent — Vercel

Готовий до Vercel Next.js-проєкт сайту Primak Dent.

## Локальний запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

У `.env.local` потрібно заповнити:

- `TELEGRAM_BOT_TOKEN` — токен Telegram-бота;
- `TELEGRAM_CHAT_ID` — ID каналу, включно з початковим мінусом.

## Деплой на Vercel

### Через Vercel CLI

```bash
vercel link
vercel env add TELEGRAM_BOT_TOKEN
vercel env add TELEGRAM_CHAT_ID
vercel deploy
vercel deploy --prod
```

### Через GitHub

1. Завантажте цю папку в окремий GitHub-репозиторій.
2. Імпортуйте репозиторій у Vercel.
3. Оберіть фреймворк **Next.js** і залиште стандартну команду збірки `npm run build`.
4. У **Settings → Environment Variables** додайте `TELEGRAM_BOT_TOKEN` та `TELEGRAM_CHAT_ID` для Production, Preview і Development.
5. Запустіть деплой.

Секрети не повинні зберігатися у Git або у клієнтському коді.
