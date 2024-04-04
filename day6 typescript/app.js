// das Ausrufezeichen weist Typescript an, dass wir
// uns sicher sind, dass es sich hier nicht um NULL
// handelt
// mittels 'as' können wir Typescript versichern,
// dass es sich um einen bestimmten Typen handeln wird
var farbenInput = document.getElementById('farbe');
// console.log(farbenInput.value)
// Wenn ich auf den Knopf klicke, dann soll in der Konsole
// der Wert des TextInputs ausgegeben werden
// Ich ziehe mir die Form aus dem Dokument; Variante 1
var form = document.getElementById('form');
// Ich ziehe mir die Form aus dem Dokument; Variante 2
var form1 = document.querySelector('form');
// wenn wir auf den Knopf drücken, wird ein submit-Event
// ausgelöst. Wir hören, ob ein solches Event ausgelöst wird.
// Wenn das Event ausgelöst wird, dann lesen wir den Wert
// aus der Eingabe aus und geben sie aus.
var obst = document.getElementsByName('obst');
var groesse = document.getElementById('groesse');
form.addEventListener('submit', function (e) {
    // preventDefault verhindert das automatische
    // neuladen der kompletten Seite
    e.preventDefault();
    console.log(farbenInput.value);
    console.log(groesse.value);
    // const obst1 = obst[1] as HTMLInputElement
    // console.log(obst1.value, obst1.checked)
    var angewähltesObst = [];
    for (var i = 0; i < obst.length; i = i + 1 /* i++ ODER i += 1 */) {
        var aktuellesObst = obst[i];
        console.log(aktuellesObst.value, aktuellesObst.checked);
    }
    obst.forEach(function (aktuellesObst) {
        if (aktuellesObst.checked === true) {
            angewähltesObst.push(aktuellesObst.value);
        }
    });
    console.log(angewähltesObst);
});
var farbenInput = document.getElementById('farbe');
var form = document.getElementById('form');
var groesse = document.getElementById('groesse');
var obst = document.getElementsByName('obst');
var ergebnis = document.getElementById('ergebnis');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ausgewaehlteObstsorten = [];
    var anzahlObstsorten = 0;
    // Checkt Obstsorten welche ausgewählt sind
    obst.forEach(function (aktuellesObst) {
        if (aktuellesObst.checked) {
            ausgewaehlteObstsorten.push(aktuellesObst.value);
            anzahlObstsorten++;
        }
    });
    // Gibt das Ergebnis aus
    ergebnis.innerHTML = "\n    Anzahl der Obstsorten: ".concat(anzahlObstsorten, " <br>\n    Gr\u00F6\u00DFe: ").concat(groesse.value, " <br>\n    Farbe: ").concat(farbenInput.value, " <br>\n    Obstsorten: ").concat(ausgewaehlteObstsorten.join(', '));
});
