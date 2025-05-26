// artistTeam.js
import { artistsdata } from "./artistdata.js";

// DOM-element
const artistContainer = document.getElementById("artist-cards");
const showAllBtn = document.getElementById("show-all-artists");

let showingAll = false;
const MAX_VISIBLE = 6;

// Funktion: rendera artistkort
function renderArtists() {
  artistContainer.innerHTML = "";

  // Välj om vi visar alla eller bara 6 första
  const dataToRender = showingAll
    ? artistsdata
    : artistsdata.slice(0, MAX_VISIBLE);

  dataToRender.forEach((artist, i) => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-6 col-lg-4";

    const item = document.createElement("div");
    item.className = `team-item wow fadeInUp`;
    item.dataset.wowDelay = `${0.2 + i * 0.1}s`;

    // Om artist.img är tom eller undefined, använd lokal placeholder
    const imageSrc =
      artist.img && artist.img.trim() !== ""
        ? artist.img
        : "assets/img/team/team-01.jpg"; // Lokal fallback-bild

    item.innerHTML = `
      <div class="team-img">
        <img class="img-fluid" src="${imageSrc}" alt="${artist.name}">
        <div class="team-overlay">
          <div class="overlay-social-icon text-center">
            <ul class="social-icons">
              <li><a href="$${
                artist.social?.instagram || "#"
              }" target="_blank"><i class="lni-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="info-text">
        <h3><a href="#">${artist.name}</a></h3>
        <p>${artist.genre}</p>
      </div>
    `;

    col.appendChild(item);
    artistContainer.appendChild(col);
  });
}

// Event: klicka på "Visa alla"
showAllBtn.addEventListener("click", () => {
  showingAll = true;
  renderArtists();
  showAllBtn.style.display = "none";
});

// Init
renderArtists();
