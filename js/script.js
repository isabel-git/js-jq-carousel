$(document).ready(function () {
    
    $(".next").click(nextImg);
    $(".prev").click(prevImg);

    var left = 37, right = 39;
    $(document).keydown(keyPrev);
    // $(".prev").keydown(keyNext);


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

 
function keyPrev(e) {

    // alla pressione del tasto sinistro
    if (e.keyCode === 37) {
        console.log(e.keyCode);
        

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
        
    

    // alla pressione del tasto destro
    }else if (e.keyCode === 39) {
        console.log(e.keyCode);

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
  };
