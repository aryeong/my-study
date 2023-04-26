

class videoPlayer {
  constructor(){
    this.video = document.querySelector('.player__video');
    this.videoBtn = document.querySelector('.player__button');
    this.play();
  };
  play() {
    this.videoBtn.addEventListener('click', () => {
      if (this.video.paused) {
        this.video.play();
        this.videoBtn.innerText = '►';
      } else {
        this.video.pause();
        this.videoBtn.innerText = '❚ ❚';
      }
    });

  }
}

new videoPlayer();