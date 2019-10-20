//Παραγοντικό 
x=process.argv[2]
if(x==0){
	console.log('The factorial of '+x+' is number 1')
}
else{
var f=1
for (var i=1 ; i<=x;i=i+1){
	var f=f*i
};
console.log('The factorial of '+x+' is number '+f)
};
