const button = document.getElementById("submit");
const dataInput = document.getElementById("data");
const resultBox = document.getElementById("result");

button.addEventListener('click', () => calculate());

function calculate() {
    const data = dataInput.value;

    const modData = data.replaceAll(" ", ", ");
    const dataLength = modData.length;

    resultBox.textContent = `Модифікований рядок: "${modData}"; Кількість символів: ${dataLength};`;
}
