
function readDir () {
  let dir = nw.require('fs').readdirSync('.');
  return dir;
}

module.exports = readDir;
