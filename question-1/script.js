/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`)

function escalera(n) {

    if (n < 3) {
        return n;

    } else {
        let a = 1;
        let b = 2;
        var c;

        for (let i = 2; i < n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return 'Hay ' + b + ' formas de subirla.';
    }

}
var n = 100;
console.log(escalera(n))