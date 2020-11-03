$(document).ready(function () {

  $(".next").click(nextImg);
  $(".prev").click(prevImg);
  $(document).keydown(keyBoard);

  // funzione per l'avanti
  function nextImg() {

    var attiva = $("img.active");

    attiva.removeClass("active");

    // quando arrivo all'ultimo img allora
    if (attiva.hasClass("last")) {
      //torna al primo img
      $("img.first").addClass("active");
    } else {// altrimenti
      //attiva quello successivo
      attiva.next("img").addClass("active");
    }

  }

  // funzione per precedenti
  function prevImg() {

    var attiva = $("img.active");
    console.log(attiva);

    attiva.removeClass("active");

    // quando arriva al primo img allora
    if (attiva.hasClass("first")) {
      //torna all'ultimo img
      $("img.last").addClass("active");
    } else {// altrimenti
      //attiva quello successivo
      attiva.prev("img").addClass("active");
    }

  }

});




