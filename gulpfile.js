/**
 * Created by Ray on 2016/3/31.
 */
"use strict";
var gulp= require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(["**/*.html","**/*.css","**/*.js"]).on("change", browserSync.reload);
});

// 代理

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: ""
//     });
// });
gulp.task("default",["browser-sync"]);