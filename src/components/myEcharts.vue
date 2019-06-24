<template>
    <div class="hello">
        <div>
            <h2>{{ title }}</h2>
            <div :id="index" style="width: 100%;height: 200px;"></div>
        </div>
    </div>
</template>

<script>
// var {echarts} = require('echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'myEcharts',
  data () {
    return {
      data: [50, 200, 306, 100, 800, 120],
      msg: 'Welcome to Your Vue.js App',
      valueData: [{ name: 'name1', value: 1 }]
    }
  },
  mounted () {
    // 绘制图表
    this.getData()
  },
  props: ['url', 'title', 'index'],
  methods: {
    async getData () {
      const axios = require('axios')
      const response = await axios.post(this.url)
      this.valueData = response.data
      this.echartPie()
    },
    echartPie () {
      var echarts = require('echarts')

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(this.index))
      // 不能在单个容器上初始化多个 ECharts 实例。
      // 实例容器，一般是一个具有高宽的div元素。
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right'
          //   data: listName
        },
        series: [{
          name: '占据比例',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: true,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '16',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.valueData,
          itemStyle: { // 饼状图之间隔开一点的配置参数
            normal: {
              borderWidth: 4,
              borderColor: '#ffffff'
            }
          }
        }]
      }
      myChart.setOption(option)
      init(0)
      function init (index) {
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: index
        })
      }
      // 记录上次高亮的索引
      var lastMouseOverIndex = null
      // mouseover事件，记录当前数据索引并取消其他高亮，over在out之后
      myChart.on('mouseover', function (params) {
        var dataLen = option.series[0].data.length
        lastMouseOverIndex = params.dataIndex
        for (var i = 0; i < dataLen; i++) {
          if (i !== params.dataIndex) {
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: i
            })
          }
        }
      })
      // mouseout事件，将上次的高亮
      myChart.on('mouseout', function (params) {
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: lastMouseOverIndex
        })
      })
    },
    changeData (index) {
      if (index === 0) {
        this.data = [520, 200, 306, 520, 800, 120]
      } else {
        this.data = [50, 200, 306, 100, 800, 120]
      }
      this.echart()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
