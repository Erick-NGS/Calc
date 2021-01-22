const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

const add = () => {
  calcRes('ADDITION');
};

const substract = () => {
  calcRes('SUBSTRACTION');
};

const multiply = () => {
  calcRes('MULTIPLICATION');
};

const divide = () => {
  calcRes('DIVISION');
};

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

const calcRes = calcType => {
  if (
    calcType !== 'ADDITION' &&
    calcType !== 'SUBSTRACTION' &&
    calcType !== 'MULTIPLICATION' &&
    calcType !== 'DIVISION'
  ) {
    return;
  }

  const userNumber = getUserInput();
  const initialRes = currentResult;
  let mathOp;

  if (calcType === 'ADDITION') {
    currentResult += userNumber;
    mathOp = '+';
  } else if (calcType === 'SUBSTRACTION') {
    currentResult -= userNumber;
    mathOp = '-';
  } else if (calcType === 'MULTIPLICATION') {
    currentResult *= userNumber;
    mathOp = '*';
  } else if (calcType === 'DIVISION') {
    currentResult /= userNumber;
    mathOp = '/';
  }

  createLog(mathOp, initialRes, userNumber);
  writeToLog(calcType, initialRes, userNumber, currentResult);
};

// AUX FUNCS //

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
