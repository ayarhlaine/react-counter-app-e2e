exports.config = {
  tests: './**/*.e2e.test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3000/',
      windowSize: '1280x3000',
      smartWait: 1000,
      browser: 'chrome',
      restart: false,
      desiredCapabilities: {
        chromeOptions: {
          args: [
            "--headless",
            "--disable-gpu",
            '--disable-dev-shm-usage',
            "--no-sandbox"
          ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    counterPage: './counter/counterPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'react-e2e',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
  }
}