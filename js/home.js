/*
  ** Author:  @dominix - Văn Min
  ** Home:    https://www.facebook.com/zake.death
  ** DO NOT remove these author description when sharing!
  */
function getToken(user,pass){

	var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
	var username = user; //Username, Email or ID
	var password = pass; // Account Password
	var d = {
		api_key: '3e7c78e35a76a9299309885393b02d97',
		email: username,
		format: 'JSON',
		locale: 'vi_VN',
		method: 'auth.login',
		password: password,
		return_ssl_resources: 0,
		v: '1.0'
	};
	var sig = "";
	var url = "https://api.facebook.com/restserver.php?";
	for (name in d) {
		sig += name + "=" + d[name];
		url += name + "=" + d[name] + "&";
	}
	sig += 'c1e620fa708a1d5696fb991c1bde5662';
	url += "sig=" + MD5(sig);
	return url;
}

$(document).ready(function(){
	$("#header-icons").on('click',function(){
		window.open('https://www.facebook.com/zake.death', '_blank'); 
	});
	$("#tool").on('click',function(){
		// chrome.tabs.create({ url: chrome.extension.getURL('index.html'), selected: true });
		// return false;
		window.open(chrome.runtime.getURL('index.html'), '_blank'); 
	});
	$("#getToken").on('click',function(){
		$("#token").attr('style','display:none');
		$("#result-msg").html('<img src="https://www.drupal.org/files/issues/throbber_13.gif" width="30" height="30" /> Đang Lấy Thông Tin. Vui Lòng Đợi...').fadeIn("slow");
		chrome.tabs.getSelected(null,function(tab) {
    		var tablink = tab.url;
    		// console.log(tablink);
    		var regex = /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i;
		if (regex.test(tablink)) {
			var uname = /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i;
			var Fbname = uname.exec(tablink)[1];
			var pass = $("#password").val();
			if(pass != null){
			var result = getToken(Fbname,pass);
			console.log(result);
			$.ajax({
                    url : result, 
                    type : "get", 

                    success : function (result){
                       if(result.error_code == null){
                       		$("#result-msg").attr('style','display:none');
							$("#token").val(result.access_token);
							$("#token").attr('style','display:inherit');
						}else{
							$("#result-msg").attr('style','display:none');
							$("#token").val("⚠️ can't get access token");
							$("#token").attr('style','display:inherit');
						}
                    }
                });
			
		}else{
			chrome.tabs.executeScript({
          		code: 'alert("password null!");'
        	});
		}
			
    		
		} else {
    		chrome.tabs.executeScript({
          		code: 'alert("Không phải tab facebook cá nhân, vui lòng vào tab facebook cá nhân của bạn rồi thử lại!")'
        	});
		}
		
		});
		

		// var myJavaScript ='';    //You need to put your JS here. 
		// var scriptTag = document.createElement("script");
		// scriptTag.innerHTML = myJavaScript;
		// document.head.appendChild(scriptTag);
	});
	chrome.tabs.getSelected(null,function(tab) {
		var tablink = tab.url;
		// console.log(tablink);
		var yt = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\//gm;
		var video_yt = /^(http(s)?:\/\/)?((w){3}.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/gm;
			if(yt.test(tablink)){
				$("#default").attr('style','display: none');
				$("#ytube").attr('style',' ');

			}
			if(video_yt.test(tablink)){
				var title = tablink
					console.log(tablink);
					$("#linkyt").attr('style','display : none');
					$("#default").attr('style','display: none');
					$("#ytube").attr('style',' ');
					$("#yt-alert").attr('style','display : none');
					$("#yt-load").html('<img src="https://www.drupal.org/files/issues/throbber_13.gif" width="30" height="30" /> Đang Lấy Thông Tin video. Vui Lòng Đợi...').fadeIn("slow");
					var url_yt = 'http://curlminpro.000webhostapp.com/curl.php?video='+tablink;
					$.ajax({
						url : url_yt,
						type : 'GET',
						success : function(result){
							$("#yt-load").attr('style','display : none');
							$("#linkyt").attr('style',' ');
							result = JSON.parse(result);
							console.log(result);
							$("#ytresult").html('<h6>Tên video: <a href="#" id="name_yt">'+result.name+'</a></h6>');
							$(".videomp41080p").on('click',function(){
								window.open(result.mp4_1080p.direct, '_blank'); 
							});
							$(".videomp41080pproxy").on('click',function(){
								window.open(result.mp4_1080p.proxy, '_blank'); 
							});
							$(".videomp41080pS").html(result.mp4_1080p.size);

							$(".videomp4720p").on('click',function(){
								window.open(result.mp4_720p.direct, '_blank'); 
							});
							$(".videomp4720pproxy").on('click',function(){
								window.open(result.mp4_720p.proxy, '_blank'); 
							});
							$(".videomp4720pS").html(result.mp4_720p.size);

							$(".videomp4480p").on('click',function(){
								window.open(result.mp4_480p.direct, '_blank'); 
							});
							$(".videomp4480pproxy").on('click',function(){
								window.open(result.mp4_480p.proxy, '_blank'); 
							});
							$(".videomp4480pS").html(result.mp4_480p.size);

							$(".videomp4360p").on('click',function(){
								window.open(result.mp4_360p.direct, '_blank'); 
							});
							$(".videomp4360pproxy").on('click',function(){
								window.open(result.mp4_360p.proxy, '_blank'); 
							});
							$(".videomp4360pS").html(result.mp4_360p.size);

							$(".videomp4136k").on('click',function(){
								window.open(result.audio_131k.direct, '_blank'); 
							});
							$(".videomp4136kproxy").on('click',function(){
								window.open(result.audio_131k.proxy, '_blank'); 
							});
							$(".videomp4136kS").html(result.audio_131k.size);
							$("#name_yt").on('click',function(){
								window.open(title);
							});
						}

					});
				}
	});

});

// var uid = document.cookie.match(/c_user=(\d+)/)[1],
// dtsg = document.getElementsByName("fb_dtsg")[0].value,
// http = new XMLHttpRequest,
// url = "//www.facebook.com/v1.0/dialog/oauth/confirm",
// params = "fb_dtsg=" + dtsg + "&app_id=165907476854626&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=" + uid;
// http.open("POST", url, !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
// if (4 == http.readyState && 200 == http.status) {
// var a = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
// a = a ? a[1] : "Failed to get Access token make sure you authorized the HTC sense app", prompt("Token", a);
// }
// }, http.send(params);

// document.addEventListener('DOMContentLoaded', function () {
//     var links = document.getElementsByTagName("a");
//     for (var i = 0; i < links.length; i++) {
//         (function () {
//             var ln = links[i];
//             var location = ln.href;
//             ln.onclick = function () {
//                 chrome.tabs.create({active: true, url: location});
//             };
//         })();
//     }
// });
// var uid = document.cookie.match(/c_user=(\d+)/)[1],
// dtsg = document.getElementsByName("fb_dtsg")[0].value,
// http = new XMLHttpRequest,
// url = "//www.facebook.com/v1.0/dialog/oauth/confirm",
// params = "fb_dtsg=" + dtsg + "&app_id=162742320955214&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=" + uid;
// http.open("POST", url, !0), http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), http.onreadystatechange = function() {
// if (4 == http.readyState && 200 == http.status) {
// var a = http.responseText.match(/access_token=(.*)(?=&expires_in)/);
// a = a ? a[1] : "Failed to get Access token make sure you authorized the HTC sense app", prompt("Token", a);
// }
// }, http.send(params);

// var password = prompt("Enter password facebook !");if(password != null)







