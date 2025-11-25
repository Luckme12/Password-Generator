const passwordOutput = document.getElementById("passwordOutput");
const lengthSlider = document.getElementById("lengthSlider");
const lengthLabel = document.getElementById("lengthLabel");

const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

lengthSlider.addEventListener("input", () => {
    lengthLabel.textContent = lengthSlider.value;
});

function generatePassword() {
    const length = parseInt(lengthSlider.value);

    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_-+=<>?/{}[]~";

    let chars = lowerChars;
    if (uppercase.checked) chars += upperChars;
    if (numbers.checked) chars += numberChars;
    if (symbols.checked) chars += symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordOutput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    passwordOutput.select();
    document.execCommand("copy");
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1500);
});
