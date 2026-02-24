import pepe from "../assets/pepe.jpg";
import moni from "../assets/moni.jpg";
import coqui from "../assets/coqui.jpg";
import paola from "../assets/paola.jpg";
import dardo from "../assets/dardo.jpg";
import mariaelena from "../assets/mariaelena.jpg";

export const contacts = [
  {
    id: 1,
    name: "Pepe Argento",
    avatar: pepe,
    unread: 0,
    messages: [
      { id: 101, text: "Hola pibe", sender: "them", time: "08:10" },
      { id: 102, text: "Hola Pepe, ¿cómo estás?", sender: "me", time: "08:11", read: true },
      { id: 103, text: "Todo bien... pero Moni me vuelve loco", sender: "them", time: "08:12" },
      { id: 104, text: "¿Qué hizo ahora?", sender: "me", time: "08:13", read: true },
      { id: 105, text: "Quiere plata quiere plata plata!", sender: "them", time: "08:14" },
      { id: 106, text: "Jajaja", sender: "me", time: "08:15", read: true }
    ],
    replies: [
      "Sabés Moni de esto?",
      "Hermosa mañana verdad?",
      "Pedazo de dolobuuu",
      "¿Qué pasa cara de galletita redonda?"
    ]
  },

  {
    id: 2,
    name: "Moni Argento",
    avatar: moni,
    unread: 1,
    messages: [
      { id: 201, text: "Holaaaaa corazón", sender: "them", time: "09:00" },
      { id: 202, text: "Hola Moni", sender: "me", time: "09:01", read: true },
      { id: 203, text: "Ayudame, ¿tiene plata? ¿Sabés dónde?", sender: "them", time: "09:02" },
      { id: 204, text: "No Moni, ni idea", sender: "me", time: "09:03", read: true },
      { id: 205, text: "Dale chiquito decime donde esta", sender: "them", time: "09:04" }
    ],
    replies: [
      "Estoy divina",
      "No entiendo nada...",
      "¡Qué lindo mis chiquitos!",
      "Cafecitoooo?"
    ]
  },

  {
    id: 3,
    name: "Coqui",
    avatar: coqui,
    unread: 1,
    messages: [
      { id: 301, text: "Hola crack", sender: "them", time: "Ayer" },
      { id: 302, text: "¿Qué hacés Coqui?", sender: "me", time: "Ayer", read: true },
      { id: 303, text: "Acá con mamucha, ¿salimos hoy?", sender: "them", time: "Ayer" },
      { id: 304, text: "Dale pero no te voy a pagar todo", sender: "me", time: "Ayer", read: true },
      { id: 305, text: "Esperá que le pido a papucho plata", sender: "them", time: "Ayer" }
    ],
    replies: [
      "Las minas me aman",
      "Tengo facha",
      "Soy el más ganador"
    ]
  },

  {
    id: 4,
    name: "Paola",
    avatar: paola,
    unread: 1,
    messages: [
      { id: 401, text: "Hola lindo", sender: "them", time: "12:35" },
      { id: 402, text: "Hola Pao", sender: "me", time: "12:36", read: true },
      { id: 403, text: "¿Querés venir a casa? Papucho no está", sender: "them", time: "12:37" },
      { id: 404, text: "No porque la última me golpeó, sabés dónde", sender: "me", time: "12:38", read: true },
      { id: 405, text: "Dale, no seas miedoso", sender: "them", time: "12:39" }
    ],
    replies: [
      "Hola lindo",
      "Ay yo soy un bombón",
      "No me hables"
    ]
  },

  {
    id: 5,
    name: "Dardo",
    avatar: dardo,
    unread: 1,
    messages: [
      { id: 501, text: "Hola, ¿cómo estás?", sender: "them", time: "17:20" },
      { id: 502, text: "Todo bien Dardo", sender: "me", time: "17:21", read: true },
      { id: 503, text: "¿Viste a Pepe? Su perro se cagó en las margaritas!", sender: "them", time: "17:22" },
      { id: 504, text: "No ni idea, pero pobre Fatiga", sender: "me", time: "17:23", read: true },
      { id: 505, text: "Lo veo, lo mato!", sender: "them", time: "17:24" }
    ],
    replies: [
      "Hola Pepe",
      "Devolveme la plata!",
      "Esto no va a quedar así",
      "Argento traeme mi plata!"
    ]
  },

  {
    id: 6,
    name: "María Elena",
    avatar: mariaelena,
    unread: 1,
    messages: [
      { id: 601, text: "Hola, ¿cómo estás?", sender: "them", time: "17:20" },
      { id: 602, text: "Todo bien, ¿y vos?", sender: "me", time: "17:21", read: true },
      { id: 603, text: "¿Qué querés nene? Estoy trabajando", sender: "them", time: "17:22" },
      { id: 604, text: "Solo quería saber dónde está Dardo", sender: "me", time: "17:23", read: true },
      { id: 605, text: "Debe estar gateando, seguro!!", sender: "them", time: "17:24" }
    ],
    replies: [
      "Siempre fuiste un inútil",
      "No puedo creerlo Pepe",
      "Eso te pasa por rata",
      "Ay Dios mío..."
    ]
  }
];