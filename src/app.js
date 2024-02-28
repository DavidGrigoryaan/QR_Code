const api = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=";
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const QrCode = document.querySelector("#qr-code");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  QrCode.innerHTML = "";
  const req = api + input.value;
  const Qr_Code = `<img src="${req}" alt="QR code">`;
  QrCode.classList.add("open");
  QrCode.insertAdjacentHTML("beforeend", Qr_Code);
});
