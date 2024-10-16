# React + Vite

# JJ Streaming

Detta projekt är en applikation för att upptäcka och söka efter populära filmer. Du som användare av sidan kan också spara filmer till din personliga lista.

## Användning
- Sök efter filmer genom att skriva i sökrutan.
- Klicka på hjärtat så läggs filmer till på "My list" uppe i headern.


## Installation
1. Klona repot.
2. Installera beroenden med `npm install`.
3. Starta servern med `npm run dev`.

### Funktioner
- Sökfunktionalitet
- Favoriter
- Responsiv design

### Teknologier
- React
- Redux
- React Router
- Material-UI (MUI)
- Axios
- Tailwind CSS
- Vite
- React Helmet
- Google Tag Manager

## Testresultat

### End-2-End Test

Nedan visar jag på att mitt test fungerade.

![Cypress Test Resultat](./src/assets/images/cypress_test.png) 


## Krav och hur jag uppfyller dem

- **Redux Toolkit** ✅
  - Jag har skapat en slice för att hantera favoritfilmer. Det gör att jag kan hålla koll på vad användarna gillar.

- **API-hantering** ✅
  - Jag använder themoviedb API för att söka och visa filmer. Användare kan enkelt söka efter filmer och se detaljer om dem.

- **SEO-optimering** ✅
  - Jag har lagt till metataggar i `index.html`, och har också gjort en `sitemap.xml` och `robots.txt`. Applikationen ser bra ut på både mobiler och datorer, så den är mobilvänlig.

- **End-to-End Test** ✅
  - Jag har skrivit ett end-to-end-test med Cypress för att se till att användare kan söka efter en film och lägga till den i favoriter.

- **Versionshantering med Git** ✅
  - Jag har använt Git för att hålla koll på ändringar, gjort minst tre commits och skapat branches för olika funktioner som Google Tag Manager och Cypress-testning.

- **Dokumentation** ✅
  - Min README.md innehåller allt man behöver veta om projektet, inklusive hur man installerar det och vad funktionerna är.

