console.log('Hallo Welt');
var trainer = 'Lucas';
// ohne :string[] hätten wir eine Liste, die wir
// niemals befüllen könnten
var trainerListe = ['Shamila'];
// console.log(trainerListe)
// Elemnt an Array HINTEN anhängen
trainerListe.push('Lucas');
// console.log(trainerListe)
// Element an Array VORNE anhängen
trainerListe.unshift('Galina');
console.log(trainerListe);
trainerListe.push('Benni');
// trainerListe.push('1')
// Wir können keine Zahlen anfügen
// trainerListe.push(1)
console.log(trainerListe);
var letzteElement = trainerListe.pop();
var ersteElement = trainerListe.shift();
console.log(ersteElement, letzteElement);
console.log(trainerListe);
// console.log('tsc -w app.ts')
// das Pipe-Zeichen "|" sagt, dass wir Daten vom Typ
// number und string
var meineVariable = 50; // oder 'fünzig'
meineVariable = 'fünfzig';
// meineVariable = false
// entweder ist es ein array von zahlen (number[]) ODER
// es ist eine array von strings (string[])
var meinArray1 = [];
// in dem array können wir numbers und strings
// gleichzeitig speichern
var meinArray2 = [];
meinArray1 = [12, 50, 80 /*, 'Asadul'*/]; // Fehler bei Asadul
meinArray1 = ['Asadul', 'Lucas' /*, 20*/]; //Fehler bei 20
meinArray2 = [12, 50, 80, 'Asadul', 'Lucas', 80];
var autoLyne = {
    typ: 'Model S',
    hersteller: 'Tesla',
    preis: 45000,
    besitzer: 'Lyne'
};
var autoGülcan = {
    typ: 'Mustang',
    hersteller: 'Ford',
    preis: 65000,
    besitzer: 'Gülcan'
};
var autoMarc = {
    typ: 'Scooter Mi 4',
    hersteller: 'xiaomi',
    preis: 449,
    besitzer: 'Marc'
};
var autoArray = [];
