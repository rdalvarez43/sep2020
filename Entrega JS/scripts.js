$(document).ready(function(){
  /* store questions and answers */
  var q = [
    "Equipo ganador del mundial de Sudafrica 2010",
    "Maximo goleador de los mundiales",
    "Equipo con más titulos de mundiales",
    "¿Cuándo tuvo lugar la primera Copa Mundial de Fútbol?",
    "¿Dónde tendrá lugar la Copa Mundial de Fútbol de 2022?",
    "¿Cuántos mundiales de fútbol ha ganado España?",
    "En el Mundial de México'86, el argentino Diego Maradona anotó un gol con la mano, que es conocido como “la mano de Dios”. ¿Contra qué equipo marcó ese famoso tanto?",
    "¿Cómo se le llamó a la famosa victoria de Uruguay sobre Brasil en 1950, cuando los charrúas obtuvieron su segundo título mundial?",
    "¿Cuál es el jugador latino que, junto al alemán Lothar Matthaeus y el italiano Gianluggi Buffon, tiene más participaciones en este torneo?",
    "¿Dónde se disputó la Copa Mundial de 1998?",
    "La selección de fútbol de Cuba participó en una Copa del Mundo. ¿Sabes en qué año fue?",
    "¿Qué jugador marcó el gol decisivo del Mundial de 2014?",
    "¿Quién tiene el récord de más goles en un solo Mundial?",
    "¿Cuál es la mejor clasificación de Corea del Sur en la historia de los mundiales?",
    "¿A qué jugador le pegó un cabezazo Zinedine Zidane en la final del Mundial de 2006?",
    "¿Qué jugador marcó el gol decisivo en la final del Mundial 2010?",
    "¿Cuántos años tenía Pelé cuando jugó el Mundial de Suecia 58?",
    "¿A qué equipo ganó Italia en la final del Mundial de 1934 celebrado en Italia?",
    "¿Qué jugador italiano falló el penalti definitivo en la final del Mundial de 1994?",
    "En el mundial de México 1986, Dinamarca realizó una brillante fase de grupos, ganando todos los partidos. En uno de estos partidos, ganó a Uruguay por 6-1. ¿Cuántos goles marcó Laudrup en dicho partido?"
  ];
  var a = [
    "Italia", "España", "Alemania", "Holanda",
    "Ronaldo", "Cristiano Ronaldo", "Miroslav Klose", "Just Fontaine",
    "Alemania", "Brasil", "Italia", "Argentina",
    "1920", "1930", "1934", "1928",
    "Australia", "Suiza", "Francia", "Qatar",
    "0", "1", "2", "4",
    "España", "Italia", "Inglaterra", "Brasil",
    "El triunfo del siglo", "El matabrasileirao", "El Maracanazo", "El Chutazo",
    "Pelé (Brasil)", "Antonio Carbajal (México)", "Javier Zanetti (Argentina)", "Hugo Sánchez (México)",
    "Francia", "Italia", "Alemania", "Corea y Japon",
    "Uruguay 1930", "Suiza 1954", "Francia 1938", "Sudafrica 2010",
    "Mario Gotze", "Toni Kroos", "Thomas Muller", "Miroslav Klose",
    "Ronaldo", "Just Fontaine", "Pele", "Gerd Muller",
    "3", "8", "4", "2",
    "Cannavaro", "Materazzi", "Camoranesi", "Gattuso",
    "Iniesta", "Torres", "Puyol", "Villa",
    "18", "17", "20", "21",
    "Uruguay", "Francia", "Brasil", "Checoslovaquia",
    "Baggio", "Baresi", "Donadoni", "Maldini",
    "4", "2", "1", "3"
  ];
  var qCount = 0;
  var aCount = 0;
  var score = 0;
  var clickCount = 0;
  /* store quotes and images */
  var quote = ["No sabes nada.", "Hay que leer un poco más sobre el futbol", "Un poco más y lo logras", "Eres el mejor"];
  var pic = ["url('https://th.bing.com/th/id/OIP.JefjEKIVR5IaaRT58lZuggHaEI?w=328&h=183&c=7&o=5&pid=1.7')", "url('https://th.bing.com/th/id/OIP.slvUSuaLyPJhqUFzQMGdTwHaEK?w=293&h=180&c=7&o=5&pid=1.7')", "url('https://th.bing.com/th/id/OIP.tgsJZL-OZWECh7LgvexmdwHaEE?w=314&h=180&c=7&o=5&pid=1.7')", "url('https://th.bing.com/th/id/OIP.j2LANB9x8iFrFtJD2SM8PgHaFB?w=265&h=180&c=7&o=5&pid=1.7')"];
  /* hide main quiz and quiz result */
  $('#question').hide();
  $('.answer').hide();
  $('#tabContainer').hide();
  $('#quizEnd').hide();
  /* Start Quiz click */
  $('#welcome').click(function(){
    $(this).fadeOut(500, function(){
      $('#question').fadeIn(500);
      $('.answer').fadeIn(500);
      $('#tabContainer').fadeIn(500);
    })
  })
  /* display questions and answers and score*/
  $('#question').text(q[qCount]);
  $('#answer1').text(a[aCount]);
  $('#answer2').text(a[aCount + 1]);
  $('#answer3').text(a[aCount + 2]);
  $('#answer4').text(a[aCount + 3]);
  $('#scoreNum').text(score);
  /* answering questions & update score */
  $('.answer').click(function(){
    clickCount++;
    if ($(this).text() === a[1] || $(this).text() === a[6] || $(this).text() === a[9] || $(this).text() === a[13] || $(this).text() === a[19] || $(this).text() === a[21] || $(this).text() === a[26] || $(this).text() === a[30] || $(this).text() === a[33] || $(this).text() === a[36] || $(this).text() === a[42] || $(this).text() === a[44] || $(this).text() === a[49] || $(this).text() === a[54] || $(this).text() === a[57] || $(this).text() === a[60] || $(this).text() === a[65] || $(this).text() === a[71] || $(this).text() === a[72] || $(this).text() === a[78]) {
      $(this).css("background", "#337147");
      if (clickCount === 1) {
        score++;
        $('#scoreNum').text(score);
      }
    } else {
      $(this).css("background", "#BE2625");
    }
  })
  /* iterateing through questions */
  $('#next').click(function(){
    clickCount = 0;
    $('.answer').css("background", "linear-gradient(120deg, burlywood, peru, tan, burlywood, peru)");
    if (qCount < q.length - 1) {
      qCount++;
      aCount+=4;
      $('#question').text(q[qCount]);
      $('#answer1').text(a[aCount]);
      $('#answer2').text(a[aCount + 1]);
      $('#answer3').text(a[aCount + 2]);
      $('#answer4').text(a[aCount + 3]);
      if (qCount === q.length - 1) {
        $('#next').text("See Result!")
        /* end of quiz final score and start over */
  switch(score) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      $('#charQuote').text(quote[0]);
      $('#charPic').css("background-image", pic[0]);
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      $('#charQuote').text(quote[1]);
      $('#charPic').css("background-image", pic[1]);
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      $('#charQuote').text(quote[2]);
      $('#charPic').css("background-image", pic[2]);
      break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      $('#charQuote').text(quote[3]);
      $('#charPic').css("background-image", pic[3]);
      break;
  }
      }
    } else {
      $('#question').fadeOut(500);
      $('.answer').fadeOut(500);
      $('#tabContainer').fadeOut(500);
      $('#quizEnd').delay(500).fadeIn(500);
    }
  })
  $('#startOver').click(function(){
    $('#welcome').delay(500).fadeIn(500);
    $('#quizEnd').fadeOut(500);
    /* reset counters and displays */
    qCount -= qCount;
    aCount -= aCount;
    score -= score;
    $('#question').text(q[qCount]);
    $('#answer1').text(a[aCount]);
    $('#answer2').text(a[aCount + 1]);
    $('#answer3').text(a[aCount + 2]);
    $('#answer4').text(a[aCount + 3]);
    $('#next').text("Next");
  })
})