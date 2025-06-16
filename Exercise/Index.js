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
