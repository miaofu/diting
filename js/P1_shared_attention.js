

var tmp=function (bidDiv1,bidDiv2,datapath,ticker_target) {
$.get(datapath).done(function (data) {
	//var ticker_target = "000010"

var data_ = data["ind2ticker"][data["ticker2ind"][ticker_target]]
var indu_ticker = data["ticker2ind"][ticker_target]

 var option1 = {
 	//color:['yellow','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3','#c23531'],
 	//backgroundColor: '#404a59',
    title : {
                text: '',
            },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
 xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
    },
    yAxis: {
        type: 'category',
        name: indu_ticker,
        axisTick: {show: true, lineStyle: {color: '#ddd'}},
        data:  data_["ticker"]
        },
    series : [
        {
            name: 'followers number',
            type: 'bar',
            data: data_["data"],
            markPoint: {  
                            data: [  

                             
                               // {coord:[ indu_ticker.indexOf(ticker_target),100],}  
                               {name:ticker_target,coord:[1,ticker_target],},

                            ]  
                        },
            symbolSize: function (val) {
                return Math.max(val[2] / 10, 8);
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            }
        }]
    };

var myChart1 = echarts.init(document.getElementById(bidDiv1) );
myChart1.setOption(option1);


var data_2 = data["ticker_top"][ticker_target]

 var option2 = {
 	//color:['yellow','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3','#c23531'],
 	//backgroundColor: '#404a59',
        title : {
                text: '',
            },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
 xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
    },
    yAxis: {
        type: 'category',
        name: 'stock ticker',
        axisTick: {show: true, lineStyle: {color: '#ddd'}},
        data:  data_2["ticker"]
        },
    series : [
        {
            name: 'followers number',
            type: 'bar',
            data: data_2["data"],
            markPoint: {  
                            data: [  
                                {type: 'max', name: '最大值'},  
                                {type: 'min', name: '最小值'}

                            ]  
                        },
            symbolSize: function (val) {
                return Math.max(val[2] / 10, 8);
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            }
        }]
    };
var myChart2 = echarts.init(document.getElementById(bidDiv2) );
myChart2.setOption(option2);


}
);
};


var responseSubmit=function(){

 t=document.getElementById("P1_shared_attention")
 x = t.childNodes[1].value
if(x=="type stock code..."){x="000010";}

tmp("P1_shared_attention_1","P1_shared_attention_2","data/shared_attention_data.json",x);


};

responseSubmit("000005")

