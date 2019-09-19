/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 16:54:51
 * @LastEditTime: 2019-09-19 16:27:10
 * @LastEditors: Please set LastEditors
 */
var converter = new showdown.Converter()
let navData = 'html,css,js,typescript,jquery,bootstrap,vue,react,flutter,dart'.split(',');
let frame = document.createDocumentFragment();
let nav = document.querySelector('div.navbar-nav');
let active;
//导航栏内容初始化
navData.forEach(item=>{
    let a = document.createElement('a');
    a.classList.add('nav-link')
    a.setAttribute('href',`#api/${item}`)
    a.textContent = item;
    frame.appendChild(a)
})
//导航栏点击事件
nav.addEventListener('click',clickhandler)
function clickhandler(e){
    active.classList.remove('active');
    active = e.target;
    active.classList.add('active');
    let url = e.target.textContent
    console.log(e.target.textContent);
    //渲染对应点击导航内容的目录
    $.get(`/api/${url}-title.md`,res=>{
        if(!res)return;
        let title = document.querySelector('.list-group')
        let data = converter.makeHtml(res)
        console.log(data)
        title.innerHTML = data
    })
    //渲染对应内容
    $.get(`/api/${url}.md`,res=>{
        if(!res)return;
        let content = document.querySelector('.content');
        console.log(content)
        content.innerHTML = converter.makeHtml(res)
    })
}
active = frame.firstChild;
active.classList.add('active');
nav.append(frame)
