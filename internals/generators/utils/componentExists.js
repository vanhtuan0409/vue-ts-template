/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require("fs");
const path = require("path");
const components = fs.readdirSync(
  path.join(__dirname, "../../../src/components")
);
const modules = fs.readdirSync(
  path.join(__dirname, "../../../src/store/modules")
);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

function moduleExists(mod) {
  return modules.indexOf(mod) >= 0;
}

module.exports = {
  componentExists,
  moduleExists
};
