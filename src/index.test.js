
const readDir = require('./index.js');

describe('Test', () => {
  test('readdirSync', () => {
    expect(readDir())
      .toEqual([
        '.git',
        '.gitignore',
        'index.html',
        'LICENSE',
        'node_modules',
        'package-lock.json',
        'package.json',
        'README.md',
        'src'
      ]);
  });
});
