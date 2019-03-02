
//音频组件
const innerAudioContext = wx.createInnerAudioContext()
const animation = wx.createAnimation({
  duration: 40
})

// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay: true,
    songInfo: {},
    animationData: {},
    globalList: [],
    currentIndex: 0,
    totaltime: 0,
    currentTIme: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getSongById(options.id)
    console.log(options.index)
    this.setData({
      currentIndex: options.index
    })
  },
  getSongById: function (id) {
    var _this = this;
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=' + id,
      success: function (res) {
        // console.log(res.data.bitrate.file_link)
        // console.log(res)
        // 赋值src 音乐地址
        innerAudioContext.src = res.data.bitrate.file_link
        // 播放音乐
        innerAudioContext.play();
        // innerAudioContext.onTimeUpdate(function(){
        //   console.log(innerAudioContext.currentTime)
        // })
        _this.setData({
          songInfo: res.data.songinfo
        })

        // 监听自然播放结束事件
        innerAudioContext.onEnded(function () {
          // console.log("自然播放完了")
          _this.next();
        })
      }
    })
  },

  // 停止按钮的处理函数
  puase: function () {
    innerAudioContext.pause();
    //  把播放状态改为停止
    this.setData({
      isplay: false
    })
    this.stopAnimation()
  },
  // 播放按钮处理函数
  play: function () {
    innerAudioContext.play();
    this.setData({
      isplay: true
    })
    this.startAnimation()
  },

  // 播放下一首处理函数
  next: function () {
    console.log(this.data.currentIndex)
    // var id=0;
    console.log("数组长度=" + getApp().globalList.length+ "当前值=" + this.data.currentIndex)
    var num = parseInt(getApp().globalList.length) - 1;
    console.log("改变后的currentIndex"+num)
    if (this.data.currentIndex > num) {
      //  得到下一首的歌曲id
      this.setData({
        currentIndex: 0
      })
    } else {
      this.setData({
        currentIndex: parseInt(this.data.currentIndex) + 1
      })
    }
    console.log("改变后的currentIndex"+this.data.currentIndex)
    var id = getApp().globalList[this.data.currentIndex].song_id
    this.getSongById(id)
  }, 
  // 播放下一首处理函数
  pre: function () {
    console.log(this.data.currentIndex)
    // var id=0;
    console.log("数组长度=" + getApp().globalList.length + "当前值=" + this.data.currentIndex)
    var num = parseInt(getApp().globalList.length) - 4;
    console.log("改变后的currentIndex" + num)
    if (this.data.currentIndex > num) {
      //  得到下一首的歌曲id
      this.setData({
        currentIndex: 0
      })
    } else {
      this.setData({
        currentIndex: parseInt(this.data.currentIndex) + 4
      })
    }
    console.log("改变后的currentIndex" + this.data.currentIndex)
    var id = getApp().globalList[this.data.currentIndex].song_id
    this.getSongById(id)
  }
})