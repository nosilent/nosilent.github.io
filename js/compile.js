/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 09:39:32
 * @LastEditTime: 2019-09-18 11:29:32
 * @LastEditors: Please set LastEditors
 */
let root = document.querySelector('.body')
$.get('/docs/react.md',function(res){
    console.log(res)
    // return marked(res)
    root.innerHTML = res.toString()
})
