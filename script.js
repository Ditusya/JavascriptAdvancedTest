window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.interimResults = true;

var p = document.createElement('p');
var words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', function (e) {
   var transcript = Array.from(e.results)
       .map(function (result) {
           return result[0];
       })
       .map(function (result) {
           return result.transcript;
       }).join('');
   p.textContent = transcript;
   if(e.results[0].isFinal) {
       p = document.createElement('p');
       words.appendChild(p);
   }
});

recognition.addEventListener('end', recognition.start);
recognition.start();