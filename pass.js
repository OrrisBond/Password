const level = document.getElementById("show");
const slider = document.getElementById("slidum");
const checker1 = document.getElementById("checker1");
const checker2 = document.getElementById("checker2");
const checker3 = document.getElementById("checker3");
const checker4 = document.getElementById("checker4");
const generator = document.getElementById("generator");
const result = document.getElementById("result");
const clipper = document.getElementById("clipper");
const active1 = document.getElementById("check1");
const active2 = document.getElementById("check2");
const active3 = document.getElementById("check3");
const active4 = document.getElementById("check4");

const Random = {
  Lower: genLowercase,
  Upper: genUppercase,
  Number: genNumbers,
  Symbol: genSymbols,
};

function copytoclip() {
  navigator.clipboard.writeText(result.innerText);
  console.log("copied");
}

generator.addEventListener("click", () => {
  const length = +level.innerHTML;
  const addUpper = checker1.checked;
  const addLower = checker2.checked;
  const addSymbol = checker4.checked;
  const addNumber = checker3.checked;

  active1.classList.remove("active");
  active2.classList.remove("active");
  active3.classList.remove("active");
  active4.classList.remove("active");
  result.innerText = genPass(addLower, addNumber, addSymbol, addUpper, length);
});

function genPass(Lower, Number, Symbol, Upper, length) {
  let generatedPassword = "";
  const typesCount = Lower + Upper + Symbol + Number;
  const typeArr = [{ Lower }, { Upper }, { Number }, { Symbol }].filter(
    (item) => Object.values(item)[0]
  );
  console.log(typeArr);
  if (Lower == true && Upper == true && Symbol == true && Number == true) {
    active1.classList.toggle("active");
    active2.classList.toggle("active");
    active3.classList.toggle("active");
    active4.classList.toggle("active");
  } else if (
    (Lower == true && Upper == true && Symbol == true) ||
    (Number == true && Lower == true && Upper == true) ||
    (Number == true && Symbol == true && Upper == true) ||
    (Number == true && Symbol == true && Lower == true)
  ) {
    active1.classList.toggle("active");
    active2.classList.toggle("active");
    active3.classList.toggle("active");
  } else if (
    (Lower == true && Upper == true) ||
    (Number == true && Lower == true) ||
    (Symbol == true && Lower == true) ||
    (Number == true && Symbol == true) ||
    (Symbol == true && Upper == true) ||
    (Number == true && Upper == true)
  ) {
    active1.classList.toggle("active");
    active2.classList.toggle("active");
  } else if (
    Lower == true ||
    Number == true ||
    Symbol == true ||
    Upper == true
  ) {
    active1.classList.toggle("active");
  }

  if (typesCount === 0) {
    return "";
  }

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typeArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += Random[funcName]();
    });
  }
  const finalPass = generatedPassword.slice(0, length);
  return finalPass;
}

level.innerHTML = slider.value;
slider.oninput = function () {
  level.innerHTML = this.value;
};

function genUppercase() {
  const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return Upper[Math.floor(Math.random() * Upper.length)];
}
function genLowercase() {
  const Lower = "abcdefghijklmnopqrstuvwxyz";
  return Lower[Math.floor(Math.random() * Lower.length)];
}
function genNumbers() {
  const Nums = "0123456789";
  return Nums[Math.floor(Math.random() * Nums.length)];
}
function genSymbols() {
  const Symbols = "!@#$%^&*()<>[]{}?|-=_+/";
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}
