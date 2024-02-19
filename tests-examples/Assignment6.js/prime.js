//Create a function that takes numbers n1 and n2  as inputs and prints all the prime numbers between n1 and n2.
function primes(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

primes(10, 50);