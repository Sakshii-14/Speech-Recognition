window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', (e) => {
    console.log( (e.results));
    const transcripts = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
         .join('');

    console.log(transcripts);
    p.textContent=transcripts ;
    if(e.results[0].isFinal){
         p = document.createElement('p');
         words.appendChild(p);
        
    }
    

})
recognition.start();
recognition.addEventListener('end',recognition.start);