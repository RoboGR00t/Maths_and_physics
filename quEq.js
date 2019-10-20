//Δευτεροβάθμια εξίσωση
var a=process.argv[2]
var b=process.argv[3]
var c=process.argv[4]
console.log('Your quadric equation is')
console.log(a+'x^2 '+'+ '+b+'x '+'+ '+c+' = '+'0')
if (a==0 && b!=0){
	console.log('This is a primary equation')
}
if (a==0){
	if (b==0){
		if (c==0){
			console.log('The equation is indefinite') 
		}
		else{
			console.log('The equation is impossible')
		}
	}
	else{
		var x=((-c)/b)
		console.log('The result is x='+x)
	}
	
}
else{
	var d=((b*b)-(4*a*c))

if (d==0){
	console.log('There are two results')
	var x12=(b/(2*a))
	console.log(x12)
}
else if (d>0){
	console.log('I have 2 real result')
	var x1=(((-b)+ Math.sqrt(d))/(2*a))
	var x2=(((-b)- Math.sqrt(d))/(2*a))
	console.log('The results are x1='+x1+' x2='+x2)
}
else{
	console.log('The equation has a complex effect')

};
};