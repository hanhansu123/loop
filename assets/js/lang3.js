var tnum = 'cn';

$(document).ready(function(){
	translate(tnum);
	
	$('#J_lang_switch').click(function(){
		var new_lang = $(this).attr('data-value');
		translate(new_lang);
		if(new_lang == 'cn'){
			new_lang = 'en';
			new_lang_txt = 'EN';
			new_title = 'LOOP - EOS GameFi';
		}else{
			new_lang = 'cn';
			new_lang_txt = '中文';
			new_title = 'LOOP葫芦 - EOS GameFi';
		}
		$("#J_lang_switch").attr("data-value",new_lang);
		$('#J_lang_switch').html(new_lang_txt);
		document.title = new_title;
	});
});

function translate(tnum){

  for(var i in trans){
					
					$('[data-lang="'+i+'"]').text(trans[i][tnum]);
				}
				
  
}

var trans = [{ 
    en : 'Home',
    cn : '首页',
  }
  ,{ 
    en : 'Lands',
    cn: '菜地',
  },{ 
    en : 'About',
    cn : '关于',
  }
  ,{ 
    en : 'Account name：',
    cn: '账户名：',
  },{ 
    en : 'Risk warning',
    cn : '谨慎参与，自担风险',
  },{ 
    en : 'About us',
    cn : '关于我们',
  }
  ,{ 
    en : 'LOOP is launched and operated by DeFi enthusiasts in the DFS community.',
    cn: 'LOOP(葫芦) 是由DFS社区的DeFi爱好者进行启动和运营。',
  },{ 
    en : '<p> < strong > LOOP (Hulu) is a GameFi project based on the ILPO mode of bumper harvest on the main network of EOS, which is fair, free and safe mining, no pre-excavation and no fund-raising, as well as transaction burning and holding currency dividend mechanism. < / strong > < / p >In human terms, LOOP is an air currency, a blockchain game that cycles through inflation and deflation, similar to YFC, in inflation and REV in deflation. < br > < br >< h3 > I. Project profile < / h3 > < br >Because the ILPO mode is used for distribution, it is only necessary to map the LP Tokens, on the DFS without extra money, so it is difficult for the project operator to do evil, and the user can remove the gourd LOOP without trust. However, LOOP is an experimental project, in its infancy, there are risks such as contract hacking and rule change, so it is prudent to participate. < br > < br >Total quantity of gourd: supply does not exceed 10000 LOOP < br > < br >Launch time: 3:00, September 20, 2020 (expected) < br > < br >The inflation phase starts from zero, producing 0.005 LOOP, per second, of which 0.004 are sent to warehouses (mining pools) for farmers in various vegetable fields such as DFS and KEY to pick up. Another 0.001 will be sent to the dividend pool and will be used in the future for tail-order games, holding currency dividends, and so on. < br > < br >When the supply reaches 10000 LOOP, the project will shift from inflation to deflation. Under the incentive of the dividend pool, accelerate deflation and return to the inflationary phase when the supply is less than 4000 LOOP,. And so on, over and over again. < br > < br >Direct access to vegetable garden: < a href= "https://loop.ech.one" > https://loop.ech.one</a><br><br>< h3 > II. Project characteristics < / h3 > < br >< h4 > 1, ILPO risk-free mining < / h4 > < br >In order to avoid the incident of "digging jade" running away again, the leading DeFi project on EOS has a bumper harvest and vigorously promotes the issue of coins in ILPO mode. ILPO is Initial LP Mapping Offering,  risk-free token distribution model based on LP token mapping technology. < br > < br >At present, projects using this approach include koi YFC and Chinese cabbage DBC,. In addition, Diamond DMD also uses this technology in part. Users do not have to worry about the principal of mining, the project operator can not touch your market mining funds. < br > < br >< h4 > 2, dynamic income game < / h4 > < br >The most unforgettable thing about YFC is the ingenious dynamic income game, with large investors getting into the soul with one shot, and small households fishing for fish in the middle of the night with a good harvest. LOOP is mining algorithm has been fine-tuned as follows: < br > < br >Mining_amount = 1/100000 of the LOOP balance of the mining pool * proportion of market-making funds * market-making time * vegetable plot weight * (1 + critical strike factor); < br > < br >The front is similar to YFC, and we are probably quite familiar with it. The last "critical strike factor", the user accumulates through transaction burning. With the help of "critical strike", large households have the opportunity to let their income go up to the next floor, and small households can also take advantage of the large Xu Li to make a pre-emptive strike. For general fruit picking, the default value of critical strike factor is zero. When accumulated to a certain value, the user can start critical strike. < br > < br >Critical strike factor (gas value) = 1-pow (0.6, transaction combustion accumulation * 10) < br > < br >Critical strike can not be used frequently. Every time it is used, the trading burning volume will be cleared to zero and should be accumulated from scratch. < br > < br >There is no limit on the total amount of gourds that can be picked in each vegetable field, but the weight will be adjusted according to the operation. < br > < br >< h4 > 3, transaction burning < / h4 > < br >Every time a LOOP is transferred, a portion of the LOOP in your account will be destroyed according to the burning rate. When the account balance is insufficient. Will cause the transaction to fail, please pay attention to the specific error message. < br > < br >The burning rate of tokens is related to the current tokens supply (t): < br > < br >Swap exchange account, token distribution account transfer does not burn, the specific list can be found in the table whitelist. For example, the LOOP, that the user buys or takes back to make the market in the bumper harvest will not burn, but it needs to burn to sell or make the market in the big harvest. < br > < br >Note that trading flames exist regardless of whether the project is inflationary or deflationary. < br > < br >< h3 > third, next step planning < / h3 >At present, the project has achieved the main functions of the inflation phase. When the supply reaches the maximum supply, it will stop issuing shares and turn to the deflationary stage. At that time, the mining pool will slowly dry up, the dividend pool will hold currency dividends, and the specific rules will be announced in advance. < br > < br >When the time is ripe, setting up a prize pool for the end-order game or introducing governance functions for tokens is also one of the options. < br > < br >',
    cn : '<p><strong>LOOP(葫芦) 是基于EOS主网上大丰收的ILPO模式公平、免费、安全挖矿，无预挖、无募资，同时具备交易燃烧、持币分红机制的GameFi项目。</strong></p>用人话说，LOOP是一个空气币，是一个在通胀和通缩周期中不断循环反复的区块链游戏，在通胀阶段类似于YFC，在通缩阶段类似于REV。<br><br><h3>一、项目简介</h3><br>因为采用了ILPO模式分发，只需映射DFS上的LP Tokens，无需额外转币，项目运营者难以作恶，用户可在免信任的情况下摘葫芦LOOP。不过，LOOP属于实验型项目，处于初期，有合约被黑、规则变更等风险，谨慎参与。<br><br>葫芦总量: 供应量不超过10000 LOOP<br><br>上线时间：2020 年 9 月 20 日 3:00（预计）<br><br>通胀阶段从零开始，每秒产出0.005个LOOP，其中0.004个发送到仓库（矿池），供DFS、KEY等各个菜地的农民进行摘取。另外0.001个发送到分红池，将在未来用于尾单博弈、持币分红等。<br><br>当供应量达到10000 LOOP，项目将从通胀转通缩阶段。在分红池的激励下，加速通缩，当供应量低于4000 LOOP，项目重新转为通胀阶段。以此类推，循环往复……<br><br>菜园直达: <a href="https://loop.ech.one" >https://loop.ech.one</a><br><br><h3>二、项目特点</h3><br><h4>1、ILPO 无风险挖矿</h4><br>为了避免 “挖翡翠” 跑路事件再次发生，EOS上的龙头DeFi项目大丰收大力推进ILPO模式发币。ILPO也就是Initial LP Mapping Offering，基于 LP token 映射技术的无风险代币分发模型。<br><br>目前采用这种方式的项目有锦鲤YFC、大白菜DBC，此外钻石DMD也部分采用了这项技术。用户不用担心挖矿的本金，项目运营者无法动你做市挖矿的资金。<br><br><h4>2、动态收益博弈</h4><br>YFC最让人难忘的就是巧妙的动态收益博弈，资金大户一杆入魂，小户半夜捞鱼也有不错收成。LOOP的挖矿算法进行了微调，如下：<br><br>mining_amount = 挖矿池LOOP余额的十万分之一 * 做市资金占比 * 做市时间 * 菜地权重 * （1+暴击因子）; <br><br>前面跟YFC差不多，大家估计也比较熟悉，就不再赘述。最后那个“暴击因子”，用户通过交易燃烧来累积。借助“暴击”，大户有机会让收益再上一层楼，小户也可以乘大户蓄力放大招前先发制人。一般的摘果，暴击因子默认值为零，当积累到一定数值，用户可以启动暴击。<br><br>暴击因子（燃气值） = 1 - pow(0.6, 交易燃烧累积量*10) <br><br>暴击不能经常使用，每当使用1次，交易燃烧量将清零，要从新开始积累。<br><br>每个菜地能摘葫芦的总量没有限制，但权重将根据运营情况进行调节。<br><br><h4>3、交易燃烧</h4><br>每转出一笔 LOOP ，都将按燃烧率销毁你账户中一部分LOOP。当账户余额不够时。会导致交易失败，请留意具体错误信息。<br><br>代币的燃烧率与当前的代币供给总量 (t) 有关：<br><br>• t < 1,000：燃烧率为 1%<br><br>• 1,000 =< t < 3,000 ：燃烧率为 2%<br><br>• 3,000 =< t < 5,000：燃烧率为 3%<br><br>• 5,000 =< t < 7,000：燃烧率为 4%<br><br>• 7,000 =< t < 10,000：燃烧率为 5%<br><br>Swap交易所账户、代币分发账号转出不燃烧，具体名单可查表whitelist。例如，用户在大丰收买入或取回做市的LOOP，不会燃烧，但去大丰收卖出或进行做市需要燃烧。<br><br>注意，无论项目处于通胀还是通缩阶段，交易燃烧都是存在的。<br><br><h3>三、下一步规划</h3>目前，项目实现了通胀阶段的主要功能。当供应量达到最大供应量时，将停止增发，转入通缩阶段。届时，挖矿池将慢慢枯竭，分红池将进行持币分红，具体规则将提前公布。<br><br>时机成熟时，开设一个用于尾单博弈的奖池或为代币引入治理功能也是选项之一。<br><br><h3>四、后话</h3>本项目只是简单的把YFC和REV拼凑在一起吗？<br><br>是的，但又不完全是。<br><br>主打交易燃烧的通缩项目Boom、开创尾单博弈的FOMO 3D，红极一时然后就逐渐沉寂下来。YFI公平分发，为币圈带来新气象，但能否持久还待验证。<br><br>纵观世间万物，周期反复才是常态。日月星辰，春夏秋冬，潮起潮落，生长枯荣，概莫如是。<br><br>经济周期也是在扩张和收缩之间反复，那么将通胀通缩周期反复引入代币经济模型中，能否带来一点变化？能否推陈出新、螺旋上升？<br><br>币圈的我们，参与了很多社会实验，这个“链游”参与吗？<br><br>',
  }
  ,{ 
    en : 'Tips: careful participation, own risk.',
    cn : '提示：早期项目，谨慎参与，自担风险。',
  }
  ,{ 
    en : 'Picking',
    cn : '全摘',
  }
  ,
];