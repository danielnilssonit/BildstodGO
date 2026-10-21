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
    "label": "Ide",
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
  }
]);

export const DEFAULT_BOARDS = freezeSeed([
  {
    "id": "ja-nej",
    "title": "ja nej",
    "symbol": "yes",
    "columns": 2,
    "rows": 1,
    "messageBar": false,
    "showOnHome": true,
    "color": "#dfead4",
    "cells": [
      {
        "id": "yn-yes",
        "label": "ja",
        "symbol": "yes",
        "speech": "Ja",
        "color": "#b7da95"
      },
      {
        "id": "yn-no",
        "label": "nej",
        "symbol": "stop",
        "speech": "Nej",
        "color": "#ed9c98"
      }
    ]
  },
  {
    "id": "kommunikation-a",
    "title": "kommunikation A",
    "symbol": "self",
    "columns": 4,
    "rows": 4,
    "messageBar": true,
    "showOnHome": true,
    "color": "#d6e6ee",
    "cells": [
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
        "id": "a-people",
        "label": "personer",
        "symbol": "family",
        "target": "personer",
        "color": "#f8ddbd"
      },
      {
        "id": "a-places",
        "label": "platser",
        "symbol": "home",
        "target": "platser",
        "color": "#d9eac8"
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
        "id": "a-play",
        "label": "leka",
        "symbol": "play",
        "target": "leka",
        "color": "#d9eac8"
      },
      {
        "id": "a-school",
        "label": "skola",
        "symbol": "school",
        "target": "skola",
        "color": "#d9eac8"
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
        "symbol": "have",
        "color": "#fff1ba"
      },
      {
        "id": "a-feelings",
        "label": "känslor",
        "symbol": "happy",
        "target": "kanslor",
        "color": "#e8d7ed"
      },
      {
        "id": "a-animals",
        "label": "djur",
        "symbol": "dog",
        "target": "djur-och-ljud",
        "color": "#d9eac8"
      },
      {
        "id": "a-am",
        "label": "Jag är",
        "symbol": "self",
        "color": "#fff1ba"
      },
      {
        "id": "a-sentences",
        "label": "Mina meningar",
        "symbol": "mail",
        "target": "mina-meningar",
        "color": "#d5e9f3"
      },
      {
        "id": "a-food",
        "label": "mat och dryck",
        "symbol": "meal",
        "target": "mat-och-dryck",
        "color": "#d9eac8"
      },
      {
        "id": "a-transport",
        "label": "fordon",
        "symbol": "car",
        "target": "fordon",
        "color": "#d9eac8"
      }
    ]
  },
  {
    "id": "kommunikation-b",
    "title": "kommunikation B",
    "symbol": "family",
    "columns": 3,
    "rows": 3,
    "messageBar": true,
    "showOnHome": true,
    "color": "#ead9e9",
    "cells": [
      {
        "id": "b-hi",
        "label": "Hej!",
        "symbol": "wave"
      },
      {
        "id": "b-help",
        "label": "Hjälp mig",
        "symbol": "have",
        "speech": "Kan du hjälpa mig?"
      },
      {
        "id": "b-thanks",
        "label": "Tack!",
        "symbol": "heart"
      },
      {
        "id": "b-food",
        "label": "Jag är hungrig",
        "symbol": "meal"
      },
      {
        "id": "b-water",
        "label": "Jag är törstig",
        "symbol": "water"
      },
      {
        "id": "b-toilet",
        "label": "Toalett",
        "symbol": "toilet",
        "speech": "Jag behöver gå på toaletten"
      },
      {
        "id": "b-break",
        "label": "Jag vill vila",
        "symbol": "bed"
      },
      {
        "id": "b-stop",
        "label": "Stopp",
        "symbol": "stop"
      },
      {
        "id": "b-again",
        "label": "En gång till",
        "symbol": "yes"
      }
    ]
  },
  {
    "id": "min-saga",
    "title": "min saga",
    "symbol": "book",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#f3e5bf",
    "cells": [
      {
        "id": "story-start",
        "label": "Det var en gång",
        "symbol": "book",
        "speech": "Det var en gång"
      },
      {
        "id": "story-child",
        "label": "ett barn",
        "symbol": "child"
      },
      {
        "id": "story-walk",
        "label": "som gick till skogen",
        "symbol": "walk"
      },
      {
        "id": "story-dog",
        "label": "och mötte en hund.",
        "symbol": "dog"
      },
      {
        "id": "story-play",
        "label": "De lekte tillsammans",
        "symbol": "ball"
      },
      {
        "id": "story-end",
        "label": "och blev bästa vänner.",
        "symbol": "heart"
      }
    ]
  },
  {
    "id": "idag",
    "title": "idag",
    "symbol": "calendar",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#dce9f1",
    "cells": [
      {
        "id": "today-date",
        "label": "Idag",
        "symbol": "calendar",
        "speech": "Idag"
      },
      {
        "id": "today-sun",
        "label": "Det är soligt",
        "symbol": "sun"
      },
      {
        "id": "today-rain",
        "label": "Det regnar",
        "symbol": "rain"
      },
      {
        "id": "today-snow",
        "label": "Det snöar",
        "symbol": "snow"
      },
      {
        "id": "today-feel",
        "label": "Hur mår jag?",
        "symbol": "happy",
        "target": "kanslor"
      },
      {
        "id": "today-plan",
        "label": "Dagens plan",
        "symbol": "schedule",
        "target": "schema-dv"
      }
    ]
  },
  {
    "id": "arbeta-dv",
    "title": "arbeta DV",
    "symbol": "work",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#dce7d2",
    "cells": [
      {
        "id": "work-start",
        "label": "Börja arbeta",
        "symbol": "work",
        "speech": "Jag är redo att börja arbeta"
      },
      {
        "id": "work-task",
        "label": "Vad ska jag göra?",
        "symbol": "list"
      },
      {
        "id": "work-help",
        "label": "Jag behöver hjälp",
        "symbol": "have"
      },
      {
        "id": "work-break",
        "label": "Ta en paus",
        "symbol": "tea",
        "speech": "Jag vill ta en paus"
      },
      {
        "id": "work-done",
        "label": "Jag är klar",
        "symbol": "yes"
      },
      {
        "id": "work-home",
        "label": "Åka hem",
        "symbol": "home",
        "speech": "Jag vill åka hem"
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
    "id": "taxiresa",
    "title": "taxiresa",
    "symbol": "car",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#d6e5f0",
    "cells": [
      {
        "id": "taxi-hi",
        "label": "Hej!",
        "symbol": "wave"
      },
      {
        "id": "taxi-home",
        "label": "Jag ska hem",
        "symbol": "home"
      },
      {
        "id": "taxi-work",
        "label": "Till arbetet",
        "symbol": "work",
        "speech": "Jag ska till min dagliga verksamhet"
      },
      {
        "id": "taxi-wait",
        "label": "Vänta lite",
        "symbol": "stop"
      },
      {
        "id": "taxi-help",
        "label": "Hjälp mig, tack",
        "symbol": "have"
      },
      {
        "id": "taxi-bye",
        "label": "Tack för resan!",
        "symbol": "heart"
      }
    ]
  },
  {
    "id": "djur-och-ljud",
    "title": "djur och ljud",
    "symbol": "dog",
    "columns": 4,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#e6eacb",
    "cells": [
      {
        "id": "animal-dog",
        "label": "hund",
        "symbol": "dog"
      },
      {
        "id": "animal-cat",
        "label": "katt",
        "symbol": "cat"
      },
      {
        "id": "animal-cow",
        "label": "ko",
        "symbol": "cow"
      },
      {
        "id": "animal-bird",
        "label": "fågel",
        "symbol": "bird"
      },
      {
        "id": "animal-woof",
        "label": "Voff voff!",
        "symbol": "dog",
        "speech": "Voff voff!"
      },
      {
        "id": "animal-meow",
        "label": "Mjau!",
        "symbol": "cat",
        "speech": "Mjau!"
      },
      {
        "id": "animal-moo",
        "label": "Mu!",
        "symbol": "cow",
        "speech": "Muu!"
      },
      {
        "id": "animal-tweet",
        "label": "Pip pip!",
        "symbol": "bird",
        "speech": "Pip pip!"
      }
    ]
  },
  {
    "id": "skriva-mail",
    "title": "skriva mail",
    "symbol": "mail",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#e6dcf0",
    "cells": [
      {
        "id": "mail-hi",
        "label": "Hej!",
        "symbol": "wave"
      },
      {
        "id": "mail-how",
        "label": "Hur mår du?",
        "symbol": "happy"
      },
      {
        "id": "mail-fine",
        "label": "Jag mår bra.",
        "symbol": "self"
      },
      {
        "id": "mail-today",
        "label": "Idag har jag arbetat.",
        "symbol": "work"
      },
      {
        "id": "mail-meet",
        "label": "Vill du ses och fika?",
        "symbol": "coffee"
      },
      {
        "id": "mail-bye",
        "label": "Vi hörs snart!",
        "symbol": "heart"
      }
    ]
  },
  {
    "id": "fika",
    "title": "fika",
    "symbol": "coffee",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#efddca",
    "cells": [
      {
        "id": "fika-coffee",
        "label": "kaffe",
        "symbol": "coffee",
        "speech": "Jag vill ha kaffe"
      },
      {
        "id": "fika-tea",
        "label": "te",
        "symbol": "tea",
        "speech": "Jag vill ha te"
      },
      {
        "id": "fika-water",
        "label": "vatten",
        "symbol": "water",
        "speech": "Jag vill ha vatten"
      },
      {
        "id": "fika-milk",
        "label": "mjölk",
        "symbol": "milk",
        "speech": "Jag vill ha mjölk"
      },
      {
        "id": "fika-sandwich",
        "label": "smörgås",
        "symbol": "sandwich",
        "speech": "Jag vill ha en smörgås"
      },
      {
        "id": "fika-more",
        "label": "Lite till, tack",
        "symbol": "have"
      }
    ]
  },
  {
    "id": "schema-dv",
    "title": "schema DV",
    "symbol": "schedule",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": true,
    "color": "#dce7ed",
    "cells": [
      {
        "id": "schedule-morning",
        "label": "08.00 · morgon",
        "symbol": "sun",
        "target": "morgon"
      },
      {
        "id": "schedule-work",
        "label": "09.00 · arbeta",
        "symbol": "work",
        "target": "arbeta-dv"
      },
      {
        "id": "schedule-fika",
        "label": "10.00 · fika",
        "symbol": "coffee",
        "target": "fika"
      },
      {
        "id": "schedule-lunch",
        "label": "12.00 · lunch",
        "symbol": "meal",
        "target": "mat-och-dryck"
      },
      {
        "id": "schedule-walk",
        "label": "13.00 · promenad",
        "symbol": "walk",
        "speech": "Klockan ett tar jag en promenad"
      },
      {
        "id": "schedule-home",
        "label": "15.00 · åka hem",
        "symbol": "car",
        "speech": "Klockan tre åker jag hem"
      }
    ]
  },
  {
    "id": "personer",
    "title": "personer",
    "symbol": "family",
    "columns": 3,
    "rows": 2,
    "messageBar": true,
    "showOnHome": false,
    "color": "#f8ddbd",
    "cells": [
      {
        "id": "people-me",
        "label": "jag",
        "symbol": "self"
      },
      {
        "id": "people-you",
        "label": "du",
        "symbol": "wave"
      },
      {
        "id": "people-family",
        "label": "min familj",
        "symbol": "family"
      },
      {
        "id": "people-woman",
        "label": "en kvinna",
        "symbol": "woman"
      },
      {
        "id": "people-man",
        "label": "en man",
        "symbol": "man"
      },
      {
        "id": "people-child",
        "label": "ett barn",
        "symbol": "child"
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
        "symbol": "schedule",
        "target": "schema-dv"
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
    "symbol": "curious",
    "columns": 4,
    "rows": 4,
    "messageBar": true,
    "showOnHome": true,
    "color": "#e8d7ed",
    "cells": [
      {
        "id": "ord-kanslor-curious",
        "label": "Nyfiken",
        "symbol": "curious",
        "speech": "Nyfiken",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-afraid",
        "label": "Rädd",
        "symbol": "afraid",
        "speech": "Rädd",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-unsure",
        "label": "Vet inte",
        "symbol": "unsure",
        "speech": "Vet inte",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-frustrated",
        "label": "Frustrerad",
        "symbol": "frustrated",
        "speech": "Frustrerad",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-embarrassed",
        "label": "Pinsamt",
        "symbol": "embarrassed",
        "speech": "Pinsamt",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-disgust",
        "label": "Äckla",
        "symbol": "disgust",
        "speech": "Äckla",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-satisfied",
        "label": "Nöjd",
        "symbol": "satisfied",
        "speech": "Nöjd",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-sulky",
        "label": "Sur",
        "symbol": "sulky",
        "speech": "Sur",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-worried",
        "label": "Orolig",
        "symbol": "worried",
        "speech": "Orolig",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-heart",
        "label": "Tycker om",
        "symbol": "heart",
        "speech": "Tycker om",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-happy",
        "label": "Glad",
        "symbol": "happy",
        "speech": "Glad",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-sad",
        "label": "Ledsen",
        "symbol": "sad",
        "speech": "Ledsen",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-angry",
        "label": "Arg",
        "symbol": "angry",
        "speech": "Arg",
        "color": "#e8d7ed"
      },
      {
        "id": "ord-kanslor-idea",
        "label": "Ide",
        "symbol": "idea",
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
        "symbol": "how",
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
        "symbol": "what",
        "speech": "Vad",
        "color": "#d5e9f3"
      },
      {
        "id": "ord-fragor-why",
        "label": "Varför",
        "symbol": "why",
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
      },
      {
        "id": "ord-fragor-join",
        "label": "Får jag vara med",
        "symbol": "join",
        "speech": "Får jag vara med",
        "color": "#d5e9f3"
      }
    ]
  },
  {
    "id": "ord-personer",
    "title": "Personer och stöd",
    "symbol": "visual-support",
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
        "id": "ord-personer-goods-board",
        "label": "Bildstöd varor",
        "symbol": "goods-board",
        "speech": "Bildstöd varor",
        "color": "#f8ddbd"
      },
      {
        "id": "ord-personer-visual-support",
        "label": "Bildstöd",
        "symbol": "visual-support",
        "speech": "Bildstöd",
        "color": "#f8ddbd"
      },
      {
        "id": "ord-personer-mother",
        "label": "Mamma",
        "symbol": "mother",
        "speech": "Mamma",
        "color": "#f8ddbd"
      },
      {
        "id": "ord-personer-father",
        "label": "Pappa",
        "symbol": "father",
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
        "id": "ord-personer-phone",
        "label": "Telefon",
        "symbol": "phone",
        "speech": "Telefon",
        "color": "#f8ddbd"
      },
      {
        "id": "ord-personer-tablet",
        "label": "Ipad",
        "symbol": "tablet",
        "speech": "Ipad",
        "color": "#f8ddbd"
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
        "id": "ord-vardag-plastic",
        "label": "Plast",
        "symbol": "plastic",
        "speech": "Plast",
        "color": "#fff1ba"
      }
    ]
  },
  {
    "id": "ord-halsa",
    "title": "Hälsa och kropp",
    "symbol": "doctor",
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
    "rows": 4,
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
        "symbol": "car",
        "speech": "Taxi",
        "color": "#d9eac8"
      }
    ]
  }
]);
