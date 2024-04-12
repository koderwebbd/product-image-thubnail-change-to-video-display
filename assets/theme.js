/*Working by KoderWeb*/

const videowrap = document.querySelectorAll('.video-wrapping');
// const productVideo = videowrap.querySelector('video');
// const play = videowrap.querySelector('#play_icon');
// const paused = videowrap.querySelector('#paused_icon');

videowrap.forEach( (videowrap) =>{
  //console.log(videowrap)
    const productVideo = videowrap.querySelector('video');
    const play_button = videowrap.querySelector('#play_icon');
    const paused_button = videowrap.querySelector('#paused_icon');

     
    play_button.addEventListener(
      'play', 
      function() { 
          productVideo.play();

          videowrap.classList.remove('paused_video');
          videowrap.classList.add('play_video');
          console.log('play button')
      }, 
      false);
    play_button.addEventListener("click", (event) => {
      productVideo.play();
      videowrap.classList.remove('paused_video');
      videowrap.classList.add('play_video');
    });  
    paused_button.onclick = function() {
        if (productVideo.paused) {
            productVideo.play();
     
            videowrap.classList.remove('paused_video');
            videowrap.classList.add('play_video');

            console.log('play click')
        } else {
            productVideo.pause();

            videowrap.classList.remove('play_video');
            videowrap.classList.add('paused_video');
            console.log('pasued click')
        }

        return false;
    };

});