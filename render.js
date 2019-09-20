/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 16:54:51
 * @LastEditTime: 2019-09-20 16:31:45
 * @LastEditors: Please set LastEditors
 */
;
(function () {
  let frame = document.createDocumentFragment();
  let nav = document.querySelector('div.navbar-nav');
  let btn_to_top = document.querySelector('.to_top')
  let active;
  let config;

  let marked_render = function () {
    const renderer = new marked.Renderer();
    renderer.heading = function (text, level) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      return `
          <h${level}>
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
              <span class="header-link"></span>
            </a>
            ${text}
          </h${level}>`;
    };
    return renderer;
  }
  init()

  function init() {
    nav_init()
    toTop()
  }

  //导航栏内容初始化
  function nav_init() {
    utils.Ajax('config.json', res => {
      config = JSON.parse(res);
      config.navData.forEach(item => {
        let a = document.createElement('a');
        a.classList.add('nav-link');
        a.setAttribute('href', `#api/${item}`);
        a.textContent = item;
        frame.appendChild(a);
      })
      active = frame.firstChild;
      active.classList.add('active');
      nav.append(frame);
    })
    //导航栏点击事件
    nav.addEventListener('click', clickhandler)
  }
  
  //文本中代码高亮
  function hightlight_init(ele) {
    hljs.initHighlightingOnLoad();
      ele.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
  }

  function clickhandler(e) {
    active.classList.remove('active');
    active = e.target;
    active.classList.add('active');
    let url = active.getAttribute('href').slice(1);
    console.log(url);
    render(url)
  }

  function render(url) {
    //渲染对应点击导航内容的目录
    utils.Ajax(`${url}-${config.title_end_tag}.md`, res => {
      if (!res) return;
      let title = document.querySelector('.list-group');
      let data = marked(res);
      let className = 'list-group-item-action list-group-item';
      console.log('data', data)
      utils.addProp(data, '<a', `class=\"${className}\"`, res => {
        utils.removeTag(res, 'p', data => {
          title.innerHTML = data;
        })
      })
    })
    //渲染对应内容
    utils.Ajax(`${url}.md`, res => {
      if (!res) return;
      let content = document.querySelector('.content');
      let fragment  = document.createDocumentFragment()
      let string = marked(res, {
        render: marked_render()
      })
      console.log(string)
      fragment.innerHTML = string
      console.log('qian',fragment)
      hightlight_init(fragment)
      console.dir('后',fragment)
      content.appendChild(fragment)
    })
  }
  //去顶部按钮处理
  function toTop() {
    let clientHeight = document.documentElement.clientHeight
    let scroll = document.documentElement.scrollTop
    if (scroll > clientHeight / 2) {
      btn_to_top.hidden = false
    } else {
      btn_to_top.hidden = true
    }
    window.addEventListener('scroll', scrollHandler)

    function scrollHandler() {
      if (document.documentElement.scrollTop > clientHeight) {
        btn_to_top.hidden = false;
      }
      if (document.documentElement.scrollTop < clientHeight / 2) {
        btn_to_top.hidden = true;
      }
    }
    btn_to_top.addEventListener('click', toTop_handler)

    function toTop_handler() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

})()