const path = require("path");
const ncp = require("ncp").ncp;

const baseDir = path.join(__dirname, "../");
const srcDir = __dirname;
const distDir = path.join(baseDir, "dist/");
module.exports = baseDir;
module.exports = srcDir;
module.exports = distDir;

// Represents the number of pending
// file system requests at a time.
ncp.limit = 16;

const cp = {
  log (data, name) {
    if (name) {
      console.log(name, data);
    } else {
      console.log(data);
    }
  },

  copyPath (paths) {
    for (const p of paths) {
      if (p) {
        this.log("copy folder", p);
        const sourceDir = path.join(srcDir, p);
        const targetDir = path.join(distDir, p);
        this.ncpCopy(sourceDir, targetDir);
      }
    }
  },

  ncpCopy (s, t) {
    this.log("try to copy from " + s + " to " + t);
    ncp(s, t,
      function (err) {
        if (err) {
          return console.error(err);
        }
      });
  },

  paths:
    [
      "views",
      "web",
      "components"
    ],

};

module.exports = cp;
