const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

const add = () => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  currentResult += userNumber;
  createLog('+', initialRes, userNumber);
  writeToLog('ADDITION', initialRes, userNumber, currentResult);
};

const substract = () => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  currentResult -= userNumber;
  createLog('-', initialRes, userNumber);
  writeToLog('SUBSTRACTION', initialRes, userNumber, currentResult);
};

const multiply = () => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  currentResult *= userNumber;
  createLog('*', initialRes, userNumber);
  writeToLog('MULTIPLICATION', initialRes, userNumber, currentResult);
};

const divide = () => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  currentResult /= userNumber;
  createLog('/', initialRes, userNumber);
  writeToLog('DIVISION', initialRes, userNumber, currentResult);
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

// AUX FUNCS //

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
