export const isPrime = (n) => {
    for(let i = 2; i < n; i++) {
        if(n % i == 0) return false;
    }
    
    return true;
};

export const isPrimeSteps = (n) => {
    let steps = 0;
    
    for(let i = 2; i < n; i++, steps++) {
        if(n % i == 0) return [false, steps+1];
    }
    
    return [true, steps];
};

export const fasterPrime = (n) => {
    let steps = 0;
    
    for(let i = 2; i <= Math.sqrt(n); i++, steps++) {
        if(n % i == 0) return [false, steps+1];
    }
    
    return [true, steps];
};

export const firstPrimes = (n) => {
    const primes = [];
    let steps = 0;
    
    for(let i = 2; primes.length < n; i++) {
        const [prime, theseSteps] = fasterPrime(i);
        if(prime) primes.push(i);
        steps += theseSteps;
    }
    
    return [primes, steps];
};

export const evenFasterPrime = (n, primesLessThanN) => {
    let steps = 0;
    
    for(let i = 0; primesLessThanN[i] <= Math.sqrt(n); i++, steps++) {
        if(n % primesLessThanN[i] == 0) {
            return [false, steps+1];
        }
    }
    
    return [true, steps];
};

export const fasterFirstPrimes = (n) => {
    const primes = [];
    let steps = 0;
    
    for(let i = 2; primes.length < n; i++) {
        const [prime, theseSteps] = evenFasterPrime(i, primes);
        if(prime) primes.push(i);
        steps += theseSteps;
    }
    
    return [primes, steps];
};