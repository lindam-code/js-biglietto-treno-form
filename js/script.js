// ELEMENTI DEL FORM
// Bottoni
var buttonGenera = document.getElementById('button_genera');
var buttonAnnulla = document.getElementById('button_annulla');

// Input
var formName = document.getElementById('form_name');
var formKm = document.getElementById('form_km');
var formEta = document.getElementById('form_eta')

// ELEMENTI DEL BIGLIETTO
var ticketContainer = document.getElementById('hidden_container');
var ticketName = document.getElementById('ticket_name');
var ticketPrice = document.getElementById('ticket_price');
var ticketOffer = document.getElementById('ticket_offer');
var ticketCarriage = document.getElementById('ticket_carriage');
var ticketCode = document.getElementById('ticket_code');

// MESSAGGIO ERRORE
var errorMessage = document.getElementById('error_container');

// EVENTI QUANDO SI CLICCA IL BOTTONE GENERA
buttonGenera.addEventListener('click',
  function(){
    // Elementi per calcolo biglietto ed eventuali offerte
    var formKmValue = parseInt(formKm.value);
    var formEtaValue = formEta.value;
    var nameValue = formName.value;

    if (isNaN(formKmValue) || nameValue.length == 0 || formEtaValue == 'default')   {
      errorMessage.className = 'visible';
      ticketContainer.className = 'hidden';
    } else {

      // Nascondo messaggio di errore
      errorMessage.className = 'hidden';

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

      // Associazione di un numero carrozza
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
      ticketContainer.className = 'visible';
    }

  }
)

// EVENTI QUANDO SI CLICCA IL BOTTONE ANNULLA
buttonAnnulla.addEventListener('click',
  function(){
    // Annullemanto dei valori di input
    formName.value = '';
    formKm.value = '';
    formEta.value = 'default';

    // Annullamento dei valori nel biglietto
    ticketName.innerHTML ='';
    ticketPrice.innerHTML = '';
    ticketOffer.innerHTML = '';
    ticketCarriage.innerHTML = '';
    ticketCode.innerHTML = '';

    // Nascondi il biglietto annullato
    ticketContainer.className = 'hidden';

    // Nascondi messaggio errore
    errorMessage.className = 'hidden';
  }
)
