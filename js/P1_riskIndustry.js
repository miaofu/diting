 var myChart2 = echarts.init(document.getElementById('P1_riskIndustry'));

// 异步加载数据
$.get('data/OP7days5Long_indRisk.json').done(function (data) {
    // 填入数据
// instance 
option = {
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data: data["categroy"]
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : data["times"]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : data["data"]
};
myChart2.setOption(option);


});