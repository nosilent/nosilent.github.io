/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:01:44
 * @LastEditTime: 2019-09-25 13:43:57
 * @LastEditors: Please set LastEditors
 */
const {
  src,
  dest
} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
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