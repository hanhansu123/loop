
  ScatterJS.plugins(new ScatterEOS());

  var network = {
    blockchain: 'eos',
    protocol: 'https',
    host: 'eos.greymass.com',
    port: '443',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
  };

  var dappName = 'loopminepool';
  var eos = null;
  var account;
  var scatter;
  var requiredFields;
  var eosOptions;


function login() {

    ScatterJS.scatter.connect(dappName).then(function (connected) {

    if (!connected) {
      console.log('connect to scatter failed.');
      return;
    } else {
      console.log('connected to scatter.');
    }

    scatter = ScatterJS.scatter;
	  requiredFields = {accounts: [network]};
	
    scatter.getIdentity(requiredFields).then(function () {


      // var account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

      account = scatter.identity.accounts[0];
      console.log(account);

      eosOptions = {expireInSeconds: 60};

      eos = scatter.eos(network, Eos, eosOptions);


      document.getElementById('login').classList.add('hide');
      document.getElementById('userName').innerHTML = account.name;



    }).catch(function (error) {
      // The user rejected this request, or doesn't have the appropriate requirements.
      console.log('connect to scatter failed.');
      console.log(error);
    });
  });
}

function claim(mid,ifbonus) {

  scatter.getIdentity(requiredFields).then(function () {


    // var account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

    account = scatter.identity.accounts[0];
    console.log(account);

    eosOptions = {expireInSeconds: 60};

    eos = scatter.eos(network, Eos, eosOptions);


    eos.transaction({
      actions: [{
          account: dappName,
          name: 'picking',
          authorization: [{
              actor: account.name,
              permission: "active"
          }],
          data: {
              "user": account.name,
              "mid": mid,
              "ifbonus": ifbonus,
          }

      }]
  }).then(result=>{
        // If Success
		if(ifbonus == 1){ran = 0;}
		
		if(mid == 424){document.getElementById('r_loop').innerText = 0.00000000;reward_loop = 0.00000000;}
		if(mid == 39){document.getElementById('r_dfs').innerText = 0.00000000;reward_dfs = 0.00000000;}
		if(mid == 329){document.getElementById('r_yfc').innerText = 0.00000000;reward_yfc = 0.00000000;}
		if(mid == 5){document.getElementById('r_key').innerText = 0.00000000;reward_key = 0.00000000;}
		if(mid == 10){document.getElementById('r_ccc').innerText = 0.00000000;reward_key = 0.00000000;}
		Notiflix.Notify.Success('领取成功！Successful claim！');
		
        return;
    }
    ).catch(error=>{

        //err = JSON.parse(error);
		err = JSON.stringify(error);
		Notiflix.Notify.Failure('Failure:'+err);

        return;

    }
    );;



  }).catch(function (error) {
    // The user rejected this request, or doesn't have the appropriate requirements.
    //console.log('connect to scatter failed.');
    //console.log(error);
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
					       permission: 'active',
					 }],
					data: {
						      "user": account.name,
						      "mid": usermid[i],
								  "ifbonus": 0,
					      },
				};
				
					myactions.push(myaction)
    }
    
    scatter.getIdentity(requiredFields).then(function () {


      // var account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

      account = scatter.identity.accounts[0];
      console.log(account);

      eosOptions = {expireInSeconds: 60};

      eos = scatter.eos(network, Eos, eosOptions);


      eos.transaction({
        actions: myactions
    }).then(result=>{
        // If Success
		Notiflix.Notify.Success('领取成功！Successful claim！');
		reward_all = 0.00000000;
document.getElementById('pickingbal').innerHTML = 0.00000000;
reward_data = [];
        return;
    }
    ).catch(error=>{


        //err = JSON.parse(error);
		err = JSON.stringify(error);
		Notiflix.Notify.Failure('Failure:'+err);

        return;

    }
    );



    }).catch(function (error) {
      // The user rejected this request, or doesn't have the appropriate requirements.
      console.log('connect to scatter failed.');
      console.log(error);
    });

	

}



