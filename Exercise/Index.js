// vypiš seznam čísel 1-10

const ul = document.getElementById("myList");

for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  ul.appendChild(li);
}

// ________________________________________________________

// vypiš 5x nadpis Knock
const knock = document.getElementById("knock");

for (let i = 0; i < 5; i++) {
  const paragraph = document.createElement("p");

  paragraph.textContent = "Knock";
  knock.appendChild(paragraph);
}

// ________________________________________________________

// NÁSOBILKA:
const table = document.getElementById("table");

for (let i = 1; i <= 10; i++) {
  const tableRow = document.createElement("tr");
  //   nový řádek

  for (let j = 1; j < 10; j++) {
    const tableData = document.createElement("td");
    // buňka v řádku
    tableData.textContent = i * j;
    table.appendChild(tableData);
  }

  table.appendChild(tableRow);
  //   přidání celého řádku do tabulky
}

// _____________________________________

// cyklus FOREACH
// úkol: vypiš čísla pole do stránky
const cyklus = document.querySelector(".cyklus-forEach");
const cisla = [1, 2, 3, 4, 5];

cisla.forEach(function (cislo) {
  const vypisCyklus = document.createElement("p");
  vypisCyklus.textContent = cislo;
  cyklus.appendChild(vypisCyklus);
});

// _________________________________________

// úkol 2: vypiš jména lidí do stránky s pozdravem

const names = ["Petr", "Barbora", "Filip", "Matyáš", "Lukáš"];

names.forEach(function (name) {
  const paragraph = document.createElement("p");
  paragraph.textContent = `Ahoj ${name}, jak se dneska máš?`;
  cyklus.appendChild(paragraph);
});

// úkol 3: sečtení všech čísel v poli

const ulList = document.getElementById("number-list");
const numbers = [12, 13, 14, 15, 16, 17, 18];
let soucet = 0;

numbers.forEach(function (number) {
  const numberList = document.createElement("li");
  soucet += number;
  numberList.textContent = soucet;
  ulList.appendChild(numberList);
});

// ___________________________________________________
// úkol 4: přístup k indexu prvku
const fruitList = document.getElementById("fruit-list");
const fruits = ["jablko", "hruška", "banán", "pomeranč", "citron"];

fruits.forEach(function (fruit, index) {
  const fruitParagraph = document.createElement("p");
  fruitParagraph.textContent = `Ovoce číslo ${index} je ${fruit}.`;
  fruitList.appendChild(fruitParagraph);
});

// ______________________________________________________

// úkol 5: převod textu na velká písmena
const poleJmen = document.getElementById("pole-jmen");
const jmena = ["barbora", "lenka", "anna", "josefína"];

jmena.forEach(function (jmeno) {
  const pridejJmeno = document.createElement("p");
  pridejJmeno.textContent = `Jméno ${jmeno} jsme převedla na velká písmena: ${jmeno.toUpperCase()}`;
  poleJmen.appendChild(pridejJmeno);
});
