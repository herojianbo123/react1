import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }
        // 绘制图表

        myChart.setOption({
          title: {
              text: '柱状图动画延迟'
          },
          legend: {
              data: ['bar', 'bar2'],
              align: 'left'
          },
          toolbox: {
              // y: 'bottom',
              feature: {
                  magicType: {
                      type: ['stack', 'tiled']
                  },
                  dataView: {},
                  saveAsImage: {
                      pixelRatio: 2
                  }
              }
          },
          tooltip: {},
          xAxis: {
              data: xAxisData,
              silent: false,
              splitLine: {
                  show: false
              }
          },
          yAxis: {
          },
          series: [{
              name: 'bar',
              type: 'bar',
              data: data1,
              animationDelay: function (idx) {
                  return idx * 10;
              }
          }, {
              name: 'bar2',
              type: 'bar',
              data: data2,
              animationDelay: function (idx) {
                  return idx * 10 + 100;
              }
          }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
              return idx * 5;
          }
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 400, height: 400,marginLeft:30 }}></div>
        );
    }
  }

export default EchartsTest;

