// Original Swedish communication-board seed. Copy these values before editing.
const freezeSeed = value => {
  if (value && typeof value === 'object') {
    Object.values(value).forEach(freezeSeed);
    Object.freeze(value);
  }
  return value;
};

export const SYMBOLS = freezeSeed([
  {
    "id": "apple",
    "label": "Äpple",
    "sheet": "objects",
    "index": 0
  },
  {
    "id": "milk",
    "label": "Mjölk",
    "sheet": "objects",
    "index": 1
  },
  {
    "id": "sandwich",
    "label": "Smörgås",
    "sheet": "objects",
    "index": 2
  },
  {
    "id": "water",
    "label": "Vatten",
    "sheet": "objects",
    "index": 3
  },
  {
    "id": "coffee",
    "label": "Kaffe",
    "sheet": "objects",
    "index": 4
  },
  {
    "id": "banana",
    "label": "Banan",
    "sheet": "objects",
    "index": 5
  },
  {
    "id": "meal",
    "label": "Mat",
    "sheet": "objects",
    "index": 6
  },
  {
    "id": "icecream",
    "label": "Glass",
    "sheet": "objects",
    "index": 7
  },
  {
    "id": "home",
    "label": "Hemma",
    "sheet": "objects",
    "index": 8
  },
  {
    "id": "school",
    "label": "Skola",
    "sheet": "objects",
    "index": 9
  },
  {
    "id": "tree",
    "label": "Träd",
    "sheet": "objects",
    "index": 10
  },
  {
    "id": "car",
    "label": "Bil",
    "sheet": "objects",
    "index": 11
  },
  {
    "id": "bus",
    "label": "Buss",
    "sheet": "objects",
    "index": 12
  },
  {
    "id": "ball",
    "label": "Boll",
    "sheet": "objects",
    "index": 13
  },
  {
    "id": "book",
    "label": "Bok",
    "sheet": "objects",
    "index": 14
  },
  {
    "id": "bed",
    "label": "Säng",
    "sheet": "objects",
    "index": 15
  },
  {
    "id": "self",
    "label": "Jag",
    "sheet": "people",
    "index": 0
  },
  {
    "id": "heart",
    "label": "Tycka om",
    "sheet": "people",
    "index": 1
  },
  {
    "id": "have",
    "label": "Ha",
    "sheet": "people",
    "index": 2
  },
  {
    "id": "want",
    "label": "Jag vill ha",
    "sheet": "want",
    "index": 0,
    "single": true
  },
  {
    "id": "happy",
    "label": "Glad",
    "sheet": "people",
    "index": 3
  },
  {
    "id": "sad",
    "label": "Ledsen",
    "sheet": "people",
    "index": 4
  },
  {
    "id": "angry",
    "label": "Arg",
    "sheet": "people",
    "index": 5
  },
  {
    "id": "tired",
    "label": "Trött",
    "sheet": "people",
    "index": 6
  },
  {
    "id": "worried",
    "label": "Orolig",
    "sheet": "people",
    "index": 7
  },
  {
    "id": "family",
    "label": "Familj",
    "sheet": "people",
    "index": 8
  },
  {
    "id": "woman",
    "label": "Kvinna",
    "sheet": "people",
    "index": 9
  },
  {
    "id": "man",
    "label": "Man",
    "sheet": "people",
    "index": 10
  },
  {
    "id": "child",
    "label": "Barn",
    "sheet": "people",
    "index": 11
  },
  {
    "id": "wave",
    "label": "Hej",
    "sheet": "people",
    "index": 12
  },
  {
    "id": "yes",
    "label": "Ja",
    "sheet": "people",
    "index": 13
  },
  {
    "id": "stop",
    "label": "Stopp",
    "sheet": "people",
    "index": 14
  },
  {
    "id": "toilet",
    "label": "Toalett",
    "sheet": "people",
    "index": 15
  },
  {
    "id": "sun",
    "label": "Sol",
    "sheet": "activities",
    "index": 0
  },
  {
    "id": "rain",
    "label": "Regn",
    "sheet": "activities",
    "index": 1
  },
  {
    "id": "snow",
    "label": "Snö",
    "sheet": "activities",
    "index": 2
  },
  {
    "id": "calendar",
    "label": "Kalender",
    "sheet": "activities",
    "index": 3
  },
  {
    "id": "dog",
    "label": "Hund",
    "sheet": "activities",
    "index": 4
  },
  {
    "id": "cat",
    "label": "Katt",
    "sheet": "activities",
    "index": 5
  },
  {
    "id": "cow",
    "label": "Ko",
    "sheet": "activities",
    "index": 6
  },
  {
    "id": "bird",
    "label": "Fågel",
    "sheet": "activities",
    "index": 7
  },
  {
    "id": "walk",
    "label": "Promenad",
    "sheet": "activities",
    "index": 8
  },
  {
    "id": "swim",
    "label": "Simma",
    "sheet": "activities",
    "index": 9
  },
  {
    "id": "work",
    "label": "Arbeta",
    "sheet": "activities",
    "index": 10
  },
  {
    "id": "play",
    "label": "Leka",
    "sheet": "activities",
    "index": 11
  },
  {
    "id": "mail",
    "label": "Meddelande",
    "sheet": "activities",
    "index": 12
  },
  {
    "id": "list",
    "label": "Lista",
    "sheet": "activities",
    "index": 13
  },
  {
    "id": "tea",
    "label": "Te",
    "sheet": "activities",
    "index": 14
  },
  {
    "id": "schedule",
    "label": "Schema",
    "sheet": "activities",
    "index": 15
  },
  {
    "id": "curious",
    "label": "Nyfiken",
    "sheet": "emotions-extra",
    "index": 0
  },
  {
    "id": "afraid",
    "label": "Rädd",
    "sheet": "emotions-extra",
    "index": 1
  },
  {
    "id": "unsure",
    "label": "Vet inte",
    "sheet": "emotions-extra",
    "index": 2
  },
  {
    "id": "frustrated",
    "label": "Frustrerad",
    "sheet": "emotions-extra",
    "index": 3
  },
  {
    "id": "embarrassed",
    "label": "Pinsamt",
    "sheet": "emotions-extra",
    "index": 4
  },
  {
    "id": "disgust",
    "label": "Äckla",
    "sheet": "emotions-extra",
    "index": 5
  },
  {
    "id": "understand",
    "label": "Förstår",
    "sheet": "emotions-extra",
    "index": 6
  },
  {
    "id": "cannot",
    "label": "Kan inte",
    "sheet": "emotions-extra",
    "index": 7
  },
  {
    "id": "satisfied",
    "label": "Nöjd",
    "sheet": "emotions-extra",
    "index": 8
  },
  {
    "id": "sulky",
    "label": "Sur",
    "sheet": "emotions-extra",
    "index": 9
  },
  {
    "id": "idea",
    "label": "Idé",
    "sheet": "emotions-extra",
    "index": 10
  },
  {
    "id": "stuck",
    "label": "Jag kan inte släppa det",
    "sheet": "emotions-extra",
    "index": 11
  },
  {
    "id": "sorry",
    "label": "Säg förlåt",
    "sheet": "emotions-extra",
    "index": 12
  },
  {
    "id": "help",
    "label": "Hjälp",
    "sheet": "emotions-extra",
    "index": 13
  },
  {
    "id": "join",
    "label": "Får jag vara med",
    "sheet": "emotions-extra",
    "index": 14
  },
  {
    "id": "talk",
    "label": "Berätta",
    "sheet": "emotions-extra",
    "index": 15
  },
  {
    "id": "staff-home",
    "label": "Personal hemma",
    "sheet": "daily-extra",
    "index": 0
  },
  {
    "id": "staff-work",
    "label": "Personal jobb",
    "sheet": "daily-extra",
    "index": 1
  },
  {
    "id": "goods-board",
    "label": "Bildstöd varor",
    "sheet": "daily-extra",
    "index": 2
  },
  {
    "id": "weekend",
    "label": "Helgschema",
    "sheet": "daily-extra",
    "index": 3
  },
  {
    "id": "menu",
    "label": "Matsedel",
    "sheet": "daily-extra",
    "index": 4
  },
  {
    "id": "question",
    "label": "Fråga",
    "sheet": "daily-extra",
    "index": 5
  },
  {
    "id": "know",
    "label": "Veta",
    "sheet": "daily-extra",
    "index": 6
  },
  {
    "id": "how",
    "label": "Hur",
    "sheet": "daily-extra",
    "index": 7
  },
  {
    "id": "with-whom",
    "label": "Med vem",
    "sheet": "daily-extra",
    "index": 8
  },
  {
    "id": "visual-support",
    "label": "Bildstöd",
    "sheet": "daily-extra",
    "index": 9
  },
  {
    "id": "activity",
    "label": "Aktivitet",
    "sheet": "daily-extra",
    "index": 10
  },
  {
    "id": "cleaning",
    "label": "Städschema",
    "sheet": "daily-extra",
    "index": 11
  },
  {
    "id": "what",
    "label": "Vad",
    "sheet": "daily-extra",
    "index": 12
  },
  {
    "id": "why",
    "label": "Varför",
    "sheet": "daily-extra",
    "index": 13
  },
  {
    "id": "yesterday",
    "label": "Igår",
    "sheet": "daily-extra",
    "index": 14
  },
  {
    "id": "tomorrow",
    "label": "I morgon",
    "sheet": "daily-extra",
    "index": 15
  },
  {
    "id": "injection",
    "label": "Spruta",
    "sheet": "care-extra",
    "index": 0
  },
  {
    "id": "dentist",
    "label": "Laga tand",
    "sheet": "care-extra",
    "index": 1
  },
  {
    "id": "not-understand",
    "label": "Förstår inte",
    "sheet": "care-extra",
    "index": 2
  },
  {
    "id": "ask-help",
    "label": "Be om hjälp",
    "sheet": "care-extra",
    "index": 3
  },
  {
    "id": "spit",
    "label": "Spottade",
    "sheet": "care-extra",
    "index": 4
  },
  {
    "id": "pinch",
    "label": "Nypa",
    "sheet": "care-extra",
    "index": 5
  },
  {
    "id": "quarrel",
    "label": "Bråkade",
    "sheet": "care-extra",
    "index": 6
  },
  {
    "id": "imitate",
    "label": "Härmade",
    "sheet": "care-extra",
    "index": 7
  },
  {
    "id": "choke",
    "label": "Strypa",
    "sheet": "care-extra",
    "index": 8
  },
  {
    "id": "plastic",
    "label": "Plast",
    "sheet": "care-extra",
    "index": 9
  },
  {
    "id": "pain",
    "label": "Ont",
    "sheet": "care-extra",
    "index": 10
  },
  {
    "id": "nurse",
    "label": "Sjuksköterska",
    "sheet": "care-extra",
    "index": 11
  },
  {
    "id": "doctor",
    "label": "Doktor",
    "sheet": "care-extra",
    "index": 12
  },
  {
    "id": "dizzy",
    "label": "Yr",
    "sheet": "care-extra",
    "index": 13
  },
  {
    "id": "ear",
    "label": "Öra",
    "sheet": "care-extra",
    "index": 14
  },
  {
    "id": "pulse",
    "label": "Puls",
    "sheet": "care-extra",
    "index": 15
  },
  {
    "id": "ice-rink",
    "label": "Ishall",
    "sheet": "places-extra",
    "index": 0
  },
  {
    "id": "bowling",
    "label": "Bowling",
    "sheet": "places-extra",
    "index": 1
  },
  {
    "id": "exercise",
    "label": "Träna",
    "sheet": "places-extra",
    "index": 2
  },
  {
    "id": "compete",
    "label": "Tävla",
    "sheet": "places-extra",
    "index": 3
  },
  {
    "id": "cycle",
    "label": "Cykla",
    "sheet": "places-extra",
    "index": 4
  },
  {
    "id": "sea",
    "label": "Havet",
    "sheet": "places-extra",
    "index": 5
  },
  {
    "id": "town",
    "label": "Stan",
    "sheet": "places-extra",
    "index": 6
  },
  {
    "id": "malmo",
    "label": "Malmö",
    "sheet": "places-extra",
    "index": 7
  },
  {
    "id": "pizza",
    "label": "Pizza",
    "sheet": "places-extra",
    "index": 8
  },
  {
    "id": "fruit",
    "label": "Frukt",
    "sheet": "places-extra",
    "index": 9
  },
  {
    "id": "phone",
    "label": "Telefon",
    "sheet": "places-extra",
    "index": 10
  },
  {
    "id": "tablet",
    "label": "Ipad",
    "sheet": "places-extra",
    "index": 11
  },
  {
    "id": "park",
    "label": "Park",
    "sheet": "places-extra",
    "index": 12
  },
  {
    "id": "mall",
    "label": "Valen",
    "sheet": "places-extra",
    "index": 13
  },
  {
    "id": "mother",
    "label": "Mamma",
    "sheet": "places-extra",
    "index": 14
  },
  {
    "id": "father",
    "label": "Pappa",
    "sheet": "places-extra",
    "index": 15
  },
  {
    "id": "helg",
    "label": "Helg",
    "sheet": "helg",
    "index": 0,
    "single": true
  },
  {
    "id": "semester",
    "label": "Semester",
    "sheet": "semester",
    "index": 0,
    "single": true
  },
  {
    "id": "chef-boende",
    "label": "Chef boende",
    "sheet": "chef-boende",
    "index": 0,
    "single": true
  },
  {
    "id": "chef-dv",
    "label": "Chef DV",
    "sheet": "chef-dv",
    "index": 0,
    "single": true
  },
  {
    "id": "god-man",
    "label": "God man",
    "sheet": "god-man",
    "index": 0,
    "single": true
  },
  {
    "id": "wait",
    "label": "Vänta",
    "sheet": "v10-wait",
    "index": 0,
    "single": true
  },
  {
    "id": "listen",
    "label": "Lyssna",
    "sheet": "v10-listen",
    "index": 0,
    "single": true
  },
  {
    "id": "free",
    "label": "Ledig",
    "sheet": "v10-free",
    "index": 0,
    "single": true
  },
  {
    "id": "mother-alone",
    "label": "Mamma",
    "sheet": "v10-mother",
    "index": 0,
    "single": true
  },
  {
    "id": "father-alone",
    "label": "Pappa",
    "sheet": "v10-father",
    "index": 0,
    "single": true
  },
  {
    "id": "you",
    "label": "Du",
    "sheet": "v10-you",
    "index": 0,
    "single": true
  },
  {
    "id": "question-mark",
    "label": "Frågetecken",
    "sheet": "v10-question",
    "index": 0,
    "single": true
  },
  {
    "id": "gympa",
    "label": "Gympa",
    "sheet": "v10-gympa",
    "index": 0,
    "single": true
  },
  {
    "id": "dv",
    "label": "DV",
    "sheet": "v10-dv",
    "index": 0,
    "single": true
  },
  {
    "id": "taxi",
    "label": "Taxi",
    "sheet": "v10-taxi",
    "index": 0,
    "single": true
  },
  {
    "id": "restaurant",
    "label": "Restaurang",
    "sheet": "v10-restaurant",
    "index": 0,
    "single": true
  },
  {
    "id": "emotion-curious",
    "label": "Nyfiken",
    "sheet": "emotion-curious-v11",
    "index": 0,
    "single": true
  },
  {
    "id": "emotion-afraid",
    "label": "Rädd",
    "sheet": "emotion-heads-v10",
    "index": 1
  },
  {
    "id": "emotion-unsure",
    "label": "Vet inte",
    "sheet": "emotion-unsure-v11",
    "index": 0,
    "single": true
  },
  {
    "id": "emotion-frustrated",
    "label": "Frustrerad",
    "sheet": "emotion-heads-v10",
    "index": 3
  },
  {
    "id": "emotion-embarrassed",
    "label": "Pinsamt",
    "sheet": "emotion-heads-v10",
    "index": 4
  },
  {
    "id": "emotion-disgust",
    "label": "Äckla",
    "sheet": "emotion-heads-v10",
    "index": 5
  },
  {
    "id": "emotion-satisfied",
    "label": "Nöjd",
    "sheet": "emotion-heads-v10",
    "index": 6
  },
  {
    "id": "emotion-sulky",
    "label": "Sur",
    "sheet": "emotion-heads-v10",
    "index": 7
  },
  {
    "id": "emotion-worried",
    "label": "Orolig",
    "sheet": "emotion-heads-v10",
    "index": 8
  },
  {
    "id": "emotion-heart",
    "label": "Tycker om",
    "sheet": "emotion-heads-v10",
    "index": 9
  },
  {
    "id": "emotion-happy",
    "label": "Glad",
    "sheet": "emotion-heads-v10",
    "index": 10
  },
  {
    "id": "emotion-sad",
    "label": "Ledsen",
    "sheet": "emotion-heads-v10",
    "index": 11
  },
  {
    "id": "emotion-angry",
    "label": "Arg",
    "sheet": "emotion-heads-v10",
    "index": 12
  },
  {
    "id": "emotion-idea",
    "label": "Idé",
    "sheet": "emotion-idea-v11",
    "index": 0,
    "single": true
  },
  {
    "id": "alphabet",
    "label": "Bokstäver",
    "glyph": "ABC"
  },
  {
    "id": "letter-01",
    "label": "A",
    "glyph": "A"
  },
  {
    "id": "letter-02",
    "label": "B",
    "glyph": "B"
  },
  {
    "id": "letter-03",
    "label": "C",
    "glyph": "C"
  },
  {
    "id": "letter-04",
    "label": "D",
    "glyph": "D"
  },
  {
    "id": "letter-05",
    "label": "E",
    "glyph": "E"
  },
  {
    "id": "letter-06",
    "label": "F",
    "glyph": "F"
  },
  {
    "id": "letter-07",
    "label": "G",
    "glyph": "G"
  },
  {
    "id": "letter-08",
    "label": "H",
    "glyph": "H"
  },
  {
    "id": "letter-09",
    "label": "I",
    "glyph": "I"
  },
  {
    "id": "letter-10",
    "label": "J",
    "glyph": "J"
  },
  {
    "id": "letter-11",
    "label": "K",
    "glyph": "K"
  },
  {
    "id": "letter-12",
    "label": "L",
    "glyph": "L"
  },
  {
    "id": "letter-13",
    "label": "M",
    "glyph": "M"
  },
  {
    "id": "letter-14",
    "label": "N",
    "glyph": "N"
  },
  {
    "id": "letter-15",
    "label": "O",
    "glyph": "O"
  },
  {
    "id": "letter-16",
    "label": "P",
    "glyph": "P"
  },
  {
    "id": "letter-17",
    "label": "Q",
    "glyph": "Q"
  },
  {
    "id": "letter-18",
    "label": "R",
    "glyph": "R"
  },
  {
    "id": "letter-19",
    "label": "S",
    "glyph": "S"
  },
  {
    "id": "letter-20",
    "label": "T",
    "glyph": "T"
  },
  {
    "id": "letter-21",
    "label": "U",
    "glyph": "U"
  },
  {
    "id": "letter-22",
    "label": "V",
    "glyph": "V"
  },
  {
    "id": "letter-23",
    "label": "W",
    "glyph": "W"
  },
  {
    "id": "letter-24",
    "label": "X",
    "glyph": "X"
  },
  {
    "id": "letter-25",
    "label": "Y",
    "glyph": "Y"
  },
  {
    "id": "letter-26",
    "label": "Z",
    "glyph": "Z"
  },
  {
    "id": "letter-27",
    "label": "Å",
    "glyph": "Å"
  },
  {
    "id": "letter-28",
    "label": "Ä",
    "glyph": "Ä"
  },
  {
    "id": "letter-29",
    "label": "Ö",
    "glyph": "Ö"
  },
  {
    "id": "apology",
    "label": "Förlåt",
    "sheet": "v12-sorry",
    "index": 0,
    "single": true
  },
  {
    "id": "correct",
    "label": "Rätt",
    "sheet": "v12-correct",
    "index": 0,
    "single": true
  },
  {
    "id": "wrong",
    "label": "Fel",
    "sheet": "v12-wrong",
    "index": 0,
    "single": true
  },
  {
    "id": "health-body",
    "label": "Hälsa och kropp",
    "sheet": "v12-health-body",
    "index": 0,
    "single": true
  },
  {
    "id": "people-support",
    "label": "Personer och stöd",
    "sheet": "v12-people-support",
    "index": 0,
    "single": true
  }
]);

export const DEFAULT_BOARDS = freezeSeed([
  {
    "id": "kommunikation-a",
    "title": "Kommunikation",
    "symbol": "self",
    "columns": 4,
    "rows": 5,
    "messageBar": true,
    "showOnHome": true,
    "color": "#d6e6ee",
    "cells": [
      {
        "id": "yn-yes",
        "label": "Ja",
        "symbol": "yes",
        "speech": "Ja",
        "color": "#b7da95"
      },
      {
        "id": "yn-no",
        "label": "Nej",
        "symbol": "stop",
        "speech": "Nej",
        "color": "#ed9c98"
      },
      {
        "id": "a-want",
        "label": "Jag vill",
        "symbol": "self",
        "color": "#fff1ba"
      },
      {
        "id": "a-not-want",
        "label": "Jag vill inte",
        "symbol": "stop",
        "color": "#fff1ba"
      },
      {
        "id": "a-like",
        "label": "Jag gillar",
        "symbol": "heart",
        "color": "#fff1ba"
      },
      {
        "id": "a-not-like",
        "label": "Jag gillar inte",
        "symbol": "sad",
        "color": "#fff1ba"
      },
      {
        "id": "a-have",
        "label": "Jag har",
        "symbol": "have",
        "color": "#fff1ba"
      },
      {
        "id": "a-want-have",
        "label": "Jag vill ha",
        "symbol": "want",
        "color": "#fff1ba"
      },
      {
        "id": "a-am",
        "label": "Jag är",
        "symbol": "self",
        "color": "#fff1ba"
      },
      {
        "id": "b-help",
        "label": "Hjälp mig",
        "symbol": "have",
        "speech": "Kan du hjälpa mig?"
      },
      {
        "id": "b-stop",
        "label": "Stopp",
        "symbol": "stop"
      },
      {
        "id": "communication-helg",
        "label": "Helg",
        "symbol": "helg",
        "speech": "Helg"
      },
      {
        "id": "communication-semester",
        "label": "Ledig",
        "symbol": "free",
        "speech": "Ledig"
      },
      {
        "id": "communication-wait",
        "label": "Vänta",
        "symbol": "wait",
        "speech": "Vänta"
      },
      {
        "id": "communication-listen",
        "label": "Lyssna",
        "symbol": "listen",
        "speech": "Lyssna"
      },
      {
        "id": "communication-sorry",
        "label": "Förlåt",
        "symbol": "apology",
        "speech": "Förlåt",
        "color": "#d6e6ee"
      },
      {
        "id": "communication-correct",
        "label": "Rätt",
        "symbol": "correct",
        "speech": "Rätt",
        "color": "#b7da95"
      },
      {
        "id": "communication-wrong",
        "label": "Fel",
        "symbol": "wrong",
        "speech": "Fel",
        "color": "#ed9c98"
      }
    ]
  },
  {
    "id": "inkopslista",
    "title": "inköpslista",
    "symbol": "list",
    "columns": 4,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#eee1c7",
    "cells": [
      {
        "id": "shop-milk",
        "label": "mjölk",
        "symbol": "milk"
      },
      {
        "id": "shop-bread",
        "label": "bröd",
        "symbol": "sandwich"
      },
      {
        "id": "shop-apple",
        "label": "äpplen",
        "symbol": "apple"
      },
      {
        "id": "shop-banana",
        "label": "bananer",
        "symbol": "banana"
      },
      {
        "id": "shop-coffee",
        "label": "kaffe",
        "symbol": "coffee"
      },
      {
        "id": "shop-tea",
        "label": "te",
        "symbol": "tea"
      },
      {
        "id": "shop-food",
        "label": "middag",
        "symbol": "meal"
      },
      {
        "id": "shop-icecream",
        "label": "glass",
        "symbol": "icecream"
      }
    ]
  },
  {
    "id": "platser",
    "title": "platser",
    "symbol": "home",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#d9eac8",
    "cells": [
      {
        "id": "place-home",
        "label": "hemma",
        "symbol": "home",
        "target": "hemma"
      },
      {
        "id": "place-school",
        "label": "skolan",
        "symbol": "school"
      },
      {
        "id": "place-work",
        "label": "arbetet",
        "symbol": "work"
      },
      {
        "id": "place-park",
        "label": "parken",
        "symbol": "tree"
      },
      {
        "id": "place-pool",
        "label": "simhallen",
        "symbol": "swim"
      },
      {
        "id": "place-toilet",
        "label": "toaletten",
        "symbol": "toilet"
      }
    ]
  },
  {
    "id": "leka",
    "title": "leka",
    "symbol": "play",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#d9eac8",
    "cells": [
      {
        "id": "play-together",
        "label": "leka tillsammans",
        "symbol": "play"
      },
      {
        "id": "play-ball",
        "label": "spela boll",
        "symbol": "ball"
      },
      {
        "id": "play-read",
        "label": "läsa en bok",
        "symbol": "book"
      },
      {
        "id": "play-outside",
        "label": "vara ute",
        "symbol": "tree"
      },
      {
        "id": "play-swim",
        "label": "simma",
        "symbol": "swim"
      },
      {
        "id": "play-again",
        "label": "göra det igen",
        "symbol": "yes"
      }
    ]
  },
  {
    "id": "skola",
    "title": "skola",
    "symbol": "school",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#d9eac8",
    "cells": [
      {
        "id": "school-read",
        "label": "läsa",
        "symbol": "book"
      },
      {
        "id": "school-write",
        "label": "skriva",
        "symbol": "mail"
      },
      {
        "id": "school-work",
        "label": "arbeta",
        "symbol": "work"
      },
      {
        "id": "school-break",
        "label": "rast",
        "symbol": "play"
      },
      {
        "id": "school-lunch",
        "label": "lunch",
        "symbol": "meal"
      },
      {
        "id": "school-help",
        "label": "hjälp",
        "symbol": "have",
        "speech": "Jag behöver hjälp"
      }
    ]
  },
  {
    "id": "kanslor",
    "title": "känslor",
    "symbol": "happy",
    "columns": 4,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#e8d7ed",
    "cells": [
      {
        "id": "feel-happy",
        "label": "glad",
        "symbol": "happy"
      },
      {
        "id": "feel-sad",
        "label": "ledsen",
        "symbol": "sad"
      },
      {
        "id": "feel-angry",
        "label": "arg",
        "symbol": "angry"
      },
      {
        "id": "feel-tired",
        "label": "trött",
        "symbol": "tired"
      },
      {
        "id": "feel-worried",
        "label": "orolig",
        "symbol": "worried"
      },
      {
        "id": "feel-love",
        "label": "kär",
        "symbol": "heart"
      },
      {
        "id": "feel-hungry",
        "label": "hungrig",
        "symbol": "meal"
      },
      {
        "id": "feel-thirsty",
        "label": "törstig",
        "symbol": "water"
      }
    ]
  },
  {
    "id": "mat-och-dryck",
    "title": "mat och dryck",
    "symbol": "meal",
    "columns": 4,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#d9eac8",
    "cells": [
      {
        "id": "food-meal",
        "label": "mat",
        "symbol": "meal"
      },
      {
        "id": "food-sandwich",
        "label": "smörgås",
        "symbol": "sandwich"
      },
      {
        "id": "food-apple",
        "label": "äpple",
        "symbol": "apple"
      },
      {
        "id": "food-banana",
        "label": "banan",
        "symbol": "banana"
      },
      {
        "id": "food-water",
        "label": "vatten",
        "symbol": "water"
      },
      {
        "id": "food-milk",
        "label": "mjölk",
        "symbol": "milk"
      },
      {
        "id": "food-coffee",
        "label": "kaffe",
        "symbol": "coffee"
      },
      {
        "id": "food-icecream",
        "label": "glass",
        "symbol": "icecream"
      }
    ]
  },
  {
    "id": "fordon",
    "title": "fordon",
    "symbol": "car",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#d9eac8",
    "cells": [
      {
        "id": "vehicle-car",
        "label": "bil",
        "symbol": "car"
      },
      {
        "id": "vehicle-bus",
        "label": "buss",
        "symbol": "bus"
      },
      {
        "id": "vehicle-taxi",
        "label": "taxi",
        "symbol": "car"
      },
      {
        "id": "vehicle-go",
        "label": "åka",
        "symbol": "bus"
      },
      {
        "id": "vehicle-wait",
        "label": "vänta",
        "symbol": "stop"
      },
      {
        "id": "vehicle-home",
        "label": "åka hem",
        "symbol": "home"
      }
    ]
  },
  {
    "id": "mina-meningar",
    "title": "Mina meningar",
    "symbol": "mail",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#d5e9f3",
    "cells": [
      {
        "id": "phrase-hi",
        "label": "Vad roligt att se dig!",
        "symbol": "wave"
      },
      {
        "id": "phrase-say",
        "label": "Jag vill säga något",
        "symbol": "self"
      },
      {
        "id": "phrase-wait",
        "label": "Ge mig lite tid",
        "symbol": "stop"
      },
      {
        "id": "phrase-understand",
        "label": "Jag förstår inte",
        "symbol": "worried"
      },
      {
        "id": "phrase-again",
        "label": "Kan du säga det igen?",
        "symbol": "have"
      },
      {
        "id": "phrase-thanks",
        "label": "Tack för att du lyssnar",
        "symbol": "heart"
      }
    ]
  },
  {
    "id": "morgon",
    "title": "morgon",
    "symbol": "sun",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#fff1ba",
    "cells": [
      {
        "id": "morning-wake",
        "label": "Vakna",
        "symbol": "sun"
      },
      {
        "id": "morning-toilet",
        "label": "Gå på toaletten",
        "symbol": "toilet"
      },
      {
        "id": "morning-breakfast",
        "label": "Äta frukost",
        "symbol": "sandwich"
      },
      {
        "id": "morning-drink",
        "label": "Dricka något",
        "symbol": "milk"
      },
      {
        "id": "morning-plan",
        "label": "Titta på schemat",
        "symbol": "schedule"
      },
      {
        "id": "morning-leave",
        "label": "Åka till arbetet",
        "symbol": "bus"
      }
    ]
  },
  {
    "id": "hemma",
    "title": "hemma",
    "symbol": "home",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#d9eac8",
    "cells": [
      {
        "id": "home-family",
        "label": "vara med familjen",
        "symbol": "family"
      },
      {
        "id": "home-food",
        "label": "äta mat",
        "symbol": "meal"
      },
      {
        "id": "home-read",
        "label": "läsa en bok",
        "symbol": "book"
      },
      {
        "id": "home-play",
        "label": "leka",
        "symbol": "play"
      },
      {
        "id": "home-walk",
        "label": "gå en promenad",
        "symbol": "walk"
      },
      {
        "id": "home-sleep",
        "label": "sova",
        "symbol": "bed"
      }
    ]
  },
  {
    "id": "ord-kanslor",
    "title": "Känslor",
    "symbol": "emotion-happy",
    "columns": 4,
    "rows": 4,
    "messageBar": true,
    "showOnHome": true,
    "color": "#e8d7ed",
    "cells": [
      {
        "id": "ord-kanslor-curious",
        "label": "Nyfiken",
        "symbol": "emotion-curious",
        "speech": "Nyfiken",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-afraid",
        "label": "Rädd",
        "symbol": "emotion-afraid",
        "speech": "Rädd",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-unsure",
        "label": "Vet inte",
        "symbol": "emotion-unsure",
        "speech": "Vet inte",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-frustrated",
        "label": "Frustrerad",
        "symbol": "emotion-frustrated",
        "speech": "Frustrerad",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-embarrassed",
        "label": "Pinsamt",
        "symbol": "emotion-embarrassed",
        "speech": "Pinsamt",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-disgust",
        "label": "Äckla",
        "symbol": "emotion-disgust",
        "speech": "Äckla",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-satisfied",
        "label": "Nöjd",
        "symbol": "emotion-satisfied",
        "speech": "Nöjd",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-sulky",
        "label": "Sur",
        "symbol": "emotion-sulky",
        "speech": "Sur",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-worried",
        "label": "Orolig",
        "symbol": "emotion-worried",
        "speech": "Orolig",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-heart",
        "label": "Tycker om",
        "symbol": "emotion-heart",
        "speech": "Tycker om",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-happy",
        "label": "Glad",
        "symbol": "emotion-happy",
        "speech": "Glad",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-sad",
        "label": "Ledsen",
        "symbol": "emotion-sad",
        "speech": "Ledsen",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-angry",
        "label": "Arg",
        "symbol": "emotion-angry",
        "speech": "Arg",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-idea",
        "label": "Idé",
        "symbol": "emotion-idea",
        "speech": "Idé",
        "color": "#e8d7ed"
      }
    ]
  },
  {
    "id": "ord-fragor",
    "title": "Frågor och samtal",
    "symbol": "question",
    "columns": 4,
    "rows": 3,
    "messageBar": true,
    "showOnHome": true,
    "color": "#d5e9f3",
    "cells": [
      {
        "id": "ord-fragor-question",
        "label": "Fråga",
        "symbol": "question",
        "speech": "Fråga",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-know",
        "label": "Veta",
        "symbol": "know",
        "speech": "Veta",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-how",
        "label": "Hur",
        "symbol": "question-mark",
        "speech": "Hur",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-with-whom",
        "label": "Med vem",
        "symbol": "with-whom",
        "speech": "Med vem",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-what",
        "label": "Vad",
        "symbol": "question-mark",
        "speech": "Vad",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-why",
        "label": "Varför",
        "symbol": "question-mark",
        "speech": "Varför",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-understand",
        "label": "Förstår",
        "symbol": "understand",
        "speech": "Förstår",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-not-understand",
        "label": "Förstår inte",
        "symbol": "not-understand",
        "speech": "Förstår inte",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-cannot",
        "label": "Kan inte",
        "symbol": "cannot",
        "speech": "Kan inte",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-help",
        "label": "Hjälp",
        "symbol": "help",
        "speech": "Hjälp",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-talk",
        "label": "Berätta",
        "symbol": "talk",
        "speech": "Berätta",
        "color": "#d5e9f3"
      }
    ]
  },
  {
    "id": "ord-personer",
    "title": "Personer",
    "symbol": "people-support",
    "columns": 4,
    "rows": 3,
    "messageBar": true,
    "showOnHome": true,
    "color": "#f8ddbd",
    "cells": [
      {
        "id": "ord-personer-staff-home",
        "label": "Personal hemma",
        "symbol": "staff-home",
        "speech": "Personal hemma",
        "color": "#f8ddbd"
      },
      {
        "id": "ord-personer-staff-work",
        "label": "Personal jobb",
        "symbol": "staff-work",
        "speech": "Personal jobb",
        "color": "#f8ddbd"
      },
      {
        "id": "ord-personer-mother",
        "label": "Mamma",
        "symbol": "mother-alone",
        "speech": "Mamma",
        "color": "#f8ddbd"
      },
      {
        "id": "ord-personer-father",
        "label": "Pappa",
        "symbol": "father-alone",
        "speech": "Pappa",
        "color": "#f8ddbd"
      },
      {
        "id": "ord-personer-ask-help",
        "label": "Be om hjälp",
        "symbol": "ask-help",
        "speech": "Be om hjälp",
        "color": "#f8ddbd"
      },
      {
        "id": "people-me",
        "label": "jag",
        "symbol": "self"
      },
      {
        "id": "people-you",
        "label": "Du",
        "symbol": "you",
        "speech": "Du"
      },
      {
        "id": "people-family",
        "label": "min familj",
        "symbol": "family"
      },
      {
        "id": "people-chef-boende",
        "label": "Chef boende",
        "symbol": "chef-boende",
        "speech": "Chef boende"
      },
      {
        "id": "people-chef-dv",
        "label": "Chef DV",
        "symbol": "chef-dv",
        "speech": "Chef DV"
      },
      {
        "id": "people-god-man",
        "label": "God man",
        "symbol": "god-man",
        "speech": "God man"
      }
    ]
  },
  {
    "id": "ord-vardag",
    "title": "Vardag och planering",
    "symbol": "schedule",
    "columns": 4,
    "rows": 4,
    "messageBar": true,
    "showOnHome": true,
    "color": "#fff1ba",
    "cells": [
      {
        "id": "ord-vardag-weekend",
        "label": "Helgschema",
        "symbol": "weekend",
        "speech": "Helgschema",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-menu",
        "label": "Matsedel",
        "symbol": "menu",
        "speech": "Matsedel",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-activity",
        "label": "Aktivitet",
        "symbol": "activity",
        "speech": "Aktivitet",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-cleaning",
        "label": "Städschema",
        "symbol": "cleaning",
        "speech": "Städschema",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-yesterday",
        "label": "Igår",
        "symbol": "yesterday",
        "speech": "Igår",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-tomorrow",
        "label": "I morgon",
        "symbol": "tomorrow",
        "speech": "I morgon",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-schedule",
        "label": "Schema",
        "symbol": "schedule",
        "speech": "Schema",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-list",
        "label": "Inköp",
        "symbol": "list",
        "speech": "Inköp",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-calendar",
        "label": "Idag",
        "symbol": "calendar",
        "speech": "Idag",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-coffee",
        "label": "Fika",
        "symbol": "coffee",
        "speech": "Fika",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-meal",
        "label": "Middag",
        "symbol": "meal",
        "speech": "Middag",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-water",
        "label": "Dricka",
        "symbol": "water",
        "speech": "Dricka",
        "color": "#fff1ba"
      },
      {
        "id": "ord-vardag-visual-support",
        "label": "Bildstöd",
        "symbol": "visual-support",
        "speech": "Bildstöd"
      }
    ]
  },
  {
    "id": "ord-halsa",
    "title": "Hälsa och kropp",
    "symbol": "health-body",
    "columns": 4,
    "rows": 3,
    "messageBar": true,
    "showOnHome": true,
    "color": "#d5eee7",
    "cells": [
      {
        "id": "ord-halsa-injection",
        "label": "Spruta",
        "symbol": "injection",
        "speech": "Spruta",
        "color": "#d5eee7"
      },
      {
        "id": "ord-halsa-dentist",
        "label": "Laga tand",
        "symbol": "dentist",
        "speech": "Laga tand",
        "color": "#d5eee7"
      },
      {
        "id": "ord-halsa-pain",
        "label": "Ont",
        "symbol": "pain",
        "speech": "Ont",
        "color": "#d5eee7"
      },
      {
        "id": "ord-halsa-nurse",
        "label": "Sjuksköterska",
        "symbol": "nurse",
        "speech": "Sjuksköterska",
        "color": "#d5eee7"
      },
      {
        "id": "ord-halsa-doctor",
        "label": "Doktor",
        "symbol": "doctor",
        "speech": "Doktor",
        "color": "#d5eee7"
      },
      {
        "id": "ord-halsa-dizzy",
        "label": "Yr",
        "symbol": "dizzy",
        "speech": "Yr",
        "color": "#d5eee7"
      },
      {
        "id": "ord-halsa-ear",
        "label": "Öra",
        "symbol": "ear",
        "speech": "Öra",
        "color": "#d5eee7"
      },
      {
        "id": "ord-halsa-pulse",
        "label": "Puls",
        "symbol": "pulse",
        "speech": "Puls",
        "color": "#d5eee7"
      }
    ]
  },
  {
    "id": "ord-hande",
    "title": "Det som hände",
    "symbol": "talk",
    "columns": 4,
    "rows": 3,
    "messageBar": true,
    "showOnHome": true,
    "color": "#f3dfcf",
    "cells": [
      {
        "id": "ord-hande-spit",
        "label": "Spottade",
        "symbol": "spit",
        "speech": "Spottade",
        "color": "#f3dfcf"
      },
      {
        "id": "ord-hande-pinch",
        "label": "Nypa",
        "symbol": "pinch",
        "speech": "Nypa",
        "color": "#f3dfcf"
      },
      {
        "id": "ord-hande-quarrel",
        "label": "Bråkade",
        "symbol": "quarrel",
        "speech": "Bråkade",
        "color": "#f3dfcf"
      },
      {
        "id": "ord-hande-imitate",
        "label": "Härmade",
        "symbol": "imitate",
        "speech": "Härmade",
        "color": "#f3dfcf"
      },
      {
        "id": "ord-hande-choke",
        "label": "Strypa",
        "symbol": "choke",
        "speech": "Strypa",
        "color": "#f3dfcf"
      },
      {
        "id": "ord-hande-stuck",
        "label": "Jag kan inte släppa det",
        "symbol": "stuck",
        "speech": "Jag kan inte släppa det",
        "color": "#f3dfcf"
      },
      {
        "id": "ord-hande-sorry",
        "label": "Säg förlåt",
        "symbol": "sorry",
        "speech": "Säg förlåt",
        "color": "#f3dfcf"
      }
    ]
  },
  {
    "id": "ord-platser",
    "title": "Platser och fritid",
    "symbol": "park",
    "columns": 4,
    "rows": 5,
    "messageBar": true,
    "showOnHome": true,
    "color": "#d9eac8",
    "cells": [
      {
        "id": "ord-platser-ice-rink",
        "label": "Ishall",
        "symbol": "ice-rink",
        "speech": "Ishall",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-bowling",
        "label": "Bowling",
        "symbol": "bowling",
        "speech": "Bowling",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-exercise",
        "label": "Träna",
        "symbol": "exercise",
        "speech": "Träna",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-compete",
        "label": "Tävla",
        "symbol": "compete",
        "speech": "Tävla",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-cycle",
        "label": "Cykla",
        "symbol": "cycle",
        "speech": "Cykla",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-sea",
        "label": "Havet",
        "symbol": "sea",
        "speech": "Havet",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-town",
        "label": "Stan",
        "symbol": "town",
        "speech": "Stan",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-malmo",
        "label": "Malmö",
        "symbol": "malmo",
        "speech": "Malmö",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-pizza",
        "label": "Pizza",
        "symbol": "pizza",
        "speech": "Pizza",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-fruit",
        "label": "Frukt",
        "symbol": "fruit",
        "speech": "Frukt",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-park",
        "label": "Park",
        "symbol": "park",
        "speech": "Park",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-mall",
        "label": "Valen",
        "symbol": "mall",
        "speech": "Valen",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-swim",
        "label": "Simma",
        "symbol": "swim",
        "speech": "Simma",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-walk",
        "label": "Promenad",
        "symbol": "walk",
        "speech": "Promenad",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-bus",
        "label": "Buss",
        "symbol": "bus",
        "speech": "Buss",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-car",
        "label": "Taxi",
        "symbol": "taxi",
        "speech": "Taxi",
        "color": "#d9eac8"
      },
      {
        "id": "ord-platser-gympa",
        "label": "Gympa",
        "symbol": "gympa",
        "speech": "Gympa"
      },
      {
        "id": "ord-platser-dv",
        "label": "DV",
        "symbol": "dv",
        "speech": "DV"
      },
      {
        "id": "ord-platser-restaurant",
        "label": "Restaurang",
        "symbol": "restaurant",
        "speech": "Restaurang"
      }
    ]
  },
  {
    "id": "bokstaver",
    "title": "Bokstäver",
    "symbol": "alphabet",
    "columns": 5,
    "rows": 6,
    "messageBar": true,
    "showOnHome": true,
    "color": "#dfead4",
    "cells": [
      {
        "id": "letter-01",
        "label": "A",
        "symbol": "letter-01",
        "speech": "A"
      },
      {
        "id": "letter-02",
        "label": "B",
        "symbol": "letter-02",
        "speech": "B"
      },
      {
        "id": "letter-03",
        "label": "C",
        "symbol": "letter-03",
        "speech": "C"
      },
      {
        "id": "letter-04",
        "label": "D",
        "symbol": "letter-04",
        "speech": "D"
      },
      {
        "id": "letter-05",
        "label": "E",
        "symbol": "letter-05",
        "speech": "E"
      },
      {
        "id": "letter-06",
        "label": "F",
        "symbol": "letter-06",
        "speech": "F"
      },
      {
        "id": "letter-07",
        "label": "G",
        "symbol": "letter-07",
        "speech": "G"
      },
      {
        "id": "letter-08",
        "label": "H",
        "symbol": "letter-08",
        "speech": "H"
      },
      {
        "id": "letter-09",
        "label": "I",
        "symbol": "letter-09",
        "speech": "I"
      },
      {
        "id": "letter-10",
        "label": "J",
        "symbol": "letter-10",
        "speech": "J"
      },
      {
        "id": "letter-11",
        "label": "K",
        "symbol": "letter-11",
        "speech": "K"
      },
      {
        "id": "letter-12",
        "label": "L",
        "symbol": "letter-12",
        "speech": "L"
      },
      {
        "id": "letter-13",
        "label": "M",
        "symbol": "letter-13",
        "speech": "M"
      },
      {
        "id": "letter-14",
        "label": "N",
        "symbol": "letter-14",
        "speech": "N"
      },
      {
        "id": "letter-15",
        "label": "O",
        "symbol": "letter-15",
        "speech": "O"
      },
      {
        "id": "letter-16",
        "label": "P",
        "symbol": "letter-16",
        "speech": "P"
      },
      {
        "id": "letter-17",
        "label": "Q",
        "symbol": "letter-17",
        "speech": "Q"
      },
      {
        "id": "letter-18",
        "label": "R",
        "symbol": "letter-18",
        "speech": "R"
      },
      {
        "id": "letter-19",
        "label": "S",
        "symbol": "letter-19",
        "speech": "S"
      },
      {
        "id": "letter-20",
        "label": "T",
        "symbol": "letter-20",
        "speech": "T"
      },
      {
        "id": "letter-21",
        "label": "U",
        "symbol": "letter-21",
        "speech": "U"
      },
      {
        "id": "letter-22",
        "label": "V",
        "symbol": "letter-22",
        "speech": "V"
      },
      {
        "id": "letter-23",
        "label": "W",
        "symbol": "letter-23",
        "speech": "W"
      },
      {
        "id": "letter-24",
        "label": "X",
        "symbol": "letter-24",
        "speech": "X"
      },
      {
        "id": "letter-25",
        "label": "Y",
        "symbol": "letter-25",
        "speech": "Y"
      },
      {
        "id": "letter-26",
        "label": "Z",
        "symbol": "letter-26",
        "speech": "Z"
      },
      {
        "id": "letter-27",
        "label": "Å",
        "symbol": "letter-27",
        "speech": "Å"
      },
      {
        "id": "letter-28",
        "label": "Ä",
        "symbol": "letter-28",
        "speech": "Ä"
      },
      {
        "id": "letter-29",
        "label": "Ö",
        "symbol": "letter-29",
        "speech": "Ö"
      }
    ]
  }
]);
