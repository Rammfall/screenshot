const { toMatchImageSnapshot } = require('jest-image-snapshot');
jest.setTimeout(1000000);

expect.extend({toMatchImageSnapshot });
