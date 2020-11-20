/* 
接口可以描述函数类型(参数的类型与返回的类型)
*/

interface SearchFunc {
  (source: string, subString: string): boolean
}

const mySearch: SearchFunc = function (s: string, subs: string): boolean {
  
  // return s.includes(subs)
  return s.indexOf(subs)!=-1
}

console.log(mySearch('abcd', 'bc'))