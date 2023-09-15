const inn = document.querySelector("input");
let a=document.getElementById("letterCount");
inn.addEventListener("input", updateValue);

function updateValue(e) {
console.log( e.target.value.length);
	
  a.textContent = e.target.value.length;
}