const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function clearDisplay() {
  display.value = '';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const id = button.id;

    if (id === 'clear') { // Corrected id check
      clearDisplay();
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});