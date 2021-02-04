const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

const calculate = op => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  let mathOp;

  if (op === 'ADD') {
    currentResult += userNumber;
    mathOp = '+';
  } else if (op === 'SUBTRACT') {
    currentResult -= userNumber;
    mathOp = '-';
  } else if (op === 'MULTIPLY') {
    currentResult *= userNumber;
    mathOp = '*';
  } else {
    currentResult /= userNumber;
    mathOp = '/';
  }
  createLog(mathOp, initialRes, userNumber);
  writeToLog(op, initialRes, userNumber, currentResult);
};

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));

// AUX FUNCS //

const getUserInput = () => {
  return parseInt(userInput.value);
};

const createLog = (op, resB4Calc, numCalc) => {
  const calcDesc = `${resB4Calc} ${op} ${numCalc}`;
  outputResult(currentResult, calcDesc);
};

const writeToLog = (op, prevRes, opNumber, newRes) => {
  const logEntry = {
    op: op,
    firstNum: prevRes,
    secNum: opNumber,
    result: newRes,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
};

// AUX FUNCS //
