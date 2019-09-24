/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 16:54:51
 * @LastEditTime: 2019-09-24 15:07:21
 * @LastEditors: Please set LastEditors
 */
;
(function () {
  let frame = document.createDocumentFragment();
  let nav = document.querySelector('div.navbar-nav');
  //去顶部按钮
  let btn_to_top = document.querySelector('.to_top');
  //内容
  let content = document.querySelector('.content');
  //内容标题栏
  let title = document.querySelector('.list-group');
  //导航栏内容
  let nav_container = document.querySelector('#nav');
  //加载loading
  let loading = document.querySelector('.loading');
  //更新时间
  let editTime = document.querySelector('.edit_time');
  let active;
  let config;
  init()

  function init() {
    override_head();
    content_init();
    toTop();
  }

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function music() {
    let music = document.querySelector('.music');
    let audio = music.querySelector('audio');
    let btn_play = music.querySelectorAll('span')[1];
    let index = random(config.music_list.length)
    audio.src = `music/${config.music_list[index]}`

    music.addEventListener('click', music_handler)

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
          btn_play.style.backgroundImage = 'url("images/play.svg")';
          audio.play()
        } else {
          btn_play.style.backgroundImage = 'url("images/stop.svg")';
          audio.pause()
        }
      }
      //上一曲
      function pre() {
        index--;
        if (index < 0) {
          index = config.music_list.length - 1;
        }
        audio.src = `music/${config.music_list[index]}`;
        btn_play.style.backgroundImage = 'url("images/play.svg")';
        audio.play();
      }
      //下一曲
      function next() {
        index++;
        if (index >= config.music_list.length) {
          index = 0;
        }
        audio.src = `music/${config.music_list[index]}`;
        btn_play.style.backgroundImage = 'url("images/play.svg")';
        audio.play();
      }
    }
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
          if (`${config.docs}/${item}` == config.index) {
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


  function clickhandler(e) {
    active.classList.remove('active');
    let oldUrl = active.getAttribute('href').slice(1);
    //存储当前内容滚动的位置
    utils['keep_state'].keep(oldUrl, document.documentElement.scrollTop);
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
    loading.style.display = 'block';
    //渲染对应目录
    utils.Ajax(`${url}-${config.title_end_tag}.md`).then(res => {
      if (res === 'error') {
        title.innerHTML = '';
        return;
      }
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
      //请求内容出错
      if (res === 'error') {
        editTime.hidden = true;
        content.innerHTML = '请求内容不存在';
        return;
      }
      editTime.hidden = false;
      let data = marked(res);
      //插入文档更新时间
      LastEditTime(data);
      //内容
      content.parentNode.hidden = false;
      content.innerHTML = data;

      //获取前次对应内容滚动的高度
      let state = utils['keep_state'].get_scroll_state(url);
      window.scrollTo({
        top: state
      });
      let highlight_Element = content.querySelectorAll('pre code');
      //代码高亮处理
      highlight_Element.forEach(item => {
        Prism.highlightElement(item);
      })
    }).then(res => {
      loading.style.display = 'none'
    })
  }
  //文档修改时间信息
  function LastEditTime(data) {
    let regExp = /\@Date\:\s+(\S+)\s*.+\n\s*\S*\s*\@LastEditTime\:\s*(\S+)/;
    let time = data.match(regExp);
    if (time.length < 3) return;
    editTime.innerHTML = `更新时间 : ${time[2]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建时间 : ${time[1]}`;
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
  //标题处理
  function override_head() {
    const renderer = new marked.Renderer();
    renderer.heading = function (text, level, raw, slugger) {
      let anchor = slugger.slug(`h${level}`);
      return `
            <h${level} id="${anchor}">
            ${text}
            </h${level}>`
    }
    marked.Renderer = renderer
  }
})()