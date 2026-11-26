# Mitravani — The Voice of Farmers

A responsive, multi-page business website built with Next.js App Router, TypeScript and Tailwind CSS (v4). The original Mitravani logo supplied by the user is included at `public/images/mitravani-logo.jpeg`.

## Pages
- `/` Home
- `/about` About Mitravani
- `/our-approach` Our approach
- `/agriculture` Agriculture
- `/dairy` Dairy farming
- `/aquaculture` Aquaculture
- `/join` Farmer/community interest form
- `/contact` Contact

## Run locally
1. Install Node.js 20.9 or later.
2. Extract this project folder.
3. Open a terminal in the `mitravani` folder.
4. Run:

```bash
npm install
npm run dev
```

5. Visit http://localhost:3000

## Contact form configuration
The farmer interest form opens WhatsApp if `NEXT_PUBLIC_WHATSAPP_NUMBER` is set, otherwise it opens the visitor's email app if `NEXT_PUBLIC_CONTACT_EMAIL` is set. If neither is configured, it displays a clear message that the submission channel is not yet active. The form does not silently pretend to save submissions.

Create `.env.local` from `.env.example` and add your confirmed contact details:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your-confirmed-email@example.com
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
```

Use digits only for the WhatsApp number, including country code. Restart the development server after changing environment variables.

## Before publishing
- Replace placeholder contact details with official, verified Mitravani details.
- Confirm the business address and phone number before publishing them.
- Review the copy to ensure any services or support mentioned are actually available.
- The photographs are loaded from Unsplash URLs and require an internet connection. Replace with licensed/local images before production if preferred.
- Configure a real backend (e.g. Supabase) if you want to store farmer registrations centrally. This starter deliberately does not claim to store submissions.

## Build for production

```bash
npm run build
npm run start
```

Deploy to Vercel by importing the project from GitHub or using the Vercel CLI.
