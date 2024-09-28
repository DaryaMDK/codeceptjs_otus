const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://computer-database.gatling.io/computers',
      show: true,
      browser: 'chrome',
      windowSize: '1920x1080',
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/HomePage.js',
    computerPage: './pages/ComputerPage.js',
    addComputerPage: './pages/AddComputerPage.js'
  },
  name: 'codeceptjs_otus',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}