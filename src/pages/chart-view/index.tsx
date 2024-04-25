import { useRef } from 'react';
import { Canvas, View } from '@tarojs/components';
import Echarts, { EChartOption, EchartsHandle } from 'taro-react-echarts';
import echarts from '../../assets/js/echarts.js';

export default function Demo() {
  const echartsRef = useRef<EchartsHandle>(null);
  const option: EChartOption = {
    legend: {
      top: 50,
      left: 'center',
      z: 100,
    },
    tooltip: {
      trigger: 'axis',
      show: true,
      confine: true,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  return (
    <View>
      图表
      {/*
      https://github.com/qiuweikangdev/taro-react-echarts/issues/33
       dev:weapp 在编译到小程序时会判断是否使用了canvas，若未使用则base.wxml不会存在canvas占位符；
      解决方法：在使用Echarts的地方，添加一个<Canvas style={{ display: "none" }} />即可。 */}
      <Canvas style={{ display: 'none' }} />
      <Echarts echarts={echarts} option={option} ref={echartsRef}></Echarts>
    </View>
  );
}
