// script.js

const input = document.getElementById("commandInput");
const output = document.getElementById("output");

// Ange rätt kod här
const ACCESS_CODE = "ono2025";

// Funktion som hanterar inmatning
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const value = input.value.trim();
    input.value = ""; // töm input

    // Visa input som terminaltext
    const line = document.createElement("div");
    line.textContent = `> ${value}`;
    output.appendChild(line);

    // Kontrollera kod
    if (value === ACCESS_CODE) {
      const success = document.createElement("div");
      success.textContent = "Access granted. Redirecting...";
      output.appendChild(success);
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1500);
    } else {
      const error = document.createElement("div");
      error.textContent = "ERROR: Invalid code.";
      error.style.color = "#ff0040";
      error.style.textShadow = "0 0 6px #ff0040";
      output.appendChild(error);
    }

    // Scrolla till botten
    output.scrollTop = output.scrollHeight;
  }
});
