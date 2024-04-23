window.onload = function() {
    var audio = document.getElementById("background-audio");
    var button = document.getElementById("healing-button");
    var videoContent = document.getElementById("video-content");
    var prelude = document.getElementById("prelude");
  
    button.onclick = function() {
      audio.pause(); // Pausa a música ao clicar no botão
      prelude.style.display = "none"; // Esconde o conteúdo de introdução
      videoContent.style.display = "block"; // Mostra o conteúdo do vídeo
    };
  };
  