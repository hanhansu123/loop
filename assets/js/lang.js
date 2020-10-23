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
		$('#J_lang_switch').text(new_lang_txt);
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
    en : 'A free shitcoin',
    cn : '一个互撸的空气币',
  }
  ,{ 
    en : 'Loop(YFC + REV)',
    cn: 'Loop(YFC + REV)',
  },{ 
    en : 'LOOP(∞)is mapping LP Tokens mining, fair and safe, similar to YFC in the inflation phase, similar to REV in the deflation phase and will continue to cycle in inflation and deflation.',
    cn : 'LOOP(葫芦，∞)映射LP Tokens挖矿，公平安全，在通胀阶段类似于YFC，在通缩阶段类似于REV，并且将在通胀和通缩中不断循环的GameFi项目。',
  },{ 
    en : 'LOOP Mine Pool balance',
    cn : 'LOOP仓库余额',
  }
  ,{ 
    en : 'To be harvested：',
    cn : '待收获：',
  }
  ,{ 
    en : 'Picking all',
    cn : '一键摘果',
  }
  ,{ 
    en : 'LOOP Release',
    cn : 'LOOP释放量',
  }
  ,{ 
    en : 'The max supply：20000LOOP',
    cn : '总量不超过20000LOOP',
  }
  ,{ 
    en : 'LOOP Dividends pool',
    cn : 'LOOP分红池',
  }
  ,{ 
    en : 'For holding dividends',
    cn : '用于持币分红',
  }
  ,{ 
    en : 'Loop Game pool',
    cn : 'LOOP博弈奖池',
  }
  ,{ 
    en : 'For tail order game',
    cn : '开奖时需大于 10 LOOP',
  }
  ,{ 
    en : 'Choose Farmlands',
    cn : '选择菜地',
  }
  ,{ 
    en : 'Tips: careful participation, own risk.',
    cn : '提示：早期项目，谨慎参与，自担风险。',
  }
  ,
];