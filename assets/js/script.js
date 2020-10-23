

(function ($) {
    "use strict";
  
      
    $(window).on('scroll', function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $('.site-navigation').addClass('menu_fixed animated fadeInDown');
      } else {
        $('.site-navigation').removeClass('menu_fixed animated fadeInDown');
      }
    });
  
      // SCROLL TO TOP
      
      $(window).on('scroll', function () {
          if ($(window).scrollTop() > 70) {
              $('.scroll-to-top').addClass('reveal');
          } else {
              $('.scroll-to-top').removeClass('reveal');
          }
      });
  
  
   
  $('.testimonial-slider').slick({
          slidesToShow: 2,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          vertical:true,
          verticalSwiping:true
      });
  
   /* ---------------------------------------------
           owl-carousel
  --------------------------------------------- */
  
      $('.clients-carousel').owlCarousel({
          loop:false,
          margin:10,
          autoplay:true,
          nav:false,
          dots:false,
          responsive:{
              0:{
                  items:1,
              },
              600:{
                  items:3,
              },
              1000:{
                  items:5,
              }
          }
      })
  
   
      $('.review').owlCarousel({
          loop:true,
          margin:10,
          autoplay:false,
          nav:true,
          navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
          dots:false,
          responsive:{
              0:{
                  items:1,
              },
              600:{
                  items:2,
              },
              1000:{
                  items:2,
              }
          }
      })
  
  
      // Counter
      
  
  }(jQuery));


  const API_ENDPOINTS = [
	'https://api.eoseoul.io',
	'https://api.redpacketeos.com',
	'https://nodes.get-scatter.com',
	'http://peer1.eoshuobipool.com:8181',
	'https://mainnet.genereos.io',
	'https://eos.newdex.one',
	'https://api.helloeos.com.cn',
	'https://api.zbeos.com',
	'https://api.eosrio.io',	
	'https://eospush.tokenpocket.pro',
	'https://node1.zbeos.com',
	'https://api.eoslaomao.com',
	'https://api.main.alohaeos.com',
	'https://api.eosdublin.io',
	'https://api.eosn.io',
	'https://api.eoslaomao.com',
	'https://eos.eoscafeblock.com',
	'https://api-mainnet.starteos.io',
	'https://api.eossweden.org',
	'https://openapi.eos.ren',
	'https://api.greymass.com',
	'http://eos.infstones.io',

  ];
  
  function get_random_api() {
	const index = Math.floor(Math.random() * API_ENDPOINTS.length);
	return API_ENDPOINTS[index];
  }

  //var api = get_random_api() ;

var options = {
        useEasing : true, //使用缓和效果
        useGrouping : false, //使用分组效果
        separator : ',', //分离器，数据够三位，例如100,000
        decimal : '.', //小数点分割，例如：10.00
        prefix : '', //第一位默认数字
        suffix : '' //最后一位默认数字
        };

    window.onload=function(){
	
        login();
    
        getMinePool();
		getGamePool();
        getSupply();
        getDiviPool();
		getDfsEOS();

        //getPoolMid() ;
		//getReward();
        
        
}


var minepool_bal = 0;
var balance01 = new CountUp("balance01", 0, 0.00000000, 8, 15, options);
var supply = 0;
var balance02 = new CountUp("balance02", 0, 0.00000000, 8, 15, options);
var divipool_bal = 0;
var balance03 = new CountUp("balance03", 0, 0.00000000, 8, 15, options);
var gamepool_bal = 0;
var balance04 = new CountUp("balance04", 0, 0.00000000, 8, 15, options);
var dfseos = 0;
//var poolmid = [];//挖矿的交易对mid和权重
var poolmid = [{mid: 39, weight: "2.00000000000000000"},{mid: 329, weight: "1.00000000000000000"},{mid: 424, weight: "10.00000000000000000"},{mid: 10, weight: "10.00000000000000000"},{mid: 5, weight: "2.00000000000000000"}];
var usermid = [424];//用户挖矿的mid
var reward_all = 0;
var reward_data = [];
var pickingbal = new CountUp("pickingbal", 0, 0.00000000, 8, 15, options);
var ran = 0 ;

var gid = [];//尾单博弈的game id，取最后3个
var last_gametime = 0;
var game_reward08 = 0;//倒数第八名的奖励
var game_reward07 = 0;
var game_reward06 = 0;
var game_reward05 = 0;
var html = '';
var html2 = '';

Notiflix.Notify.Init({
  position: 'center-center', 
});


function getMinePool() {     
    //挖矿池余额
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_currency_balance",'{"code":"looptoken123","symbol":"LOOP","account":"loopminepool"}',
    function(data,status){
        minepool_bal = parseFloat(data[0]);

        //var balance01 = new CountUp("balance01", 0, minepool_bal, 8, 2, options);
        //balance01.start();
        //balance01.update(minepool_bal);
    }, "json");
}

function getGamePool() {     
    //博弈奖池余额
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_currency_balance",'{"code":"looptoken123","symbol":"LOOP","account":"loopgamepool"}',
    function(data,status){
        gamepool_bal = parseFloat(data[0]);

        //var balance04 = new CountUp("balance01", 0, minepool_bal, 8, 2, options);
        //balance04.start();
        //balance04.update(minepool_bal);
    }, "json");
}

function getSupply() {     
    //释放量
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_currency_stats",'{"code":"looptoken123","symbol":"LOOP"}',
    function(data,status){
        supply = parseFloat(data.LOOP.supply);
        //balance02.update(supply);
    }, "json");

}
    

function getDiviPool() {     
    //分红池余额
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_currency_balance",'{"code":"looptoken123","symbol":"LOOP","account":"loopdivipool"}',
    function(data,status){
        divipool_bal = parseFloat(data[0]);
        //balance03.update(divipool_bal);
    }, "json");
}

function getDfsEOS() {     
    //DFS资金池余额
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_currency_balance",'{"code":"eosio.token","symbol":"EOS","account":"defisswapcnt"}',
    function(data,status){
        dfseos = parseFloat(data[0]);


    }, "json");
}



function updateAll() {  
    
        getMinePool();
		getGamePool();
        getSupply();
        getDiviPool();
		getGid();
		updataGameTable()
		

        if(poolmid.length ==  0){
           //poolmid为空数组时
           getPoolMid();
        }
        if(dfseos == 0 ){
            getDfsEOS();
        }
        if(ran ==  0 && account.name != null){
            getUserBurn(account.name) 
        } 
		if(gid.length !=  0){
            getGameTable01();
			getGameTable02();
        } 
     
}

var upa = setInterval(updateAll, 8000);//更新数据

function calReward(pool_balance,user_balance,dfseos,elasped,pool_mining_weight) {     
    //计算挖矿数量
    //mining_amount = 挖矿池HULU余额的十万分之一 * 做市资金占比 * 做市时间 * 菜地权重 * 暴击因子; 
    var mining_reward = (pool_balance/100000) *  (user_balance/dfseos) * elasped * pool_mining_weight;
    //buffer = 2 - Math.pow(0.6, cum_burn*10);
    return mining_reward;
    
}

function getPoolMid() {     
    //矿池交易对id和权重
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_table_rows",'{"code":"loopminepool","scope":"loopminepool","table":"lands","json":true,"limit":10}',
    function(data,status){
        for (x in data["rows"]){
                    if(data["rows"][x]["mid"] != null){
                        //poolmid.push(data["rows"][x]["mid"])
                        var json = {"mid":data["rows"][x]["mid"],"weight":data["rows"][x]["weight"]};
                        poolmid.push(json);

                    }
            }
            console.log(poolmid)
            //[{mid: 2, weight: "1.00000000000000000"},{mid: 2, weight: "1.00000000000000000"}]

    }, "json");
}

function getGid() {     
    //矿池交易对id和权重
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_table_rows",'{"code":"loopminepool","scope":"loopminepool","table":"lands","json":true,"reverse": true,"limit":3}',
    function(data,status){
		gid = [];
        for (x in data["rows"]){
                    if(data["rows"][x]["mid"] != null){
                        gid.push(data["rows"][x]["mid"])

                    }
            }
			getGameTable01();
			getGameTable02();

    }, "json");
}

function getGameTable01() {     
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_table_rows",'{"code":"loopminepool","scope":"'+gid[0]+'","table":"miners","json":true,"reverse": true,"limit":10}',
    function(data,status){
		html = '';
		html += '<div class="review-item" style="padding:5px;"><div class="wrap-table100"><center><h2>第'+gid[0]+'轮<small>（进行中）</small></h2></center>';
		html += '<div class="table100"><table><thead><tr class="table100-head"><th class="column2">账户名</th><th class="column3">时间</th><th class="column4">预估奖励</th></tr></thead><tbody>';
        for (x in data["rows"]){
                    if(data["rows"][x]["miner"] != null){
						html += '<tr><td class="column2">'+data["rows"][x]["miner"]+'</td><td class="column3">'+data["rows"][x]["last_drip"]+'</td><td class="column4">'+data["rows"][x]["liq_bal0"]+' LOOP</td></tr>';
						
                    }
            }
            html += '</tbody></table></div></div></div>';
			

    }, "json");
}

function getGameTable02() {     
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_table_rows",'{"code":"loopminepool","scope":"'+gid[1]+'","table":"miners","json":true,"reverse": true,"limit":10}',
    function(data,status){
		html2 = '';
		html2 += '<div class="review-item" style="padding:5px;"><div class="wrap-table100"><center><h2>第'+gid[1]+'轮<small>（已结束）</small></h2></center>';
		html2 += '<div class="table100"><table><thead><tr class="table100-head"><th class="column2">账户名</th><th class="column3">时间</th><th class="column4">奖励</th></tr></thead><tbody>';
        for (x in data["rows"]){
                    if(data["rows"][x]["miner"] != null){
						html2 += '<tr><td class="column2">'+data["rows"][x]["miner"]+'</td><td class="column3">'+data["rows"][x]["last_drip"]+'</td><td class="column4">'+data["rows"][x]["liq_bal0"]+'</td></tr>';
						
                    }
            }
            html2 += '</tbody></table></div></div></div>';
    }, "json");
}

function updataGameTable() {
    	
    if(html != null && html2 != null){var html3 = html + html2;$("#gamelist").html(html3);}
}

function getGameTable03() {     
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_table_rows",'{"code":"loopminepool","scope":"'+gid[2]+'","table":"miners","json":true,"reverse": true,"limit":10}',
    function(data,status){
		var html3 = '';
		html3 += '<center><h2>第'+gid[2]+'轮<small>（已结束）</small></h2></center>';
		html3 += '<div class="table100"><table><thead><tr class="table100-head"><th class="column2">账户名</th><th class="column3">时间</th><th class="column4">奖励</th></tr></thead><tbody>';
        for (x in data["rows"]){
                    if(data["rows"][x]["miner"] != null){
						html3 += '<tr><td class="column2">'+data["rows"][x]["miner"]+'</td><td class="column3">'+data["rows"][x]["last_drip"]+'</td><td class="column4">'+data["rows"][x]["liq_bal0"]+'</td></tr>';
						
                    }
            }
            html3 += '</tbody></table></div>';
			$("#gamelist03").html(html3)

    }, "json");
}

Array.prototype.push2 =function(){
    for(var i=0; i<arguments.length; i++){
      var ele = args[i];
      if(this.indexOf(ele) == -1){
          this.push(ele);
      }
  }
};

function RemoveArr(arr) {
    var arr1 = []
    for (var i = arr.length -1 ; i >=0 ; i--) {
        if (arr1.map(x => x.mid).indexOf(arr[i].mid) == -1) {
            arr1.push(arr[i])
        }
    }
    return arr1
}

function RemoveArr2(arr) {
    var arr1 = []
    for (var i = arr.length -1 ; i >=0 ; i--) {
        if (arr1.map(x => x).indexOf(arr[i]) == -1) {
            arr1.push(arr[i])
        }
    }
    return arr1
}


function getUserR(user,mid,weight) {     
    //用户某个交易对的情况
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_table_rows",'{"code":"loopminepool","scope":'+ JSON.stringify(mid)+',"table":"miners","lower_bound":'+JSON.stringify(user)+',"upper_bound":'+JSON.stringify(user)+',"json":true,"limit":1}',
    //$.post(api + "/v1/chain/get_table_rows",'{"code":"loopminepool","scope":"39","table":"miners","lower_bound":"dfsdfsdfsdfs","upper_bound":"dfsdfsdfsdfs","json":true,"limit":1}',
    function(data,status){
                    if(data["rows"][0]["miner"] != null){
						
                        usermid.push(mid);//领取时提取
						usermid = RemoveArr2(usermid);//去重
						
						//console.log(usermid);

                        var bal0 = data["rows"][0]["liq_bal0"];
                        var bal1 = data["rows"][0]["liq_bal1"];
                        var user_balance = 0;

                        if(bal0.indexOf("EOS") != -1){ user_balance = parseFloat(bal0)}
                        if(bal1.indexOf("EOS") != -1){ user_balance = parseFloat(bal1)}

                        console.log(user_balance);

                        var timestamp = Date.parse(new Date())/1000;
                        var elasped = timestamp - parseInt(data["rows"][0]["last_drip"]);
                        console.log(elasped);
                        console.log(weight);
						
						console.log(minepool_bal);
						console.log(dfseos);


                        var r1 = calReward(minepool_bal,user_balance,dfseos,elasped,weight);
                        console.log(r1);
						var json = {"mid":mid,"bal":r1};
                        reward_data.push(json);
						reward_data = RemoveArr(reward_data);//去重
                        //reward_all+= r1;
						return r1;

                        
                    }

    }, "json");
}

function getReward() {
    //usermid = [];
	//account = {name:""};
    if( dfseos != 0 && minepool_bal != 0){
        for (x in poolmid){
            try {
                var reward = getUserR(account.name,poolmid[x].mid,poolmid[x].weight);
				//reward_all +=reward;
				//console.log(reward);
            } catch (e) {
//				console.log(e);
                var reward = getUserR(account.name,poolmid[x].mid,poolmid[x].weight);
			}
        }
    }
    //console.log(reward_all);
    //document.getElementById('pickingbal').innerText = reward_all;

}

//var re = setInterval(getReward, 30000);//更新收益数据

function getUserBurn(user) {     
    //用户的燃气值
    var api = get_random_api() ;
    $.post(api + "/v1/chain/get_table_rows",'{"code":"looptoken123","scope":'+JSON.stringify(user)+',"table":"accountd","json":true,"limit":1}',
    function(data,status){
                    if(data["rows"][0]["cumulative_burn"] != null){
                        //poolmid.push(data["rows"][x]["id"])

                        var cum_burn = parseFloat(data["rows"][0]["cumulative_burn"]);
                        var buffer = 1 - Math.pow(0.6, cum_burn);

                        ran = Math.floor(buffer * 10000) / 100;
						//console.log('ran:'+ran);


                    }
            //console.log(poolmid)
            //[{mid: 2, weight: "1.00000000000000000"},{mid: 2, weight: "1.00000000000000000"}]

    }, "json");
    
}


