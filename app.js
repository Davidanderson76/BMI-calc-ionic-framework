const calculateBtn = document.querySelector("ion-button");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");

const calculateBmi = () => {
  const enteredWeight = +weightInput.value;
  const enteredHeight = +heightInput.value;

  const bmi = enteredWeight / (enteredHeight * enteredHeight);

  console.log(bmi);
};

calculateBtn.addEventListener("click", calculateBmi);
