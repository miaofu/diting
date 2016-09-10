/*    
     var myChart = echarts.init(document.getElementById('P1_riskSize'));

// 异步加载数据
$.get('data/OP7days5Long_sizeRisk.json').done(function (data) {
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
        data:['quant0','quant1','quant2','quant3','quant4']
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
    series : [
        {
            name:'quant0',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:data["data"]["quant0"]
        },
        {
            name:'quant1',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:data["data"]["quant1"]
        },
        {
            name:'quant2',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:data["data"]["quant2"]
        },
        {
            name:'quant3',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:data["data"]["quant3"]
        },
         {
            name:'quant4',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:data["data"]["quant4"]
        }
        
    ]
};
myChart.setOption(option);


});
*/


(function (bidDiv,datapath) {
$.get(datapath).done(function (data) {

var idx = 1;
option = {
    title: {
        text: ''
    },
    timeline : {
        axisType: 'category',
        autoPlay: true,
        data : data["times"],
        playInterval: 1000,

        label : {
            formatter : function(s) {
                return s//.slice(0, 7);
            }
         }   
    
    },
    options : [
        {
            title : {
                text: '',
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                data:data["category"]
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true, 
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1700
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                data["data"][0]["series"][0]
            ]

        }
        // append serise data [{},{}]
    ]

}
for(var i=1;i<data["data"].length;i++){
option["options"].push(data["data"][i])
}
//alert(option["options"])
var myChart = echarts.init(document.getElementById(bidDiv) );
myChart.setOption(option);
}
);
//alert(2);
})("P1_riskSize","data/OP7days5Long_sizeRisk.json");
                    
