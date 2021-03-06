/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-26 22:03:45
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-18 07:54:21
 * @FilePath: /ts-axios/examples/helpers/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function isDate(val: unknown): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]'
}

export function isObject(val: unknown): val is Object {
  return val instanceof Object
}

export function isPlainObject(val: unknown): val is Object {
  return Object.prototype.toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge({}, val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })

  return result
}
