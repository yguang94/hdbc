module.exports = {
    bar: {
        //表头
        title: {},
        //鼠标提示框
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        //图例
        legend: {
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "tuoxie"],
            min: 'dataMin',
            max: 'dataMax'
        },
        yAxis: {},
        dataZoom: [
            {
                type: 'inside',
                start: 30,
                end: 70
            },
            {
                show: true,
                type: 'slider',
                y: '90%',
                start: 0,
                end: 75
            }
        ],
        series: [{
                name: "销量",
                type: "k",
                data: [5, 20, 36, 10, 10, 70]
        }]


    }
}