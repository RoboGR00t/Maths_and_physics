//Διαιρέτες του n φυσικού αριθμού
n=process.argv[2]
console.log('Factor of '+n+':')
for(var j=1;j<=n;j++){
	if(n%j==0){
		console.log(j)
	}
};