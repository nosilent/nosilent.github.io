/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 09:39:32
 * @LastEditTime: 2019-09-18 11:25:31
 * @LastEditors: Please set LastEditors
 */
let root = document.querySelector('.body')
axios.get('/docs/react.md').then(function(res){
    console.log(res)
    // return marked(res)
    root.innerHTML = res.toString()
})
