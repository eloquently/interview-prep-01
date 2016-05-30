import { expect } from 'chai';

import * as primes from '../src/primes';

const nums = [ [2, true], [3, true], [4, false], [5, true],
    [10, false], [11, true], [12, false], [13, true],
    [101, true], [102, false], [105, false], [5333, true],
    [10004447, true], [2608038137, false], 
    [2608038161, true] ];
    
const fasterSteps = { 
    2: 0,
    3: 0,
    4: 1,
    5: 1,
    10: 1,
    11: 2,
    12: 1,
    13: 2,
    101: 9,
    102: 1,
    105: 2,
    5333: 72,
    10004447: 3161,
    2608038137: 51000,
    2608038161: 51067
};

const firstPrimes = {
    10: [ [ 0, 1, 2, 3, 5, 7, 11, 13, 17, 19 ], 24 ]
    
}

console.log('#######################################################');
console.log('Running tests in 20s... Check your work while you wait!');
               
setTimeout( () => {
    describe('primes', () => {
        describe('isPrime()', () => {
            for(let [num, prime] of nums) {
                it(`works for ${num}`, () => {
                    console.log(`checking ${num}`);
                    expect(primes.isPrime(num)).to.eq(prime);
                });
            }
        });
        
        describe.skip('isPrimeSteps()', () => {
            it('returns array with boolean and number', () => {
                const result = primes.isPrimeSteps(2);
                expect(result).to.be.an("array");
                expect(result[0]).to.be.a("boolean");
                expect(result[1]).to.be.a("number");
            });
        });
        
        describe.skip('fasterPrime()', () => {
            for(let [num, prime] of nums) {
                it(`checks ${num} in ${fasterSteps[num]} steps`, () => {
                    const [isPrime, steps] = primes.fasterPrime(num);
                    expect(isPrime).to.eq(prime);
                    expect(steps).to.eq(fasterSteps[num]);
                });
            }
        });
        
        describe.skip('firstPrimes()', () => {
            it('returns prime values', () => {
                expect(primes.firstPrimes(10)[0]).to
                    .eql([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
            });
            
            it('calculates correct number of steps', () => {
                expect(primes.firstPrimes(500000)[1]).to
                    .eq(1132749812);
            });
        });
        
        describe.skip('evenFasterPrime()', () => {
            const first10 = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ];
            it('determines if a number is prime', () => {
                expect(primes.evenFasterPrime(2,[])[0]).to
                    .eq(true);
                expect(primes.evenFasterPrime(3,[2])[0]).to
                    .eq(true);
                expect(primes.evenFasterPrime(4,[2,3])[0]).to
                    .eq(false);
                expect(primes.evenFasterPrime(5,[2,3])[0]).to
                    .eq(true);
                expect(primes.evenFasterPrime(30, first10)[0]).to
                    .eq(false);
                expect(primes.evenFasterPrime(31, first10)[0]).to
                    .eq(true);
            });
            
            it('uses correct number of steps', () => {
                expect(primes.evenFasterPrime(2,[])[1]).to
                    .eq(0);
                expect(primes.evenFasterPrime(3,[2])[1]).to
                    .eq(0);
                expect(primes.evenFasterPrime(4,[2,3])[1]).to
                    .eq(1);
                expect(primes.evenFasterPrime(5,[2,3])[1]).to
                    .eq(1);
                expect(primes.evenFasterPrime(30, first10)[1]).to
                    .eq(1);
                expect(primes.evenFasterPrime(31, first10)[1]).to
                    .eq(3);
            });
        });
        
        describe.skip('fasterFirstPrimes()', () => {
            it('returns prime values', () => {
                expect(primes.fasterFirstPrimes(10)[0]).to
                    .eql([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
            });
            
            it('calculates correct number of steps', () => {
                expect(primes.fasterFirstPrimes(500000)[1]).to
                    .eq(190682992);
            });
        });
    });
    run();
}, 20000);

