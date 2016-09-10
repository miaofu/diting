(function (bidDiv,datapath) {
var myChart = echarts.init(document.getElementById(bidDiv) );
myChart.showLoading();
option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:data["category"]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap: false,
        data: data["time"]
    },
    xAxis: {
        type: 'value'
    },
    series: data["data"]
};
myChart.setOption(option);

})("P3_sentiment_inInd","data/P3_sentiment_inInd.json")