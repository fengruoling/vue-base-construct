/**
 * 此文件用于对字符串进行简单的加密和解密
 */
/**
 * @description 对字符串进行加密 
 * @param {String} code 要加密的字符串
 * @return {String} 加密后的字符串
 * @user fmz
 * @date 2020-02-24 18:56:04
**/
function compileStr(code) {
  let c = String.fromCharCode(code.charCodeAt(0) + code.length)
  for (let i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
  }
  return escape(c)
}

/**
 * @description 对加密后的字符串进行解密
 * @param {String} code 加密的字符串
 * @return {String} 解密后的字符串
 * @user fmz
 * @date 2020-02-24 18:57:12
**/
function uncompileStr(code) {
  code = unescape(code)
  let str = String.fromCharCode(code.charCodeAt(0) - code.length)
  for (let i = 1; i < code.length; i++) {
    str += String.fromCharCode(code.charCodeAt(i) - str.charCodeAt(i - 1))
  }
  return str
}

export {
  compileStr,
  uncompileStr
}
