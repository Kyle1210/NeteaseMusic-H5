function setRem () {
  // 获取设备宽度
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth
  // 如果设备宽度大于750，依然设置为750
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  // 如果设备宽度小于320，依然设置为320
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }

  // 设置HTML的字体大小，这里要看设计稿怎样设计，此时1rem就是100px
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
  // 设置body字体大小，这里是要根据HTML的字体大小变化
  document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

// js一加载，调用一次设置rem的方法
setRem()

// 实现rem布局，当窗口大小变化时执行
window.onresize = function () {
  // 设置rem
  setRem()
}
