/**
 * 此文件用于放置各种日期对象相关的处理函数
 */

/**
 * @description 返回指定日期对象前多少年的日期对象
 * @param {Number} year 年，
 * @param {Date} date 指定日期对象，默认为当前日期时间
 * @return {Date} 返回处理后的日期对象
 * @user fmz
 * @date 2020-02-17 16:18:48
**/
function getYearsAgoDate(year = 1, date = new Date()) {
  let dateCopy = dateClone(date)
  dateCopy.setFullYear(dateCopy.getFullYear() - year)
  return dateCopy
}

/**
 * @description 返回指定日期对象前多少月的日期对象，不改变原日期对象
 * @param {Number} month 月，默认为1月
 * @param {Date} date 指定日期对象，默认为当前日期时间
 * @return {Date} 返回处理后的日期对象
 * @user fmz
 * @date 2020-02-24 13:55:32
**/
function getMonthsAgoDate(month = 1, date = new Date()) {
  let dateCopy = dateClone(date)
  dateCopy.setMonth(dateCopy.getMonth() - month)
  return dateCopy
}

/**
 * @description 返回指定日期对象前多少天的日期对象，不改变原日期对象
 * @param {Number} day 天，默认为1天
 * @param {Date} date 指定日期对象，默认为当前日期时间
 * @return {Date} 返回处理后的日期对象
 * @user fmz
 * @date 2020-02-24 13:59:08
**/
function getDaysAgoDate(day = 1, date = new Date()) {
  let dateCopy = dateClone(date)
  dateCopy.setDate(dateCopy.getDate() - day)
  return dateCopy
}

/**
 * @description 返回指定日期对象之前的日期对象，可以以年、月、日为周期，不改变原日期对象，例如：返回2年前的日期、2月前的日期、2天前的日期
 * @param {String} type 周期类型，可选值为year、month、day
 * @param {Number} num 周期数
 * @param {Date} date 指定日期对象，默认为当前日期时间
 * @return {Date} 返回处理后的日期对象
 * @user fmz
 * @date 2020-02-24 14:09:18
**/
function getAgoDate(type = 'day', num = 1, date = new Date()) {
  switch (type) {
    case 'year':
      return getYearsAgoDate(num, date)
    case 'month':
      return getMonthsAgoDate(num, date)
    case 'day':
      return getDaysAgoDate(num, date)
    default:
      return date
  }
}

/**
 * @description 克隆日期对象
 * @param {Date} date 原始日期对象
 * @return {Date} 克隆出的日期对象
 * @user fmz
 * @date 2020-02-17 16:23:19
**/
function dateClone(date){
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
function dateFormat(date = new Date(), formatStr) {
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
    'S': date.getMilliseconds(), // 毫秒
    'w': getDayCN(date.getDay()) // 星期
  }
  if ((/(y+)/).test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, date.getFullYear() + '')
  }
  for (var k in rule) {
    if (new RegExp('(' + k + ')').test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, rule[k])
    }
  }
  return formatStr;
}

/**
 * @description 返回Date对象中星期数值对应的中文名称
 * @param {Number} day 星期对应的数值，0~6
 * @return {String} 星期对应的中文名称
 * @user fmz
 * @date 2020-02-18 18:21:59
**/
function getDayCN (day) {
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return week[day]
}

export {
  getAgoDate,
  dateClone,
  dateFormat,
  getDayCN
}
