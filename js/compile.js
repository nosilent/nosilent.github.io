/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 09:39:32
 * @LastEditTime: 2019-09-18 11:58:32
 * @LastEditors: Please set LastEditors
 */
$.get('/docs/react.md',function(res){
    console.log(1,res)
    console.log(2,marked(res))
    $('.container').innerHTML = marked(res)
})
