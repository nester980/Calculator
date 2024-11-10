
let variable = '';
let variableTwo = '';
let action = '';
let memory = '';

const buttonOne = document.querySelector('.button__one');
const buttonTwo = document.querySelector('.button__two');
const buttonThree = document.querySelector('.button__three');
const buttonFour = document.querySelector('.button__four');
const buttonFive = document.querySelector('.button__five');
const buttonSix = document.querySelector('.button__six');
const buttonSeven = document.querySelector('.button__seven');
const buttonEight = document.querySelector('.button__eight');
const buttonNine = document.querySelector('.button__nine');
const buttonPlusMinus = document.querySelector('.button__plus-minus');
const buttonZero = document.querySelector('.button__zero');
const buttonComma = document.querySelector('.button__comma');
const buttonPlus = document.querySelector('.button__plus');
const buttonMinus = document.querySelector('.button__minus');
const buttonMultiply = document.querySelector('.button__multiply');
const buttonSplit = document.querySelector('.button__split');
const buttonMemoryClear = document.querySelector('.button__memory-clear');
const buttonMemoryRead = document.querySelector('.button__memory-read');
const buttonMemorySave = document.querySelector('.button__memory-save');
const buttonMemoryPlus = document.querySelector('.button__memory-plus');
const buttonMemoryMinus = document.querySelector('.button__memory-minus');
const buttonBacspeys = document.querySelector('.button__bacspeys');
const buttonClear = document.querySelector('.button__clear');
const buttonEqual = document.querySelector('.button__equal');

const windowsInput = document.querySelector('.windows__input');
const windowsLogs = document.querySelector('.windows__logs'); 
const windowsMemory = document.querySelector('.windows__memory'); 

function setNumber (number) {
    if (number === 'Infinity' || number === '-Infinity') {  
    alert('Текстовое значение удалено!');
    return '';
  } else if (number.slice(0, 1) === '.') {
    number = number.replaceAll(".", "");
    number = number.slice(0, 1) + number.slice(1).replaceAll("+", "");
    number = number.slice(0, 1) + number.slice(1).replaceAll("-", "");   
    windowsInput.value = '0.' + number;
    variable = '0.' + number;
  }  else {
    number = number.slice(0, 2) + number.slice(2).replaceAll(".", "");
    number = number.slice(0, 1) + number.slice(1).replaceAll("+", "");
    number = number.slice(0, 1) + number.slice(1).replaceAll("-", "");
    windowsInput.value = number;
    variable = number;
  }
}

buttonZero.addEventListener('click', function () {
  setNumber(windowsInput.value + 0);
  windowsInput.value = variable
});

buttonOne.addEventListener('click', function () {
  setNumber(windowsInput.value + 1);
  windowsInput.value = variable
});

buttonTwo.addEventListener('click', function () {
  setNumber(windowsInput.value + 2);
  windowsInput.value = variable
});

buttonThree.addEventListener('click', function () {
  setNumber(windowsInput.value + 3);
  windowsInput.value = variable
});

buttonFour.addEventListener('click', function () {
  setNumber(windowsInput.value + 4);
  windowsInput.value = variable
});

buttonFive.addEventListener('click', function () {
  setNumber(windowsInput.value + 5);
  windowsInput.value = variable
});

buttonSix.addEventListener('click', function () {
  setNumber(windowsInput.value + 6);
  windowsInput.value = variable
});

buttonSeven.addEventListener('click', function () {
  setNumber(windowsInput.value + 7);
  windowsInput.value = variable
});  

buttonEight.addEventListener('click', function () {
  setNumber(windowsInput.value + 8);
  windowsInput.value = variable
});  

buttonNine.addEventListener('click', function () {
  setNumber(windowsInput.value + 9);
  windowsInput.value = variable
});  

buttonComma.addEventListener('click', function () {
  setNumber(windowsInput.value + '.');
  windowsInput.value = variable;
}); 

buttonPlusMinus.addEventListener('click', function () {
  setNumber(windowsInput.value * -1);
  windowsInput.value = variable;
}); 

buttonPlus.addEventListener('click', function () {
  setNumber(windowsInput.value);
  variableTwo = variable;
  windowsInput.value = '';
  action = 'plus';
  windowsLogs.value = variableTwo + ' +';
}); 

buttonMinus.addEventListener('click', function () {
  setNumber(windowsInput.value);
  variableTwo = variable;
  windowsInput.value = '';
  action = 'minus';
  windowsLogs.value = variableTwo + ' -';
}); 

buttonMultiply.addEventListener('click', function () {
  setNumber(windowsInput.value);
  variableTwo = variable;
  windowsInput.value = '';
  action = 'multiply';
  windowsLogs.value = variableTwo + ' *';
}); 

buttonSplit.addEventListener('click', function () {
  setNumber(windowsInput.value);
  variableTwo = variable;
  windowsInput.value = '';
  action = 'split';
  windowsLogs.value = variableTwo + ' /';
}); 

buttonEqual.addEventListener('click', function () {
  windowsLogs.value = windowsLogs.value + ' ' + variable + ' =';
  switch(action) {
    case '': alert('Нажмите действие!'); break;
    case 'plus': windowsInput.value = +variableTwo + +variable; break;
    case 'minus': windowsInput.value = +variableTwo - +variable; break;
    case 'multiply': windowsInput.value = +variableTwo * +variable; break;
    case 'split': windowsInput.value = +variableTwo / +variable; break;
    }
}); 

buttonBacspeys.addEventListener('click', function () {
  if (windowsInput.value === '') {
    alert('Не введено значение');
  } else {
    let arc = windowsInput.value + '';   
    windowsInput.value = arc.slice(0, -1)
  }
}); 

buttonClear.addEventListener('click', function () {
  variableTwo = 0;
  variable = 0;
  action = '';
  windowsInput.value = '';
  windowsLogs.value = '';
}); 

buttonMemoryClear.addEventListener('click', function () {
  memory = '';
  windowsMemory.value = memory;
}); 

buttonMemoryRead.addEventListener('click', function () {
  windowsInput.value = memory;
}); 

buttonMemorySave.addEventListener('click', function () {
  memory = windowsInput.value;
  windowsMemory.value = 'M: ' + memory;

}); 

buttonMemoryPlus.addEventListener('click', function () {
  memory = +memory + +windowsInput.value;
  windowsMemory.value = 'M: ' + memory;
}); 

buttonMemoryMinus.addEventListener('click', function () {
  memory = +memory - +windowsInput.value;
  windowsMemory.value = 'Memory: ' + memory;
}); 
