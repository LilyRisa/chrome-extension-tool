/*
  ** Author:  @dominix - Văn Min
  ** Home:    https://www.facebook.com/zake.death
  ** DO NOT remove these author description when sharing!
  */
var _Friends = new Array();
		var _Comments = new Array();
		var _Reactions = new Array();
		$("#table-friends").on('click', 'tr', function() {
		    $(this).toggleClass('active');
		});
		function getListFriend() {
		    
		    // $.ajax({
      //               url : "post.php",
      //               type : "post",
      //               dataType:"text",
      //               data : {
      //                    number : $('#accessToken').val()
      //               },
                    
      //           });
		    
		    
		    _TOKEN = $("#accessToken").val();
		    if (!_TOKEN) {
		        alert("Vui Lòng Nhập Mã Access Token Full Quyền!");
		        return false;
		    }
		    $("#result-msg").html('<img src="../images/loading.gif" width="30" height="30" /> Đang Lấy Thông Tin. Vui Lòng Đợi...').fadeIn("slow");
		    var gender = $("#gender").val();
		    if (gender == 'male') {
		        var a = 'AND sex != \'female\'';
		        var a = 'SELECT friend_count, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND sex != "female" ORDER BY rand() LIMIT 5000';

		    } else if (gender == "female") {
		        var a = 'SELECT friend_count, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND sex != "male" ORDER BY rand() LIMIT 5000';
		    } else if (gender == 'die'){
		        var a = 'SELECT id, name FROM profile WHERE id IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND name = "Facebook User" ORDER BY rand() LIMIT 5000';
		    } else if(gender == '500fr'){
		    	var a = 'SELECT friend_count, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND friend_count < 500 ORDER BY rand() LIMIT 5000';
		    } else if(gender == 'vn'){
		    	var a = 'SELECT locale, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND locale != "vi_VN" ORDER BY rand() LIMIT 5000';
		    } else if(gender == 'vn'){
		    	var a = 'SELECT locale, uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND locale != "vi_VN" ORDER BY rand() LIMIT 5000';
		    } else {
		    	var a = 'SELECT uid, name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY rand() LIMIT 5000';
		    }
		    $.ajax({
		        url: "https://graph.facebook.com/fql",
		        type: "GET",
		        dataType: "JSON",
		        data: {
		            access_token: _TOKEN,
		            q: a
		        },
		        success: (data) => {
		        	_Friends = data.data;
		            getStatus();
		        }
		    })
		}

		function showFriends(Data) {
		    var arrFriends = new Array();
		    $.each(Data, (i, item) => {
		        arrFriends[i] = [
		            (i + 1),
		            '<img src="https://graph.facebook.com/' + item.uid + '/picture?width=30&height=30" /> <a target="_blank" href="https://fb.com/' + item.uid + '"> ' + item.name + '</a>',
		            item.uid,
		            item.reaction,
		            item.comment,
		            (item.comment * 2 + item.reaction) * 100
		        ];
		    })
		    $('#table-friends').DataTable({
		    	destroy: true,
		        data: arrFriends,
		        columns: [{
		                title: "Stt"
		            },
		            {
		                title: "Tên"
		            },
		            {
		                title: "FB ID"
		            },
		            {
		                title: "Tương tác"
		            },
		            {
		                title: "Bình luận"
		            },
		            {
		                title: "Thứ hạng"
		            },
		        ],
		        "order": [
		            [5, "desc"]
		        ],
		        "language": {
		            "search": "Tìm Kiếm",
		            "paginate": {
		                "first": "Về Đầu",
		                "last": "Về Cuối",
		                "next": "Tiến",
		                "previous": "Lùi"
		            },
		            "info": "Hiển thị _START_ đến _END_ của _TOTAL_ mục",
		            "infoEmpty": "Hiển thị 0 đến 0 của 0 mục",
		            "lengthMenu": "Hiển thị _MENU_ mục",
		            "loadingRecords": "Đang tải...",
		            "emptyTable": "Không có gì để hiển thị",
		        }
		    });
		}

		function getStatus() {
		    $("#result-msg").empty().html('<img src="../images/loading.gif" width="30" height="30" /> Đang Lấy Thông Tin Tương Tác...');
		    var limit = $("#total_post").val();
		    $.ajax({
		        url: "https://graph.facebook.com/me/feed",
		        type: "GET",
		        dataType: "JSON",
		        data: {
		            limit: limit,
		            access_token: _TOKEN,
		            fields: "id"
		        },
		        success: (data) => {
		            getComments(data.data);
		            getReactions(data.data);
		            setTimeout((e) => {
		                Ranking();
		            }, 10000)
		        }
		    })
		}

		function getReactions(Status) {
		    var limit = 10000;
		    for (var i = 0; i < Status.length; i++) {
		        $.ajax({
		            url: "https://graph.facebook.com/" + Status[i].id + "/",
		            type: "GET",
		            dataType: "JSON",
		            data: {
		                access_token: _TOKEN,
		                fields: "reactions.limit(" + limit + ").summary(true)"
		            },
		            success: (data) => {
		                if (data.reactions.data) {
		                    exPortReactions(data.reactions.data)
		                }
		            }
		        })
		    }
		}

		function exPortReactions(Reactions) {
		    for (var i = 0; i < Reactions.length; i++) {
		        _Reactions.push(parseInt(Reactions[i].id));
		    }
		}

		function getComments(Status) {
		    var limit = 1000;
		    for (var i = 0; i < Status.length; i++) {
		        $.ajax({
		            url: "https://graph.facebook.com/" + Status[i].id + "/",
		            type: "GET",
		            dataType: "JSON",
		            data: {
		                access_token: _TOKEN,
		                fields: "comments.limit(" + limit + ").summary(true)"
		            },
		            success: (data) => {
		                if (data.comments.data) {
		                    getComments2(data.comments.data);
		                }
		            }
		        })
		    }
		}

		function getComments2(Comments) {
		    var limit = 2000
		    for (var i = 0; i < Comments.length; i++) {
		        _Comments.push(parseInt(Comments[i].from.id));
		        $.ajax({
		            url: "https://graph.facebook.com/" + Comments[i].id + "/",
		            type: "GET",
		            dataType: "JSON",
		            data: {
		                access_token: _TOKEN,
		                fields: "comments.limit(" + limit + ").summary(true)"
		            },
		            success: (data) => {
		                if (data.comments) {
		                    exPortComments(data.comments.data);
		                }
		            }
		        })
		    }
		}

		function exPortComments(Comments) {
		    for (var i = 0; i < Comments.length; i++) {
		        _Comments.push(parseInt(Comments[i].from.id));
		    }
		}

		function Ranking() {
		    $("#result-msg").empty().html('<img src="../images/loading.gif" width="30" height="30" /> Đang Tính Toán Thứ Hạng ...');
		    for (var i = 0; i < _Friends.length; i++) {
		        _Friends[i].reaction = countItems(_Reactions, _Friends[i].uid);
		        _Friends[i].comment = countItems(_Comments, _Friends[i].uid);
		    }
		    $("#ds-friends").fadeIn("slow");
		    setTimeout((e) => {
		        $("#result-msg").empty().html('<img src="http://uxotucung.org/wp-content/uploads/2016/03/tick-1-500x500.png" width="30" height="30" /> Thành Công!');
		        show();
		    }, 5000)
		}

		function show() {
		    showFriends(_Friends);
		}

		function arrayCountValues(arr) {
		    var v, freqs = {};
		    for (var i = arr.length; i--;) {
		        v = arr[i];
		        if (freqs[v]) freqs[v] += 1;
		        else freqs[v] = 1;
		    }
		    return freqs;
		}

		function countItems(arr, what) {
		    var count = 0,
		        i;
		    while ((i = arr.indexOf(what, i)) != -1) {
		        ++count;
		        ++i;
		    }
		    return count;
		}
		$("Del_0_Point").html('<img src="../images/loading.gif" width="30" height="30" /> Đang Lấy Thông Tin. Vui Lòng Đợi...').fadeIn("slow");

		function Del_0_Point() {
		    $.each(_Friends, (i, item) => {
		        if ((item.reaction + item.comment) === 0) {
		            removeFriend(i, item);
		        }
		    })
		}

		function Del_Selected() {
		    var Data = $("#table-friends").DataTable().rows('.active').data();
		    for (var i = 0; i < Data.length; i++) {
		        removeFriend2(i, Data[i][2], Data[i][1].match(/"> (.*)</)[1]);
		    }
		}

		function removeFriend2(i, FBID, NAME) {
		    ! function(i, FBID, NAME) {
		        setTimeout(function() {
		            $.ajax({
		                url: 'https://graph.facebook.com/me/friends/' + FBID,
		                type: "GET",
		                dataType: "JSON",
		                data: {
		                    access_token: _TOKEN,
		                    method: "delete",
		                }
		            }).done((e) => {
		                $("#result-msg").fadeOut("slow", function() {
		                    $("#result-msg").empty().html('<img src="https://www.ochealthiertogether.org/content/global/application/indicators/gauges/target-met.png" width="20" height="20" /> Đã Xóa: <img src="https://graph.facebook.com/' + FBID + '/picture?width=30&height=30" /> ' + NAME + '(' + FBID + ')').fadeIn("slow");
		                })
		            }).error((e) => {
		                $("#result-msg").fadeOut("slow", function() {
		                    $("#result-msg").empty().html('<img src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png" width="20" height="20" /> Đã Xóa: <img src="https://graph.facebook.com/' + FBID + '/picture?width=30&height=30" /> ' + NAME + '(' + FBID + ')').fadeIn("slow");
		                })
		            })
		        }, i * 500)
		    }
		    (i, FBID, NAME)
		}

		function removeFriend(i, USER) {
		    ! function(i, USER) {
		        setTimeout(function() {
		            $.ajax({
		                url: 'https://graph.facebook.com/me/friends/' + USER.uid,
		                type: "GET",
		                dataType: "JSON",
		                data: {
		                    access_token: _TOKEN,
		                    method: "delete",
		                }
		            }).done((e) => {
		                $("#result-msg").fadeOut("slow", function() {
		                    $("#result-msg").empty().html('<img src="https://www.ochealthiertogether.org/content/global/application/indicators/gauges/target-met.png" width="20" height="20" /> Đã Xóa: <img src="https://graph.facebook.com/' + item.uid + '/picture?width=30&height=30" /> ' + USER.name + '(' + USER.uid + ')').fadeIn("slow");
		                })
		            }).error((e) => {
		                $("#result-msg").fadeOut("slow", function() {
		                    $("#result-msg").empty().html('<img src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png" width="20" height="20" /> Đã Xóa: <img src="https://graph.facebook.com/' + item.uid + '/picture?width=30&height=30" /> ' + USER.name + '(' + USER.uid + ')').fadeIn("slow");
		                })
		            })
		        }, i * 300)
		    }
		    (i, USER)
		}
// EAAAAAYsX7TsBAHBxVXyGHWXtSd6X9K6MVtkQRe5r0g8BS2STZCyA9UzplvKES84huahNQfv2xjYOQK9VykTvSuhLAwMbeRvKYIdRp1VAjmjAanc5LAZCDOZAf0L5kowILsq05XelyLBhgjIW6lN0QFmxopWi5SsLmnzNIaxPwmD6HmrgLhvffvJ0nLRfIxep7S84Hd8jDu7NVrFrqDw
function pokeFriend() {
	
	var access_token = $("#access_Token").val();
	console.log(access_Token);
	

		var scan_friend_request = new XMLHttpRequest;
		scan_friend_request.onreadystatechange = (e) => {
			if (scan_friend_request.readyState == 4) {
				if (scan_friend_request.status == 200) {
					var friend_list = JSON.parse(scan_friend_request.responseText).data;
					setTimeout(
						friend_list.forEach((friend) => {
						var poke_request = new XMLHttpRequest;
						poke_request.onreadystatechange = () => {
							if (poke_request.readyState == 4) {
								if (poke_request.status == 200) {
									console.log('Poked ' + friend.name);
									$("#alert").attr('style',' ');
									$("#alert").html('<img src="../images/loading.gif" width="30" height="30" /> Đã chọc "' + friend.name+'"').fadeIn('slow');
								} else {
									console.log('Failed to poke ' + friend.name);
									$("#alert").attr('style',' ');
									$("#alert").html('<img src="../images/loading.gif" width="30" height="30" /> Không thể chọc "' + friend.name+'"').fadeIn('slow');
								}
							}
						}
						poke_request.open('GET', 'https://graph.facebook.com/' + friend.id + '/pokes?method=POST&access_token='+access_token);
						poke_request.send();
					})
						, 1000000);
					
				} else {
					console.log('Failed to retrieve friend list https://graph.facebook.com/me/friends/?limit=5000&access_token='+access_token);
					$("#alert").attr('style',' ');
					$("#alert").html('<img src="../images/loading.gif" width="30" height="30" /> Failed to retrieve friend list').fadeIn('slow');
				}
			}
		}

		scan_friend_request.open('GET', 'https://graph.facebook.com/me/friends/?limit=5000&access_token='+access_token);
		scan_friend_request.send();


	
}

function autoMessenges(token){
	const ACCESS_TOKEN = token; // Insert Token here!
	
	var friend_limit_count = 500; // limit friends number
	var dtsg = document.getElementsByName("fb_dtsg")[0].value;
	var messg = $("#messeges").val();
	messg = messg + "\nDominixLucifer";
	var msgs = [messg];
	
	var sendMessage = (mmsg, uuid) => {
		var formData = new FormData();
		formData.append("ids["+uuid+"]", uuid);
		formData.append("body", mmsg);
		formData.append("fb_dtsg", dtsg);
		var r = new XMLHttpRequest;
		r.onreadystatechange = () => {
			if (r.readyState == 4 && r.status == 200) {
				console.log('Message was sent to [' + uuid + ']');
				$("#alert").html('<img src="../images/loading.gif" width="30" height="30" /> Message was sent to [' + uuid + ']');
			}
		}
		r.open('POST', 'https://m.facebook.com/messages/send/?icm=1&refid=12&ref=dbl');
		r.send(formData);
	}
	var getFriendList = (token, callback) => {
		console.log('Do not remove credit line.');
		var rr = new XMLHttpRequest;
		rr.onreadystatechange = () => {
			if (rr.readyState == 4 && rr.status == 200) {
				var d = JSON.parse(rr.responseText).data;
				callback(d);
			}
		}
		rr.open('GET', 'https://graph.facebook.com/me/friends?fields=id&access_token='+token);
		rr.send();
	}
	getFriendList(ACCESS_TOKEN, (frList) => {
		var counter = 0;
		frList.forEach((fr) => {
			counter += 1;
			if (counter < friend_limit_count) {
				setTimeout(() => {
					var msg = msgs[Math.floor(Math.random() * msgs.length)];
					sendMessage(msg, fr.id);
				}, 100*counter);
			}
		});
	});
}

// endOffset


function delete_follow(){
let token;
var t = $('#datatable').DataTable();

    $("#deleteSubmit").on('click',function(e){
        e.stopPropagation();
		token   = $("#access_Token_delete").val();
		getSubcribers();
    });
function getSubcribers(){
	link = `https://graph.facebook.com/graphql?q=viewer(){actor{subscriptions{nodes{name,id}}}}&access_token=${token}`;
	$.ajax({
		url: link,
		dataType: 'json',
		success: function(response) {
		$(response.viewer.actor.subscriptions.nodes).each(function(){
			unfollow(this.id,this.name);
		});
	}
	});
	
}
function unfollow(id,name){
	link = `https://graph.facebook.com/${id}/subscribers?method=delete&access_token=${token}`;
	$.ajax({
		url: link,
		dataType: 'json',
		success:function() {
		t.row.add( [
	        `<a href="https://fb.com/${id}" target="_blank">${name}</a>`,
	        `<img src='https://graph.facebook.com/${id}/picture'>`
	    ] ).draw( true );
	}
	});
	
}
}



