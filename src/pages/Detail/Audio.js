import React, {Component} from 'react'

export default class Audio extends Component{
  render() {
    return (
      <div style={{width:"600px",marginLeft:"300px"}}>
        <audio ref="audio">
          <source src={require('../../statics/audio/hxen.com_v20180122d.mp3')} 
      ></source>
          您的浏览器不支持此标签。。。
        </audio>
          <div>
          <button ref="button1">播放</button>
        
          <span  ref="span1">0</span>
          <span> / </span>
          <span  ref="span2"></span>
         
          <button ref="button3">重播</button>
          <input type="range" defaultValue="0" ref="input1"  step="0.001" min="0" max="1"/>
          <button ref="button2">静音</button>
          

          <input type="range" defaultValue="0" ref="input2" step="0.001" min="0" max="1" />

        </div>
      </div>
    )
  }
  componentDidMount(){
      const audio = this.refs.audio
      const playBtn = this.refs.button1
      const nowTime = this.refs.span1
      const totalTime = this.refs.span2
      const time = this.refs.input1
      const muteBtn = this.refs.button2
      const volume = this.refs.input2
      const reset = this.refs.button3
      console.log(audio)

    function Player(){
    this.audio = audio
    this.playBtn = playBtn
    this.nowTime = nowTime
    this.totalTime = totalTime
    this.time = time
    this.muteBtn = muteBtn
    this.volume = volume
    this.reset = reset
      

    }
    Player.prototype = {
      constructor: Player,
        init: function(){
          this.bindEvents()

        },
        bindEvents: function(){
          // var this_ = this;
          this.playBtn.addEventListener('click', this.handlePlayBtn.bind(this))
          this.audio.addEventListener('canplay', this.handleCanPlay.bind(this))
          this.audio.addEventListener('timeupdate', this.handleTimeUpdate.bind(this))
          this.time.addEventListener('change', this.handleTimeChange.bind(this))
          this.muteBtn.addEventListener('click', this.handleMuteClick.bind(this))
          this.volume.addEventListener('change', this.handleVolumeChange.bind(this))
          this.reset.addEventListener("click", this.handleReset.bind(this))
        },
        handlePlayBtn(){
          if(this.audio.paused) {
            this.playBtn.innerText = '暂停';
            this.audio.play();
          }else {
            this.playBtn.innerText = '播放';
            this.audio.pause();
          }
        },
        handleCanPlay: function() {
          this.totalTime.innerText = Math.floor(this.audio.duration)
          // var allTime = Math.floor(this.audio.duration)
          
          // this.totalTime.innerText = allTime
        },
        handleTimeUpdate: function() {
          this.nowTime.innerText = Math.floor(this.audio.currentTime)
          var ratio = this.audio.currentTime / this.audio.duration
          this.time.value = ratio

          console.log(Math.floor(this.audio.currentTime)/60)
           /* var nowTimer = Math.floor(this.audio.currentTime)
            var minute = nowTimer / 60
            var second = parseInt((minute - parseInt(minute)) * 60)
            this.nowTime.innerText = parseInt(nowTimer / 60) + ':' + this.handleClock(second)
            var timgingAudio = this.audio.currentTime / this.audio.duration
            this.timeing.value = timgingAudio*/


        },
       handleTimeChange: function(e) {
        var time = e.target.value * this.audio.duration
        this.audio.currentTime = time
        
      },
      handleMuteClick: function(e) {
        if(this.audio.muted) {
          this.muteBtn.innerText = '静音'
        }else {
          this.muteBtn.innerText = '有声'
        }
        this.audio.muted = !this.audio.muted
      },
      handleVolumeChange: function(e){
        this.audio.volume = e.target.value
      },
      handleReset: function(e){
        this.time.value=0
        var time = e.target.value * this.audio.duration

        this.audio.currentTime = time

      }


  } 
  var player = new Player()
    player.init() 

  }
}
