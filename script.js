const checkbox = document.getElementById("myCheckbox");

checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    let dollars1 = (document.getElementById("dollars1").innerText = "$19.99");
    let dollars2 = (document.getElementById("dollars2").innerText = "$24.99");
    let dollars3 = (document.getElementById("dollars3").innerText = "$39.99");
  } else {
    dollars1 = document.getElementById("dollars1").innerText = "$199.99";
    dollars2 = document.getElementById("dollars2").innerText = "$249.99";
    dollars3 = document.getElementById("dollars3").innerText = "$399.99";
  }
});
