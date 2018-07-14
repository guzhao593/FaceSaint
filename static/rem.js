// 把尺寸放大N倍（N是window.devicePixelRatio）
var wd = document.documentElement.clientWidth * window.devicePixelRatio / 10
// 理想视口css像素*设备像素比=真实设备物理像素
document.getElementsByTagName('html')[0].style.fontSize = wd + 'px'
// 以下这段代码使用场景是基于psd设计稿来设计页面所用。
// 原因:psd设计稿是根据设备的物理像素来设计的，但本项目无psd设计稿
// 把屏幕的倍率缩小到N分之一（N是window.devicePixelRatio）
// var scale = 1 / window.devicePixelRatio
// var mstr = 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no'
// document.getElementById('vp').content = mstr
