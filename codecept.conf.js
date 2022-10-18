/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './test/*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://api.dev.cartos.solutions',
      defaultHeaders: {
        // use Bearer Authorization
        //'Authorization': '',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'origin': 'https://backoffice.dev.cartos.solutions',
      }
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'automationApi'
}