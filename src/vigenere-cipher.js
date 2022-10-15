const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(direct = true) {
      this.direct = direct;
      this.charCode = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.errorMsg = 'Incorrect arguments!';
  }

  _converter(message, keyword, encrypt = true) {
      if (!message || !keyword) {
          throw new Error(this.errorMsg);
      } else {
          const msg = message.toUpperCase().split('');
          const key = keyword.repeat(Math.ceil(message.length / keyword.length)).toUpperCase()

          let i = 0;

          const newMsg = msg.reduce((resultMsg, currentLetter) => {
              if (this.charCode.includes(currentLetter)) {
                  const letterIndexInAlpha = this.charCode.indexOf(key[i++]);
                  const newAlpha =`${this.charCode.slice(letterIndexInAlpha)}${this.charCode.slice(0, letterIndexInAlpha)}`;
                  return encrypt ?
                      `${resultMsg}${newAlpha[this.charCode.indexOf(currentLetter)]}`:
                      `${resultMsg}${this.charCode[newAlpha.indexOf(currentLetter)]}`;
              } else {
                  return `${resultMsg}${currentLetter}`;
              }
          }, '');

          return this.direct ? newMsg : newMsg.split('').reverse().join('');
      }
  }

  encrypt = (message, keyword) => this._converter(message, keyword);
  decrypt = (message, keyword) => this._converter(message, keyword, false);

}

module.exports = {
  VigenereCipheringMachine
};
