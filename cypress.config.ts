import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    specPattern: 'features/**/*.feature',
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'http://localhost:5173',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      
      on('file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      
      // Add this to specify where to find step definitions
      config.env = {
        ...config.env,
        CYPRESS_STEP_DEFINITIONS: 'cypress/e2e/step_definitions'
      };
      
      return config;
    },
  },
});