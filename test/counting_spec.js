import { expect } from 'chai';

import * as counting from '../src/counting';

console.log('#######################################################');
console.log('Running tests in 20s... Check your work while you wait!');

const oneToOneHundred = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n82\n83\n84\n85\n86\n87\n88\n89\n90\n91\n92\n93\n94\n95\n96\n97\n98\n99\n100\n";

const oddsLabeled = "1 - odd\n2\n3 - odd\n4\n5 - odd\n6\n7 - odd\n8\n9 - odd\n10\n11 - odd\n12\n13 - odd\n14\n15 - odd\n16\n17 - odd\n18\n19 - odd\n20\n21 - odd\n22\n23 - odd\n24\n25 - odd\n26\n27 - odd\n28\n29 - odd\n30\n31 - odd\n32\n33 - odd\n34\n35 - odd\n36\n37 - odd\n38\n39 - odd\n40\n41 - odd\n42\n43 - odd\n44\n45 - odd\n46\n47 - odd\n48\n49 - odd\n50\n51 - odd\n52\n53 - odd\n54\n55 - odd\n56\n57 - odd\n58\n59 - odd\n60\n61 - odd\n62\n63 - odd\n64\n65 - odd\n66\n67 - odd\n68\n69 - odd\n70\n71 - odd\n72\n73 - odd\n74\n75 - odd\n76\n77 - odd\n78\n79 - odd\n80\n81 - odd\n82\n83 - odd\n84\n85 - odd\n86\n87 - odd\n88\n89 - odd\n90\n91 - odd\n92\n93 - odd\n94\n95 - odd\n96\n97 - odd\n98\n99 - odd\n100\n";

const fizzbuzz = "1\n2\nfizz\n4\nbuzz\nfizz\n7\n8\nfizz\nbuzz\n11\nfizz\n13\n14\nfizzbuzz\n16\n17\nfizz\n19\nbuzz\nfizz\n22\n23\nfizz\nbuzz\n26\nfizz\n28\n29\nfizzbuzz\n31\n32\nfizz\n34\nbuzz\nfizz\n37\n38\nfizz\nbuzz\n41\nfizz\n43\n44\nfizzbuzz\n46\n47\nfizz\n49\nbuzz\nfizz\n52\n53\nfizz\nbuzz\n56\nfizz\n58\n59\nfizzbuzz\n61\n62\nfizz\n64\nbuzz\nfizz\n67\n68\nfizz\nbuzz\n71\nfizz\n73\n74\nfizzbuzz\n76\n77\nfizz\n79\nbuzz\nfizz\n82\n83\nfizz\nbuzz\n86\nfizz\n88\n89\nfizzbuzz\n91\n92\nfizz\n94\nbuzz\nfizz\n97\n98\nfizz\nbuzz\n";

setTimeout( () => {
    describe('counting', () => {
        describe('countWhile()', () => {
            it('counts to 100', () => {
                expect(counting.countWhile()).to.eq(oneToOneHundred);
            });
        });
        describe.skip('countFor()', () => {
            it('counts to 100', () => {
                expect(counting.countFor()).to.eq(oneToOneHundred);
            });
        });
        describe.skip('countOdds()', () => {
            it('labels odds', () => {
                expect(counting.countOdds()).to.eq(oddsLabeled);
            });
        });
        describe.skip('fizzbuzz()', () => {
            it('outputs correctly', () => {
                expect(counting.fizzBuzz()).to.eq(fizzbuzz);
            });
        });
    });
    
    run();
}, 20000);