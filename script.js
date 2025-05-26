// script.js

document
  .getElementById("commandInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const val = e.target.value.trim().toLowerCase();
      const output = document.getElementById("output");

      if (val === "ono") {
        output.innerHTML += `> Access granted. Redirecting...<br>`;
        setTimeout(() => {
          window.location.href = "home.html"; // Byt till din riktiga sida
        }, 1000);
      } else {
        output.innerHTML += `> Error: Invalid access code.<br>`;
        e.target.value = "";
      }
    }
  });
