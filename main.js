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
        cijfersOmEindCijferTeMaken[i] = parseInt(document.getElementById('cijfers__' + vak + 'Cijfer' + i).innerHTML);
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

// Laatste cijfers
console.log(document.getElementsByClassName('dag__knop')[0]);

document.getElementsByClassName('dag__knop')[0].onclick = ()=>{
    document.getElementsByClassName('actuele-dag-overzicht-item')[0].style.display = 'flex';
    document.getElementsByClassName('back_button')[0].style.display = 'block';
    document.getElementsByClassName('laatste-cijfer')[0].style.display = 'none';
    document.getElementsByClassName('week-en-dag-overzicht')[0].style.display = 'none';
}

document.getElementsByClassName('week-overzicht')[0].onclick = ()=>{
    document.getElementsByClassName('actuele-week-overzicht-item')[0].style.display = 'flex';
    document.getElementsByClassName('back_button')[0].style.display = 'block';
    document.getElementsByClassName('laatste-cijfer')[0].style.display = 'none';
    document.getElementsByClassName('week-en-dag-overzicht')[0].style.display = 'none';
}

document.getElementsByClassName('back_button')[0].onclick = ()=>{
    document.getElementsByClassName('laatste-cijfer')[0].style.display = 'initial';
    document.getElementsByClassName('week-en-dag-overzicht')[0].style.display = 'grid';
    document.getElementsByClassName('actuele-week-overzicht-item')[0].style.display = 'none';
    document.getElementsByClassName('actuele-dag-overzicht-item')[0].style.display = 'none';
    document.getElementsByClassName('back_button')[0].style.display = 'none';
}