/**
 * 此文件用于放置数组相关的处理函数
 */

/**
 * @description 返回一段数值范围内的数组，包括边界值
 * @param {Number} start 最小值
 * @param {Number} end 最大值
 * @return {Array} 返回对应的数组
 * @user fmz
 * @date 2020-02-18 15:59:58
**/
function getArrBetween(start, end) {
  const arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

export {
  getArrBetween
}
