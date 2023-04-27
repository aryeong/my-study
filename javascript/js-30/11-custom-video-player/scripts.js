

class videoPlayer {
  constructor(){
    this.video = document.querySelector('.player__video');
    this.videoBtn = document.querySelector('.player__button');
    this.videoVolume = document.querySelector('.player__slider');
    this.playFunc();
    this.volumeFunc();
  };
  playFunc() {
    this.videoBtn.addEventListener('click', () => {
      if (this.video.paused) {
        this.video.play();
        this.videoBtn.innerText = '►';
      } else {
        this.video.pause();
        this.videoBtn.innerText = '❚ ❚';
      }
    })
  }
  volumeFunc() {
    const volumeValue = this.videoVolume.value;
    this.video.volume = volumeValue;
    console.log(volumeValue)
  }
}

new videoPlayer();