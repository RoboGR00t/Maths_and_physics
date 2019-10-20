//Διαιρέτες των n πρώτων φυσικών αριθμών
n=process.argv[2]
for(var i=2;i<=n;i++){
console.log('Factor of '+i+':')
for(var j=1;j<=i;j++){
	if(i%j==0){
		console.log(j)
	}
}
}