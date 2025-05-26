/**
 * Definierar en global array med artistobjekt som används för att rendera korten och spelschemat.
 * Varje objekt har:
 * – name, style, desc, time, genre, floor, img
 * – social.spotify (URL), social.instagram (handle utan @)
 * – track (embed-URL till ett representativt spår)
 * – pressImage (väg till pressbild)
 * – spotifyEmbed (embed-URL till artistprofil)
 * – ticketLink (länk till biljett)
 * venueName (ex: “Röda Rummet”)
 * venueLocation (ex: “Valand”)
 *
 * Namn: Förfest
 * Plats: Teatergatan uteservering 
 * 
 * Namn: Röda Rummet
 * Plats: Valand
 * 
 * Namn: Lilla London
 * Plats: Lilla London uteservering
 * 
 * Namn: Övre Baren
 * Plats: Valand
 * 
 * Namn: Teatergatan 
 * Plats: Teatergatan

 */

const artistsdata = [
  {
    name: "Julius",
    desc: "Afro house / Keinemusik på TG.",
    time: "21:00–22:00",
    genre: "Afro house / Keinemusik",
    venueName:"Förfest",
    venueLocation:"Teatergatan uteservering",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_JULIUS",
      instagram: "julius.dj",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_JULIUS",
    pressImage: "assets/press/julius.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_JULIUS",
  },
  {
    name: "Linnea Alfons",
    desc: "Afro house / Keinemusik på TG.",
    time: "22:00–23:00",
    genre: "Afro house / Keinemusik",
    venueName:"Förfest",
    venueLocation:"Teatergatan uteservering",

    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/linnea-alfons.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "Kevine",
    desc: "Klubbig, global, rytmisk energi i Röda rummet.",
    time: "23:00–00:00",
    genre: "Klubbig, global, rytmisk energi",
    venueName: "Röda Rummet",
    venueLocation: "Valand",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_KEVINE",
      instagram: "kevine.dj",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_KEVINE",
    pressImage: "assets/press/kevine.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_KEVINE",
  },
  {
    name: "Kim Öhman",
    desc: "Klubbig, global, rytmisk energi i Röda rummet.",
    time: "00:00–00:55",
    genre: "Klubbig, global, rytmisk energi",
    venueName: "Röda Rummet",
    venueLocation: "Valand",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_KIM",
      instagram: "kim.ohman",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_KIM",
    pressImage: "assets/press/kim-ohman.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_KIM",
    ticketLink: "#",
  },
  {
    name: "Ingrid Borås",
    desc: "Hypnotiska beats och atmosfäriska ljudlandskap i Röda rummet.",
    time: "01:10–02:00",
    genre: "Klubbig, global, rytmisk energi",
    venueName: "Röda Rummet",
    venueLocation: "Valand",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_INGRID",
      instagram: "ingrid.boras",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_INGRID",
    pressImage: "assets/press/ingrid-boras.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_INGRID",
  },
  {
    name: "Thilly & Kimya",
    desc: "Hypnotiska beats och atmosfäriska ljudlandskap i Röda rummet.",
    time: "02:00–03:00",
    genre: "Klubbig, global, rytmisk energi",
    venueName: "Röda Rummet",
    venueLocation: "Valand",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_THILLY",
      instagram: "thillyandkimya",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_THILLY",
    pressImage: "assets/press/thilly-kimya.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_THILLY",
  },
  {
    name: "Milli DJ",
    desc: "Experimentellt, mainstream, elektroniskt i Övre baren.",
    time: "23:00–00:00",
    genre: "Experimentellt, mainstream, elektroniskt",
    venueName: "Övre baren",
    venueLocation: "Valand",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_MILLI",
      instagram: "millidj",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_MILLI",
    pressImage: "assets/press/milli-dj.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_MILLI",
  },
  {
    name: "Sara Appeli",
    desc: "Experimentellt, mainstream, elektroniskt i Övre baren.",
    time: "00:00–01:00",
    genre: "Experimentellt, mainstream, elektroniskt",
    venueName: "Övre baren",
    venueLocation: "Valand",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_SARA",
      instagram: "saraappeli",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_SARA",
    pressImage: "assets/press/sara-appeli.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_SARA",
  },
  {
    name: "Danne / Arvid",
    desc: "Experimentellt, mainstream, elektroniskt i Övre baren.",
    time: "01:15–02:00",
    genre: "Experimentellt, mainstream, elektroniskt",
    venueName: "Övre baren",
    venueLocation: "Valand",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_DANNE",
      instagram: "soxcyted",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_DANNE",
    pressImage: "assets/press/danne-soxcyted.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_DANNE",
  },
  {
    name: "Benji Bastae",
    desc: "Experimentellt, mainstream, elektroniskt i Övre baren.",
    time: "02:00–03:00",
    genre: "Experimentellt, mainstream, elektroniskt",

    venueName: "Övre baren",
    venueLocation: "Valand",
    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_BENJI",
      instagram: "benjibastae",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_BENJI",
    pressImage: "assets/press/benji-bastae.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_BENJI",
  },
  {
    name: "Liv Andersson",
    desc: "Afro, baile, R&B, hiphop i Lilla London.",
    time: "23:00–00:00",
    genre: "Afro, baile, R&B, hiphop",
    venueName: "Lilla London uteservering",
    venueLocation: "Lilla London",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_LIV",
      instagram: "livandersson",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_LIV",
    pressImage: "assets/press/liv-andersson.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_LIV",
  },
  {
    name: "Makki",
    desc: "Afro, baile, R&B, hiphop i Lilla London.",
    time: "01:00–02:00",
    genre: "Afro, baile, R&B, hiphop",
    venueName: "Lilla London uteservering",
    venueLocation: "Lilla London",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_MAKKI",
      instagram: "makki.dj",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_MAKKI",
    pressImage: "assets/press/makki.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_MAKKI",
  },
  {
    name: "Kajsa Nyström",
    desc: "Afro, baile, R&B, hiphop i Lilla London.",
    time: "02:00–03:00",
    genre: "Afro, baile, R&B, hiphop",
    venueName: "Lilla London uteservering",
    venueLocation: "Lilla London",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_KAJSA",
      instagram: "kajsanystrom",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_KAJSA",
    pressImage: "assets/press/kajsa-nystrom.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_KAJSA",
  },
  {
    name: "Isabbel",
    desc: "Blandade uttryck, publikdrag på Teatergatan.",
    time: "00:00–01:00",
    genre: "Blandade uttryck, curated vibe",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan",

    img: "",
    social: {
      spotify: "#",
      instagram: "isabbel",
    },
    track: "#",
    pressImage: "assets/press/isabbel.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "DJ Schysst",
    desc: "Blandade uttryck, publikdrag på Teatergatan.",
    time: "01:00–02:00",
    genre: "Blandade uttryck, curated vibe",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan",

    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_SCHYSST",
      instagram: "dj_schysst",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_SCHYSST",
    pressImage: "assets/press/dj-schysst.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_SCHYSST",
  },
  {
    name: "DJ Mello",
    desc: "TBH",
    time: "00:15–01:00",
    genre: "TBH",
    venueName: "Lilla London uteservering",
    venueLocation: "Lilla London",
    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/interlude.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "Artistakt",
    desc: "Kort akt mellan DJs RÖDA.",
    time: "00:55–01:10",
    genre: "Interlude",
    venueName: "Röda Rummet",
    venueLocation: "Valand",
    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/interlude.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "Artistakt",
    desc: "Kort akt mellan DJs.",
    time: "01:00–01:15",
    genre: "Interlude",
    venueName: "Övre baren",
    venueLocation: "Valand",
    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/interlude.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "Artistakt",
    desc: "Kort akt mellan DJ (15min??)",
    time: "00:00–00:15",
    genre: "Interlude",
    venueName: "Lilla London uteservering",
    venueLocation: "Lilla London",
    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/interlude.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "Inner Circle DJ #1",
    desc: "TBH",
    time: "23:00–00:00",
    genre: "TBH",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan",
    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/interlude.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "Inner Circle DJ #2",
    desc: "TBH",
    time: "02:15–03:00",
    genre: "TBH",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan",
    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/interlude.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "Artistakt",
    desc: "TBH",
    time: "02:00–02:15",
    genre: "TBH",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan",
    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/interlude.jpg",
    spotifyEmbed: "#",
  },
];

export { artistsdata };