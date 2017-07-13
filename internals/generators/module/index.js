/**
 * Component Generator
 */

"use strict";

const utils = require("../utils/componentExists");

module.exports = {
  description: "Add an Vuex store module",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Counter",
      validate: value => {
        if (/.+/.test(value)) {
          return utils.moduleExists(value)
            ? "A module with this name already exists"
            : true;
        }

        return "The name is required";
      }
    }
  ],
  actions: data => {
    const action = [];

    action.push({
      type: "add",
      path: "../../src/store/modules/{{lowerCase name}}/index.ts",
      templateFile: "./module/index.ts.hbs",
      abortOnFail: true
    });
    action.push({
      type: "add",
      path: "../../src/store/modules/{{lowerCase name}}/state.ts",
      templateFile: "./module/state.ts.hbs",
      abortOnFail: false
    });
    action.push({
      type: "add",
      path: "../../src/store/modules/{{lowerCase name}}/getters.ts",
      templateFile: "./module/getters.ts.hbs",
      abortOnFail: false
    });
    action.push({
      type: "add",
      path: "../../src/store/modules/{{lowerCase name}}/actions.ts",
      templateFile: "./module/actions.ts.hbs",
      abortOnFail: false
    });
    action.push({
      type: "add",
      path: "../../src/store/modules/{{lowerCase name}}/mutations.ts",
      templateFile: "./module/mutations.ts.hbs",
      abortOnFail: false
    });

    return action;
  }
};
