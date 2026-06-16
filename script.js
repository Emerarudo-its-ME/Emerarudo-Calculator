function greetUser(){
	const name=document.getElementById('usernameInput').value;
	if(name===""){
		alert("ニックネームを入力してね！");
		return;
	}
	document.getElementById('displayMessage').innerText="ようこそ！"+name+"さん。";
}

function Calculator(){
	
	const num1=parseFloat(document.getElementById('num1').value);
	const num2=parseFloat(document.getElementById('num2').value);
		if(isNaN(num1)||isNaN(num2)){
			alert("数字を入力してね！");
			return;
			}
	const symbol=document.getElementById('symbol').value;
	
	let ans=0;
	
		if(symbol==="+"){
			ans=num1+num2;
		}else if(symbol==="-"){
			ans=num1-num2;
		}else if(symbol==="*"){
			ans=num1*num2;
		}else if(symbol==="/"){
			if(num2===0){
				alert("0では割れへんやろ？？");
				alert("義務教育ちゃんと受けてきたんか？？？");
				alert("お？？？");
				return;
			}
			ans=num1/num2;
		}
		
		document.getElementById('result').innerText="="+ans;
}