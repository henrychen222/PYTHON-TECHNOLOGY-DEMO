/** 课时8 装饰器的使用
 * 注释代码二，然后运行代码一
 * 注释代码一，然后运行代码二
 * ts-node decorator.ts 运行
 * */

// 代码一
// @Addability
// class SuperMan {
// }
//
// function Addability(target) {
//   target.fly = true;
//   return target;
// }
//
// console.log(SuperMan['fly']);


// 代码二
@Addability('biubiubiu')
class SuperMan {
}

function Addability(ablility) {
  return function (target) {
    target[ablility] = true;
    return target;
  };
}

console.log(SuperMan['biubiubiu']);
