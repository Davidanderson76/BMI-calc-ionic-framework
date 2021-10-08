const calculateBtn = document.getElementById("calc-btn");
const resetBtn = document.getElementById("reset-btn");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const resultArea = document.getElementById("result");

//Button Function//
const calculateBmi = () => {
  const enteredWeight = +weightInput.value;
  const enteredHeight = +heightInput.value;
  const bmi = enteredWeight / (enteredHeight * enteredHeight);
  //   console.log(bmi);
  if (isNaN(bmi)) {
    alert("Not a number!");
    return;
  }

  const resultElement = document.createElement("ion-card");

  resultElement.innerHTML = `
  <ion-card-content>
    <h2>Your BMI is ${bmi}</h2>
  </ion-card-content>
  `;
  resultArea.innerHTML = "";
  resultArea.appendChild(resultElement);
};

const resetInputs = () => {
  heightInput.value = "";
  weightInput.value = "";
};

//Button Function Listeners
calculateBtn.addEventListener("click", calculateBmi);
resetBtn.addEventListener("click", resetInputs);
