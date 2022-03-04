
$(function () {
    echarts_1();
    echarts_2();
    // echarts_4();
    echarts_31();
    echarts_32();
    echarts_33();
    echarts_5();
    echarts_6();
    
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['广东', '山东', '河南', '江苏', '四川', '河北', '湖南'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {
                    type: 'bar',
                    data: [126012510, 101527453, 99365519, 84748016, 83674866, 74610235, 66444864],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#2f89cf',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                	formatter: '{value} 年',
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                name:'万人',
                min:130000,
                splitNumber:5,
                axisLabel: {
                    formatter: '{value} (万人)',
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {

                    type: 'line',
                    data: [137646, 138326, 139232, 140011, 140541, 141008, 141178],
                  
                    itemStyle: {
                        normal: {
                            color: '#27d08a',
                            opacity: 1,
                            barBorderRadius: 3,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
    	var myChart = echarts.init(document.getElementById('echart5'));

    	var years = ['第一次人口普查', '第二次人口普查', '第三次人口普查', '第四次人口普查', '第五次人口普查', '第六次人口普查', '第七次人口普查'];
    	var jdData = [
    	    ["四　川", "山　东", "河　南", "江　苏", "河　北", "广　东", "湖　南", "安　徽", "湖　北", "浙　江"],
    	    ["四　川",
    	        "山　东",
    	        "河　南",
    	        "河　北",
    	        "天　津",
    	        "江　苏",
    	        "广　东",
    	        "湖　南",
    	        "湖　北",
    	        "安　徽"
    	    ],
    	    ["四　川",
    	        "河　南",
    	        "山　东",
    	        "江　苏",
    	        "广　东",
    	        "湖　南",
    	        "河　北",
    	        "安　徽",
    	        "湖　北",
    	        "浙　江"
    	    ],
    	    ["四　川",
    	        "河　南",
    	        "山　东",
    	        "江　苏",
    	        "广　东",
    	        "河　北",
    	        "湖　南",
    	        "安　徽",
    	        "湖　北",
    	        "广　西"
    	    ],
    	    ["河　南",
    	        "山　东",
    	        "广　东",
    	        "四　川",
    	        "江　苏",
    	        "河　北",
    	        "湖　南",
    	        "湖　北",
    	        "安　徽",
    	        "浙　江"
    	    ],
    	    ["广　东",
    	        "江　苏",
    	        "山　东",
    	        "北　京",
    	        "河　南",
    	        "湖　北",
    	        "四　川",
    	        "河　北",
    	        "辽　宁",
    	        "浙　江"
    	    ],
    	    ["广　东",
    	        "山　东",
    	        "河　南",
    	        "江　苏",
    	        "四　川",
    	        "河　北",
    	        "湖　南",
    	        "浙　江",
    	        "安　徽",
    	        "湖　北"
    	    ]
    	]
    	var data = [
    	    ["62303999",
    	        "48876548",
    	        "44214594",
    	        "41252192",
    	        "35984644",
    	        "34770059",
    	        "33226954",
    	        "30343637",
    	        "27789693",
    	        "22865747"

    	    ],
    	    ["67956490",
    	        "55519038",
    	        "50325511",
    	        "45687781",
    	        "45687781",
    	        "44504608",
    	        "42800849",
    	        "37182286",
    	        "33709344",
    	        "31241657"

    	    ],
    	    ["99713310",
    	        "74422739",
    	        "74419054",
    	        "60521114",
    	        "59299220",
    	        "54008851",
    	        "53005876",
    	        "49665724",
    	        "47804150",
    	        "38884603"

    	    ],
    	    ["107218173",
    	        "85509535",
    	        "84392827",
    	        "67056519",
    	        "62829236",
    	        "61082439",
    	        "60659754",
    	        "56180813",
    	        "53969210",
    	        "42245765"

    	    ],
    	    ["92560000",
    	        "90790000",
    	        "86420000",
    	        "83290000",
    	        "74380000",
    	        "67440000",
    	        "64400000",
    	        "60280000",
    	        "59860000",
    	        "46770000"

    	    ],
    	    ["85670000",
    	        "85070000",
    	        "83290000",
    	        "61780000",
    	        "60160000",
    	        "54560000",
    	        "53680000",
    	        "52430000",
    	        "52340000",
    	        "50780000"

    	    ],
    	    ["126012510",
    	        "101527453",
    	        "99365519",
    	        "84748016",
    	        "83674866",
    	        "74610235",
    	        "66444864",
    	        "64567588",
    	        "61027171",
    	        "57752557"

    	    ],

    	];

    	option = {

    	    baseOption: {
    	        backgroundColor: 'rgba(255,0,0,0)', //背景颜色
    	        timeline: {
    	            data: years,
    	            axisType: 'category',
    	            autoPlay: true,
    	            playInterval: 1500, //播放速度

    	            left: '5%',
    	            right: '5%',
    	            bottom: '-15%',
    	            width: '95%',
    	            //  height: null,
    	            label: {
    	                normal: {
    	                    textStyle: {

    	                        color: 'red',
    	                        fontSize:10
    	                    }
    	                },
    	                emphasis: {
    	                    textStyle: {
    	                        color: 'red',
    	                        
    	                    }
    	                }
    	            },
    	            symbolSize: 10,
    	            lineStyle: {
    	                color: '#red'
    	            },
    	            checkpointStyle: {
    	                borderColor: '#red',
    	                borderWidth: 2
    	            },
    	            controlStyle: {
    	                showNextBtn: true,
    	                showPrevBtn: true,
    	                normal: {
    	                    color: '#ff8800',
    	                    borderColor: '#ff8800'
    	                },
    	                emphasis: {
    	                    color: 'red',
    	                    borderColor: 'red'
    	                }
    	            },

    	        },
    	        title: {
    	            text: '',
    	            right: '2%',
    	            bottom: '8%',
    	            textStyle: {
    	                fontSize: 50,
    	                color: '#fff' //标题字体颜色
    	            }
    	        },
    	        tooltip: {
    	            'trigger': 'axis'
    	        },
    	        calculable: true,
    	        grid: {
    	            left: '-5%',
    	            right: '2%',
    	            bottom: '10%',
    	            top: '0%',
    	            containLabel: true
    	        },
    	        label: {
    	            normal: {
    	                textStyle: {
    	                    color: 'red'
    	                }
    	            }
    	        },
    	        yAxis: [{

    	            nameGap: 50,
    	            offset: '37',
    	            'type': 'category',
    	            interval: 50,
    	            //inverse: ture,//图表倒叙或者正序排版
    	            data: '',
    	            nameTextStyle: {
    	                color: 'red'
    	            },


    	            axisLabel: {
    	                //rotate:45,
    	                show: true,
    	                textStyle: {
    	                    fontSize: 32,

    	                    color: function (params, Index) { // 标签国家字体颜色

    	                        //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色

    	                        var colorarrays = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd',
    	                            '#749f83',
    	                            '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
    	                            '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83',
    	                            '#ca8622'
    	                        ];

    	                        //console.log("111", Index, colorarrays[Index],params); //打印序列

    	                        return colorarrays[jdData[0].indexOf(params)];
    	                    },


    	                }, //rotate:45,
    	                interval: 50
    	            },
    	            axisLine: {

    	                lineStyle: {
    	                    color: 'balck' //Y轴颜色
    	                },
    	            },
    	            splitLine: {
    	                show: true,
    	                lineStyle: {
    	                    color: 'balck'
    	                }
    	            },

    	        }],
    	        xAxis: [{
    	            type: 'value',
    	            name: '',

    	            splitNumber: 8, //轴线个数
    	          
    	            nameTextStyle: {
    	                color: 'balck'
    	            },
    	            axisLine: {
    	                show:false,
    	                lineStyle: {
    	                    color: '#ffa597' //X轴颜色
    	                }
    	            },
    	            axisLabel: {
    	                show:false,
    	                formatter: '{value} '
    	            },
    	            splitLine: {
    	                show: true,
    	                lineStyle: {
    	                    color: '#fedd8b'
    	                }
    	            },
    	        }],
    	        series: [{
    	                name: '',
    	                type: 'bar',
    	                markLine: {
    	                    label: {
    	                        normal: {
    	                            show: true
    	                        }
    	                    },
    	                    lineStyle: {
    	                        normal: {
    	                            color: 'red',
    	                            width: 3
    	                        }
    	                    },
    	                },
    	                label: {
    	                    normal: {
    	                        show: true,
    	                        position: 'right', //数值显示在右侧
    	                        formatter: '{c}'
    	                    }
    	                },
    	                itemStyle: {
    	                    normal: {
    	                        color: function (params) {
    	                            // build a color map as your need.
    	                            //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
    	                            var colorList = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd',
    	                                '#749f83',
    	                                '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
    	                                '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83',
    	                                '#ca8622'
    	                            ];
    	                            // return colorList[params.dataIndex]

//    	                            console.log("111", params.name); //打印序列
    	                            return colorList[jdData[0].indexOf(params.name)];
    	                        },

    	                    }
    	                },
    	            },

    	            {
    	                'name': '',
    	                'type': 'bar',
    	                markLine: {


    	                    label: {
    	                        normal: {
    	                            show: false
    	                        }
    	                    },
    	                    lineStyle: {

    	                        normal: {
    	                            color: 'red',
    	                            width: 3
    	                        }
    	                    },
    	                },
    	                barWidth: '50%',
    	                barGap: '-100%',
    	                label: {
    	                    normal: {
    	                        show: true,
    	                        fontSize: 16, //标签国家字体大小
    	                        position: 'left', //数值显示在右侧
    	                        formatter: function (p) {
    	                            return p.name;
    	                        }
    	                    }
    	                },
    	                itemStyle: {
    	                    normal: {


    	                        color: function (params) {
    	                            // build a color map as your need.
    	                            //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
    	                            var colorList = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd',
    	                                '#749f83',
    	                                '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
    	                                '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83',
    	                                '#ca8622'
    	                            ];
    	                            // return colorList[params.dataIndex]

    	                            // console.log("111", params.name); //打印序列
    	                            return colorList[jdData[0].indexOf(params.name)];
    	                        },

    	                    }
    	                },
    	            }
    	        ],

    	        animationEasingUpdate: 'quinticInOut',
    	        animationDurationUpdate: 1500, //动画效果
    	    },

    	    options: []
    	};
    	for (var n = 0; n < years.length; n++) {

    	    var res = [];
    	    //alert(jdData.length);
    	    for (j = 0; j < data[n].length; j++) {
    	        res.push({
    	            name: jdData[n][j],
    	            value: data[n][j]
    	        });

    	    }

    	    res.sort(function (a, b) {
    	        return b.value - a.value;
    	    }).slice(0, 6);

    	    res.sort(function (a, b) {
    	        return a.value - b.value;
    	    });


    	    var res1 = [];
    	    var res2 = [];
    	    //console.log(res);
    	    for (t = 0; t < res.length; t++) {
    	        res1[t] = res[t].name;
    	        res2[t] = res[t].value;
    	    }
    	    option.options.push({
    	        title: {
    	            text: years[n] ,
    	            textStyle:{
    	                fontSize: 20,
    	            }
    	        },
    	        yAxis: {
    	            data: res1,
    	        },
    	        series: [{
    	            data: res2
    	        }, {
    	            data: res2
    	        }]
    	    });
    	}
    	myChart.setOption(option);
    	window.addEventListener("resize", function () {
    	    myChart.resize();
    	});
    }

 
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

      
        option = {
        		color:['#42bfac','#205580','#79d2d2','#6ff9c1','#2c80c5'],
        	    tooltip: {
        	        trigger: 'item'
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        left: 'left',
        	        textStyle:{
                        color: '#ffffff'//字体颜色
                    },
        	    },
        	    series: [
        	        {
        	            name: '受教育程度',
        	            type: 'pie',
        	            radius: '70%',
        	            data: [
        	                {value: 218360767, name: '大学'},
        	                {value: 213005258, name: '高中'},
        	                {value: 487163489, name: '初中'},
        	                {value: 349658828, name: '小学'},
        	                {value: 37750200, name: '文盲'}
        	            ],
        	            emphasis: {
        	                itemStyle: {
        	                    shadowBlur: 10,
        	                    shadowOffsetX: 0,
        	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
        	                }
        	            }
        	        }
        	    ]
        	};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
        option = {

            title: [{
                text: '年龄分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['0-14岁', '15-59岁', '60-64岁', '65岁及以上'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '10',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value:253383938, name: '0-14岁' },
                        { value: 894376020, name: '15-59岁' },
                        { value: 73383486, name: '60-64岁' },
                        { value: 190635280, name: '65岁及以上' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {

            title: [{
                text: '性别组成',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['男性', '女性'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '性别组成',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value:723339956, name: '男性' },
                        { value: 688438768, name: '女性' },
                       
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            title: [{
                text: '人口分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['东部', '中部', '西部', '东北地区'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '人口分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 563717119, name: '东部' },
                        { value: 364694362, name: '中部' },
                        { value: 382852295, name: '西部' },
                        { value: 98514948, name: '东北地区' },
                  
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


})


















