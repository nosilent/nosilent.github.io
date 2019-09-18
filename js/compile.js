/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 09:39:32
 * @LastEditTime: 2019-09-18 12:01:23
 * @LastEditors: Please set LastEditors
 */
let root = document.querySelector('.container')
$.get('/docs/react.md',function(res){
    console.log(1,res)
    console.log(2,marked(res))
    root.innerHTML = marked(res)
})
