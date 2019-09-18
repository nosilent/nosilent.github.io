/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 16:54:51
 * @LastEditTime: 2019-09-18 18:08:18
 * @LastEditors: Please set LastEditors
 */
let navData = 'html,css,js,typescript,jquery,bootstrap,vue,react,flutter,dart'.split(',');
let frame = document.createDocumentFragment();
let nav = document.querySelector('div.navbar-nav');
let active;
navData.forEach(item=>{
    let a = document.createElement('a');
    a.classList.add('nav-link')
    a.setAttribute('href','#')
    a.textContent = item;
    frame.appendChild(a)
})
nav.addEventListener('click',clickhandler)
function clickhandler(e){
    active.classList.remove('active');
    active = e.target;
    active.classList.add('active');
    let url = e.target.textContent
    console.log(e.target.textContent);
    $.get(`/api/${url}-title.md`,res=>{
        let title = document.querySelector('.list-group')
        title.appendChild(marked(res))
    })
}
active = frame.firstChild;
active.classList.add('active');
nav.append(frame)
