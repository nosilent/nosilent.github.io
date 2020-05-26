module.exports = {
  "presets" : ["@babel/preset-react"],
  "plugins": [
      ["import", 
        {
          "libraryName": "antd",
          "libraryDirectory": "lib",   // default: lib
          "style": "css"
        }
      ],
      ["prismjs", {
        "languages": ["javascript", "css", "html","jsx","go","dart","git","bash","less","python","typescript","js-extras","json","stylus"],
        "plugins": ["line-numbers", "show-language"],
        "theme": "okaidia",
        "css": true
      }]
  ]
}
