const fs = require("fs");
const path = require("path");
const componentGenerator = require("./component/index.js");
const moduleGenerator = require("./module/index.js");

module.exports = plop => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("module", moduleGenerator);
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
};
