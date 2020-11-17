let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    clearBtns = document.querySelectorAll('.clear-btn'),
    decimalBtn = document.getElementById('decimal'),
    display = document.getElementById('display'),
    square = document.getElementById('x2'),
    sqrt = document.getElementById('sqr-root'),
    MemoryCurrentNumber = 0,
    MemoryPendingOperation = '',
    IsNewNumber = false;
const EULERS = document.getElementById('e'),
      PI = document.getElementById('pi');
  
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

function numberPress(number) {
  if (IsNewNumber) {
    display.value = number;
    IsNewNumber = false;
  } else {
    if (display.value === '0' ||
        display.value === Math.E ||
        display.value === Math.PI)
    {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

for (let i = 0; i < operations.length; i++) {
  let operation = operations[i];
  operation.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

function operationPress(symbol) {
  let localOperationMemory = display.value;
  if (IsNewNumber && MemoryPendingOperation !== '=') {
    display.value = localOperationMemory;
  } else {
    IsNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '×') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '÷') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    }
    display.value = parseFloat(MemoryCurrentNumber);
    MemoryPendingOperation = symbol;
  }
}

for (let i = 0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.id);
  });
}

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    IsNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    IsNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
}
  
decimalBtn.addEventListener('click', decimal);

function decimal(argument) {
  let localDecimalMemory = display.value;
  if (IsNewNumber) {
    localDecimalMemory = '0.';
    IsNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
}

EULERS.addEventListener('click', function(e) {
  numberEulers(e.target.id);
});

function numberEulers(argument) {
  if (IsNewNumber) {
    display.value = Math.E;
    IsNewNumber = false;
  } else {
    display.value = Math.E;
    IsNewNumber = true;
  }
}

PI.addEventListener('click', function(e) {
  numberPi(e.target.id);
});

function numberPi(argument) {
  if (IsNewNumber) {
    display.value = Math.PI;
    IsNewNumber = false;
  } else {
    display.value = Math.PI;
    IsNewNumber = true;
  }
}

square.addEventListener('click', function(e) {
  numberSquare(e.target.id);
});

function numberSquare(argument) {
  let MemoryNumSquare = display.value;
  if (IsNewNumber) {
    display.value = Math.pow(MemoryNumSquare, 2);
  } else {
    display.value = Math.pow(MemoryNumSquare, 2);
    IsNewNumber = true;
  }
}

sqrt.addEventListener('click', function(e) {
  numberSquareRoot(e.target.id);
});

function numberSquareRoot(argument) {
  let MemoryNumSqrt = display.value;
  if (IsNewNumber) {
    display.value = Math.sqrt(MemoryNumSqrt);
  } else {
    display.value = Math.sqrt(MemoryNumSqrt);
    IsNewNumber = true;
  }
}