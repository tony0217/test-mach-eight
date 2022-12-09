const inquirer = require("inquirer");
require("colors");

const question = [
  {
    type: "list",
    name: "option",
    message: "¿What would you like to do?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Add Number To List`,
      },
      {
        value: "2",
        name: `${"2.".green} List Of Number`,
      },
      {
        value: "3",
        name: `${"3.".green} Find Pairs Of Sum`,
      },
      {
        value: "4",
        name: `${"4.".green} List Of Pairs Sum`,
      },
      {
        value: "0",
        name: `${"0.".green} Exit\n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===============================".green);
  console.log(" TEST MACH EIGHT ".brightWhite);
  console.log("===============================\n".green);

  const { option } = await inquirer.prompt(question);

  return option;
};

const setInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "number",
      message,
      validate: function (value) {
        if (value.length === 0 || isNaN(value)) {
          return `Please enter a valid ${message}`;
        }

        return true;
      },
    },
  ];

  console.log("\n");
  const { number } = await inquirer.prompt(question);

  return number;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"Enter".green} to continue`,
    },
  ];

  console.log("\n");
  await inquirer.prompt(question);
};

module.exports = {
  inquirerMenu,
  setInput,
  pause,
};
