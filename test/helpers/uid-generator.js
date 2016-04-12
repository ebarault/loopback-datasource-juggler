var lastId = 0;

function nextUid() {
  lastId++;
  return lastUid();
}

function lastUid() {
  return '' + lastId;
}

function resetUidCounter() {
  lastId = 0;
}

module.exports = nextUid;
module.exports.last = lastUid;
module.exports.reset = resetUidCounter;
