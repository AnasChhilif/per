// cucumber.mjs
export default {
  import: ['features/step_definitions/*.js'],
  paths: ['features/**/*.feature'],
  format: ['progress-bar', 'html:cucumber-report.html'],
  formatOptions: {
    snippetInterface: 'async-await'
  },
  publishQuiet: true,
  exit: true // Ensures the process exits after tests complete
};