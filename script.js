const inn = document.querySelector("input");
let a=document.getElementById("letterCount");
inn.addEventListener("input", updateValue);

function updateValue(e) {	
  a.textContent = e.target.value.length;
}