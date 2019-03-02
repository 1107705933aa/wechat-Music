// pages/detail/datail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     songlist:[],
     imgurl:""
  },

  playSong:function(e){
    // console.log(e.currentTarget.dataset.id);
     wx.navigateTo({
       url: '../play/play?id=' + e.currentTarget.dataset.id + '&index=' + e.currentTarget.dataset.index
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    this.setData({
      imgurl:options.imgurl
    })
    var url = `http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.9.0.0&channel=ppzs&operator=0&method=baidu.ting.billboard.billList&format=json&type=${options.type}&offset=0&size=30&fields=song_id%2Ctitle%2Cauthor%2Calbum_title%2Cpic_big%2Cpic_small%2Chavehigh%2Call_rate%2Ccharge%2Chas_mv_mobile%2Clearn%2Csong_source%2Ckorean_bb_song`
    wx.request({
      url: url,
      success: function(res) {
         getApp().globalList = res.data.song_list;
         _this.setData({
           songlist:res.data.song_list
         })
        // console.log(res.data.song_list)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})