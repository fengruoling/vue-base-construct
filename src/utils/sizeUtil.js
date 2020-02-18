/**
 * 此文件用于放置各种单位转换的处理函数
 */

/**
 * @description 文件大小转换，根据传入数值返回B、KB、MB、GB
 * @param {Number} number 文件大小数值
 * @return {String} 返回带单位的文件大小字符串
 * @user fmz
 * @date 2020-02-18 10:58:07
**/
function fileSizeConvert(number) {
  let size = ''
  if (number < 0.1 * 1024) { // 如果小于0.1KB转化成B
    size = number.toFixed(2) + 'B'
  } else if (number < 0.1 * 1024 * 1024) { // 如果小于0.1MB转化成KB
    size = (number / 1024).toFixed(2) + 'KB'
  } else if (number < 0.1 * 1024 * 1024 * 1024) { // 如果小于0.1GB转化成MB
    size = (number / (1024 * 1024)).toFixed(2) + 'MB'
  } else { // 其他转化成GB
    size = (number / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
  }

  let sizestr = size + ''
  let len = sizestr.indexOf('.')
  let dec = sizestr.substr(len + 1, 2)
  if (dec === '00') { // 当小数点后为00时,去掉小数部分
    return sizestr.substring(0, len) + sizestr.substr(len + 3, 2)
  }
  return sizestr
}

export { fileSizeConvert }
