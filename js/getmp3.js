/*
 ** Author:  @dominix - Văn Min
 ** Home:    https://www.facebook.com/zake.death
 ** DO NOT remove these author description when sharing!
 */
$(document).ready(function() {
    $("#getlink").on('click', function() {
        $("#data_mp3").html('<img src="../images/loading.gif" width="30" height="30" /> Đang Lấy Thông Tin. Vui Lòng Đợi...').fadeIn("slow");
        var url_mp3 = $("#link_mp3").val();
        var url_mp3 = "http://curlminpro.000webhostapp.com/curl.php?link=" + url_mp3;
        console.log(url_mp3);
        $.ajax({
            url: url_mp3,
            type: 'GET',
            success: function(result) {
                console.log(result);
                result = JSON.parse(result)
                var htmldata = '<h6>Tên bài hát: ' + result.name + '</h6><input type="text" style="position: relative" value="' + result.link + '"><a id="download_now" href="#">Download now!</a>';
                console.log(htmldata);
                $("#data_mp3").html(htmldata).fadeIn("slow");
                $("#download_now").on('click', function() {
                    window.open(result.link, '_blank');
                });
            }
        });
    });



});