const inputCardNumber = document.getElementById("card-number"); // const cardNumber = document.getElementById("card-number");
const inputCardName = document.getElementById("cardholder-name"); // const cardName = document.getElementById("cardholder-name");
const inputCardYear = document.getElementById("card-year"); // const yearInput = document.getElementById("expiry-year");
const inputCardMonth = document.getElementById("card-month"); // const monthInput = document.getElementById("expiry-month");

const outputCardName = document.getElementById("card__name");
const outputCardNumber = document.getElementById("card__number");
const outputMonthInput = document.getElementById("card__number");
const outputYearInput = document.getElementById("card__number");

// Knapp funktionalitet
const button = document.getElementById("button");
const inputFieldsContainer = document.querySelector(".input__field");
const displayText = document.getElementById("displayText");

// NUMMER
inputCardNumber.addEventListener("input", function () {
  outputCardNumber.textContent = inputCardNumber.value;
});

// NAMN
inputCardName.addEventListener("input", function () {
  outputCardName.textContent = inputCardName.value;
});

// YEAR
inputCardYear.addEventListener("input", function () {
  outputCardNumber.textContent = inputCardYear.value;
});

// MÅNADER
inputCardMonth.addEventListener("input", function () {
  outputMonthInput.textContent = inputCardMonth.value;
});

// BUTTON

// button.addEventListener("click", function () {
//   inputFieldsContainer.style.display = "none";
//   console.log("hello");
//   displayTextContainer.style.display = "block";
// });

button.addEventListener("click", () => {
  console.log("first");
});
