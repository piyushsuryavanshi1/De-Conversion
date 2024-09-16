
//1) decimal to binary
function mfw(){
    var x = document.getElementById('x').value;
    function decimalToBinary(x) {
        return (x >>> 0).toString(2);
    }
    
    let binary = decimalToBinary(x);
    document.getElementById('a').innerHTML = "The binary representation of given number is:- " + binary;
    }
// 2)Binary to Decimal
    function mfw1()
    {
        var y=document.getElementById('hello').value;
        function binaryToDecimal(y)
{
    let num = y;
    let dec_value = 0;
 
    // Initializing base value to 1, i.e 2^0
    let base = 1;
 
    let temp = num;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
 
        dec_value += last_digit * base;
 
        base = base * 2;
    }
 
    return dec_value;
}
 let dec=binaryToDecimal(y);
document.getElementById('ik').innerHTML="The decimal represenation is"+dec;
    }
    
    // 3)Decimal to Octal
function mfw2()
{
    var z=document.getElementById('hello1').value;
function decToOctal(n)
{
    
    // array to store octal number
    let octalNum = new Array(100);

    // counter for octal number array
    let i = 0;
    while (z != 0) {

        // storing remainder in octal array
        octalNum[i] = z % 8;
        z = Math.floor(z/ 8);
        i++;
    }

    // printing octal number array in reverse order
    for (let j = i - 1; j >= 0; j--)
        document.write(octalNum[j]);
}


   let oct= decToOctal(z);
   document.getElementById('o').innerHTML="The octal represenation is"+oct;

}
//4)octal to decimal...
function mfw3()
{
    var ma=document.getElementById('hello2').value;
    
function octalToDecimal(ma) 
{ 
	let num = ma; 
	let dec_value = 0; 

	// Initializing base value to 1, i.e 8^0 
	let base = 1; 

	let temp = num; 
	while (temp) { 

		// Extracting last digit 
		let last_digit = temp % 10; 
		temp = Math.floor(temp / 10); 

		// Multiplying last digit with appropriate 
		// base value and adding it to dec_value 
		dec_value += last_digit * base; 

		base = base * 8; 
	} 

	return dec_value; 
} 

let dec1=octalToDecimal(ma);
document.getElementById('abc').innerHTML="The Decimal Representationis:"+dec1;


}
// 5) hexadecimal to binary....
function mfw4()
{
    var am=document.getElementById('hello3').value;
    
function HexToBin(am)
{
	var i = 0;

	while (am[i]) {

		switch (am[i]) {
		case '0':
			document.write("0000");
			break;
		case '1':
			document.write("0001");
			break;
		case '2':
			document.write("0010");
			break;
		case '3':
			document.write("0011");
			break;
		case '4':
		document.write("0100");
			break;
		case '5':
			document.write("0101");
			break;
		case '6':
			document.write("0110");
			break;
		case '7':
			document.write("0111");
			break;
		case '8':
			document.write("1000");
			break;
		case '9':
			document.write("1001");
			break;
		case 'A':
		case 'a':
			document.write("1010");
			break;
		case 'B':
		case 'b':
			document.write("1011");
			break;
		case 'C':
		case 'c':
			document.write("1100");
			break;
		case 'D':
		case 'd':
			document.write("1101");
			break;
		case 'E':
		case 'e':
			document.write("1110");
			break;
		case 'F':
		case 'f':
			document.write("1111");
			break;
		case '.': 
			document.write(".");
			break;
		default:
			document.write("\nInvalid hexadecimal digit " + am[i]);
		}
		i++;
	}
}
let bin=HexToBin(am);
document.getElementById('er').innerHTML="The Binary Representation is"+bin;


}
//6) Decimal TO HEXADECIMAL......
function mfw5()
{
var morn=document.getElementById('hello4').value;

function decToHexa(morn)
{
    // char array to store hexadecimal number of length 100 and initialize all with 0;
    //var hexaDeciNum = Array.from({length: 100},
                     // (_, i) => 0);
                     var hexaDeciNum = new Array(100).fill(0);


    // counter for hexadecimal number array
    var i = 0;
    while (morn != 0) {
        // temporary variable to store remainder
        var temp = 0;

        // storing remainder in temp variable.
        temp = morn% 16;

        // check if temp < 10
        if (temp < 10) {
            hexaDeciNum[i] = String.fromCharCode(temp + 48);
            i++;
        }
        else {
            hexaDeciNum[i] = String.fromCharCode(temp + 55);
            i++;
        }

        morn = parseInt(morn / 16);
    }

    // printing hexadecimal number array in reverse
    // order
    for (j = i - 1; j >= 0; j--)
        document.write(hexaDeciNum[j]);
}

var hexi=decToHexa(morn);
document.getElementById('re').innerHTML="The Hexadecimal represenatation is:"+hexi;

 
}
// 7 Binary TO OCTAL
function mfw6()
{
    var y=document.getElementById('hello5').value;
    function binaryToDecimal(y)
    {
        let num = y;
        let dec_value = 0;
     
        // Initializing base value to 1, i.e 2^0
        let base = 1;
     
        let temp = num;
        while (temp) {
            let last_digit = temp % 10;
            temp = Math.floor(temp / 10);
     
            dec_value += last_digit * base;
     
            base = base * 2;
        }
     
        return dec_value;
    }
    let bn=binaryToDecimal(y);
    function decToOctal(bn)
{
    
    // array to store octal number
    let octalNum = new Array(100);

    // counter for octal number array
    let i = 0;
    while (bn != 0) {

        // storing remainder in octal array
        octalNum[i] = bn % 8;
        bn = Math.floor(bn/ 8);
        i++;
    }

    // printing octal number array in reverse order
    for (let j = i - 1; j >= 0; j--)
        document.write(octalNum[j]);
}
    
  
   let saha=decToOctal(bn);
    document.getElementById('kin').innerHTML="The octal Representation is:"+saha;
}
///  8)  BINARY TO GRay
function mfw7()
{
    var tum=document.getElementById('hello6').value;
    
// Helper function to xor two characters
function xor_c(a, b){ return (a == b) ? '0' : '1'; }



// Function to convert binary string
// to gray string
function binarytoGray(tum)
{
	let gray = "";

	// MSB of gray code is same
	// as binary code
	gray += tum[0];

	// Compute remaining bits, next bit 
	// is computed by doing XOR of previous
	// and current in Binary
	for(let i = 1; i < tum.length; i++) 
	{
		
		// Concatenate XOR of previous bit
		// with current bit
		gray += xor_c(tum[i - 1], tum[i]);
	}
	return gray;
}


	let gra=binarytoGray(tum);
    document.getElementById('ij').innerHTML="The Gray Representation is:"+gra;



	


}
/// 9) Gray to binary.....
function mfw8()
{
    var yum=document.getElementById('hello7').value;
    // Helper function to flip the bit
function flip(c){ return (c == '0') ? '1' : '0'; }
function graytoBinary(yum)
{
    let binary = "";
 
    // MSB of binary code is same
    // as gray code
    binary += yum[0];
 
    // Compute remaining bits
    for(let i = 1; i < yum.length; i++)
    {
         
        // If current bit is 0, concatenate
        // previous bit
        if (yum[i] == '0')
            binary += binary[i - 1];
 
        // Else, concatenate invert of
        // previous bit
        else
            binary += flip(binary[i - 1]);
    }
    return binary;
}
let bon=graytoBinary(yum);
document.getElementById('kl').innerHTML="The Gray Representation is: "+bon;
}




	




