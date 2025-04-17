# Design Haven Projects

## Teknologier
- **React** med **TypeScript**
- **Vite** som byggverktyg
- **Tailwind CSS** för styling
- **Shadcn/ui** för UI-komponenter
- **React Router** för routing
- **React Query** för datahantering
- **Lucide React** för ikoner

## Kommandon
```bash
# Utveckling
npm run dev         # Starta utvecklingsserver

# Bygge
npm run build       # Bygga för produktion
npm run build:dev   # Bygga för utveckling

# Övrigt
npm run preview     # Förhandsgranska byggd version
npm run lint        # Kör linter
```

## Komponenter

### Layout
- `Navbar`: Huvudnavigering med responsiv meny och dropdown
- `Footer`: Sidfot med kontaktinformation och länkar
- `Hero`: Landningssida med animerad intro och bildkarusell

### UI-komponenter
- `ImageCarousel`: Bildvisare med stöd för karusell och bildkort
- `ProcessSteps`: Visar projektprocessen i steg
- `ServicesSection`: Visar tjänstekategorier med ikoner

### Tjänstesidor
- `Design & Formgivning`: CAD, visualisering, formgivning
- `Tekniska Lösningar`: System, automation, konstruktion
- `Prototyper`: 3D-printing, modellbygge
- `Tillverkningsmetoder`: CNC, formtillverkning, gjutning

### Media
- `Produktfotografering`: Produktbilder och dokumentation
- `Eventdokumentation`: Event- och processfotografering
- `Naturfoto`: Naturbilder och miljödokumentation

## Projektstruktur
```
src/
├── components/     # Återanvändbara komponenter
├── pages/         # Sidkomponenter
├── lib/           # Hjälpfunktioner
└── styles/        # Global styling
```

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/73690e8a-44c6-411e-9338-139d96086711

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/73690e8a-44c6-411e-9338-139d96086711) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/73690e8a-44c6-411e-9338-139d96086711) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
