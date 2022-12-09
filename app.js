require("colors");
const { inquirerMenu, setInput, pause } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const number = await setInput("Add Number:");
        tasks.addNumber(number);
        break;
      case "2":
        tasks.listNumbers();
        break;
      case "3":
        const result = await setInput("Expected result:");
        tasks.findsPairs(result);
        break;
      case "4":
        tasks.listPairsSum();
        break;
      default:
        break;
    }

    if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();
