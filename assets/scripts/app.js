const defaultResult = 0;
let currentResult = defaultResult;

const add = () => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  currentResult = currentResult + userNumber;
  createLog('+', initialRes, userNumber);
};

const substract = () => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  currentResult = currentResult - userNumber;
  createLog('-', initialRes, userNumber);
};

const multiply = () => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  currentResult = currentResult * userNumber;
  createLog('*', initialRes, userNumber);
};

const divide = () => {
  const userNumber = getUserInput();
  const initialRes = currentResult;
  currentResult = currentResult / userNumber;
  createLog('/', initialRes, userNumber);
};

// AUX FUNCS //

const getUserInput = () => {
  return parseInt(userInput.value);
};

const createLog = (op, resB4Calc, numCalc) => {
  const calcDesc = `${resB4Calc} ${op} ${numCalc}`;
  outputResult(currentResult, calcDesc);
};

// AUX FUNCS //

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
