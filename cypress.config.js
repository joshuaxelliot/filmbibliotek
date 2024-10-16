import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Ange bas-URL för dina tester
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
