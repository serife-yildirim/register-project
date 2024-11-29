import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Geliştirme sunucusu adresi
    chromeWebSecurity: false, // Güvenlik kısıtlamalarını kaldırır
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
