//后端router.js


app.get('/getData', function(req, res) {
    
        var news = {
                user_id: '11',
                status:'1',
                title:'早餐'
            }
        
        // var pageIndex = parseInt(req.query.page);
        res.send({
            status: 0,
            data: news
        });
    });
    
    
    