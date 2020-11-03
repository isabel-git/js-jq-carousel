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


  // metto a ciascun elemento un numero univoco
  $(function () {
    i = 1;
    $('.images').find('img').each(function () {
      $(this).attr('id', i);
      i++;
    });
  });

  $(function () {
    i = 5;
    $('.nav').find('i').each(function () {
      $(this).attr('id', i);
      i++;
    });
  });


  // circle click
  $('.nav > i').click(function () {
    var attivaCircle = $(".nav > i.active");
    var attivaImg = $("img.active");

    attivaCircle.removeClass("active");
    $(this).addClass("active");
    attivaImg.removeClass("active");

    var id = $(this).attr('id');
    console.log(id);

    // click non lineare, associa ai pallini in ordine numerico le immagini
    switch (id) {
      case "5":

        $('#1').addClass('active');
        console.log(id);
        break;

      case "6":
        $('#2').addClass('active');
        console.log(id);
        break;

      case "7":
        $('#3').addClass('active');
        console.log(id);
        break;

      case "8":
        $('#4').addClass('active');
        console.log(id);
    }

  });

  //   funzione next
  function controlNext(element) {
    var attiva = $(element + ".active");

    attiva.removeClass("active");

    // quando arrivo all'ultimo elemento allora
    if (attiva.hasClass("last")) {
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
    if (attiva.hasClass("first")) {
      //torna all'ultimo
      $(element + ".last").addClass("active");
    } else {// altrimenti
      //attiva quello successivo
      attiva.prev(element).addClass("active");
    }
  }

});