// Bottoni del form
var buttonGenera = document.getElementById('button_genera');
var buttonAnnulla = document.getElementById('button_annulla');

// Elementi del form
var formName = document.getElementById('form_name');
var formKm = document.getElementById('form_km');
var formEta = document.getElementById('form_eta')


// Elementi biglietto
var ticketName = document.getElementById('ticket_name');

// Evento quando si clicca Genera
buttonGenera.addEventListener('click',
  function(){
    ticketName.innerHTML = formName.value
  }
)

//Evento quando si clicca annulla
buttonAnnulla.addEventListener('click',
  function(){
    nome.value = '';
    ticketName.innerHTML ='';

  }
)
