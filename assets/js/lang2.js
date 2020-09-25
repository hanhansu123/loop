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
    en : 'LOOP Farmlands',
    cn : 'LOOP菜地',
  }
  ,{ 
    en : 'Choose your favorite Farmland',
    cn: '选择你喜欢的菜地',
  },{ 
    en : 'Mapping LP Tokens mining. No need to transfer tokens',
    cn : '映射你在DFS做市的LP TOKEN，无需转币！',
  },{ 
    en : 'Expected harvest:',
    cn : '预计收获：',
  }
  ,{ 
    en : 'Deposit',
    cn : '做市',
  }
  ,{ 
    en : 'Crit',
    cn : '暴击',
  }
  ,{ 
    en : 'Picking',
    cn : '摘果',
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