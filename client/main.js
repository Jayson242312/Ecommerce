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
        "preview": "https://essentials.pixfort.com/original/wp-content/uploads/sites/4/2020/02/skanews.wav"
      },
      {
        "id": 2,
        "name": "Electronic Dance Anthem",
        "genre":" Rock", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 128,
        "preview": "https://essentials.pixfort.com/original/wp-content/uploads/sites/4/2020/02/skanews.wav"
      },
      {
        "id": 3,
        "name": "Chill Ambient Vibes",
        "genre":" Pop", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 90,
        "preview": "https://essentials.pixfort.com/original/wp-content/uploads/sites/4/2020/02/skanews.wav"
      },
      {
        "id": 4,
        "name": "Rocking Guitar Riffs",
        "genre":" Jazz", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 140,
        "preview": "https://essentials.pixfort.com/original/wp-content/uploads/sites/4/2020/02/skanews.wav"
      },
      {
        "id": 5,
        "name": "Hip Hop Groove",
        "genre":" Jazz", 
        "image":"https://picsum.photos/seed/picsum/200/300",
        "bpm": 95,
        "preview": "https://essentials.pixfort.com/original/wp-content/uploads/sites/4/2020/02/skanews.wav"
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
      <audio controls>
        <source src="${beat.preview}" type="audio/mp3">
        Your browser does not support the audio element.
      </audio>
    `;

    // Append the beat element to the container
    beatsContainer.appendChild(beatElement);
  });
});