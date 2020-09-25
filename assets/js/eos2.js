
  import ScatterJS from '@scatterjs/core';
  import ScatterEOS from '@scatterjs/eosjs2';
  import {JsonRpc, Api} from 'eosjs';
  
  ScatterJS.plugins( new ScatterEOS() );
  
  const network = ScatterJS.Network.fromJson({
      blockchain:'eos',
      chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      host:'nodes.get-scatter.com',
      port:443,
      protocol:'https'
  });
  const rpc = new JsonRpc(network.fullhost());
  
  const account;
  const dappName = "loopminepool";
  


function login() {

  ScatterJS.connect(dappName, {network}).then(connected => {
    if(!connected) return console.error('no scatter');

    const eos = ScatterJS.eos(network, Api, {rpc});

    ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        account = ScatterJS.account('eos');

        document.getElementById('login').classList.add('hide');
        document.getElementById('userName').innerHTML = account.name;

        
    });
});

}

function claim(mid,ifbonus) {

  ScatterJS.connect(dappName, {network}).then(connected => {
    if(!connected) return console.error('no scatter');

    const eos = ScatterJS.eos(network, Api, {rpc});

    ScatterJS.login().then(id => {
        if(!id) return console.error('no identity');
        const account = ScatterJS.account('eos');

        eos.transact({
            actions: [{
                account: dappName,
                name: 'picking',
                authorization: [{
                    actor: account.name,
                    permission: account.authority,
                }],
                data: {
                  "user": account.name,
                  "mid": mid,
                  "ifbonus": ifbonus,
              },
            }]
        }, {
            blocksBehind: 3,
            expireSeconds: 30,
        }).then(res => {
            console.log('sent: ', res);
        }).catch(err => {
            console.error('error: ', err);
        });
    });
});

}
	
function claimall() {
  var myactions = [];
  for(var i =0; i<usermid.length; i++){
				var myaction =  {
					account: dappName,
					 name: 'picking',
					 authorization: [{
					       actor: account.name,
					       permission: account.authority,
					 }],
					data: {
						      "user": account.name,
						      "mid": usermid[i],
								  "ifbonus": 0,
					      },
				};
				
					myactions.push(myaction)
    }
    
    ScatterJS.connect(dappName, {network}).then(connected => {
      if(!connected) return console.error('no scatter');
  
      const eos = ScatterJS.eos(network, Api, {rpc});
  
      ScatterJS.login().then(id => {
          if(!id) return console.error('no identity');
          const account = ScatterJS.account('eos');
  
          eos.transact({
              actions: myactions
          }, {
              blocksBehind: 3,
              expireSeconds: 30,
          }).then(res => {
              console.log('sent: ', res);
              document.getElementById('tip1').innerHTML = "领取成功！";
            document.getElementById('pickingbal').innerHTML = 0.00000000;
          }).catch(err => {
              console.error('error: ', err);
              err = JSON.parse(error);
						document.getElementById('tip1').innerHTML = "领取失败,原因" + err;
          });
      });
  });

}



