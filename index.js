const lengthInput = document.getElementById("length");
const lengthVal = document.getElementById("length-val");
const resultDisplay = document.getElementById("result");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");
const copyBtn = document.getElementById("copy-btn");

lengthInput.oninput = () => lengthVal.textContent = lengthInput.value;

copyBtn.onclick = () => {
    if (resultDisplay.textContent === "...") return;
    navigator.clipboard.writeText(resultDisplay.textContent);
    const originalIcon = copyBtn.innerHTML;
    copyBtn.innerHTML = '<b style="font-size:10px; color:#3b82f6">COPIED</b>';
    setTimeout(() => copyBtn.innerHTML = originalIcon, 1500);
};

function genPassword() {
    const length = Number(lengthInput.value);
    const charSets = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        number: "0123456789",
        symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
    };

    let allowed = "";
    let score = 0;

    for (let key in charSets) {
        if (document.getElementById(key).checked) {
            allowed += charSets[key];
            score++;
        }
    }

    if (!allowed) {
        resultDisplay.textContent = "Select options";
        updateMeter(0, 0);
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allowed[Math.floor(Math.random() * allowed.length)];
    }

    resultDisplay.textContent = password;
    updateMeter(score, length);
}

function updateMeter(score, len) {
    let strengthIndex = 0; 
    
    if (len >= 10 && score >= 2) strengthIndex = 1;
    if (len >= 14 && score >= 3) strengthIndex = 2;
    if (len < 6) strengthIndex = 0;

    const colors = ["#ef4444", "#f59e0b", "#22c55e"];
    const labels = ["WEAK", "MEDIUM", "STRONG"];
    const widths = ["33%", "66%", "100%"];

    strengthFill.style.width = widths[strengthIndex];
    strengthFill.style.backgroundColor = colors[strengthIndex];
    strengthText.textContent = labels[strengthIndex];
    strengthText.style.color = colors[strengthIndex];
}

document.getElementById("generate").onclick = genPassword;
window.onload = genPassword;