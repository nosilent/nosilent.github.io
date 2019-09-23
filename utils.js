/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 16:32:46
 * @LastEditTime: 2019-09-23 10:53:18
 * @LastEditors: Please set LastEditors
 */
var utils = {
  Ajax: function (url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('get', url);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText)
          } else {
            resolve('error')
          }
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
  },
  keep_state: {
    state = {},
    keep: function (item, value) {
      this.state[item] = value
    },
    get_scroll_state: function (item) {
      if(this.state[item]){
        return this.state[item]
      }
      return 0
    }
  }
}