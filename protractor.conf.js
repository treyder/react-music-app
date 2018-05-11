exports.config = {
    specs: ['src/__test__/e2e/*.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:8080',
    framework: 'jasmine'
};