(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange': 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function() {
    $("#tj_btn").click(function() {
        var phoneno = $("#phonenum").val();
        var name = $("#guestname").val();
        var note = $("#note").val();
        var host = window.location.href + '#buttom';
        if (!name) {
            alert('请输入你们的姓名方便我们与您联系')
        } else {
            if (phoneno && /^1[3|4|5|8]\d{9}$/.test(phoneno)) {
                $.ajax({
                    type:"GET",
                    url: "http://wdcp.szhqzl.cn/phonecomplate",
                    dataType: 'JSONP',
                    data: {
                        "phoneno": phoneno,
                        "host": host,
                        "name": name,
                        "note": note
                    },
                    jsonpCallback:"success_jsonpCallback",
                    success: function(json) {
                        alert(json.statusinfo);
                        $("#tj_btn").attr("disabled", "disabled");
                    }
                });
            } else{
                alert("您输入的手机号码"+phoneno+"不正确，请重新输入")
            }
        }
    });

    $("#tj_btn1").click(function() {
        var phoneno = $("#phonenum1").val();
        var name = $("#guestname1").val();
        var host = window.location.href + '#buttom1';
        if (!name) {
            alert('请输入你们的姓名方便我们与您联系')
        } else {
            if (phoneno && /^1[3|4|5|8]\d{9}$/.test(phoneno)) {
                $.ajax({
                    type: "GET",
                    url: "http://wdcp.szhqzl.cn/phonecomplate",
                    dataType: 'JSONP',
                    data: {
                        "phoneno": phoneno,
                        "host": host,
                        "name": name,
                    },
                    //返回数据的格式
                    jsonpCallback:"success_jsonpCallback",
                    success:function(json){
                        alert(json.statusinfo);
                        $("#tj_btn1").attr("disabled","disabled");
                    },
                    error:function(){
                        alert("请求出错！");
                    }
                });
            } else{
                alert("您输入的手机号码"+phoneno+"不正确，请重新输入")
            }
        }
    });
    $("#tj_btn2").click(function() {
        var phoneno = $("#phonenum2").val();
        var name = $("#guestname2").val();
        var host = window.location.href + '#buttom2';
        if (!name) {
            alert('请输入你们的姓名方便我们与您联系')
        } else {
            if (phoneno && /^1[3|4|5|8]\d{9}$/.test(phoneno)) {
                $.ajax({
                    type: "GET",
                    url: "http://wdcp.szhqzl.cn/phonecomplate",
                    dataType: 'JSONP',
                    data: {
                        "phoneno": phoneno,
                        "host": host,
                        "name": name,
                    },
                    //返回数据的格式
                    jsonpCallback:"success_jsonpCallback",
                    success:function(json){
                        alert(json.statusinfo);
                        $("#tj_btn2").attr("disabled","disabled");
                    },
                    error:function(){
                        alert("请求出错！");
                    }
                });
            } else{
                alert("您输入的手机号码"+phoneno+"不正确，请重新输入")
            }
        }
    });
    //弹窗留言
    $("#js_popup, .js_popup").click(function(){
        $(".popup_mask").show();
    });
    $(".popup_close ").click(function(){
        $(".popup_mask").stop();
        $(".popup_mask").fadeOut(600).delay(15000).fadeIn(function(){openSwt();})
    });
    $("#msg_sub ").click(function(){
        var phoneno = $("#msg_phone").val();
        var name = $("#msg_name").val();
        var host=window.location.href+'#tanchuang';
        if(!name)
        {
            alert('请输入你们的姓名方便我们与您联系')
        }else{
            if( phoneno  && /^1[3|4|5|8]\d{9}$/.test(phoneno ) ){
                $.ajax({
                    type:"GET",
                    url:"http://wdcp.szhqzl.cn/phonecomplate",
                    data:{"phoneno":phoneno,"host":host,"name":name},
                    dataType: 'JSONP',
                    jsonpCallback:"success_jsonpCallback",
                    success:function (json) {
                        alert(json.statusinfo);
                        $("#msg_sub").attr("disabled","disabled")
                    },
                    error:function(error){
                        console.log(error)
                        alert("请求出错！");
                    }
                });
            } else {
                alert("您输入的手机号码" + phoneno + "不正确，请重新输入")
            }
        }
    });
});
/*function openSwt() {
    $(".popup_mask").css('visibility', 'visible').fadeIn(600);
    $("#nb_invite_wrap").css('display','none');
}
setTimeout(openSwt, 10000);*/
function hideBridge(){
    $("#nb_invite_wrap").css('display','none');
}
hideBridge()
$(window).scroll(function(event){
    $("#nb_invite_wrap").css('display','none');
});
