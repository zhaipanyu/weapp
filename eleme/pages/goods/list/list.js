Page({
    data:{
        resultType:"",
        resultContent:""
    },
    goCreateAdd: function () {
        wx.navigateTo({
            url: '../addAddress/addAddress'
          });
    },
    //重新点单会goods
    goGoodsView:function(){
        // wx.navigateBack({
            // url:'../goods'
            // delta:1
        // });
        // var carArrayData = event.currentTarget.dataset.carArrayData;
        // wx.navigateTo({
        //     url: '../goods?name='+ carArrayData.name + '&price='+ carArrayData.price,
        // });
    },
    
    // onLoad:function(options){
    //     var resultType=options.resultType;
    //     if(resultType=="success"){
    //         this.setData({
    //             resultType:"success",
    //             resultContent:"支付成功",
    //             url:'../../order/list/list?status=tosend'
    //         });
    //     }else{
    //         this.setData({
    //             resultType:"warn",
    //             resultContent:"支付失败",
    //             url:'../../order/list/list'
    //         });
    //     }
    // },

    // pay(event){
    //     var carArrayData = event.currentTarget.dataset.carArrayData;
    //     wx.navigateTo({
    //         url: '../goods/list/list?name='+ carArrayData.name + '&price='+ carArrayData.price
    //     });
    // },

    onLoad:function(){
            // this.setData({
            //     url:'../addAddress/addAddress'
            // })
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    }
  })