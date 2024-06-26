// das Ausrufezeichen weist Typescript an, dass wir
// uns sicher sind, dass es sich hier nicht um NULL
// handelt

// mittels 'as' können wir Typescript versichern,
// dass es sich um einen bestimmten Typen handeln wird

const farbenInput
  = document.getElementById('farbe')! as HTMLInputElement

// console.log(farbenInput.value)

// Wenn ich auf den Knopf klicke, dann soll in der Konsole
// der Wert des TextInputs ausgegeben werden

// Ich ziehe mir die Form aus dem Dokument; Variante 1
const form
  = document.getElementById('form')! as HTMLFormElement

// Ich ziehe mir die Form aus dem Dokument; Variante 2
const form1
  = document.querySelector('form')! as HTMLFormElement
// wenn wir auf den Knopf drücken, wird ein submit-Event
// ausgelöst. Wir hören, ob ein solches Event ausgelöst wird.
// Wenn das Event ausgelöst wird, dann lesen wir den Wert
// aus der Eingabe aus und geben sie aus.

const obst = document.getElementsByName('obst') as NodeListOf<HTMLInputElement>

const groesse = document.getElementById('groesse') as HTMLSelectElement

form.addEventListener('submit', (e) => {
  // preventDefault verhindert das automatische
  // neuladen der kompletten Seite
  e.preventDefault()
  console.log(farbenInput.value)
  console.log(groesse.value)

  // const obst1 = obst[1] as HTMLInputElement

  // console.log(obst1.value, obst1.checked)

  let angewähltesObst: string[] = []

  for (let i = 0; i < obst.length; i = i + 1 /* i++ ODER i += 1 */) {
    const aktuellesObst = obst[i]
    console.log(aktuellesObst.value, aktuellesObst.checked)
  }

  obst.forEach(aktuellesObst => {
    if (aktuellesObst.checked === true) {
      angewähltesObst.push(aktuellesObst.value)
    }
  })

  console.log(angewähltesObst)

})

type Obstschüssel = {
  groesse: string,
  farbe: string,
  sorten: string[]
}

const farbenInput = document.getElementById('farbe')! as HTMLInputElement;
const form = document.getElementById('form')! as HTMLFormElement;
const groesse = document.getElementById('groesse') as HTMLSelectElement;
const obst = document.getElementsByName('obst') as NodeListOf<HTMLInputElement>;
const ergebnis = document.getElementById('ergebnis') as HTMLParagraphElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const ausgewaehlteObstsorten: string[] = [];
  let anzahlObstsorten = 0;

  // Checkt Obstsorten welche ausgewählt sind
  obst.forEach(aktuellesObst => {
    if (aktuellesObst.checked) {
      ausgewaehlteObstsorten.push(aktuellesObst.value);
      anzahlObstsorten++;
    }
  });

  // Gibt das Ergebnis aus
  ergebnis.innerHTML = `
    Anzahl der Obstsorten: ${anzahlObstsorten} <br>
    Größe: ${groesse.value} <br>
    Farbe: ${farbenInput.value} <br>
    Obstsorten: ${ausgewaehlteObstsorten.join(', ')}`;
});