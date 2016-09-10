(function (bidDiv){

option = {
    title : {
        text: 'Gender Ditribution',
        textStyle:{"fontFamily":"Georgia"},
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: []//['Null','男','女','保密']
    },
    series : [
        {
            name: 'Gender',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:1029602, name:'Null'},
                {value:71990, name:'Male'},
                {value:11503, name:'Female'},
                {value:184598, name:'Secrecy'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
var myChart = echarts.init(document.getElementById(bidDiv) );
myChart.setOption(option);
})("P2_user_stat_gender");

(function (bidDiv,datapath){
$.get(datapath).done(function (data) {
    var province = data["province"];
option = {
    title : {
        text: 'Province Distribution',
        textStyle:{"fontFamily":"Georgia"},

        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: []//province["keys"]
    },
    series : [
        {
            name: '省',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:province["data"],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
var myChart = echarts.init(document.getElementById(bidDiv) );
myChart.setOption(option);
});
})("P2_user_stat_province","data/user_stat.json");


(function(bidDiv){
    option = {
    title: {
        text: ''
            },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['用户','社交网络','大V','投资组合','精选组合跟踪'],
        textStyle:{"fontFamily":"Georgia"},

    },
    series: [
        {
            name: 'process',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                normal: {
                    formatter: '{b}'
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}: {c}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {value: 100, name: '7million users'},
                {value: 80, name: '15 billion network links'},
                {value: 60, name: '20 thousand professional users'},
                {value: 40, name: '50 thousand portfolios'},
                {value: 20, name: '2 thousand selected portfolios'}
            ]
        },
        {
            name: '实际',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    position:'inside',
                    formatter: '{b}: {c}%'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            data: [
                {value: 70, name: '7million users'},
                {value: 60, name: '15 billion network links'},
                {value: 40, name: '20 thousand professional users'},
                {value: 30, name: '50 thousand portfolios'},
                {value: 20, name: '2 thousand selected portfolios'}
            ]
        }
    ]
};
var myChart = echarts.init(document.getElementById(bidDiv) );
myChart.setOption(option);

})("P2_user_stat_possess");

(function (bidDiv,datapath){
$.get(datapath).done(function (data) {
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:data["type"],
                textStyle:{"fontFamily":"Georgia"}

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
            data : data["category"]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : data["data"]
};
var myChart = echarts.init(document.getElementById(bidDiv) );
myChart.setOption(option);
});
})("P2_user_stat_count","data/user_stat_count.json");
