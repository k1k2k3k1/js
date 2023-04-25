const numberInput = document.getElementById("number-input");
const submitButton = document.getElementById("submit-button");
const outputContainer = document.getElementById("output-container");

submitButton.addEventListener("click", () => {
  const number = parseInt(numberInput.value);

  if (number < 0) {
    outputContainer.innerText = "Enter a positive value";
    return;
  }

  if (number % 2 === 0) {
    const sequence = [];
    for (let i = number + 2; sequence.length < 3; i += 2) {
      sequence.push(i);
    }
    outputContainer.innerText = `Next three even numbers: ${sequence.join(", ")}`;
  } else {
    const sequence = [];
    for (let i = number + 2; sequence.length < 3; i += 2) {
      sequence.push(i);
    }
    outputContainer.innerText = `Next three odd numbers: ${sequence.join(", ")}`;
  }
});