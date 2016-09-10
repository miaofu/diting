(function (bidDiv,datapath) {
$.get(datapath).done(function (data) {
var option = {
    title: {
        text: ''
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:data["category"],
        textStyle:{"fontFamily":"Georgia"}
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine:{onZero:true},
        data: data["time"]
    },
    /*
    yAxis: {
        type: 'value'
    },
    */
    yAxis : [
        {
            name : '净值',
            type : 'value'
        },
        {
            name : '回撤',
            type : 'value',
            inverse: false
        }
    ],
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
    }, {
        start: 0,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: data["data"]
};
var myChart = echarts.init(document.getElementById(bidDiv) );
myChart.setOption(option);
}
);
//alert(2);
})("P1_plotNetValue","data/P1_plotNetValue.json");
