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
})("P1_riskIndustry","data/OP7days5Long_indRisk.json");
                    