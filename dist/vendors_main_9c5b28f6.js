(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,l=s(e),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))a.call(n,u)&&(l[u]=n[u]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}},112:function(e,t,n){const{noopTest:r,edit:a,merge:o}=n(55),s={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:r,table:r,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};s.def=a(s.def).replace("label",s._label).replace("title",s._title).getRegex(),s.bullet=/(?:[*+-]|\d{1,9}\.)/,s.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,s.item=a(s.item,"gm").replace(/bull/g,s.bullet).getRegex(),s.list=a(s.list).replace(/bull/g,s.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+s.def.source+")").getRegex(),s._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",s._comment=/<!--(?!-?>)[\s\S]*?-->/,s.html=a(s.html,"i").replace("comment",s._comment).replace("tag",s._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),s.paragraph=a(s._paragraph).replace("hr",s.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",s._tag).getRegex(),s.blockquote=a(s.blockquote).replace("paragraph",s.paragraph).getRegex(),s.normal=o({},s),s.gfm=o({},s.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),s.gfm.nptable=a(s.gfm.nptable).replace("hr",s.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",s._tag).getRegex(),s.gfm.table=a(s.gfm.table).replace("hr",s.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",s._tag).getRegex(),s.pedantic=o({},s.normal,{html:a("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",s._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:r,paragraph:a(s.normal._paragraph).replace("hr",s.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",s.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const i={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:r,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:r,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};i.em=a(i.em).replace(/punctuation/g,i._punctuation).getRegex(),i._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,i._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,i._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,i.autolink=a(i.autolink).replace("scheme",i._scheme).replace("email",i._email).getRegex(),i._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,i.tag=a(i.tag).replace("comment",s._comment).replace("attribute",i._attribute).getRegex(),i._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,i._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,i._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,i.link=a(i.link).replace("label",i._label).replace("href",i._href).replace("title",i._title).getRegex(),i.reflink=a(i.reflink).replace("label",i._label).getRegex(),i.normal=o({},i),i.pedantic=o({},i.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:a(/^!?\[(label)\]\((.*?)\)/).replace("label",i._label).getRegex(),reflink:a(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",i._label).getRegex()}),i.gfm=o({},i.normal,{escape:a(i.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),i.gfm.url=a(i.gfm.url,"i").replace("email",i.gfm._extended_email).getRegex(),i.breaks=o({},i.gfm,{br:a(i.br).replace("{2,}","*").getRegex(),text:a(i.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:s,inline:i}},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m}));var r,a=n(0),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=a.createContext(null),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return a.createElement(s.Provider,{value:this.props.store},this.props.children)},t}(a.Component),l=n(51),c=n.n(l),u=n(67),p=n.n(u),f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),g=function(){return(g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var h=function(){return{}};function d(e,t){void 0===t&&(t={});var n=!!e,r=e||h;return function(o){var i=function(t){function i(e,n){var a=t.call(this,e,n)||this;return a.unsubscribe=null,a.handleChange=function(){if(a.unsubscribe){var e=r(a.store.getState(),a.props);a.setState({subscribed:e})}},a.store=a.context,a.state={subscribed:r(a.store.getState(),e),store:a.store,props:e},a}return f(i,t),i.getDerivedStateFromProps=function(t,n){return e&&2===e.length&&t!==n.props?{subscribed:r(n.store.getState(),t),props:t}:{props:t}},i.prototype.componentDidMount=function(){this.trySubscribe()},i.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},i.prototype.shouldComponentUpdate=function(e,t){return!c()(this.props,e)||!c()(this.state.subscribed,t.subscribed)},i.prototype.trySubscribe=function(){n&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},i.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},i.prototype.render=function(){var e=g(g(g({},this.props),this.state.subscribed),{store:this.store});return a.createElement(o,g({},e,{ref:this.props.miniStoreForwardedRef}))},i.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(o)+")",i.contextType=s,i}(a.Component);if(t.forwardRef){var l=a.forwardRef((function(e,t){return a.createElement(i,g({},e,{miniStoreForwardedRef:t}))}));return p()(l,o)}return p()(i,o)}}var b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function m(e){var t=e,n=[];return{setState:function(e){t=b(b({},t),e);for(var r=0;r<n.length;r++)n[r]()},getState:function(){return t},subscribe:function(e){return n.push(e),function(){var t=n.indexOf(e);n.splice(t,1)}}}}},36:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){for(var n=Object.assign({},e),r=0;r<t.length;r+=1){delete n[t[r]]}return n}},55:function(e,t){const n=/[&<>"']/,r=/[&<>"']/g,a=/[<>"']|&(?!#?\w+;)/,o=/[<>"']|&(?!#?\w+;)/g,s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},i=e=>s[e];const l=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(e){return e.replace(l,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const u=/(^|[^\[])\^/g;const p=/[^\w:]/g,f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const g={},h=/^[^:]+:\/*[^/]*$/,d=/^([^:]+:)[\s\S]*$/,b=/^([^:]+:\/*[^/]*)[\s\S]*$/;function m(e,t){g[" "+e]||(h.test(e)?g[" "+e]=e+"/":g[" "+e]=_(e,"/",!0));const n=-1===(e=g[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(d,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(b,"$1")+t:e+t}function _(e,t,n){const r=e.length;if(0===r)return"";let a=0;for(;a<r;){const o=e.charAt(r-a-1);if(o!==t||n){if(o===t||!n)break;a++}else a++}return e.substr(0,r-a)}e.exports={escape:function(e,t){if(t){if(n.test(e))return e.replace(r,i)}else if(a.test(e))return e.replace(o,i);return e},unescape:c,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(u,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(c(n)).replace(p,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!f.test(n)&&(n=m(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:m,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let r=!1,a=t;for(;--a>=0&&"\\"===n[a];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:_,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,a=0;for(;a<n;a++)if("\\"===e[a])a++;else if(e[a]===t[0])r++;else if(e[a]===t[1]&&(r--,r<0))return a;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}}},96:function(e,t,n){const r=n(182),a=n(183),o=n(83),s=n(115),i=n(114),l=n(113),{merge:c,checkSanitizeDeprecation:u,escape:p}=n(55),{getDefaults:f,changeDefaults:g,defaults:h}=n(59);function d(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=c({},d.defaults,t||{}),u(t);const o=t.highlight;let s,i,l=0;try{s=r.lex(e,t)}catch(e){return n(e)}i=s.length;const p=function(e){if(e)return t.highlight=o,n(e);let r;try{r=a.parse(s,t)}catch(t){e=t}return t.highlight=o,e?n(e):n(null,r)};if(!o||o.length<3)return p();if(delete t.highlight,!i)return p();for(;l<s.length;l++)!function(e){"code"!==e.type?--i||p():o(e.text,e.lang,(function(t,n){return t?p(t):null==n||n===e.text?--i||p():(e.text=n,e.escaped=!0,void(--i||p()))}))}(s[l])}else try{return t=c({},d.defaults,t||{}),u(t),a.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||d.defaults).silent)return"<p>An error occurred:</p><pre>"+p(e.message+"",!0)+"</pre>";throw e}}d.options=d.setOptions=function(e){return c(d.defaults,e),g(d.defaults),d},d.getDefaults=f,d.defaults=h,d.Parser=a,d.parser=a.parse,d.Renderer=o,d.TextRenderer=s,d.Lexer=r,d.lexer=r.lex,d.InlineLexer=i,d.inlineLexer=i.output,d.Slugger=l,d.parse=d,e.exports=d},99:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),o=n(31),s=n(65),i=n.n(s),l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:{};function c(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var u=a.a.createContext||function(e,t){var n,a,s,u="__create-react-context-"+((l[s="__global_unique_id__"]=(l[s]||0)+1)+"__"),p=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=c(t.props.value),t}Object(o.a)(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[u]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,a=e.value;((o=r)===(s=a)?0!==o||1/o==1/s:o!=o&&s!=s)?n=0:(n="function"==typeof t?t(r,a):1073741823,0!==(n|=0)&&this.emitter.set(e.value,n))}var o,s},r.render=function(){return this.props.children},n}(r.Component);p.childContextTypes=((n={})[u]=i.a.object.isRequired,n);var f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}Object(o.a)(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},r.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},r.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},r.getValue=function(){return this.context[u]?this.context[u].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return f.contextTypes=((a={})[u]=i.a.object,a),{Provider:p,Consumer:f}};t.a=u}).call(this,n(72))}}]);