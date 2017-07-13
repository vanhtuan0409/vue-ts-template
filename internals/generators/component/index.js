/**
 * Component Generator
 */

"use strict";

const utils = require("../utils/componentExists");

module.exports = {
  description: "Add an unconnected component",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "Select the type of component",
      default: "Single file component",
      choices: () => ["Single file component", "Multiple file component"]
    },
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (/.+/.test(value)) {
          return utils.componentExists(value)
            ? "A component or container with this name already exists"
            : true;
        }

        return "The name is required";
      }
    }
  ],
  actions: data => {
    const action = [];

    // Default is to generate single file component
    if (data.type !== "Multiple file component") {
      action.push({
        type: "add",
        path: "../../src/components/{{properCase name}}/index.vue",
        templateFile: "./component/single_file.vue.hbs",
        abortOnFail: true
      });
    } else {
      action.push({
        type: "add",
        path: "../../src/components/{{properCase name}}/index.vue",
        templateFile: "./component/multiple_file.vue.hbs",
        abortOnFail: false
      });

      action.push({
        type: "add",
        path: "../../src/components/{{properCase name}}/{{properCase name}}.ts",
        templateFile: "./component/component.ts.hbs",
        abortOnFail: false
      });

      action.push({
        type: "add",
        path:
          "../../src/components/{{properCase name}}/{{properCase name}}.html",
        abortOnFail: false
      });

      action.push({
        type: "add",
        path:
          "../../src/components/{{properCase name}}/{{properCase name}}.css",
        abortOnFail: false
      });
    }

    action.push({
      type: "modify",
      path: "../../src/components/index.ts",
      pattern: /$(?![\r\n])/g,
      templateFile: "./component/registerComponent.ts.hbs",
      abortOnFail: false
    });

    return action;
  }
};
