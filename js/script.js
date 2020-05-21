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

// Evento quando si clicca Genera
buttonGenera.addEventListener('click',
  function(){
    var formKmValue = formKm.value;
    var formEtaValue = formEta.value;

    // Calcolo prezzo biglietto intero
    var totalPrice = formKmValue * 0.21;

    // Calcolo prezzo biglietto scontato
    if (formEtaValue == 'minorenne') {
      totalPrice = totalPrice - (totalPrice * 20 / 100);
    } else if (formEtaValue == 'over65') {
      totalPrice = totalPrice - (totalPrice * 40 / 100);
    }


    // Compilazione elementi biglietto
    ticketName.innerHTML = formName.value
    ticketPrice.innerHTML = totalPrice + ' €';
  }
)

//Evento quando si clicca annulla
buttonAnnulla.addEventListener('click',
  function(){
    formName.value = '';
    ticketName.innerHTML ='';
    formKm.value = '';
    ticketPrice.innerHTML = '';
  }
)
