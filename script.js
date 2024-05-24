const favSongs = document.querySelectorAll('.fav-song');

favSongs.forEach(function(favSong) {
  const playBtn = favSong.querySelector('i');
  const audio = new Audio();
  let isPlaying = false;

  favSong.addEventListener('click', function() {
    if (isPlaying) {
      audio.pause();
      playBtn.classList.remove('fa-pause');
      playBtn.classList.add('fa-play');
    } else {
      audio.play();
      playBtn.classList.remove('fa-play');
      playBtn.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener('ended', function() {
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
    isPlaying = false;
  });

  if (favSong.textContent.trim() === "18 - One Direction") {
    audio.src = './src/song/18.mp3';
  } else if (favSong.textContent.trim() === "A Thousand Years - James Arthur") {
    audio.src = './src/song/a thousand years.mp3';
  } else if (favSong.textContent.trim() === "In The Stars - Benson Boone") {
    audio.src = './src/song/in the stars.mp3';
  } else if (favSong.textContent.trim() === "Serena - For Revenge") {
    audio.src = './src/song/serena.mp3';
  }
});
 /*Swal.fire({
   title: 'Selamat Datang!',
   text: 'Gunakan Tema Gelap Agar Halaman Terlihat Keren.',
   imageUrl: 'https://telegra.ph/file/69b1cdd6be6293413e75e.jpg',
   imageWidth: 200,
   imageHeight: 200,
   timer: 25000,
   imageAlt: 'Custom Image',
   showCancelButton: false,
   showConfirmButton: true,
   confirmButtonText: 'Siap',
   scrollbarPadding: true,
   customClass: {
     text: 'custom-content-class',
     confirmButton: 'custom-button-class'
   }
 });
 */
 // animatoin
 setTimeout(function() {
       var elements = document.querySelectorAll('.fade-in');
       elements.forEach(function(element) {
         element.classList.add('fade-out');
       });
     }, 2000);
 setTimeout(function() {
       var elements = document.querySelectorAll('.fade-in1');
       elements.forEach(function(element) {
         element.classList.add('fade-out');
       });
     }, 2000);
 setTimeout(function() {
       var elements = document.querySelectorAll('.fade-in2');
       elements.forEach(function(element) {
         element.classList.add('fade-out');
       });
     }, 2000);
 setTimeout(function() {
       var elements = document.querySelectorAll('.fade-in3');
       elements.forEach(function(element) {
         element.classList.add('fade-out');
       });
     }, 2000);
 setTimeout(function() {
       var elements = document.querySelectorAll('.fade-in4');
       elements.forEach(function(element) {
         element.classList.add('fade-out');
       });
     }, 2000);
 setTimeout(function() {
       var elements = document.querySelectorAll('.zoom');
       elements.forEach(function(element) {
         element.classList.add('fade-out');
       });
     }, 2000);
    