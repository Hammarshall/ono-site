// schedule.js
import { artistsdata } from "./artistdata.js";

// ▼ DOM-referenser
const tabsContainer = document.getElementById("venue-tabs");
const scheduleContainer = document.getElementById("venue-schedules");

// ▼ Standardbild om artist saknar bild
const fallbackImage = "assets/img/speaker/speakers-2.jpg";

// ▼ Steg 1: Skapa unika venue-flikar baserat på venueName + venueLocation
const venues = [
  ...new Set(artistsdata.map((a) => `${a.venueName}|||${a.venueLocation}`)),
].map((v) => {
  const [name, location] = v.split("|||");
  return { name, location };
});

// ▼ Steg 2: Skapa navigeringsflikar för varje unikt venue
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

// ▼ Steg 3: Skapa varje innehållspanel med artister för respektive flik
venues.forEach((venue, i) => {
  const pane = document.createElement("div");
  pane.className = `tab-pane fade ${i === 0 ? "show active" : ""}`;
  pane.id = `venue-${i}`;
  pane.role = "tabpanel";

  const artistGroup = artistsdata
    .filter(
      (a) => a.venueName === venue.name && a.venueLocation === venue.location
    )
    .sort((a, b) => parseTime(a.startTime) - parseTime(b.startTime)); // sortera efter tid

  const wrapper = document.createElement("div");
  wrapper.className = "accordion";

  // ▼ Skapa artistkort
  artistGroup.forEach((artist, j) => {
    const card = document.createElement("div");
    card.className = "card";

    const artistImg = artist.img?.trim() ? artist.img : fallbackImage;

    card.innerHTML = `
      <div class="card-header">
        <div class="images-box">
          <img class="img-fluid" src="${artistImg}" alt="${artist.name}">
        </div>
        <span class="time">${artist.startTime}–${artist.endTime}</span>
        <h4>${artist.name}</h4>
        <h5 class="name">${artist.genre}</h5>
      </div>
    `;
    wrapper.appendChild(card);
  });

  pane.appendChild(wrapper);
  scheduleContainer.appendChild(pane);
});

// ▼ Hjälpfunktion: konvertera "hh:mm" till minuter sedan midnatt (för sortering)
// ▼ Hjälpfunktion: konvertera "hh:mm" till minuter sedan midnatt (för sortering)
function parseTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  // Tider mellan 00:00 och 09:59 räknas som efter midnatt
  if (h < 10) return (h + 24) * 60 + m;
  return h * 60 + m;
}