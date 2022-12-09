class Tasks {
  _listNumberToSumNumberToSum = [];
  _listPairsSum = [];
  _result = 0;

  get getlistArray() {
    const listArr = this._listNumberToSum;
    return listArr;
  }

  constructor(_listNumberToSum) {
    this._listNumberToSum = [];
  }

  header(label) {
    console.log("=====================================".america);
    console.log(`${label}`.america);
    console.log("=====================================\n".america);
  }

  addNumber = (number = 0) => {
    this._listPairsSum = [];
    const exist = this._listNumberToSum.some((numb) => numb == number);

    if (exist) {
      return console.log("Number Already Exists");
    }

    this._listNumberToSum.push(Number(number));
  };

  listNumbers = (list = this.getlistArray) => {
    this.header("List Of Number");
    if (list == 0) {
      return console.log("Please add numbers".red, "\n");
    }
    console.log("[".white + `${list}`.green + "]".white);
  };

  findsPairs = (result) => {
    this._result = result;
    this.getlistArray.forEach((num, index, array) => {
      const currentNumber = num;
      const currentIndex = index;
      array.forEach((num, index) => {
        const sum = currentNumber ? currentNumber + num : null;
        if (sum && index != currentIndex && sum == result) {
          this._listPairsSum.push(...[currentNumber, num].sort());
          const removeDuplicate = new Set(this._listPairsSum);
          const result = [...removeDuplicate];
          this._listPairsSum = result;
        }
      });
    });
  };

  listPairsSum = () => {
    this.header("List Of Pairs Sum");
    console.log(`Expected Result : ${this._result}`.brightGreen, "\n");

    if (this._listPairsSum.length == 0) {
      return console.log("Results not found".red, "\n");
    }
    this._listPairsSum.map((number, index, arr) => {
      const result = number + arr[index + 1];
      if (result == this._result) {
        return console.log("+".green, `${number},${arr[index + 1]}`.cyan);
      }
    });
  };
}

module.exports = Tasks;
