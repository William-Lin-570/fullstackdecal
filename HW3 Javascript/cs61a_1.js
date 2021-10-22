let x = 5;
let y = 4;
function a_plus_abs_b(a,b) {
	/*
    Return a+abs(b), but without calling abs.

    >>> a_plus_abs_b(2, 3)
    5
    >>> a_plus_abs_b(2, -3)

  */
	let f = (a, b) => a+b;
	if (b < 0) {
		f = (a, b) => a-b;
	}
	return f(a, b);
}
let z = a_plus_abs_b(x,y);

function two_of_three(x, y, z){
    /*Return a*a + b*b, where a and b are the two smallest members of the
    positive numbers x, y, and z.

    >>> two_of_three(1, 2, 3)
    5
    >>> two_of_three(5, 3, 1)
    10
    >>> two_of_three(10, 2, 8)
    68
    >>> two_of_three(5, 5, 5)
    50
    */
    return x*x + y*y * z*z - Math.max(x, y, z)**2;
}
// Hint: Consider using the Math.max or Math.min function!

function largest_factor(n){
    /*Return the largest factor of n that is smaller than n.

    >>> console.log(largest_factor(15)); # factors are 1, 3, 5
    5
    >>> console.log(largest_factor(80)); # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40
    40
    >>> console.log(largest_factor(13)); # factor is 1 since 13 is prime
    1
    */
    // *** YOUR CODE HERE ***
    for (let i = n-1; i > 0; i--) {
      if (n%i == 0) {
        return i;
      }
    }
    return 1;
}

function hailstone(n){
	/* Print the hailstone sequence starting at n and return its
		    length.
		>>> let a = hailstone(10)
		10
		5
		16
		8
		4
		2
		1
		>>> console.log(a);
		7
	*/
	// *** YOUR CODE HERE ***
	let a = n;
  let counter = 1;
  while (a != 1) {
    console.log(a);
    if (a%2 == 0) {
      a = a/2;
    } else {
      a = 3*a + 1;
    }
    counter = counter + 1;
  }
  console.log(a);
  return counter;
}
