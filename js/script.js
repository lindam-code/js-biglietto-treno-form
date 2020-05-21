// Bottoni del form
var buttonGenera = document.getElementById('button_genera');
var buttonAnnulla = document.getElementById('button_annulla');

// Elementi del form
var formName = document.getElementById('form_name');
var formKm = document.getElementById('form_km');
var formEta = document.getElementById('form_eta')

// Elementi biglietto
var ticketName = document.getElementById('ticket_name');
var ticketPrice = document.getElementById('ticket_price');
var ticketOffer = document.getElementById('ticket_offer');

// Evento quando si clicca Genera
buttonGenera.addEventListener('click',
  function(){
    var formKmValue = formKm.value;
    var formEtaValue = formEta.value;


    // Calcolo prezzo biglietto intero
    var totalPrice = formKmValue * 0.21;
    var ticketOfferValue = 'Tariffa Standard';

    // Calcolo prezzo biglietto scontato
    if (formEtaValue == 'minorenne') {
      totalPrice = totalPrice - (totalPrice * 20 / 100);
      ticketOfferValue = 'Sconto minorenni';
    } else if (formEtaValue == 'over65') {
      totalPrice = totalPrice - (totalPrice * 40 / 100);
      ticketOfferValue = 'Sconto over 65';
    }

    // Compilazione elementi biglietto
    ticketName.innerHTML = formName.value
    ticketPrice.innerHTML = totalPrice.toFixed(2) + ' €';
    ticketOffer.innerHTML = ticketOfferValue;
  }
)

//Evento quando si clicca annulla
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
  }
)
