$(document).ready(function($) {
    // 登录链接事件
    // $("#loginLink").click(function(){
    // 	// 显示弹出层遮罩
    // 	$("#layer-mask").show();
    // 	// 显示弹出层窗体
    // 	$("#layer-pop").show();
    // 	// 弹出层关闭按钮绑定事件
    // 	$("#layer-close").click(function(){
    // 		// 弹出层关闭
    // 		$("#layer-mask").hide();
    // 		$("#layer-pop").hide();
    // 	});
    // });

    // 登录链接事件
    $("#loginLink").click(function () {
        // 获取登录窗体代码
        var loginHtml = $("#loginHtml").html();
        showLayer(loginHtml, 500, 300, closeCallback);

        // 登录表单校验
        $("#loginSubmitBtn").click(function () {
            var username = $("input[name='username']").val();
            var password = $("input[name='password']").val();
            if (username === 'imooc' && password === 'imooc') {
                alert("登录成功");
            } else {
                $(".error-msg").html("账号或密码输入错误");
            }
        });
    });

    // 注册链接事件
    $("#regeLink").click(function () {
        // 获取注册窗体代码
        var regeHtml = $("#regeHtml").html();
        showLayer(regeHtml, 500, 350, closeCallback);

        // 注册表单校验
        $("#regeSubmitBtn").click(function () {
            var username = $("input[name='username']").val();
            var password = $("input[name='password']").val();
            var repassword = $("input[name='repassword']").val();
            if (username === 'imooc' && password === 'imooc' && repassword === password) {
                alert("注册成功");
            } else {
                $(".error-msg").html("账号或密码输入错误");
            }
        });
    });


});