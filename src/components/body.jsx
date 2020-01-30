import React,{createRef} from 'react'
import axios from 'axios'
import marked from 'marked'
import prism from 'prismjs'

class Body extends React.Component{
  constructor(){
    super()
    this.contentNodes = createRef()
    this.title = ''
    this.state={
      content: '',
      url: ''
    }
  }
  componentDidMount(){
    let url = this.props.match.params.url
    this.getData(url)
  }
  componentDidUpdate(){
    let url = this.props.match.params.url
    this.getData(url)
  }
  // 获取数据
  getData(url){
    if(url===this.state.url) return
    axios.get(`/docs/${url}.md`).then(res=>{
      this.title = ''
      this.setState({
        url,
        content: marked(res.data,{
          renderer: this.render_mark()
        })
      })
      this.contentNodes.current.scrollTo({
        top: 0,
      })
      this.hight()
    })
  }
  // 代码高亮
  hight(){
    let highlight_Element = this.contentNodes.current.querySelectorAll("pre code")
        //代码高亮处理
      highlight_Element.forEach(item => {
        let parent = item.parentNode
        parent.classList.add('line-numbers')
        Object.assign(parent.style,{
          "white-space":"pre-wrap"
        })
      prism.highlightElement(item)
    })
  }
  render_mark(){
    let renderer = new marked.Renderer()
    renderer.heading =(text, level, raw, slugger)=>{
      let anchor = slugger.slug(`${text}_${level}`)
      //添加目录内容
      if (level <= 3) {
        if (level === 3) {
          this.title +=`<a href="#/${this.props.match.params.url}/${anchor}" class='h3'>${text}</>`
        } else{
          this.title +=`<a href="#/${this.props.match.params.url}/${anchor}" class='h2'>${text}</>`
        }
      }
      return `
            <h${level} id="/${this.props.match.params.url}/${anchor}">
            ${text}
            </h${level}>`;
    }
    renderer.table = function (header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return `<div class="table-responsive"><table class="table table-striped table-sm">\n` +
        '<thead class="text-center">\n' +
        header +
        '</thead>\n' +
        body +
        '</table></div>';
    }
    renderer.tablecell = function (content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag;
      if (type === 'th') {
        tag = `<${type} scope="col">`;
      } else {
        tag = `<${type} >`
      }
      return tag + content + '</' + type + '>\n';
    }
    return renderer
  }
  render(){
    return (
      <>
        {
          this.state.content
          && 
            <div className='body'>
            {/* 标题列表 */}
            <div className='sider'>
              <div>目录</div>
              <div dangerouslySetInnerHTML={{__html:this.title}}></div>
            </div>
            {/* 具体展示内容 */}
            <div className='Content' dangerouslySetInnerHTML={{__html:this.state.content}} ref={this.contentNodes}/>
          </div>
        }
      </>
    )
  }
}

export default Body