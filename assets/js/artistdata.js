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
    name: "Julius Cesar",
    desc: "Afro house / Keinemusik på TG.",
    startTime: "22:00",
    endTime: "22:55",
    genre: "Afro house / Keinemusik",
    venueName: "Förfest",
    venueLocation: "Teatergatan uteservering",

    img: "assets/img/Djs/Julius-Cesar/Julius-Cesar1.jpg",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_JULIUS",
      instagram: "julius.dj",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_JULIUS",
    pressImage: "assets/press/julius.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_JULIUS",
  },
  {
    name: "DJ Lau",
    desc: "Kort besk artist",
    startTime: "21:00",
    endTime: "21:45",
    genre: "Afro house / Keinemusik",
    venueName: "Förfest",
    venueLocation: "Teatergatan uteservering",

    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "#",
    spotifyEmbed: "#",
  },
  {
    name: "Philip Antoni",
    desc: "Besk artist",
    startTime: "21:45",
    endTime: "22:00",
    genre: "Afro house / Keinemusik",
    venueName: "Förfest",
    venueLocation: "Teatergatan uteservering",

    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "#",
    spotifyEmbed: "#",
  },
  {
    name: "Tjuvjakt",
    desc: "Besk artist",
    startTime: "22:45",
    endTime: "23:05",
    genre: "Afro house / Keinemusik",
    venueName: "Förfest",
    venueLocation: "Teatergatan uteservering",

    img: "",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "#",
    spotifyEmbed: "#",
  },
  {
    name: "Kevine Nkounga",
    desc: "Besk.",
    startTime: "23:00",
    endTime: "00:00",
    genre: "Klubbig, global, rytmisk energi",
    venueName: "Röda Rummet",
    venueLocation: "Valand",

    img: "assets/img/Djs/Kevine/Kevine1.jpeg",
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
    desc: "Besk",
    startTime: "00:00",
    endTime: "01:00",
    genre: "Klubbig, global, rytmisk energi",
    venueName: "Röda Rummet",
    venueLocation: "Valand",

    img: "assets/img/Djs/Kim-Öhman/Kim-Öhman2.JPG",
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
    name: "Thilly & Kimya",
    desc: "Hypnotiska beats och atmosfäriska ljudlandskap i Röda rummet.",
    startTime: "02:00",
    endTime: "03:00",
    genre: "Klubbig, global, rytmisk energi",
    venueName: "Röda Rummet",
    venueLocation: "Valand",

    img: "assets/img/Djs/ThillyKimya/ThillyKimya1.jpg",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_THILLY",
      instagram: "thillyandkimya",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_THILLY",
    pressImage: "assets/press/thilly-kimya.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_THILLY",
  },
  {
    name: "DJ Alexi",
    desc: "BESK.",
    startTime: "01:00",
    endTime: "02:00",
    genre: "Klubbig, global, rytmisk energi",
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
    name: "William Husmark",
    desc: "BESK.",
    startTime: "23:00",
    endTime: "00:00",
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
    startTime: "00:00",
    endTime: "01:00",
    genre: "Experimentellt, mainstream, elektroniskt",
    venueName: "Övre baren",
    venueLocation: "Valand",

    img: "assets/img/Djs/Sara-Appeli/Sara-Appeli1.jpeg",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_SARA",
      instagram: "saraappeli",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_SARA",
    pressImage: "assets/press/sara-appeli.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_SARA",
  },
  {
    name: "DJ 6rv1d",
    desc: "BESK",
    startTime: "01:00",
    endTime: "02:00",
    genre: "Experimentellt, mainstream, elektroniskt",
    venueName: "Övre baren",
    venueLocation: "Valand",

    img: "assets/img/Djs/DJ-6rv1d/DJ-6rv1d1.jpg",
    social: {
      spotify: "",
      instagram: "soxcyted",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_DANNE",
    pressImage: "assets/press/danne-soxcyted.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_DANNE",
  },
  {
    name: "Benjamin Baniassadi",
    desc: "Experimentellt, mainstream, elektroniskt i Övre baren.",
    startTime: "02:00",
    endTime: "03:00",
    genre: "Experimentellt, mainstream, elektroniskt",

    venueName: "Övre baren",
    venueLocation: "Valand",
    img: "",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_BENJI",
      instagram: "",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_BENJI",
    pressImage: "assets/press/benji-bastae.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_BENJI",
  },
  {
    name: "Liv Andersson",
    desc: "Besk",
    startTime: "23:00",
    endTime: "23:55",
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
    name: "Paulina",
    desc: "Kort akt mellan DJ",
    startTime: "23:55",
    endTime: "00:10",
    genre: "Artist",
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
    name: "DJ Mellow",
    desc: "TBH",
    startTime: "00:10",
    endTime: "01:00",
    genre: "TBH",
    venueName: "Lilla London uteservering",
    venueLocation: "Lilla London",
    img: "assets/img/Djs/DJ-Mellow/Dj-Mellow1.jpg",
    social: {
      spotify: "#",
      instagram: "#",
    },
    track: "#",
    pressImage: "assets/press/interlude.jpg",
    spotifyEmbed: "#",
  },
  {
    name: "Dj Mäckyy",
    desc: "Afro, baile, R&B, hiphop i Lilla London.",
    startTime: "01:00",
    endTime: "02:00",
    genre: "Afro, baile, R&B, hiphop",
    venueName: "Lilla London uteservering",
    venueLocation: "Lilla London",

    img: "assets/img/Djs/DJ-Mäckyy/Dj-Mäckyy1.png",
    social: {
      spotify: "https://open.spotify.com/artist/ARTIST_ID_MAKKI",
      instagram: "makki.dj",
    },
    track: "https://open.spotify.com/embed/track/TRACK_ID_MAKKI",
    pressImage: "assets/press/makki.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/artist/ARTIST_ID_MAKKI",
  },
  {
    name: "DJ Andy",
    desc: "Afro, baile, R&B, hiphop i Lilla London.",
    startTime: "02:00",
    endTime: "03:00",
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
    name: "DJ Schysst",
    desc: "Blandade uttryck, publikdrag på Teatergatan.",
    startTime: "23:00",
    endTime: "00:00",
    genre: "Blandade uttryck, curated vibe",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan - Inomhus",

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
    name: "DJ Sunraid",
    desc: "BESK",
    startTime: "00:00",
    endTime: "00:55",
    genre: "TBH",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan - Inomhus",
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
    name: "FAAKA",
    desc: "Artist",
    startTime: "00:55",
    endTime: "01:10",
    genre: "Artist",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan - Inomhus",
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
    name: "SOXCYTED",
    desc: "Besk",
    startTime: "01:10",
    endTime: "02:00",
    genre: "genre",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan - Inomhus",
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
    name: "IssaGirl",
    desc: "Besk",
    startTime: "02:00",
    endTime: "03:00",
    genre: "genre",
    venueName: "Teatergatan",
    venueLocation: "Teatergatan - Inomhus",
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