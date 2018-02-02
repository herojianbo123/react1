import React, { Component } from 'react'
import './style.css'
export default class Canvas extends Component{
  render(){
    return(
      <canvas className="clock" ref={(canvas)=>{this.canvas=canvas}} width="300px" height="300px"></canvas>
    )
  }
  componentDidMount(){
    this.CreatClock()
  }
  CreatClock(){
    function Clock(canvasElem) {
      this.canvasEle=canvasElem;
      this.ctx=canvasElem.getContext('2d');
      this.time=new Date()
    }
      Clock.prototype = {
        constructor: Clock,
        init: function(){
          this.initAxois()
          this.drawClock()
          this.startAnimation()
        },
        initAxois: function(){
          this.ctx.translate(150,150)
        },
        startAnimation:function(){
            var this_=this;
            setInterval(function(){
                this_.clearSreen();
                this_.drawClock();
            },1000)
        },
        drawClock:function(){
          this.drawTable();
          this.drawCenter();
          this.drawMinutes();
          this.drawHours();
          this.drawNumbers();
          this.drawHourPointer();
          this.drawMinutePointer();
          this.drawSecondsPointer();
               
        },
        drawTable: function(){
          this.ctx.beginPath();
          this.ctx.arc(0, 0, 100, 0, Math.PI*2);
          this.ctx.fillStyle='#eee';
          this.ctx.strokeStyle='#333';
          this.ctx.fill();
          this.ctx.stroke();
          this.time = new Date()
        },
        clearSreen:function(){
          this.ctx.clearRect(-150,-150,300,300);
          this.time=new Date();

        },
        drawCenter: function(){
          this.ctx.beginPath();
          this.ctx.arc(0, 0, 3, 0, Math.PI*2)
          this.ctx.fillStyle="red"
          this.ctx.fill()
          // this.ctx.stroke()
        },
        drawMinutes: function(){
          for(var i = 0; i < 60; i++){
            this.ctx.save()
            this.ctx.beginPath()
            this.ctx.rotate(i * Math.PI/30)
            this.ctx.moveTo(0, -100)
            this.ctx.lineTo(0, -96)
            this.ctx.stroke()
            this.ctx.restore()
          }
        },
        drawHours: function() {
          for(var i = 0; i < 12; i++){
            this.ctx.save()
            this.ctx.beginPath()
            this.ctx.rotate(i * Math.PI/6)
            this.ctx.moveTo(0, -100)
            this.ctx.lineTo(0, -92)
            this.ctx.lineWidth = 2
            this.ctx.stroke()
            this.ctx.restore()
          }
        },
        drawNumbers: function() {
          for(var i = 1; i <= 12; i++){
            this.ctx.beginPath()
            var x = 86 * Math.sin(Math.PI/ 6 * i),
                y = -86 * Math.cos(Math.PI/ 6 * i)
            this.ctx.textAlign = "center"
            this.ctx.textBaseline = "middle"
            this.ctx.fillText(i, x, y)

          }

        },
        drawHourPointer() {
          var hours=(this.time.getHours()+(this.time.getMinutes()/60))%12;
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rotate(hours*Math.PI/6);
          this.ctx.moveTo(0,-50);
          this.ctx.lineTo(0,0);
          this.ctx.stroke();
          this.ctx.restore();
        },
        drawMinutePointer:function(){
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rotate(this.time.getMinutes()*Math.PI/30);
          this.ctx.moveTo(0,-70);
          this.ctx.lineTo(0,0);
          this.ctx.stroke();
          this.ctx.restore();
        },
        drawSecondsPointer:function(){
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rotate(this.time.getSeconds()*Math.PI/30);
          this.ctx.moveTo(0,-80);
          this.ctx.lineTo(0,0);
          this.ctx.strokeStyle='red';
          this.ctx.stroke();
          this.ctx.restore();
        }


      }
    
      var clock = new Clock(this.canvas)
      clock.init()
    
  }
}  



