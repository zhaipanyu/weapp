function  wrapHttp(url,params,fn){
    wx.showLoading();
    wx.request({
        // url: 'https://localhost:8080/' + url,
        url:url,
        method:'post',
        data:{
            params: { params, user_id: wx.getStorageSync('_gd_parking_lot_userId')}
        },
        success:function(res){
            if(res.data.error === 'ERROR_NONE'){
                fn(res);
            } else {
                wx.showToast({
                    title: res.data.error,
                    // image: '../../images/orderSuccess.png',
                    duration: 2000,
                    mask: true
                })
            }
        },
        fail: function(){
            wx.showToast({
                title: '请求出错请重试',
                // image: '../../images/orderSuccess.png',
                duration: 2000,
                mask: true
            })
        },
        complete: function(){
            wx.hideLoading({mask: true});
        }
    })
}


module.exports = {
    wrapHttp: wrapHttp
}