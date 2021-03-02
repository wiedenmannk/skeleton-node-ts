const rx = require("rxjs");
const interval = rx.interval;
const cp = require("./ncpCopy");

let every = 0;
module.exports = every;

const cron = interval(1500);
cron.subscribe(() => {
  if (every > 9) {
    console.clear();
    every = 0;
  }
  every++;
  cp.copyPath(cp.paths);
});
