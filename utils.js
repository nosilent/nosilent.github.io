/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 16:32:46
 * @LastEditTime: 2019-09-24 21:07:27
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
    state: {},
    keep(item, value) {
      this.state[item] = value
    },
    get_scroll_state(item) {
      if (this.state[item]) {
        return this.state[item]
      }
      return 0
    }
  },
  head_id_sort: {
    stack: [],
    tag: [],
    tag_top() {
      return this.tag[this.tag.length - 1]
    },
    tag_push(value) {
      this.tag.push(value)
    },
    tag_pop() {
      this.tag.pop()
    },
    length() {
      return this.stack.length;
    },
    push(value) {
      this.stack.push(value)
    },
    pop() {
      this.stack.pop()
    },
    top() {
      return this.stack[this.length() - 1]
    }
  },
  title_deep: {
    state: {},
    fn: function (value) {
      console.log(this)
      if (this.state.hasOwnProperty(value)) {
        this.state[value]++;
        return `${value}-${this.state[value]}`
      } else {
        this.state[value] = 0
        return value
      }
    }
  }
}