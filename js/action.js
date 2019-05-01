/*
  ** Author:  @dominix - Văn Min
  ** Home:    https://www.facebook.com/zake.death
  ** DO NOT remove these author description when sharing!
  */
$(document).ready(function(){
	$("#getListFriend").on('click',function(){
		getListFriend();
	});
	$("#Del_0_Point").on('click',function(){
		Del_0_Point();
	});
	$("#Del_Selected").on('click',function(){
		Del_Selected();
	});
	$("#pokeFriend").on('click',function(){
		pokeFriend();
	});
	$("#menu_filter").on('click',function(){
		$("#panel_filter").attr('style',' ');
		$("#panel_poke").attr('style','display: none');
	});
	$("#menu_poke").on('click',function(){
		$("#panel_poke").attr('style',' ');
		$("#panel_filter").attr('style','display: none');
	});
});