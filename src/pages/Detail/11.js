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
        console.log(e.target.defaultValue)
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












import React, { Component } from 'react'
import '../../style/iconfont/iconfont.css'

export default class Audio extends Component {
  render() {
    return(
        <div>
          <audio loop="loop" ref='audio' >
          <source  src={require('../../static/audio/demo.mp3')}></source>
          该浏览器不支持audio标签
          </audio>
          <button className='iconfont' ref='playBtn'>&#xe647;</button>
          <button ref='playStart'>返回初始</button>
          <span ref='nowTime' >0:00</span>
          <span>/</span>
          <span ref="totalTime">0:00</span> 
          <input type="range" defaultValue='0' step="0.001" min="0" max="1" ref="timeing" />
          <button ref="loop">停止循环播放</button>
        </div>
      )
  }
  componentDidMount() {
     const audio = this.refs.audio
     const playBtn = this.refs.playBtn
     const playStart = this.refs.playStart
     const nowTime = this.refs.nowTime
     const totalTime = this.refs.totalTime
     const timeing = this.refs.timeing
     const loop = this.refs.loop
    function Player() {
      this.audio = audio
      this.playBtn = playBtn
      this.playStart = playStart
      this.nowTime = nowTime
      this.totalTime = totalTime
      this.timeing = timeing
      this.loop = loop
    }
    Player.prototype = {
      constructor: Player,
      init() {
        this.bindEvents()
      },
      bindEvents() {
        this.playBtn.addEventListener('click', this.handleClickPlayBtn.bind(this))
        this.playStart.addEventListener('click', this.handleClickPlayStart.bind(this))
        this.audio.addEventListener('timeupdate', this.handleTimeUpdate.bind(this))
        this.audio.addEventListener('canplay', this.handleCanPlay.bind(this))
        this.timeing.addEventListener('change', this.handleTimeing.bind(this))
        this.loop.addEventListener('click', this.handleClickLoop.bind(this))
      },
      handleClickPlayBtn() {
        if(this.audio.paused) {
          this.playBtn.innerHTML = '&#xe6ae;'
          this.audio.play()
        }else {
          this.playBtn.innerHTML = '&#xe647;'
          this.audio.pause()
        }
      },
      handleClickPlayStart() {
        this.audio.pause()
        this.playBtn.innerHTML = '&#xe647;'
        this.audio.currentTime = 0
      },
      handleTimeUpdate() {
        var nowTimer = Math.floor(this.audio.currentTime)
        var minute = nowTimer / 60
        var second = parseInt((minute - parseInt(minute)) * 60)
        this.nowTime.innerText = parseInt(nowTimer / 60) + ':' + this.handleClock(second)
        var timgingAudio = this.audio.currentTime / this.audio.duration
        this.timeing.value = timgingAudio
      },
      handleCanPlay() { 
        var allTime = Math.floor(this.audio.duration)
        this.totalTime.innerText = parseInt(allTime / 60) + ':' + this.handleClock(allTime - (parseInt(allTime / 60) * 60))
      },
      handleClock(num) {
        num = parseInt(num)
        if( num <= 9 ) {
          num = '0' + num
        }
        return num
      },
      handleTimeing(e) {
        var time = e.target.value * this.audio.duration
        this.audio.currentTime = time
      },
      handleClickLoop() {
        if(this.audio.loop) {
          this.audio.loop = ""
          this.loop.innerText = "循环播放"
          
        }else{
          this.audio.loop = "loop"
          this.loop.innerText = "停止循环播放"
        }
        
      }
    }

    var player = new Player()
    player.init()
    
  }
}
