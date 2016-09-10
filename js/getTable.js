   
//js表格 生成表格代码
  //arrTh 表头信息
  //arrTr 数据
var getTable = function(arrTh, arrTr){
    var s = '<table id ="P2_portfolio_table" class="display" cellspacing="0" width="100%">';
    s+='<thead>'
    s += '<tr>';
    for(var i=0; i<arrTh.length; i++) {
      s += '<th  style="text-align:center;font-weight:bold;">' + arrTh[i] + '</th>';
    }
    s += '</tr>';
    s+='</thread>'

    s+='<tfoot>'
    s += '<tr>';
    for(var i=0; i<arrTh.length; i++) {
      s += '<th style="text-align:center;font-weight:bold;">' + arrTh[i] + '</th>';
    }
    s += '</tr>';
    s+='</tfoot>'
    s+='<tbody>'
    for(var i=0; i<arrTr.length; i++) {
      s += '<tr>';
      for(var j=0; j<arrTr[i].length; j++) {
        s += '<td>' + arrTr[i][j] + '</td>';
      }
      s += '</tr>';
    }
    s+='</tbody>'
    s += '</table>';
    return s;
  };
(function (bidDiv,datapath) {
$.get(datapath).done(function (data) {


  var arrTh = data["columns"]
  var arrTr = data["data"]
  var t = document.getElementById(bidDiv);
  alert(1)
  t.innerHTML= getTable(arrTh, arrTr)
  
  }

);//end of $.get()



})("P2_portfolio","data/P2_portfolio.json");

