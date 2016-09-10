var myChart3 = echarts.init(document.getElementById('P1_cluster_network'));

myChart3.showLoading();
$.get('data/network_of_ticker_by_users.json', function (webkitDep) {
    myChart.hideLoading();

    option = {
        legend: {
            data: webkitDep.categories
        },
        series: [{
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            draggable: true,
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
            }),
            categories: webkitDep.categories,
            force: {
                // initLayout: 'circular'
                // gravity: 0
                // repulsion: 20,
                edgeLength: 5,
                repulsion: 20
            },
            edges: webkitDep.links
        }]
    };

    myChart3.setOption(option);
});
