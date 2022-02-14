//OTP Generator Application

console.log("Your OTP is \"" + otp_generator()+"\"");


function otp_generator(){
	var y = new Array(5);
	sum = 0;
	for(var i=0; i<6; i++){
		var x = Math.random();
		x = x*10;
		y[i] = Math.floor(x);
		console.log(y[i]);
    if (y[i] == 0){
       y[i] = 1;
      }
	}
	y = y[0]*100000 + y[1]*10000 + y[2]*1000 + y[3]*100 + y[4]*10 + y[5]*1
	return y;
}