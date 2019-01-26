# nw-jest-test
Testing NW.js with Jest

1. `npm install`
1. `npm start` > F12 to open dev tools > click on H1 to see the console log
1. `npm test` > Outputs failure:

```
 FAIL  src/index.test.js
  Test
    x readdirSync (2ms)

  ? Test > readdirSync

    ReferenceError: nw is not defined

      1 |
      2 | function readDir () {
    > 3 |   let dir = nw.require('fs').readdirSync('.');
        |             ^
      4 |   return dir;
      5 | }
      6 |

      at nw (src/index.js:3:13)
      at Object.readDir (src/index.test.js:10:12)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.761s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```

`window.nw` and `global.nw` are built into any NW.js window. So it makes sense that Jest is not familiar with it.

I want to be able to test the fail and success states of asynchronous actions (like reading/writing a file).

I **DO NOT** want to run my tests inside of NW.js. I just want to be able to mock out parts of `nw` for tests of both success and failure states, similar to mocking out Axios for success/failure states of network calls.
