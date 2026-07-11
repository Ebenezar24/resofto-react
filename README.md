# ReSofto Technologies — React Website

A React + Vite rebuild of the ReSofto homepage: dark theme, sticky boxed nav
with dropdown, WhatsApp floating button, a built-in FAQ chatbot, and a
Formspree-powered contact form.

## Run it locally

You need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the finished static site, ready to deploy
anywhere (Netlify, Vercel, GitHub Pages, or any static host).

## Connect the contact form to your Gmail inbox

1. Go to [formspree.io](https://formspree.io) and sign up for free.
2. Create a new form and set the destination to the Gmail address where you
   want leads delivered.
3. Copy the Form ID Formspree gives you (looks like `xzbqwxyz`).
4. Open `src/components/Contact.jsx` and replace `YOUR_FORM_ID` in this line:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
5. Save, rebuild, and redeploy. Submissions will now land in your inbox
   (free tier: 50 submissions/month).

## Project structure

```
src/
  components/
    Header.jsx        Sticky boxed nav + dropdown
    Hero.jsx
    Solutions.jsx
    CloudPlatforms.jsx
    Industries.jsx
    Services.jsx
    Resources.jsx
    About.jsx
    Contact.jsx        Contact form (Formspree) + quick contact cards
    Footer.jsx
    WhatsAppButton.jsx Floating WhatsApp chat link
    Chatbot.jsx         Rule-based FAQ chat widget (no signup needed)
  assets/
    logo.jpeg
  App.jsx
  main.jsx
  index.css            Global dark theme design system
```

## Notes

- The chatbot is a simple keyword-matching FAQ bot — no external service or
  account required. If you later want live human chat, swap in a script like
  Tawk.to or Crisp once you've created a free account with them.
- The WhatsApp button links to `wa.me/919606840076` — update the number in
  `WhatsAppButton.jsx` and `Contact.jsx` if it changes.
