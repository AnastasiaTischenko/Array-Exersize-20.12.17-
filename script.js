var mas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
document.getElementById('inp').addEventListener('blur', function(){
	let correctData = [];
	let val = this.value;
	val = val.split(',');
	for (let item of val){
		if (mas.indexOf(item) != -1){
			correctData.push(item)
		}
	}
	console.log(deleteDouble(correctData))
}, false)

function deleteDouble(masInp){
	alert('fxb')
	let newMas = [];
	for (let i = 0; i < masInp.length ; i++) {
		for (let j = i + 1; j < masInp.length; j++) {
			if (+masInp[i] == +masInp[j]){	
				delete masInp[j]
			}
		}
	}
	for (let i = 0; i < masInp.length ; i++) {
		if (masInp[i] != undefined){
			newMas.push(masInp[i])
		}
	}
	return newMas
}