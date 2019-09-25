/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:01:44
 * @LastEditTime: 2019-09-25 14:04:43
 * @LastEditors: Please set LastEditors
 */
const {
  src,
  dest
} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCss =require('gulp-clean-css')
exports.css = function(){
  return src('./css/index.css')
  .pipe(src('./css/prism.css'))
  .pipe(cleanCss())
  .pipe(rename({
    extname: '.min.css'
  }))
  .pipe(dest('build/'))
}
exports.default = function () {
  return src('./render.js')
    .pipe(src('./utils.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(dest('build/'))
}