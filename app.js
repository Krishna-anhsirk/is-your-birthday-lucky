const birthdayDate = document.querySelector("#birthday-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector(".check-number");
const output = document.querySelector(".output");

function calculateSum(dob) {
  //To remove hyphens
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

function isBirthdayLucky() {
  const dateSum = calculateSum(birthdayDate.value);

  //Input validation
  if (birthdayDate.value && luckyNumber.value) {
    if (dateSum % luckyNumber.value === 0) {
      output.innerText = "Your birthday is lucky! 🥳";
    } else {
      output.innerText = "Your birthday is not that lucky 😶";
    }
  } else {
    output.innerText = "Enter both the values 😡";
  }
}

checkBtn.addEventListener("click", isBirthdayLucky);
