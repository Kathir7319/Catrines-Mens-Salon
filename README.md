# Catrines Mens Salon — Durham, NC 💈✂️

A sleek, premium, high-converting digital storefront and multi-page web application for **Catrines Mens Salon** located at **2110 Angier Ave, Durham, NC 27703**.

Built with **React.js**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Styled in Deep Charcoal, Slate Gray, Crisp White, and Metallic Gold / Silver accents.

---

## ✨ Features & Architecture

- **Multi-Page Experience**:
  - **Home (`/`)**: Hero with East Durham branding, Booksy / booking CTAs, Quick Stats bar, About teaser, Featured Services, Stylist Portfolio preview, Verified Reviews showcase, Location & Interactive Map.
  - **About Us (`/about`)**: Shop history at 2110 Angier Ave, Craftsmanship philosophy, Master Barber team cards (Catrine, Marcus 'Blade', Dante R.), 4 Pillars of Excellence, and Barber FAQs.
  - **Services & Pricing (`/services`)**: Categorized transparent pricing for Haircuts & Styling, Beard & Grooming, Combo Packages, and VIP Treatments. Search filter and direct booking buttons.
  - **Stylist Portfolio Gallery (`/gallery`)**: Filterable 8+ item portfolio grid with high-resolution cuts (skin fades, beard sculpting, crisp edge-ups, styled finishes, shop atmosphere) with full-screen interactive lightbox.
  - **Customer Reviews (`/reviews`)**: Real Durham reviews (Marcus T., David K., and more), star rating analytics (4.9/5 from 180+ verified reviews), and interactive **"Write A Review"** form.
  - **Contact & Location (`/contact`)**: Interactive Google Maps embed of 2110 Angier Ave, live operating hours card with dynamic Open/Closed status, direct phone links (`(919) 672-6717`), and contact inquiry form.
  - **Dedicated Booking Page (`/book`)**: Priority chair reservation with dual mode (Instant Online Booking + Official Booksy Profile integration), barber selection, date & time slot picker, and celebration confetti.
- **Custom Brand Identity & Logo**:
  - Precision SVG logo featuring crossed straight razor and barber shears, Roman serif 'C' crest, gold metallic sheen, and Durham NC ribbon.
  - Favicon and OpenGraph meta tags for rich social media cards.
- **Real-Time Shop Status**:
  - Dynamic store hours widget that detects whether the shop is currently open, closing soon, or closed today with next opening time.
- **Mobile Responsive**:
  - Slide-out mobile drawer navigation, quick phone call buttons, touch-friendly tap targets, and smooth scroll animations.
- **Vercel Ready**:
  - Pre-configured `vercel.json` with client-side SPA routing rewrites and asset caching headers.

---

## 🛠️ Tech Stack

- **Framework**: React 18 (Vite 6)
- **Routing**: React Router DOM 6
- **Styling**: Tailwind CSS 3 (Custom Charcoal & Metallic Gold color palette)
- **Icons**: Lucide React
- **Animations**: Canvas Confetti & CSS3 Transitions

---

## 🚀 Local Development

1. Clone or navigate into the project directory:
   ```bash
   cd "c:\Users\Extreme\Desktop\Bloody sweet\Catrines Mens Salon"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the port indicated in terminal).

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📦 How to Push to GitHub

1. Initialize git (already completed if you ran the repository setup):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Catrines Mens Salon React website"
   ```

2. Create a new repository on your GitHub account (e.g. `catrines-mens-salon`).

3. Link and push to GitHub:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/catrines-mens-salon.git
   git branch -M main
   git push -u origin main
   ```

---

## ⚡ How to Deploy on Vercel

### Option 1: Via Vercel Dashboard (Recommended & Easiest)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New"** > **"Project"**.
3. Import your `catrines-mens-salon` GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your website will be live with a free SSL `.vercel.app` URL in under 60 seconds!

### Option 2: Via Vercel CLI
1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. In the project folder, run:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 📍 Business Information

- **Business Name**: Catrines Mens Salon
- **Address**: 2110 Angier Ave, Durham, NC 27703
- **Phone**: (919) 672-6717
- **Hours**:
  - Tuesday – Friday: 9:00 AM – 6:00 PM
  - Saturday: 8:00 AM – 4:00 PM
  - Sunday – Monday: CLOSED
