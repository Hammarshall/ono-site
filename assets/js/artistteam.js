// artistteam.js
import { artistsdata } from "./artistdata.js";

// DOM-element
const artistContainer = document.getElementById("artist-cards");
const showAllBtn = document.getElementById("show-all-artists");

const fallbackImg = "assets/img/team/team-01.jpg"; // fallback-bild
let showingAll = false;
const MAX_VISIBLE = 6;

// Funktion: rendera artistkort
function renderArtists() {
  artistContainer.innerHTML = "";

  const dataToRender = showingAll
    ? artistsdata
    : artistsdata.slice(0, MAX_VISIBLE);

  dataToRender.forEach((artist, i) => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-6 col-lg-4";

    const item = document.createElement("div");
    item.className = "team-item wow fadeInUp";
    item.dataset.wowDelay = `${0.2 + i * 0.1}s`;

    // Använd fallback-bild om img saknas eller är tom
    const imgUrl =
      artist.img && artist.img.trim() !== "" ? artist.img : fallbackImg;

    // Om Instagram finns – skapa länk, annars döljs ikonen
    const socialLink = artist.social?.instagram || "#";
    const hasInstagram = artist.social?.instagram ? true : false;

    item.innerHTML = `
      <div class="team-img">
        <img class="img-fluid" src="${imgUrl}" alt="${artist.name}">
        <div class="team-overlay">
          <div class="overlay-social-icon text-center">
            <ul class="social-icons">
              ${
                hasInstagram
                  ? `<li><a href="${socialLink}" target="_blank"><i class="lni-instagram"></i></a></li>`
                  : ""
              }
            </ul>
          </div>
        </div>
      </div>
      <div class="info-text">
        <h3><a href="#">${artist.name}</a></h3>
        <p>${artist.genre || "TBH"}</p>
      </div>
    `;

    col.appendChild(item);
    artistContainer.appendChild(col);
  });
}

// Klick: Visa alla artister
showAllBtn.addEventListener("click", () => {
  showingAll = true;
  renderArtists();
  showAllBtn.style.display = "none";
});

// Initiering
renderArtists();
