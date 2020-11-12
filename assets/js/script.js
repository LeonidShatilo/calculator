let numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operator'),
  clearBtns = document.querySelectorAll('.clear-btn'),
  decimalBtn = document.getElementById('decimal'),
  resultBtn = document.getElementById('result'),
  display = document.getElementById('display'),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false,
  MemoryPendingOperation = '';
  
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (let i = 0; i < operations.length; i++) {
  let operation = operations[i];
  operation.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

for (let i = 0; i < clearBtns.length; i++) {
  let clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.id);
  });
}
  
decimalBtn.addEventListener('click', decimal);

result.addEventListener('click', function (e) {
  console.log('Клик по кнопке result');
});

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    }
  }
  console.log(`Клик по кнопке с номером ${number}`);
}

function operationPress(symbol) {
  let localOperationMemory = display.value;
  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    }
    display.value = parseFloat(MemoryCurrentNumber);
    MemoryPendingOperation = symbol;
  }
  console.log(`Клик по кнопке с операцией ${symbol}`);
}

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
  console.log('Клик по кнопке decimal');
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
  console.log(`Клик по кнопке ${id}`);
}