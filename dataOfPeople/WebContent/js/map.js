$(function(){
	map()
	
	function map(){
		var myChart = echarts.init(document.getElementById('map_1'));
	    var oBack = document.getElementById("back");

	    var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen','taiwan'];
	    
	    var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门','台湾'];
	    
	    
//        console.log(seriesData)
	    oBack.onclick = function () {
	      initEcharts("china", "全国");
	    };

	    initEcharts("china", "全国");

	    // 初始化echarts
	    function initEcharts(pName, Chinese_) {	
	    	relationship(Chinese_)
	    	console.log(pName)
	    	var seriesData ;
	    	console.log(Chinese_)
		    $.ajax({
	            url: "queryPeopleNum?city="+Chinese_, //json文件位置
	            type: "GET", //请求方式为get
	            async: false,
	            dataType: "json", //返回数据格式为json
	            success: function(res) { //请求成功完成后要执行的方法 
	              
	            	seriesData = res
//	            	console.log(seriesData)
//	                }

	            }
	        })
		    
	    
	      var tmpSeriesData =seriesData;
	    	var yMax = 0;
	        for (var j = 0; j < seriesData.length; j++) {
	            if (yMax < seriesData[j].value) {
	                yMax = seriesData[j].value;
	            }
	        }
	      var option = {
	        title: {
	        	
	          text: Chinese_ || pName,
	          link:"https://www.dingguomao.xyz",
	          left: 'center',
	          textStyle:{
	        	  color:"#fff"
	          }
	        
	        },
	          tooltip: {
	              trigger: 'item',
	              formatter: '{b}<br/>{c} (人)'
	          },
	          
	          visualMap: {
	                min: 0,
	                max: yMax,
	                text: ['高', '低'],
	                orient: 'horizontal',
	                itemWidth: 15,
	                itemHeight: 200,
	                right: 500,
	                bottom: 30,
	                show:true,
	                inRange: {
	                    color: ['#00a2d8', '#001b8b']
	                },
	                textStyle: {
	                    color: 'white'
	                }
	            },
	            
	            
	        series: [
	          {
	            name: Chinese_ || pName,
	            type: 'map',
	            mapType: pName,
	            roam: true, 
//	            roam: false,//是否开启鼠标缩放和平移漫游
	            data: tmpSeriesData,
	            top: "3%",//组件距离容器的距离
	              zoom:1.1,
	              selectedMode : 'single',

	              label: {
	                  normal: {
	                      show: true,//显示省份标签
	                      textStyle:{color:"#fff"}//省份标签字体颜色
	                  },
	                  emphasis: {//对应的鼠标悬浮效果
	                      show: true,
	                      textStyle:{color:"#000"}
	                  }
	              },
	              itemStyle: {
	                  normal: {
	                      borderWidth: .5,//区域边框宽度
	                      borderColor: '#0550c3',//区域边框颜色
	                      areaColor:"#4ea397",//区域颜色

	                  },

	                  emphasis: {
	                      borderWidth: .5,
	                      borderColor: '#4b0082',
	                      areaColor:"#ece39e",
	                  }
	              },
	          }
	        ]

	           };

	      myChart.setOption(option);

	      myChart.off("click");

	      if (pName === "china") { // 全国时，添加click 进入省级
	        myChart.on('click', function (param) {
//	          console.log(param.name);
//	          seriesData = getData(param.name)
	          
	          // 遍历取到provincesText 中的下标  去拿到对应的省js
	          for (var i = 0; i < provincesText.length; i++) {
	            if (param.name === provincesText[i]) {
	              //显示对应省份的方法
	            	relationship(provincesText[i])
	              showProvince(provinces[i], provincesText[i]);
	              
	              break;
	            }
	          }
	            if (param.componentType === 'series') {
	                var provinceName =param.name;
	                $('#box').css('display','block');
	                $("#box-title").html(provinceName);

	            }
	        });
	      } else { // 省份，添加双击 回退到全国
	        myChart.on("click", function () {
	          initEcharts("china", "全国");
	        });
	      }
	    }

	    // 展示对应的省
	    function showProvince(pName, Chinese_) {
	      //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
	      loadBdScript('$' + pName + 'JS', './js/map/province/' + pName + '.js', function () {
	    	  console.log(pName,Chinese_)
	    	  initEcharts(Chinese_,Chinese_);
	      });
	    }
	    
//	    function getData(city){
//	    	var seriesData;
//	    	$.ajax({
//	            url: "queryPeopleNum?city="+city, //json文件位置
//	            type: "GET", //请求方式为get
//	            async: false,
//	            dataType: "json", //返回数据格式为json
//	            success: function(res) { //请求成功完成后要执行的方法 
//	              
//	            	seriesData = res
//
//
//	            }
//	        })
//	        return seriesData;
//	    }
	    // 加载对应的JS
	    function loadBdScript(scriptId, url, callback) {
	      var script = document.createElement("script");
	      script.type = "text/javascript";
	      if (script.readyState) {  //IE
	        script.onreadystatechange = function () {
	          if (script.readyState === "loaded" || script.readyState === "complete") {
	            script.onreadystatechange = null;
	            callback();
	          }
	        };
	      } else {  // Others
	        script.onload = function () {
	          callback();
	        };
	      }
	      script.src = url;
	      script.id = scriptId;
	      document.getElementsByTagName("head")[0].appendChild(script);
	    };
	}
	
	
	function relationship(city){
    	var x;
    	$.ajax({
            url: "kMap?city="+city, //json文件位置
            type: "GET", //请求方式为get
            async: false,
            dataType: "json", //返回数据格式为json
            success: function(data) { //请求成功完成后要执行的方法 
             
                x = data
//                console.log(data)

            }
        })
     
        
    //console.log(x['data']);
    var listdata = [];
    var links = [];

    

    function setData(arr) {
    	listdata.push({
    		 "name": x["0"][0]['name'],
    		 symbolSize: 50,
    		 
            
    		 
    	})
        for (var i = 0; i < Object.keys(x).length; i++) {
            num = ""+i
        	listdata.push({
                "name": x[num][2]['name'],
                symbolSize: 30
                
              
            })
        }
    }

    //关系图
    function setLinkData(arr) {
        for (var i = 0; i < Object.keys(x).length; i++) {
        	num = ""+i
            links.push({
                "source": x[num][0]["name"],
                "target": ""+x[num][2]["name"],
                "name": x[num][1]['type'],
                "des": x[num][1]['type'],
                lineStyle: {
                    normal: {
                        color: "#3db148",
                        
                    }
                }
            })
        }
    }



    setData(x);


    setLinkData(x);
//    console.log(links)
            var myChart_guanxi = echarts.init(document.getElementById('echart4'));
          
            option1 = {
                // 图的标题
                title: {
                    text: x["0"][0]['name']+'人口 关系图',
                    x:'center',
                    textStyle:{
                        color:'#fff',
                        fontSize: 14,
                    }
                },
                // 提示框的配置
                tooltip: {
                    formatter: function (x) {
//                        console.log(x.data.des);
                        return x.data.des;
                    }
                },
                // 工具箱
                toolbox: {
                    // 显示工具箱
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        // 还原
                        restore: {
                            show: true
                        },
                        // 保存为图片
                        saveAsImage: {
                            show: true
                        }
                    }
                },
              
                series: [{
                    type: 'graph', // 类型:关系图
                    layout: 'force', //图的布局，类型为力导图
                    roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [2, 10],
                    draggable:true,
                    opacity:0.5,
                    edgeLabel: {
                    	fontSize: 5,
                        normal: {
                            textStyle: {
                                fontSize: 5
                            }
                        }
                    },
                    itemStyle:{
                    	normal:{
                    		color:'#00a0d7'
                    	}
                    },
                    force: {
                    	gravity : 0.1,
                        repulsion: 600,
                        friction : 0.6,
                        edgeLength: [20, 20],
                        layoutAnimation : true
                    },
                    draggable: true,
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: '#4b565b',
                            
                        }
                    },
                    edgeLabel: {
                    	
                        normal: {
                            show: true,
                            width:80,
                        	ellipsis:'...',
                        	color:'#fff',
                        	overflow: "truncate",
                            formatter: function (x) {
                                return x.data.name;
                            }
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            
                            
                        }
                    },

                    // 数据
                    data: listdata,
                    links: links,
                }]
            };
            myChart_guanxi.setOption(option1);
}
})

