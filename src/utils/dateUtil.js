/**
 * @description 返回指定日期对象前多少年的日期对象
 * @param {Number} year 年，
 * @param {Date} date 指定日期对象，默认为当前日期时间
 * @return {Date} 返回处理后的日期对象
 * @user fmz
 * @date 2020-02-17 16:18:48
**/
function getYearsAgoDate (year = 1, date = new Date()) {
  let dateCopy = dateClone(date)
  dateCopy.setFullYear(dateCopy.getFullYear() - year)
  return dateCopy
}

/**
 * @description 克隆日期对象
 * @param {Date} date 原始日期对象
 * @return {Date} 克隆出的日期对象
 * @user fmz
 * @date 2020-02-17 16:23:19
**/
function dateClone (date) {
  return new Date(date.getTime())
}

/**
 * @description 日期格式化
 * @param {Date} date 日期对象，默认值为当前时间日期对象
 * @param {String} formatStr 格式化字符串，如'yyyy-MM-dd'
 * @return {String} 格式化后的日期字符串
 * @user fmz
 * @date 2020-02-17 16:57:50
**/
function dateFormat (date = new Date(), formatStr) {
  if (date.constructor !== Date) {
    return date
  }
  const rule = {
    'M+': date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1, // 月份
    'd+': date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate(), // 日
    'h+': date.getHours() < 10 ? '0' + date.getHours() : date.getHours(), // 小时
    'm+': date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes(), // 分
    's+': date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if ((/(y+)/).test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, date.getFullYear() + '')
  }
  for (var k in rule) {
    if (new RegExp('(' + k + ')').test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, rule[k])
    }
  }
  return formatStr
}

export { getYearsAgoDate, dateClone, dateFormat }
