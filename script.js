// script.js
(() => {
  const input = document.getElementById("commandInput");
  const output = document.getElementById("output");
  const ACCESS_CODE = "ono2025"; // byt vid behov
  const REDIRECT_URL = "home.html";
  const REDIRECT_DELAY = 1500; // ms

  function appendLine(text, cssClass = "terminal-line") {
    const div = document.createElement("div");
    div.textContent = text;
    div.classList.add(cssClass);
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const cmd = input.value.trim();
    if (!cmd) return;
    input.value = "";

    appendLine(`> ${cmd}`);

    if (cmd === ACCESS_CODE) {
      appendLine("Access granted. Redirecting...", "terminal-success");
      setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, REDIRECT_DELAY);
    } else {
      appendLine("ERROR: Invalid code.", "terminal-error");
    }
  });
})();
