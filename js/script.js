// ELEMENTI DEL FORM
// Bottoni
var buttonGenera = document.getElementById('button_genera');
var buttonAnnulla = document.getElementById('button_annulla');

// Input
var formName = document.getElementById('form_name');
var formKm = document.getElementById('form_km');
var formEta = document.getElementById('form_eta')

// ELEMENTI DEL BIGLIETTO
var ticket = document.getElementById('hidden_container');
var ticketName = document.getElementById('ticket_name');
var ticketPrice = document.getElementById('ticket_price');
var ticketOffer = document.getElementById('ticket_offer');
var ticketCarriage = document.getElementById('ticket_carriage');
var ticketCode = document.getElementById('ticket_code');

// EVENTI QUANDO SI CLICCA IL BOTTONE GENERA
buttonGenera.addEventListener('click',
  function(){
    // Calcolo biglietto ed eventuali offerte
    var formKmValue = formKm.value;
    var formEtaValue = formEta.value;

    // Prezzo biglietto intero
    var totalPrice = formKmValue * 0.21;
    var ticketOfferValue = 'Tariffa Standard';

    // Prezzo biglietto scontato
    if (formEtaValue == 'minorenne') {
      totalPrice = totalPrice - (totalPrice * 20 / 100);
      ticketOfferValue = 'Sconto minorenni';
    } else if (formEtaValue == 'over65') {
      totalPrice = totalPrice - (totalPrice * 40 / 100);
      ticketOfferValue = 'Sconto over 65';
    }

    // Associazione di una casearrozza
    randomCarriage = Math.floor(Math.random() * 10 + 1);

    // Associazione un codice univoco al biglietto
    randomCode = Math.floor(Math.random() * 1000 + 1);


    // Compilazione elementi biglietto
    ticketName.innerHTML = formName.value;
    ticketPrice.innerHTML = totalPrice.toFixed(2) + ' €';
    ticketOffer.innerHTML = ticketOfferValue;
    ticketCarriage.innerHTML = randomCarriage;
    ticketCode.innerHTML = randomCode;

    // Produzione biglietto
    ticket.className = 'visible';
  }
)

// EVENTI QUANDO SI CLICCA IL BOTTONE ANNULLA
buttonAnnulla.addEventListener('click',
  function(){
    // Annullamento valori nome
    formName.value = '';
    ticketName.innerHTML ='';

    // Annullamento valori km
    formKm.value = '';

    // Annullamento valori prezzo
    ticketPrice.innerHTML = '';

    // Annulamento valori eta
    formEta.value = 'minorenne';

    // Annullamento valori offerta
    ticketOffer.innerHTML = '';

    // Annullamento associazione di una carrozza
    ticketCarriage.innerHTML = '';

    // Annullamento associazione di codice univoco al biglietto
    ticketCode.innerHTML = '';

    // Nascondi il biglietto annullato
    ticket.className = 'hidden';
  }
)
