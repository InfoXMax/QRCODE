const generateBtn = document.getElementById("generate-btn");
const input = document.getElementById("input");
const qrCode = document.getElementById("qr-code");

generateBtn.addEventListener("click", function() {
  const inputValue = input.value;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}`;
  qrCode.innerHTML = `<img src="${qrUrl}">`;
});
