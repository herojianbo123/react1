import React, {Component} from 'react'

export default class Audio extends Component{
  render() {
    return (
      <div style={{width:"600px",marginLeft:"300px"}}>
        <audio id="audio">
          <source src={require('../../statics/audio/hxen.com_v20180122d.mp3')} ></source>
          您的浏览器不支持此标签。。。
        </audio>
          
          <button id="button1">播放</button>
        
          <span  id="span1">0</span>
          <span> / </span>
          <span  id="span2"></span>
         
          <button id="button3">重播</button>
          <input type="range" id="input1"  step="0.001" min="0" max="1"/>
          <button id="button2">静音</button>
          

          <input type="range" id="input2" step="0.001" min="0" max="1" />

        
      </div>
    )
  }
  componentDidMount(){
    this.createAudio()
  }
  createAudio(){
    function Player(){

      this.audio = document.getElementById('audio')
      this.playBtn = document.getElementById('button1')
      this.nowTime = document.getElementById('span1')
      this.totalTime = document.getElementById('span2')
      this.time = document.getElementById('input1')
      this.muteBtn = document.getElementById('button2')
      this.volume = document.getElementById('input2')
      this.reset = document.getElementById('button3')


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
        },
        handleTimeUpdate: function() {
          this.nowTime.innerText = Math.floor(this.audio.currentTime)
          var ratio = this.audio.currentTime / this.audio.duration
          this.time.value = ratio
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
  var player = new Player(this.audio)
    player.init() 

  }
}