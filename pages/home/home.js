
// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    songlist: []
  },

  more:function(e){
    console.log(e.target.dataset.type);
    wx.navigateTo({
      url: '../detail/datail?type='+e.target.dataset.type+'&imgurl='+e.target.dataset.imgurl
    })
  },

  moree: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../detail/datail?type=' + e.currentTarget.dataset.type + '&imgurl=' + e.currentTarget.dataset.imgurl
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.9.0.0&channel=ppzs&operator=0&method=baidu.ting.billboard.billCategory&format=json&kflag=2',
      success: function(res) {
         console.log(res.data.content)
        _this.setData({
          songlist: res.data.content
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})