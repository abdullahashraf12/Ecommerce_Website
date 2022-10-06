const data={
    date:"",
    f_name:"",
    account:"",
    account_image:"",
    client_message:"",
    rating_number:"",

    set set_date(date_db){
        this.date=date_db
    },

    set set_f_name(f_name_db){
        this.f_name=f_name_db;
    },
    set set_account(account_db){
        this.account=account_db;
    },
    set set_account_image(account_image_db){
        this.account_image=account_image_db;
    },
    set set_client_message(client_message_db){
        this.client_message=client_message_db;
    },


    set set_rating_number(rating_number_db){
        this.rating_number=rating_number_db
    },


    get get_date() {
        return this.date;
    },
    get get_f_name() {
        return this.f_name;
    },
    get get_account() {
        return this.account;
    },
    get get_account_image() {
        return "/media/"+this.account_image;
    },
    get get_client_message() {
        return this.client_message;
    },

    get get_rating_number() {
        return this.rating_number;
    },
    
}


$(document).ready(function () {  
    var a= $("#category_name_global").text();
    var b= $("#child_name_global").text();
    var c= $("#prod_name_global").text();
setInterval(function(){
$.ajax({
    type :"POST",
    url : "get_review",
    data:{
        category_name_global:a,
        child_name_global:b,
        prod_name_global:c,
        


    },
    headers:{
        // 'Content-Type':'application/json',
        // 'Content-Type':'multipart/form-data',
        // 'csrfmiddlewaretoken': '{{ csrf_token }}',
        // 'X-CSRFToken':csrftoken ,

    },
    
success:function(res){
    // $("#div_comment").empty()
    // $("#comment_body").empty()
    // $("#nummber_of_reveiws").empty()
    // $("#client_name").empty()
    // $("#client_comment").empty()
    
    // // $("#nummber_of_reveiws").empty()
    // // $("#client_name").empty()
    $("#div_comment").empty()
    $("#number_of_reviews").empty()
    $("#comment_body").empty()
    $("#parent_comm").empty()

data_length=res.date.length




set_rating_stars_for_counter7="<div style='float:'left;'><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'  ></div></label><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label></div>"
set_rating_stars_for_counter6="<div style='float:'left;'><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'  ></div></label><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label></div>"
set_rating_stars_for_counter5="<div style='float:'left;'><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'  ></div></label><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label></div>"
set_rating_stars_for_counter4="<div style='float:'left;'><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'  ></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label></div>"
set_rating_stars_for_counter3="<div style='float:'left;'><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'  ></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label></div>"
set_rating_stars_for_counter2="<div style='float:'left;'><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'  ></div></label><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label></div>"
set_rating_stars_for_counter1="<div style='float:'left;'><label><div  class='gold' style='float: left;'><input  type='radio'  style='visibility:hidden'  ></div></label></div>"

set_rating_stars_for_counter0="<div style='float:'left;'><label><div  class='silver' style='float: left;'><input  type='radio'  style='visibility:hidden'  ></div></label><label><div  class='silver' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='silver' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div  class='silver' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='silver' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='silver' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label><label><div   class='silver' style='float: left;'><input  type='radio'  style='visibility:hidden'></div></label></div>"







$("#data_length").html("Reviews ("+data_length.toString()+")")
for(var i=0 ; i<data_length ; i++){
for(var k in res){
   if(res[k][i].rating==7){
    data.set_date=res[k][i].date
    data.account=res[k][i].account
    data.set_account_image=res[k][i].account_image
    data.f_name=res[k][i].f_name
    data.client_message=res[k][i].client_message
    data.rating_number=res[k][i].rating
    console.log(data.rating_number)
    // console.log(data.get_account_image)
    var number_of_reviews="<h4 id='nummber_of_reveiws' class='mb-4=>"+data_length+"  Reviews"+"</h4>"    
    $("#number_of_reviews").append(number_of_reviews)
    // console.log(data.get_account_image)
    // +  
    var html_data_review="<div id='div_comment' class='media mb-4'> <img id='client_pic' src="+data.get_account_image+" alt='Image' class='img-fluid mr-3 mt-1' style='width: 35px; height:35; border-radius:25%; '><div id='comment_body' class='media-body'>"+"<div style='float:left;'><h6 id='client_name' >"+data.get_f_name+"</div>"+set_rating_stars_for_counter7 +"</small></h6> <div id='rating_s' class='text-primary mb-2' style='clear:both' >"+"<p id='client_comment'>"+data.get_client_message+"</p></div>"+"<small><i style='clear:both;'>"+data.get_date.toString()+"</i></small>"+"</div>"
    $("#parent_comm").append(html_data_review)
}else if(res[k][i].rating==6){
    data.set_date=res[k][i].date
    data.account=res[k][i].account
    data.set_account_image=res[k][i].account_image
    data.f_name=res[k][i].f_name
    data.client_message=res[k][i].client_message
    data.rating_number=res[k][i].rating
    console.log(data.rating_number)
    // console.log(data.get_account_image)
    var number_of_reviews="<h4 id='nummber_of_reveiws' class='mb-4=>"+data_length+"  Reviews"+"</h4>"    
    $("#number_of_reviews").append(number_of_reviews)
    // console.log(data.get_account_image)
    var html_data_review="<div id='div_comment' class='media mb-4'> <img id='client_pic' src="+data.get_account_image+" alt='Image' class='img-fluid mr-3 mt-1' style='width: 35px; height:35; border-radius:25%; '><div id='comment_body' class='media-body'>"+"<div style='float:left;'><h6 id='client_name' >"+data.get_f_name+"</div>"+set_rating_stars_for_counter6 +"</small></h6> <div id='rating_s' class='text-primary mb-2' style='clear:both' >"+"<p id='client_comment'>"+data.get_client_message+"</p></div>"+"<small><i style='clear:both;'>"+data.get_date.toString()+"</i></small>"+"</div>"
    $("#parent_comm").append(html_data_review)

}
else if(res[k][i].rating==5){
    data.set_date=res[k][i].date
    data.account=res[k][i].account
    data.set_account_image=res[k][i].account_image
    data.f_name=res[k][i].f_name
    data.client_message=res[k][i].client_message
    data.rating_number=res[k][i].rating
    console.log(data.rating_number)
    // console.log(data.get_account_image)
    var number_of_reviews="<h4 id='nummber_of_reveiws' class='mb-4=>"+data_length+"  Reviews"+"</h4>"    
    $("#number_of_reviews").append(number_of_reviews)
    // console.log(data.get_account_image)
    var html_data_review="<div id='div_comment' class='media mb-4'> <img id='client_pic' src="+data.get_account_image+" alt='Image' class='img-fluid mr-3 mt-1' style='width: 35px; height:35; border-radius:25%; '><div id='comment_body' class='media-body'>"+"<div style='float:left;'><h6 id='client_name' >"+data.get_f_name+"</div>"+set_rating_stars_for_counter5 +"</small></h6> <div id='rating_s' class='text-primary mb-2' style='clear:both' >"+"<p id='client_comment'>"+data.get_client_message+"</p></div>"+"<small><i style='clear:both;'>"+data.get_date.toString()+"</i></small>"+"</div>"
    $("#parent_comm").append(html_data_review)
    
}
else if(res[k][i].rating==4){
    data.set_date=res[k][i].date
    data.account=res[k][i].account
    data.set_account_image=res[k][i].account_image
    data.f_name=res[k][i].f_name
    data.client_message=res[k][i].client_message
    data.rating_number=res[k][i].rating
    console.log(data.rating_number)
    // console.log(data.get_account_image)
    var number_of_reviews="<h4 id='nummber_of_reveiws' class='mb-4=>"+data_length+"  Reviews"+"</h4>"    
    $("#number_of_reviews").append(number_of_reviews)
    // console.log(data.get_account_image)
    var html_data_review="<div id='div_comment' class='media mb-4'> <img id='client_pic' src="+data.get_account_image+" alt='Image' class='img-fluid mr-3 mt-1' style='width: 35px; height:35; border-radius:25%; '><div id='comment_body' class='media-body'>"+"<div style='float:left;'><h6 id='client_name' >"+data.get_f_name+"</div>"+set_rating_stars_for_counter4 +"</small></h6> <div id='rating_s' class='text-primary mb-2' style='clear:both' >"+"<p id='client_comment'>"+data.get_client_message+"</p></div>"+"<small><i style='clear:both;'>"+data.get_date.toString()+"</i></small>"+"</div>"
    $("#parent_comm").append(html_data_review)
    
}
else if(res[k][i].rating==3){
    data.set_date=res[k][i].date
    data.account=res[k][i].account
    data.set_account_image=res[k][i].account_image
    data.f_name=res[k][i].f_name
    data.client_message=res[k][i].client_message
    data.rating_number=res[k][i].rating
    console.log(data.rating_number)
    // console.log(data.get_account_image)
    var number_of_reviews="<h4 id='nummber_of_reveiws' class='mb-4=>"+data_length+"  Reviews"+"</h4>"    
    $("#number_of_reviews").append(number_of_reviews)
    // console.log(data.get_account_image)
    var html_data_review="<div id='div_comment' class='media mb-4'> <img id='client_pic' src="+data.get_account_image+" alt='Image' class='img-fluid mr-3 mt-1' style='width: 35px; height:35; border-radius:25%; '><div id='comment_body' class='media-body'>"+"<div style='float:left;'><h6 id='client_name' >"+data.get_f_name+"</div>"+set_rating_stars_for_counter3 +"</small></h6> <div id='rating_s' class='text-primary mb-2' style='clear:both' >"+"<p id='client_comment'>"+data.get_client_message+"</p></div>"+"<small><i style='clear:both;'>"+data.get_date.toString()+"</i></small>"+"</div>"
    $("#parent_comm").append(html_data_review)
    
}
else if(res[k][i].rating==2){
    data.set_date=res[k][i].date
    data.account=res[k][i].account
    data.set_account_image=res[k][i].account_image
    data.f_name=res[k][i].f_name
    data.client_message=res[k][i].client_message
    data.rating_number=res[k][i].rating
    console.log(data.rating_number)
    // console.log(data.get_account_image)
    var number_of_reviews="<h4 id='nummber_of_reveiws' class='mb-4=>"+data_length+"  Reviews"+"</h4>"    
    $("#number_of_reviews").append(number_of_reviews)
    // console.log(data.get_account_image)
    var html_data_review="<div id='div_comment' class='media mb-4'> <img id='client_pic' src="+data.get_account_image+" alt='Image' class='img-fluid mr-3 mt-1' style='width: 35px; height:35; border-radius:25%; '><div id='comment_body' class='media-body'>"+"<div style='float:left;'><h6 id='client_name' >"+data.get_f_name+"</div>"+set_rating_stars_for_counter2 +"</small></h6> <div id='rating_s' class='text-primary mb-2' style='clear:both' >"+"<p id='client_comment'>"+data.get_client_message+"</p></div>"+"<small><i style='clear:both;'>"+data.get_date.toString()+"</i></small>"+"</div>"
    $("#parent_comm").append(html_data_review)
    
}
else if(res[k][i].rating==1){
    data.set_date=res[k][i].date
    data.account=res[k][i].account
    data.set_account_image=res[k][i].account_image
    data.f_name=res[k][i].f_name
    data.client_message=res[k][i].client_message
    data.rating_number=res[k][i].rating
    console.log(data.rating_number)
    // console.log(data.get_account_image)
    var number_of_reviews="<h4 id='nummber_of_reveiws' class='mb-4=>"+data_length+"  Reviews"+"</h4>"    
    $("#number_of_reviews").append(number_of_reviews)
    // console.log(data.get_account_image)
    var html_data_review="<div id='div_comment' class='media mb-4'> <img id='client_pic' src="+data.get_account_image+" alt='Image' class='img-fluid mr-3 mt-1' style='width: 35px; height:35; border-radius:25%; '><div id='comment_body' class='media-body'>"+"<div style='float:left;'><h6 id='client_name' >"+data.get_f_name+"</div>"+set_rating_stars_for_counter1 +"</small></h6> <div id='rating_s' class='text-primary mb-2' style='clear:both' >"+"<p id='client_comment'>"+data.get_client_message+"</p></div>"+"<small><i style='clear:both;'>"+data.get_date.toString()+"</i></small>"+"</div>"
    $("#parent_comm").append(html_data_review)
    
}
else if(res[k][i].rating==0){
    data.set_date=res[k][i].date
    data.account=res[k][i].account
    data.set_account_image=res[k][i].account_image
    data.f_name=res[k][i].f_name
    data.client_message=res[k][i].client_message
    data.rating_number=res[k][i].rating
    console.log(data.rating_number)
    // console.log(data.get_account_image)
    var number_of_reviews="<h4 id='nummber_of_reveiws' class='mb-4=>"+data_length+"  Reviews"+"</h4>"    
    $("#number_of_reviews").append(number_of_reviews)
    // console.log(data.get_account_image)
    var html_data_review="<div id='div_comment' class='media mb-4'> <img id='client_pic' src="+data.get_account_image+" alt='Image' class='img-fluid mr-3 mt-1' style='width: 35px; height:35; border-radius:25%; '><div id='comment_body' class='media-body'>"+"<div style='float:left;'><h6 id='client_name' >"+data.get_f_name+"</div>"+set_rating_stars_for_counter0 +"</small></h6> <div id='rating_s' class='text-primary mb-2' style='clear:both' >"+"<p id='client_comment'>"+data.get_client_message+"</p></div>"+"<small><i style='clear:both;'>"+data.get_date.toString()+"</i></small>"+"</div>"
    $("#parent_comm").append(html_data_review)
    
}



}  
}
},error:function(res){
    // console.log("Failed "+res.status)
}})},1000)})