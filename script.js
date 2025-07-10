



let typedTextSpan = undefined;
let cursorSpan = undefined;
const textArray = [ "Barbara",
    "Emma", "Léa", "Chloé", "Manon", "Inès",
    "Camille", "Jade", "Louise", "Zoé", "Alice",
    "Julie", "Clara", "Lina", "Rose", "Jeanne",
    "Marie", "Anna", "Lucie", "Eva", "Ambre",
    "Sarah", "Pauline", "Océane", "Maëlys", "Charlotte",
    "Élise", "Noémie", "Élodie", "Capucine", "Agathe",
    "Constance", "Adèle", "Margot", "Clara", "Apolline",
    "Aurélie", "Célia", "Anaïs", "Élise", "Justine",
    "Coline", "Faustine", "Garance", "Héloïse", "Inès",
    "Iris", "Laëtitia", "Lise", "Maëlle", "Maïlys",
    "Marine", "Mathilde", "Morgane", "Nina", "Perrine",
    "Salomé", "Solène", "Thérèse", "Valentine", "Victoire",
    "Amélie", "Blandine", "Caroline", "Catherine", "Cécile",
    "Céleste", "Cécile", "Charlotte", "Christine", "Claire",
    "Claudine", "Clémence", "Colette", "Constance", "Diane",
    "Édith", "Éliane", "Émilie", "Esther", "Eugénie",
    "Eulalie", "Ève", "Fabienne", "Flore", "Gabrielle",
    "Gaëlle", "Geneviève", "Georgine", "Germaine", "Gisèle",
    "Hélène", "Henriette", "Honorine", "Hortense", "Isabelle",
    "Jacqueline", "Jeannine", "Joséphine", "Judith", "Laurence",
    "Liliane", "Madeleine", "Marcelle", "Marguerite", "Marianne",
    "Marthe", "Mathilde", "Mauricette", "Micheline", "Monique",
    "Nadine", "Nadège", "Nathalie", "Nicole", "Noëlle",
    "Odette", "Paule", "Paulette", "Philomène", "Rachel",
    "Raymonde", "Renée", "Simone", "Sophie", "Suzanne",
    "Thérèse", "Valentine", "Véronique", "Yvonne", "Adélaïde",
    "Agnès", "Aimée", "Alexandrine", "Alix", "Amandine",
    "Antoinette", "Armelle", "Astrid", "Aubine", "Augustine",
    "Aurore", "Bénédicte", "Bernadette", "Bertille", "Blanche",
    "Brigitte", "Calixte", "Cécile", "Célestine", "Cendrine",
    "Cerise", "Christelle", "Christine", "Claire", "Claudette",
    "Claudine", "Clotilde", "Constance", "Corinne", "Cécile",
    "Danièle", "Delphine", "Diane", "Édith", "Éliane",
    "Émilie", "Esther", "Eugénie", "Eulalie", "Ève",
    "Fabienne", "Flore", "Gabrielle", "Gaëlle", "Geneviève",
    "Georgine", "Germaine", "Gisèle", "Hélène", "Henriette",
    "Honorine", "Hortense", "Isabelle", "Jacqueline", "Jeannine",
    "Joséphine", "Judith", "Laurence", "Liliane", "Madeleine",
    "Marcelle", "Marguerite", "Marianne", "Marthe", "Mauricette",
    "Micheline", "Monique", "Nadine", "Nadège", "Nathalie",
    "Nicole", "Noëlle", "Odette", "Paule", "Paulette",
    "Philomène", "Rachel", "Raymonde", "Renée", "Simone",
    "Sophie", "Suzanne", "Thérèse", "Valentine", "Véronique",
    "Yvonne", "Adélaïde", "Agnès", "Aimée", "Alexandrine", "Alix",
    "Amandine", "Antoinette", "Armelle", "Astrid", "Aubine",
    "Augustine", "Aurore", "Bénédicte", "Bernadette", "Bertille",
    "Blanche", "Brigitte", "Calixte", "Cendrine", "Cerise",
    "Christelle", "Clotilde", "Corinne", "Danièle", "Delphine",
    "Éloïse", "Émilie", "Esther", "Eugénie", "Eulalie",
    "Fabienne", "Flore", "Gabrielle", "Gaëlle", "Georgine",
    "Germaine", "Gisèle", "Hélène", "Henriette", "Honorine",
    "Hortense", "Isabelle", "Jacqueline", "Jeannine", "Joséphine",
    "Judith", "Laurence", "Liliane", "Madeleine", "Marcelle",
    "Marguerite", "Marianne", "Marthe", "Mauricette", "Micheline",
    "Monique", "Nadine", "Nadège", "Nathalie", "Nicole",
    "Noëlle", "Odette", "Paule", "Paulette", "Philomène",
    "Rachel", "Raymonde", "Renée", "Simone", "Sophie",
    "Suzanne", "Thérèse", "Valentine", "Véronique", "Yvonne",
    "Adélaïde", "Agnès", "Aimée", "Alexandrine", "Alix",
    "Amandine", "Antoinette", "Armelle", "Astrid", "Aubine",
    "Augustine", "Aurore", "Bénédicte", "Bernadette", "Bertille",
    "Blanche", "Brigitte", "Calixte", "Cendrine", "Cerise",
    "Christelle", "Clotilde", "Corinne", "Danièle", "Delphine",
    "Éloïse", "Émilie", "Esther", "Eugénie", "Eulalie",
    "Fabienne", "Flore", "Gabrielle", "Gaëlle", "Georgine",
    "Germaine", "Gisèle", "Hélène", "Henriette", "Honorine",
    "Hortense", "Isabelle", "Jacqueline", "Jeannine", "Joséphine",
    "Judith", "Laurence", "Liliane", "Madeleine", "Marcelle",
    "Marguerite", "Marianne", "Marthe", "Mauricette", "Micheline",
    "Monique", "Nadine", "Nadège", "Nathalie", "Nicole"
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 100; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex = Math.floor(Math.random() * textArray.length)
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
    typedTextSpan = document.querySelector(".typed-text");
    cursorSpan = document.querySelector(".cursor");
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
