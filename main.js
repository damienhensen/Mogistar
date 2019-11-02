// Debugging
let debug = true;

function berekenEind(vak) {
    // Krijg alle cijfers
    let totaalAantalCijfers = document.querySelectorAll('.cijfers__' + vak + 'Cijfer').length;

    // Alle cijfers array
    let cijfersOmEindCijferTeMaken = [];

    // Krijg eindcijfer
    let eindCijfer = document.getElementById('cijfers__' + vak + 'CijferEind');


    if (debug) console.log(totaalAantalCijfers);

    // Zet alle cijfers in array
    for (let i = 1; i <= totaalAantalCijfers; i++) {
        cijfersOmEindCijferTeMaken[i] = parseInt(document.getElementById('cijfers__' + vak + 'Cijfer'+i).innerHTML);
    }

    // Verwijder eerste waarde (undefined)
    cijfersOmEindCijferTeMaken.shift();

    if (debug) console.log(cijfersOmEindCijferTeMaken);

    if (debug) console.log(cijfersOmEindCijferTeMaken.reduce((a, b) => a + b, 0));

    // Bereken gemiddelde en rond het af
    let afgerondGemiddelde = (cijfersOmEindCijferTeMaken.reduce((a, b) => a + b, 0) / cijfersOmEindCijferTeMaken.length).toFixed(2);

    // eindcijfer = afgeronde gemiddelde
    eindCijfer.innerHTML = afgerondGemiddelde;
}

for (let i = 0; i < document.querySelectorAll('.cijfer__vak').length; i++) {
    berekenEind(document.querySelectorAll('.cijfer__vak')[i].textContent.toLowerCase());
}