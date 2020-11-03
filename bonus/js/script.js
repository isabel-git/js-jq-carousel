$(document).ready(function () {
    
    $(".next").click(nextImg);
    $(".prev").click(prevImg);
    $(document).keydown(keyBoard);

  // funzione per l'avanti
  function nextImg() {


    // arrow right
    controlNext("img");

    // circle right
    controlNext(".nav > i");  
  }

  // funzione per precedenti
  function prevImg() {

    // arrow left
    controlPrev("img");

    // circle left
    controlPrev(".nav > i");

  }

//   TASTIERA
  function keyBoard(e) {
    
    // alla pressione del tasto destro
    if (e.keyCode === 39) {
        console.log(e.keyCode);

        // arrow right
        controlNext("img");

        // circle right
        controlNext(".nav > i"); 


      // alla pressione del tasto sinistro  
    } else if (e.keyCode === 37) {
        console.log(e.keyCode);
        
        // arrow left
        controlPrev("img");

        // circle left
        controlPrev(".nav > i");
    }    
  };

  //   funzione next
  function controlNext(element) {
    var attiva = $(element + ".active");

    attiva.removeClass("active");

    // quando arrivo all'ultimo elemento allora
    if (attiva.hasClass("last")){
      //torna al primo
      $(element + ".first").addClass("active");
    } else {// altrimenti
      //attiva quello successivo
      attiva.next(element).addClass("active");
    }
  }

    //   funzione prev
  function controlPrev(element) {
    var attiva = $(element + ".active");
    console.log(attiva);

    attiva.removeClass("active");

    // quando arriva al primo elemento allora
    if (attiva.hasClass("first")){
      //torna all'ultimo
      $(element + ".last").addClass("active");
    } else {// altrimenti
      //attiva quello successivo
      attiva.prev(element).addClass("active");
    }   
  }

});

 

