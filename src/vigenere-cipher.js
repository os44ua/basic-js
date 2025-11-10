const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.direct = isDirect !== false; // true прямая, fals обратная
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msg = String(message).toUpperCase();
    const k = String(key).toUpperCase();

    const A = 'A'.charCodeAt(0);
    const res = [];
    let ki = 0;

    for (const ch of msg) {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) { // [A..Z]
        const m = code - A;
        const kv = k.charCodeAt(ki % k.length) - A;
        const c = (m + kv) % 26;
        res.push(String.fromCharCode(A + c));
        ki++;
      } else {
        res.push(ch);// остальные другие симводы  кроме букв
      }
    }

    const out = res.join('');
    return this.direct ? out : out.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msg = String(message).toUpperCase();
    const k = String(key).toUpperCase();

    const A = 'A'.charCodeAt(0);
    const res = [];
    let ki = 0;

    for (const ch of msg) {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) { // [A..Z]
        const c = code - A;
        const kv = k.charCodeAt(ki % k.length) - A;
        const m = (c - kv + 26) % 26;
        res.push(String.fromCharCode(A + m));
        ki++;
      } else {
        res.push(ch);
      }
    }

    const out = res.join('');
    return this.direct ? out : out.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
