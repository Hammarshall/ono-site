// schedule.js
import { artistsdata } from "./artistdata.js";

// DOM-referenser
const tabsContainer = document.getElementById("venue-tabs");
const scheduleContainer = document.getElementById("venue-schedules");

// Skapa unika venue-grupper baserat på venueName och venueLocation
const venues = [
  ...new Set(artistsdata.map((a) => `${a.venueName}|||${a.venueLocation}`)),
].map((v) => {
  const [name, location] = v.split("|||");
  return { name, location };
});

// Skapa flikar
venues.forEach((venue, i) => {
  const tab = document.createElement("li");
  tab.className = "nav-item";

  const link = document.createElement("a");
  link.className = `nav-link ${i === 0 ? "active" : ""}`;
  link.dataset.toggle = "tab";
  link.href = `#venue-${i}`;
  link.role = "tab";
  link.innerHTML = `
    <div class="item-text">
      <h4>${venue.name}</h4>
      <h5>${venue.location}</h5>
    </div>
  `;

  tab.appendChild(link);
  tabsContainer.appendChild(tab);
});

// Skapa innehåll för varje venue-flik
venues.forEach((venue, i) => {
  const pane = document.createElement("div");
  pane.className = `tab-pane fade ${i === 0 ? "show active" : ""}`;
  pane.id = `venue-${i}`;
  pane.role = "tabpanel";

  const artistGroup = artistsdata
    .filter(
      (a) => a.venueName === venue.name && a.venueLocation === venue.location
    )
    .sort((a, b) => parseTime(a.time) - parseTime(b.time));

  const wrapper = document.createElement("div");
  wrapper.className = "accordion";

  artistGroup.forEach((artist, j) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-header">
        <div class="images-box">
          <img class="img-fluid" src="${artist.img}" alt="${artist.name}">
        </div>
        <span class="time">${artist.time}</span>
        <h4>${artist.name}</h4>
        <h5 class="name">${artist.genre}</h5>
      </div>
    `;
    wrapper.appendChild(card);
  });

  pane.appendChild(wrapper);
  scheduleContainer.appendChild(pane);
});

// Hjälpfunktion för att sortera tider korrekt
function parseTime(str) {
  const hhmm = str.split("–")[0] || str;
  const [h, m] = hhmm.split(":").map((n) => parseInt(n, 10));
  return h * 60 + m;
}
