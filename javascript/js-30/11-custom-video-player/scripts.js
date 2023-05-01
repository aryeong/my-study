

class videoPlayer {
  constructor(){
    this.video = document.querySelector('.player__video');
    this.videoBtn = document.querySelector('.player__button');
    this.range = document.querySelectorAll('.player__slider');
    this.playFunc();
    this.bindEventFunc();
  };
  playFunc() {
    this.videoBtn.addEventListener('click', () => {
      if (this.video.paused) {
        this.video.play();
        this.videoBtn.innerText = '❚ ❚';
        
      } else {
        this.video.pause();
        this.videoBtn.innerText = '►';
      }
    })
  }
  bindEventFunc() {
    this.range.forEach(range => range.addEventListener('change', this.rangeFunc));

  }
  rangeFunc = e => {
    this.video[e.target.name] = e.target.value;
  }
  
}

new videoPlayer();