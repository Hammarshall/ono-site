// ► Importera artistdata (ESM-import)

import { artistsdata } from "./artistdata.js";

// ► Hämta DOM-referenser
const venueTabList = document.getElementById("venueTabList");
const venueHeadline = document.getElementById("venueHeadline");
const venueOutput = document.getElementById("venueOutput");

// ► Extrahera unika venues (kombinerat namn + plats)
const uniqueVenues = [
  ...new Map(
    artistsdata.map((artist) => [
      `${artist.venueName}|${artist.venueLocation}`,
      { venueName: artist.venueName, venueLocation: artist.venueLocation },
    ])
  ).values(),
];

// ► Skapa tabb-menyn dynamiskt från venues
function buildVenueTabs() {
  uniqueVenues.forEach((venue, index) => {
    const li = document.createElement("li");
    li.className = "nav-item";
    li.innerHTML = `
      <a class="nav-link ${index === 0 ? "active" : ""}"
         href="#"
         data-venue-name="${venue.venueName}"
         data-venue-location="${venue.venueLocation}">
        <div class="item-text">
          <h4>${venue.venueName}</h4>
          <h5>${venue.venueLocation}</h5>
        </div>
      </a>
    `;
    venueTabList.appendChild(li);
  });
}

// ► Rendera artistkort baserat på valt venue
function renderArtists(venueName, venueLocation) {
  venueHeadline.innerHTML = `
    <h3>${venueName}</h3>
    <h5>${venueLocation}</h5>
  `;

  // Filtrera artister per venue och sortera efter starttid
  const filtered = artistsdata
    .filter(
      (artist) =>
        artist.venueName === venueName && artist.venueLocation === venueLocation
    )
    .sort((a, b) => parseTime(a.time) - parseTime(b.time));

  venueOutput.innerHTML = "";

  filtered.forEach((artist) => {
    const card = document.createElement("div");
    card.className = "card artist-card mb-4";
    card.innerHTML = `
      <div class="card-body">
        <span class="badge badge-dark mb-2 d-block">${artist.time}</span>
        <h4 class="font-weight-bold">${artist.name}</h4>
        <img src="${artist.img}" alt="${artist.name}" class="img-fluid my-2">
        <p class="genre text-muted">${artist.genre}</p>
      </div>
    `;
    venueOutput.appendChild(card);
  });
}

// ► Konvertera starttid ("HH:MM–HH:MM") till minuter sedan midnatt
function parseTime(timeRange) {
  const start = timeRange.split("–")[0];
  const [hours, minutes] = start.split(":").map(Number);
  return hours * 60 + minutes;
}

// ► Event delegation för menyval
venueTabList.addEventListener("click", (event) => {
  const link = event.target.closest("a.nav-link");
  if (!link) return;
  event.preventDefault();

  // Uppdatera active-klass
  document
    .querySelectorAll("#venueTabList .nav-link")
    .forEach((el) => el.classList.remove("active"));
  link.classList.add("active");

  // Rendera nytt innehåll
  const venueName = link.dataset.venueName;
  const venueLocation = link.dataset.venueLocation;
  renderArtists(venueName, venueLocation);
});

// ► Initiera schemat
buildVenueTabs();
if (uniqueVenues.length > 0) {
  renderArtists(uniqueVenues[0].venueName, uniqueVenues[0].venueLocation);
}
