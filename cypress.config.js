import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild.js";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Registrar plugin de cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Preprocesador para .feature
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    baseUrl: "https://www.demoblaze.com/",
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: false, // si no usás support/index.js
  },
});
