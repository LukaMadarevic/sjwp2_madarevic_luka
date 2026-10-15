 Zad 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Zad 2
let n = Number(prompt("Upiši N:"));
let zbroj = 0;

for (let i = 1; i <= n; i++) {
    zbroj += i;
}
console.log("Zbroj:", zbroj);
console.log("Prosjek:", zbroj / n);
*/
/*
// Zad 3
let ocjene = [4, 5, 3, 4, 2];
let zbroj = 0;
let najveca = ocjene[0];

for (let i = 0; i < ocjene.length; i++) {
    zbroj += ocjene[i];

    if (ocjene[i] > najveca) {
        najveca = ocjene[i];
    }
}
console.log("Prosjek:", zbroj / ocjene.length);
console.log("Najveća ocjena:", najveca);
*/
/*
// Zad 4
let n = Number(prompt("Upiši N:"));
let parni = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i, "paran");
        parni++;
    } else {
        console.log(i, "neparan");
    }
}
console.log("Broj parnih:", parni);
*/
/*
// Zad 5
let brojevi = [12, 7, 25, 4, 19];
let najveci = brojevi[0];
let najmanji = brojevi[0];
for (let i = 1; i < brojevi.length; i++) {
    if (brojevi[i] > najveci) {
        najveci = brojevi[i];
    }

    if (brojevi[i] < najmanji) {
        najmanji = brojevi[i];
    }
}
console.log("Najveći:", najveci);
console.log("Najmanji:", najmanji);
*/
/*
// Zad 6
let brojevi = [10, 20, 30, 40, 50];
let trazeni = Number(prompt("Upiši broj:"));
let indeks = -1;
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] === trazeni) {
        indeks = i;
        break;
    }
}
if (indeks !== -1) {
    console.log("Pronađen na indeksu:", indeks);
} else {
    console.log("Broj nije pronađen.");
}
*/
/*
// Zad 7
function jePrijestupna(godina) {
    return godina % 400 === 0 ||
        (godina % 4 === 0 && godina % 100 !== 0);
}
let godina = Number(prompt("Upiši godinu:"));
if (jePrijestupna(godina)) {
    console.log("Prijestupna godina");
} else {
    console.log("Nije prijestupna godina");
}
*/
/*
// Zad 8
let tekst = prompt("Upiši tekst:").toLowerCase();
let samoglasnici = ["a", "e", "i", "o", "u"];
let broj = 0;
for (let i = 0; i < tekst.length; i++) {
    if (samoglasnici.includes(tekst[i])) {
        broj++;
    }
}
console.log("Broj znakova:", tekst.length);
console.log("Broj samoglasnika:", broj);
*/
/*
// Zad 9
function zbroji(a, b) {
    return a + b;
}
function oduzmi(a, b) {
    return a - b;
}
function pomnozi(a, b) {
    return a * b;
}
function podijeli(a, b) {
    if (b === 0) {
        return "Dijeljenje s nulom nije moguće";
    }
    return a / b;
}
let a = Number(prompt("Prvi broj:"));
let b = Number(prompt("Drugi broj:"));
console.log("Zbroj:", zbroji(a, b));
console.log("Razlika:", oduzmi(a, b));
console.log("Umnožak:", pomnozi(a, b));
console.log("Količnik:", podijeli(a, b));
*/
/*
// Zad 10
function izracunajBMI(masa, visina) {
    return masa / (visina * visina);
}
let masa = Number(prompt("Masa u kg:"));
let visina = Number(prompt("Visina u metrima:"));
if (masa > 0 && visina > 0) {
    console.log("BMI:", izracunajBMI(masa, visina).toFixed(2));
} else {
    console.log("Neispravan unos.");
}
*/
/*
// Zad 11
function okreniPolje(polje) {
    let novo = [];
    for (let i = polje.length - 1; i >= 0; i--) {
        novo.push(polje[i]);
    }
    return novo;
}
let brojevi = [1, 2, 3, 4, 5];
console.log(okreniPolje(brojevi));
*/
/*
// Zad 12
let rezultati = [45, 80, 65, 30, 90];
if (rezultati.length > 0) {
    let min = rezultati[0];
    let max = rezultati[0];
    let zbroj = 0;
    let prolazni = 0;
    for (let i = 0; i < rezultati.length; i++) {
        zbroj += rezultati[i];
        if (rezultati[i] < min) {
            min = rezultati[i];
        }
        if (rezultati[i] > max) {
            max = rezultati[i];
        }
        if (rezultati[i] >= 50) {
            prolazni++;
        }
    }
    console.log("Minimum:", min);
    console.log("Maksimum:", max);
    console.log("Prosjek:", zbroj / rezultati.length);
    console.log("Prolazni:", prolazni);
} else {
    console.log("Polje je prazno.");
}
*/
/*
// Zad 13
function fibonacci(n) {
    let niz = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            niz.push(0);
        } else if (i === 1) {
            niz.push(1);
        } else {
            niz.push(niz[i - 1] + niz[i - 2]);
        }
    }
    return niz;
}
let n = Number(prompt("Broj članova:"));
if (Number.isInteger(n) && n > 0) {
    console.log(fibonacci(n));
}
*/
/*
// Zad 14
function ukloniDuplikate(polje) {
    let novo = [];
    for (let i = 0; i < polje.length; i++) {
        if (!novo.includes(polje[i])) {
            novo.push(polje[i]);
        }
    }
    return novo;
}
let brojevi = [2, 5, 2, 7, 5, 9];
console.log(ukloniDuplikate(brojevi));
*/
/*
// Zad 15
let temperature = [18, 21, 24, 20, 17, 26, 22];
let zbroj = 0;
let min = temperature[0];
let max = temperature[0];
let iznad = 0;
for (let i = 0; i < temperature.length; i++) {
    zbroj += temperature[i];

    if (temperature[i] < min) {
        min = temperature[i];
    }

    if (temperature[i] > max) {
        max = temperature[i];
    }
}
let prosjek = zbroj / temperature.length;

for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > prosjek) {
        iznad++;
    }
}
console.log("Prosjek:", prosjek.toFixed(2));
console.log("Najniža:", min);
console.log("Najviša:", max);
console.log("Dani iznad prosjeka:", iznad);
*/
/*
// Zad 16
let pitanja = [
    "Koliko je 2 + 2?",
    "Koliko je 3 * 3?",
    "Koji je prvi indeks polja?"
];
let odgovori = ["4", "9", "0"];
let bodovi = 0;
function provjeriOdgovor(unos, tocan) {
    return unos.trim().toLowerCase() === tocan;
}
for (let i = 0; i < pitanja.length; i++) {
    let odgovor = prompt(pitanja[i]);

    if (odgovor !== null &&
        provjeriOdgovor(odgovor, odgovori[i])) {
        bodovi++;
    }
}
console.log("Bodovi:", bodovi);
console.log("Postotak:", bodovi / pitanja.length * 100 + "%");
*/
/*
// Zad 17
let zadaci = [];
function dodajZadatak(naziv) {
    if (naziv.trim() !== "") {
        zadaci.push(naziv);
    }
}
function prikaziZadatke() {
    if (zadaci.length === 0) {
        console.log("Nema zadataka.");
    } else {
        for (let i = 0; i < zadaci.length; i++) {
            console.log(i + ": " + zadaci[i]);
        }
    }
}
function ukloniZadatak(indeks) {
    if (indeks >= 0 && indeks < zadaci.length) {
        zadaci.splice(indeks, 1);
    } else {
        console.log("Neispravan indeks.");
    }
}
let izbor;
do {
    izbor = prompt(
        "1 - Dodaj\n2 - Prikaži\n3 - Ukloni\n0 - Izlaz"
    );
    if (izbor === "1") {
        let naziv = prompt("Naziv zadatka:");

        if (naziv !== null) {
            dodajZadatak(naziv);
        }
    } else if (izbor === "2") {
        prikaziZadatke();
    } else if (izbor === "3") {
        prikaziZadatke();

        if (zadaci.length > 0) {
            let indeks = Number(prompt("Indeks zadatka:"));

            if (Number.isInteger(indeks)) {
                ukloniZadatak(indeks);
            }
        }
    }
} while (izbor !== "0" && izbor !== null);
*/
