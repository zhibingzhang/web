// 程序入口
$(document).ready(function(){
	$('.star_type').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active').next().hide();
		}else{
			$(this).addClass('active').next().show();
		}
	});
	/**************登陆开始*************/
	$('#login_btn').click(function(){
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var phone = $('#phone');
		var password = $('#password');
		var yzm = $('#yzm');
		var corrects = $('#corrects');
		var checkbox ;

		if($('#checkbox').is(':checked')){
			checkbox = 1;
		}else{
			checkbox = 0;
		}
		if(phone.val() === ""){
			phone.parent().parent().addClass('error');
			corrects.text(phone.next().text()).show();
			return false;
		}else if(!regPhone.test(phone.val())){
			phone.parent().parent().addClass('error');
			corrects.text('您输入的手机格式有误').show();
			return false;
		}else{
			phone.parent().parent().removeClass('error');
		}

		if(password.val() === ""){
			password.parent().parent().addClass('error');
			corrects.text(password.next().text()).show();
			return false;
		}else{
			password.parent().parent().removeClass('error');
		}

		if(yzm.val() === ""){
			yzm.parent().parent().addClass('error');
			corrects.text(yzm.next().text()).show();
			return false;
		}else{
			yzm.parent().parent().removeClass('error');
			corrects.hide();
		}
		/*
			验证通过
		*/
		window.location.href = 'index.html';
	});
	$('#phone').blur(function(){
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var t = $(this);
		var corrects = $('#corrects');
		var t_val = $(this).val();
		var t_name = $(this).attr('name');
		if(t_val !== "" && t_name === 'phone'){
            if(!regPhone.test(t_val)){
                t.parent().parent().addClass('error');
                corrects.text('请输入正确的手机号码').show();
                return false;
            }else{
            	t.parent().parent().removeClass('error');
            	corrects.hide();
            }
        }
	});
	$('.lable input').keyup(function(){
		$(this).parent().removeClass('error');
	});
	$('#xg_pwd label input').keyup(function(){
		$('#xg_pwd .error').hide();
	});
	$('#xg_phone label input').keyup(function(){
		$('#xg_phone .error').hide();
	});

	$('#sjyzm').keyup(function(){
		$(this).parent().removeClass('error');
	});

	$('#add_fq label input').keyup(function(){
		$('#add_fq .error').hide();
	})
	/**************登陆结束*************/

	/**************注册开始*************/
	$('.hqy').click(function(){
		var phone = $('#phone');
		var yzm = $('#yzm');
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var time = 60;
		var me = $(this);

		var corrects = $('#corrects');
		if(phone.val() ===""){
			phone.parent().parent().addClass('error');
			corrects.text(phone.next().text()).hide().show();
			return false;
		}else if(!regPhone.test(phone.val())){
			phone.parent().parent().addClass('error');
			corrects.text('请输入正确的手机号码').show();
			return false;
		}else if(yzm.val() ===""){
			yzm.parent().parent().addClass('error');

			corrects.text(yzm.next().text()).show();
			return false;

		}else{
			corrects.hide();

			if(me.text() === "重新获取" || me.text() === "免费获取验证码"){
				var t = setInterval(function(){
					time --;
					$(me).html('倒计时 '+time+'s').addClass('timeactive');
					if(time === 0){
						clearInterval(t)
						$(me).html('重新获取').removeClass('timeactive');
					}
				},1000);
			}
		}
	});
	$('#yz_pwd').click(function(){
		var phone = $('#xg_pwd .phone_reg input[name=phone]');
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var time = 60;
		var error = $('#xg_pwd .error');
		var me = $(this);
		
		if(phone.val() ===""){
			
			// phone.parent().addClass('error');
			error.text(phone.next().text()).show();
			return false;
		}else if(!regPhone.test(phone.val())){

			error.text(phone.attr('data-error')).show();
			// phone.parent().addClass('error');
			return false;
		}else{
			if(me.html() === "重新获取" || me.html() === "免费获取验证码"){

				var t = setInterval(function(){
					time --;
					me.html('倒计时 '+time+'s').addClass('timeactive');
					if(time === 0){
						clearInterval(t)
						me.html('重新获取').removeClass('timeactive');
					}
				},1000);
			}
		}
	});
	$('#yz_phone').click(function(){
		var time = 60;
		var me = $(this);
		if($('#code1').val()==""){
			$('#xg_phone .rephone_1 .error').html($('#code1').siblings('span').html()).show();
			return;
		}
		if(me.text() === "重新获取" || me.text() === "免费获取验证码"){
			var t = setInterval(function(){
				time --;
				me.html('倒计时 '+time+'s').addClass('timeactive');
				if(time === 0){
					clearInterval(t)
					me.html('重新获取').removeClass('timeactive');
				}
			},1000);
		}
	});

	$("#code").click(function(){
		var time = 60;
		var me = $(this);
		if(me.val() === "重新获取" || me.val() === "免费获取验证码"){
			var t = setInterval(function(){
					time --;
					$(me).val('倒计时 '+time+'s').addClass('timeactive');
					if(time === 0){
						clearInterval(t)
						$(me).val('重新获取').removeClass('timeactive');
					}
				},1000);
			}
	});
	$('#new_phone').click(function(){
		var phone = $('#xg_phone .rephone_2 label input[name=newphone]');
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var time = 60;
		var error = $('#xg_phone .error');
		var me = $(this);
		if(phone.val() ===""){
			
			// phone.parent().addClass('error');
			error.text(phone.next().text()).show();
			return false;
		}else if(!regPhone.test(phone.val())){

			error.text(phone.attr('data-error')).show();
			// phone.parent().addClass('error');
			return false;
		}else{
			error.hide();
			if($('#code2').val()==""){
				$('#xg_phone .rephone_2 .error').html($('#code1').siblings('span').html()).show();
				return;
			}
			var t = setInterval(function(){
				time --;
				$(me).html('倒计时 '+time+'s').addClass('timeactive');
				if(time === 0){
					clearInterval(t)
					$(me).html('重新获取').removeClass('timeactive');
				}
			},1000);
		}
	});
	
	$('.close').click(function(){
		$('.silder').fadeOut(200);
		$('.mask').fadeOut(200);
		// window.location.href = 'regist.html';
	});
	$('#submit').click(function(){
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var phone = $('#phone');
		var password = $('#password');
		var aginpassword = $('#aginpassword');
		var yzm = $('#yzm');
		var sjyzm = $('#sjyzm');
		var checkbox ;
		var corrects = $('#corrects');
		var chk = $('.chk');

		if($('#checkbox').is(':checked')){
			checkbox = 1;
		}else{
			checkbox = 0;
		}
		if(phone.val() === ""){
			phone.parent().parent().addClass('error');
			corrects.text(phone.next().text()).show();
			return false;
		}else if(!regPhone.test(phone.val())){
			phone.parent().parent().addClass('error');
			return false;
		}else{
			phone.parent().parent().removeClass('error');
		}

		if(yzm.val() === ""){
			yzm.parent().parent().addClass('error');
			corrects.text(yzm.next().text()).show();
			return false;
		}else{
			yzm.parent().parent().removeClass('error');
		}

		if(sjyzm.val() === ""){
			sjyzm.parent().parent().addClass('error');
			corrects.text(sjyzm.next().text()).show();
			return false;
		}else{
			sjyzm.parent().parent().removeClass('error');
		}

		if(password.val() === ""){
			password.parent().parent().addClass('error');
			corrects.text(password.next().text()).show();
			return false;
		}else{
			password.parent().parent().removeClass('error');
		}

		if(aginpassword.val() === ""){
			aginpassword.parent().parent().addClass('error');
			corrects.text(aginpassword.next().text()).show();
			return false;
		}else if(password.val() !== aginpassword.val()){
			aginpassword.parent().parent().addClass('error');
			corrects.text('两次密码输入不一致').show();
			return false;
		}else{
			aginpassword.parent().parent().removeClass('error');
		}

		if(!chk.hasClass('active')){
			corrects.text('请阅读并同意服务条款').show();
			return false;
		}
		
		/*
			验证通过
		*/
		
		$('.silder').fadeIn(200);
		$('.mask').fadeIn(200);
	});
	/**************注册结束*************/

	/**************找回密码开始*************/
	$('.btnone').click(function(){
		var regPhone = /^1(3|4|5|7|8)\d{9}$/;
		var phone = $('#phone');
		var yzm = $('#yzm');
		var corrects = $('#corrects');
		if(phone.val() === ""){
			phone.parent().parent().addClass('error');
			corrects.text(phone.next().text()).show();
			return false;
		}else if(!regPhone.test(phone.val())){
			phone.parent().parent().addClass('error');
			corrects.text('您输入的手机格式有误').show();
			return false;
		}else{
			phone.parent().removeClass('error');
			corrects.hide();
		}

		if(yzm.val() === ""){
			yzm.parent().parent().addClass('error');
			corrects.text(yzm.next().text()).show();
			return false;
		}else{
			yzm.parent().removeClass('error');
			corrects.hide();
		}

		$('.pwtwo').addClass('cur')
		$('.pcone').hide();
		$('.pctwo').show();
		
		// var tel = $('#tel').val();
		// $('.phone').html(tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));
	})
	$('.btntwo').click(function(){
		var sjyzm = $('#sjyzm');
		if(sjyzm.val() === ""){
			sjyzm.parent().parent().addClass('error');
			sjyzm.parent().next().next().text('请输入验证码')
			return false;
		}else{
			sjyzm.parent().parent().removeClass('error');
		}


		$('.pwthere').addClass('cur')
		$('.pctwo').hide();
		$('.pcthere').show();
	})
	$('.btnthere').click(function(){
		var password = $('#password');
		var againpassword = $('#againpassword');
		var correct =  $('.correct');

		if(password.val() === ""){
			password.parent().parent().addClass('error');
			correct.text(password.next().text()).show();
			return false;
		}else{
			password.parent().removeClass('error');
		}

		if(againpassword.val() === ""){
			againpassword.parent().parent().addClass('error');
			correct.text(againpassword.next().text());
			return false;
		}else if(password.val() !== againpassword.val()){
			againpassword.parent().parent().addClass('error');
			correct.text('两次密码输入不一致');
			return false;
		}else{
			againpassword.parent().removeClass('error');
		}
		$('.pwfour').addClass('cur')
		$('.pcthere').hide();
		$('.pcfour').show();
	})
	/**************找回密码结束*************/

	/**************联系人管理-新增-开始*************/
		$('#addl_btn').click(function(){
			if($('#add_people').attr('value')!=undefined && $('#add_people').attr('value')!=''){
				var inp = $('#add_people label input');
				var up_page = $('.add_box_item');
				var me_mak = $('.mak');
				var err = $('#add_people .error');
				var id = $('#add_people').attr('value');
				error3({
					inp:inp,
					up_page:up_page,
					me_mak:me_mak,
					err:err,
					id: id
				});
			}else{
				var inp = $('#add_people label input');
				var up_page = $('.add_box_item');
				var me_mak = $('.mak');
				var err = $('#add_people .error');
				error({
					inp:inp,
					up_page:up_page,
					me_mak:me_mak,
					err:err
				});
			}
		});
	/**************联系人管理-新增-结束*************/

	/**************基本资料-保存-开始*************/
		$('#preservation').click(function(){
			var inp = $('.tab6 label input');
			var me_mak = $('.mak');
			var err = $('.tab6 .error');
            error2({
            	inp:inp,
            	me_mak:me_mak,
            	err:err
            });
		});

		//新增普通发票
		$('#paddfp_btn').click(function(){
			var inp = $('.fp_tab0 label input');
			var err = $('.fp_tab0 .error');
			var up_page = $('.tab9 .item0');
			var me_mak = $('#add_fq');
			error({
            	inp:inp,
            	up_page:up_page,
            	err:err,
            	me_mak:me_mak
            }); 
		});

		//新增普通发票
		$('#zaddfp_btn').click(function(){
			var inp = $('.fp_tab1 label input');
			var err = $('.fp_tab1 .error');
			var up_page = $('.tab9 .item1');
			var me_mak = $('#add_fq');
			error({
            	inp:inp,
            	up_page:up_page,
            	err:err,
            	me_mak:me_mak
            }); 
		});
	/**************基本资料-结束-开始*************/

	// 个人中心
	$(document).on('click','.item0 .chk',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	$(document).on('click','.cont2 .chk',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	$(document).on('click','.tab2 .chk',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	$(document).on('click','.tab3 .chk',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	$('#quxiaoshouchang').click(function(){
		$(this).parent().next().hide();
		$(this).parent().next().next().hide();
		$(this).hide();
	});
	$('.quxiaodengdan').click(function(){
		$(this).parent().parent().hide().prev().hide();
	});
	$(document).on('click','.del_fp',function(){
		$(this).parent().parent().parent().remove();
	});
	$('.youjiquxiao').click(function(){
		$(this).parent().parent().remove();
	});
	$(".qx_sc").click(function(){
		$(this).parent().parent().remove();
	});
	$(document).on('click','.tab4 .chk',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	$(document).on('click','.tab4 #chkss',function(){
		if(!$(this).hasClass('active')){
			// $(this).removeClass('active');
			$('.tab4 .chk').removeClass('active');
		}else{
			// $(this).addClass('active');
			$('.tab4 .chk').removeAttr('active').addClass('active');
		}
	});
	$(document).on('click','.tab3 #chk',function(){
		if(!$(this).hasClass('active')){
			// $(this).removeClass('active');
			$('.tab3 .chk').removeClass('active');
		}else{
			// $(this).addClass('active');
			$('.tab3 .chk').removeAttr('active').addClass('active');
		}
	});
	$('.xin span i').click(function(){
		var me = $(this);
		me.parent().children().removeClass('active');
		for(var i=0; i<=me.index(); i++){
			me.parent().children().eq(i).addClass('active');
		}
		me.parent().next().text((me.index()+1)+'分');
	});
	
	//提交
	$('#pj_tj_btn').click(function(){
		alert('提交成功');
		$('.pj_mak').hide();
	});

	// date
	$('.item0 .date_link a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('.tab9 .item1 .del_fpzz').click(function(){
		$(this).parent().parent().parent().remove();
	});

	$('.tab3 #del').click(function(){

		$('.tab3 .tab').remove();
		$('#pageTool1').remove();
		$(this).remove();
	});
	$('.tab3 .del').click(function(){
		$(this).parent().parent().remove();
	});
	$('.tab2 .date_link a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
});

function error(obj){
	var inp = obj.inp;
	var up_page = obj.up_page;
	var me_mak = obj.me_mak;
	var err = obj.err;
	var error = [];
	var obg_val = {};
	var regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    var regPhone = /^1(3|4|5|7|8)\d{9}$/;
    var regSFZ15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    var regSFZ18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
	for(var i=0; i<inp.length; i++){
	    var t_val = inp.eq(i).val();
	    var t_name = inp.eq(i).attr('name');
	    if(t_val === ""){
	        error.push(inp.eq(i).next().text());
	    }else{
	    	var _name = inp.eq(i).attr('name');
	    	var _val = inp.eq(i).val();

	    	obg_val[_name] = _val;
	        if(t_val !== "" && t_name === 'Phone'){
				t_val = t_val.replace(/[ ]/g,"");
	            if(!regPhone.test(t_val)){
	                error.push(inp.eq(i).attr('data-error'));
	            }
	        }else if(t_val !== "" && t_name === 'ID'){
	            if(!regSFZ15.test(t_val) && !regSFZ18.test(t_val)){
	                error.push(inp.eq(i).attr('data-error'));
	            }
	        }else if(t_val !== "" && t_name === 'email'){
                if(!regEmail.test(t_val) && !regSFZ18.test(t_val)){
                    error.push(inp.eq(i).attr('data-error'));
                }
            }
	    }
	}
	if(!error.length){
	    if(up_page != undefined){
	    	upage(up_page,obg_val);
	    }
	    if(me_mak != undefined){
	    	me_mak.hide();
	    }
	    
	    for(var i = 0; i<inp.length; i++){
	        inp.eq(i).val('').next().show();
	    }
	}else{
	    for(var i = 0,str=''; i<error.length; i++){
	    	err.text(error[i]).show();
	        return false;
	    }
	}
}
function error2(obj){
	var inp = obj.inp;
	var up_page = obj.up_page;
	var me_mak = obj.me_mak;
	var err = obj.err;
	var error = [];
	var obg_val = {};
	var regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	var regPhone = /^1(3|4|5|7|8)\d{9}$/;
	var regSFZ15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	var regSFZ18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
	for(var i=0; i<inp.length; i++){
		var t_val = inp.eq(i).val();
		var t_name = inp.eq(i).attr('name');
		if(t_val === ""){
			error.push(inp.eq(i).next().text());
		}else{
			var _name = inp.eq(i).attr('name');
			var _val = inp.eq(i).val();

			obg_val[_name] = _val;
			if(t_val !== "" && t_name === 'Phone'){
				t_val = t_val.replace(/[ ]/g,"");
				if(!regPhone.test(t_val)){
					error.push(inp.eq(i).attr('data-error'));
				}
			}else if(t_val !== "" && t_name === 'ID'){
				if(!regSFZ15.test(t_val) && !regSFZ18.test(t_val)){
					error.push(inp.eq(i).attr('data-error'));
				}
			}else if(t_val !== "" && t_name === 'email'){
				if(!regEmail.test(t_val) && !regSFZ18.test(t_val)){
					error.push(inp.eq(i).attr('data-error'));
				}
			}
		}
	}
	if(!error.length){
		if(up_page != undefined){
			upage(up_page,obg_val);
		}
		if(me_mak != undefined){
			me_mak.hide();
		}
		$('.error').hide();
		alert('保存成功');
	}else{
		for(var i = 0,str=''; i<error.length; i++){
			err.text(error[i]).show();
			return false;
		}
	}
}
function error3(obj){
	var inp = obj.inp;
	var up_page = obj.up_page;
	var me_mak = obj.me_mak;
	var err = obj.err;
	var id = obj.id;
	var error = [];
	var obg_val = {};
	var regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	var regPhone = /^1(3|4|5|7|8)\d{9}$/;
	var regSFZ15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	var regSFZ18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
	for(var i=0; i<inp.length; i++){
		var t_val = inp.eq(i).val();
		var t_name = inp.eq(i).attr('name');
		if(t_val === ""){
			error.push(inp.eq(i).next().text());
		}else{
			var _name = inp.eq(i).attr('name');
			var _val = inp.eq(i).val();

			obg_val[_name] = _val;
			if(t_val !== "" && t_name === 'Phone'){
				t_val = t_val.replace(/[ ]/g,"");
				if(!regPhone.test(t_val)){
					error.push(inp.eq(i).attr('data-error'));
				}
			}else if(t_val !== "" && t_name === 'ID'){
				if(!regSFZ15.test(t_val) && !regSFZ18.test(t_val)){
					error.push(inp.eq(i).attr('data-error'));
				}
			}else if(t_val !== "" && t_name === 'email'){
				if(!regEmail.test(t_val) && !regSFZ18.test(t_val)){
					error.push(inp.eq(i).attr('data-error'));
				}
			}
		}
	}
	if(!error.length){
		if(up_page != undefined){
			update(up_page,obg_val,id);
		}
		if(me_mak != undefined){
			me_mak.hide();
		}

		for(var i = 0; i<inp.length; i++){
			inp.eq(i).val('').next().show();
		}
	}else{
		for(var i = 0,str=''; i<error.length; i++){
			err.text(error[i]).show();
			return false;
		}
	}
}
function update(up_page,obg_val,id){
	$('#'+id).find('.l-p1').val(obg_val.uname);
	$('#'+id).find('.l-p2').val(obg_val.Phone);
	$('#'+id).find('.l-p3').val(obg_val.ID);
	$('#add_people').attr('value','');
}
function upage(up_page,obg_val){
	var html;
	if(up_page.attr('class') === 'item0'){
		html='<div class="fp_group"><p><span class="tit">'+obg_val.tit+'</span><span><a href="javascript:;">编辑</a><i>|</i><a href="javascript:;" class="del_fp">删除</a></span></p></div>';
	}else if(up_page.attr('class') === 'item1'){
		html = '<div class="fp_group"><p><span class="tit">上海自由贸易有限公司</span><span><a href="javascript:;">编辑</a><i>|</i><a href="javascript:;" class="del_fpzz">删除</a></span></p><h3></h3><ul><li><span>单位名称：</span><span>上海自由贸易有限公司</span></li><li><span>纳税人识别码：</span><span>15625485458</span></li><li><span>注册地址：</span><span>上海市徐汇区</span></li><li><span>注册电话：</span><span>徐汇地铁1出口</span></li><li><span>开户银行：</span><span>徐汇地铁1出口</span></li><li><span>银行账户：</span><span>徐汇地铁1出口</span></li></ul><h3>售票地址</h3><ul><li><span>收票人姓名：</span><span>Free</span></li><li><span>收票人手机号：</span><span>15625485458</span></li><li<span>收票人省份：</span><span>上海市徐汇区</span></li><li><span>收票人地址：</span><span>徐汇地铁1出口</span></li></ul></div>';
		
	}else{
		var l = $('.list-w').length;
		var max = 0;
		for(var i = 0; i< l;i++){
			var t = $('.list-w')[i].id;
			t = parseInt(t.substring(6,t.length));
			if(t>max){
				max = t;
			}
		}
		max = max+1;
		html = '<div class="list-w" id="list-w'+max+'"> <span class="op1"> <a href="javascript:;" class="bianji">编辑</a> <a href="javascript:;" class="delete">删除</a> </span> <div> <span>联系人：</span> <input readonly="true" type="text" class="l-p1" value="'+obg_val.uname+'"/> </div> <div> <span>联系方式：</span> <input readonly="true" type="text" class="l-p2"  value="'+obg_val.Phone+'" /> </div> <div> <span>身份证号：</span> <input readonly="true" type="text" class="l-p3" value="'+obg_val.ID+'"> </div> </div> ';
	}
	up_page.append(html);
	$('.list-w').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	});
}



