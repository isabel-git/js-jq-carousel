$(document).ready(function () {
    
    $(".next").click(nextImg);
    $(".prev").click(prevImg);


  // funzione per l'avanti
  function nextImg() {

    var imgAttiva = $("img.active");

    imgAttiva.removeClass("active");

    // se dove sono è l'ultima img allora
    if (imgAttiva.hasClass("last")){
      //torna alla prima img
      $("img.first").addClass("active");
    } else {// altrimenti
      //fai diventare attiva l'immagine successiva
      imgAttiva.next("img").addClass("active");
    }

  }

  // funzione per precedenti
  function prevImg() {

    var imgAttiva = $("img.active");

    imgAttiva.removeClass("active");

    // se dove sono è la prima img allora
    if (imgAttiva.hasClass("first")){
      //torna all'ultima img
      $("img.last").addClass("active");
    } else {// altrimenti
      //fai diventare attiva l'immagine successiva
      imgAttiva.prev("img").addClass("active");
    }

  }

});

 
