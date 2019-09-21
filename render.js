/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 16:54:51
 * @LastEditTime: 2019-09-21 18:30:45
 * @LastEditors: Please set LastEditors
 */
;
(function () {
  let frame = document.createDocumentFragment();
  let nav = document.querySelector('div.navbar-nav');
  let btn_to_top = document.querySelector('.to_top');
  let content = document.querySelector('.content');
  let title = document.querySelector('.list-group');
  let nav_container = document.querySelector('#nav');
  let list = ["天空之城.mp3", "梦中的婚礼.mp3", "高山流水.mp3", "约定.mp3"];
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
    content_init();
    toTop();
  }

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function music() {
    let audio = document.querySelector('.music audio')
    let music = document.querySelector('.music');
    let index = random(config.music_list.length)
    audio.src = `music/${config.music_list[index]}`

    function music_handler(e) {
      switch (e.target.innerHTML) {
        case 'play':
          play()
          break;
        case 'pre':
          pre()
          break;
        case 'next':
          next()
          break;
        default:
          alert('err')
      }
      //暂停/播放
      function play() {
        if (audio.paused === true) {
          audio.play()
        } else {
          audio.pause()
        }
      }
      //上一曲
      function pre() {
        index--;
        if (index < 0) {
          index = config.music_list.length;
        }
        audio.src = `music/${config.music_list[index]}`;
        audio.play();
      }
      //下一曲
      function next() {
        index++;
        if (index > config.music_list.length) {
          index = 0;
        }
        audio.src = `music/${config.music_list[index]}`;
        audio.play();
      }
    }
    music.addEventListener('click', music_handler)
  }
  //初次内容渲染
  function content_init() {
    utils.Ajax('config.json')
      .then(res => {
        config = JSON.parse(res);
        config.navData.forEach(item => {
          let a = document.createElement('a');
          a.classList.add('nav-link');
          a.setAttribute('href', `#${config.docs}/${item}`);
          if (a.getAttribute('href').slice(1) == config.index) {
            active = a
          }
          a.textContent = item;
          frame.appendChild(a);
        })
        active.classList.add('active');
        //导航栏内容初始化
        nav.append(frame);
      }).then(res => {
        //初始内容渲染
        render(config.index)
        music()
      })
    //导航栏点击事件
    nav.addEventListener('click', clickhandler);
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
    if (nav_container.classList.contains('show')) {
      nav_container.classList.remove('show')
    }
    render(url)
  }

  /**
   * @description: 渲染相应的导航内容
   * @param {type} 
   * @return: 
   */
  function render(url) {
    //渲染对应目录
    utils.Ajax(`${url}-${config.title_end_tag}.md`).then(res => {
      if (!res) return;
      let data = marked(res);
      let className = 'list-group-item-action list-group-item';
      utils.addProp(data, '<a', `class=\"${className}\"`, res => {
        utils.removeTag(res, 'p', data => {
          title.innerHTML = data;
        })
      })
    })
    //渲染对应内容
    utils.Ajax(`${url}.md`).then(res => {
      if (!res) return;
      let data = marked(res, {
        render: marked_render()
      })
      //插入文档更新时间
      LastEditTime(data)
      //内容
      content.innerHTML = data;
      hightlight_init(content);
    })
  }
  //文档修改时间信息
  function LastEditTime(data) {
    let regExp = /\@LastEditTime\:\s*(\S+)/;
    let time = data.match(regExp)[1] || '--';
    let editTime = document.querySelector('.edit_time');
    editTime.innerHTML = `更新时间 : ${time}`;
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
  }

  function toTop_handler() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
})()