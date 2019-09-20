/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 16:32:46
 * @LastEditTime: 2019-09-20 19:07:03
 * @LastEditors: Please set LastEditors
 */
var utils = {
  Ajax: function (url, callback) {
    return new Promise((resole, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('get', url);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resole(callback(xhr.responseText))
        } else {
          reject('err')
        }
      };
    })
  },
  addProp: function (target, tag, prop, fn) {
    let regExp = new RegExp(tag, 'g')
    data = target.replace(regExp, `${tag} ${prop}`)
    fn(data)
  },
  removeTag: function (target, tag, fn) {
    let regExp1 = new RegExp(`(<${tag}>)|(<\/${tag}>)`, 'g');
    let data = target.replace(regExp1, '');
    fn(data)
  }
}