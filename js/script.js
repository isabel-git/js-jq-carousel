$(document).ready(function () {
    
    $(".next").click(nextImg);
    $(".prev").click(prevImg);
    $(document).keydown(keyBoard);

  // funzione per l'avanti
  function nextImg() {

    controlNext();
  }

  // funzione per precedenti
  function prevImg() {

    controlPrev()

  }

  function keyBoard(e) {
    
    // alla pressione del tasto destro
    if (e.keyCode === 39) {
        console.log(e.keyCode);

        controlNext();

      // alla pressione del tasto sinistro  
    } else if (e.keyCode === 37) {
        console.log(e.keyCode);
        
        controlPrev()   
    }    
};

  //   funzione next
  function controlNext() {
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

    //   funzione prev
  function controlPrev() {
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

 

