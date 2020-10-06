function palindrome(){
		var max = 0;
		for (var j = 999; j >= 100; j--)
		{
            for (var k = 999; k >= 100; k--) {
                var product = j * k;
                if(isPalindrome(product.toString()))
                {
                    if(product > max) {
                        max = product;
                    }
                }
            }
            
		}
		console.log(max);
}
 
function isPalindrome(text){

	for (var i = 0; i < text.length / 2; i++) {
		if(text.charAt(i) != text.charAt(text.length - 1 - i)) {
		    return false;
		}
	}
	return true;
}

palindrome();