import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'


const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#4F4A85',
  progressColor: '#383351',
  url: '/audio.mp3',
})

const toggleBtn= document.querySelector('.toggle-btn');
const toggleBtnIcon= document.querySelector('.toggle-btn i');
const dropDownMenu= document.querySelector('.dropdown_menu');

toggleBtn.onclick=function(){
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList= isOpen? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

document.addEventListener('DOMContentLoaded', function () {
  // Sample JSON data
  const jsonData = {
    "beats": [
      {
        "id": 1,
        "name": "Groovy Jazz Fusion",
        "genre":" Jazz", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 120,
        "preview": "/images/skanews.wav"
      },
      {
        "id": 2,
        "name": "Electronic Dance Anthem",
        "genre":" Rock", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 128,
        "preview": "/images/skanews.wav"
      },
      {
        "id": 3,
        "name": "Chill Ambient Vibes",
        "genre":" Pop", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 90,
        "preview": "/images/skanews.wav"
      },
      {
        "id": 4,
        "name": "Rocking Guitar Riffs",
        "genre":" Jazz", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 140,
        "preview": "/images/skanews.wav"
      },
      {
        "id": 5,
        "name": "Hip Hop Groove",
        "genre":" Jazz", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 95,
        "preview": "/images/skanews.wav"
      }
    ]
  };

  // Get the container element
  const beatsContainer = document.getElementById('beats-container');

  // Loop through the beats and generate HTML for each
  jsonData.beats.forEach(beat => {
    const beatElement = document.createElement('div');
    beatElement.classList.add('beat');

    // Add beat details to the HTML
    beatElement.innerHTML = `
      <h3>${beat.name}</h3>
      <p>BPM: ${beat.bpm}</p>
      <img src="${beat.image}" alt="Beat image">
      <p>Genre: ${beat.genre}</p>
      <div class="track">
      <i class="fa-solid fa-play"></i>  
      <div id="waveform"></div>
      </div>
    `;



    // Append the beat element to the container
    beatsContainer.appendChild(beatElement);
  });
});