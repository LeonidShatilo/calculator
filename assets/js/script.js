let numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operator'),
  clearBtns = document.querySelectorAll('.clear-btn'),
  decimalBtn = document.getElementById('decimal'),
  display = document.getElementById('display'),
  eulers = document.getElementById('e'),
  pi = document.getElementById('pi'),
  square = document.getElementById('x2'),
  sqrt = document.getElementById('sqr-root'),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false,
  MemoryPendingOperation = '';
  
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0' ||
        display.value === '2.718281828459045' ||
        display.value === '3.141592653589793')
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
  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = localOperationMemory;
  } else {
    MemoryNewNumber = true;
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
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
}
  
decimalBtn.addEventListener('click', decimal);

function decimal(argument) {
  let localDecimalMemory = display.value;
  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
}

eulers.addEventListener('click', function(e) {
  numberEulers(e.target.id);
});

function numberEulers(argument) {
  if (MemoryNewNumber) {
    display.value = Math.E;
    MemoryNewNumber = false;
  } else {
    display.value = Math.E;
    MemoryNewNumber = true;
  }
}

pi.addEventListener('click', function(e) {
  numberPi(e.target.id);
});

function numberPi(argument) {
  if (MemoryNewNumber) {
    display.value = Math.PI;
    MemoryNewNumber = false;
  } else {
    display.value = Math.PI;
    MemoryNewNumber = true;
  }
}

square.addEventListener('click', function(e) {
  numberSquare(e.target.id);
});

function numberSquare(argument) {
  let MemoryNumSquare = display.value;
  if (MemoryNewNumber) {
    display.value = Math.pow(MemoryNumSquare, 2);
  } else {
    display.value = Math.pow(MemoryNumSquare, 2);
    MemoryNewNumber = true;
  }
}

sqrt.addEventListener('click', function(e) {
  numberSquareRoot(e.target.id);
});

function numberSquareRoot(argument) {
  let MemoryNumSqrt = display.value;
  if (MemoryNewNumber) {
    display.value = Math.sqrt(MemoryNumSqrt);
  } else {
    display.value = Math.sqrt(MemoryNumSqrt);
    MemoryNewNumber = true;
  }
}