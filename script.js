let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&format=png&data=";

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let hrefImage = document.getElementById("imageLink");
let qrText = document.getElementById("qrText");

const generateQR = () => {
  if (qrText.value.length > 0) {
    let qr = URL + qrText.value;
    qrImage.src = qr;
    imgBox.classList.add("show-img");
    hrefImage.addEventListener("click", async () => {
      let qrCode = await fetch(qr);
      let blob = await qrCode.blob();
      console.log(blob);
      hrefImage.href = window.URL.createObjectURL(blob);
      hrefImage.download = qrText.value + '.jpg';
    });
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
};
