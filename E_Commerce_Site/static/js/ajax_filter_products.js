$(document).ready(function(){
var product_name_id = $("input[name='product_name_frrom_client']").attr("id")
var category_searched_name =$("input[name='category_name_frrom_client']").attr("id")



// set_rating_stars_for_counter7="<div style='float:'left;'><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled> </a> </div></label><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label></div>"
// set_rating_stars_for_counter6="<div style='float:'left;'><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled> </a> </div></label><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label></div>"
// set_rating_stars_for_counter5="<div style='float:'left;'><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled> </a> </div></label><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label></div>"
// set_rating_stars_for_counter4="<div style='float:'left;'><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled> </a> </div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a>/div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label></div>"
// set_rating_stars_for_counter3="<div style='float:'left;'><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled> </a> </div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label></div>"
// set_rating_stars_for_counter2="<div style='float:'left;'><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled> </a> </div></label><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label></div>"
// set_rating_stars_for_counter1="<div style='float:'left;'><label><div  class='gold' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled> </a> </div></label></div>"
// set_rating_stars_for_counter0="<div style='float:'left;'><label><div  class='silver' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled> </a> </div></label><label><div  class='silver' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='silver' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div  class='silver' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden'  disabled></a> </a></div></label><label><div   class='silver' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='silver' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label><label><div   class='silver' style='float: left;'><a href='#' style='display:block; height:100%; width:100%; text-decoration:none;'><input  type='radio'  style='visibility:hidden' disabled></a></div></label></div>"






filter_by_data={
    filter_by_price:"",
    filter_by_color:"",
    filter_by_size:"",
    sorting_technique:"",
    viewing_nummber:"",
    product_name:"",
    category_name:"",
    page_number:"",
    set set_filter_by_price(price){
        this.filter_by_price=price
    },

    set set_filter_by_color(color){
        this.filter_by_color=color;
    },
    set set_filter_by_size(size){
        this.filter_by_size=size;
    },
    set set_sorting_technique(technique){
        this.sorting_technique=technique;
    },
    
    set set_viewing_nummber(number){
        this.viewing_nummber=number;
    },


    set set_product_name(prod_name){
        this.product_name=prod_name;
    },
    set set_category_name(cat_name){
        this.category_name=cat_name;
    },
    set set_page_number(pg_name){
        this.page_number=pg_name;
    },

    get get_filter_by_price() {
        return this.filter_by_price;
    },
    get get_filter_by_color() {
        return this.filter_by_color;
    },

    get get_filter_by_size() {
        return this.filter_by_size;
    },
    get get_sorting_technique() {
        return this.sorting_technique;
    },
    get get_viewing_nummber() {
        return this.viewing_nummber;
    },
    get get_product_name() {
        return this.product_name;
    },

    get get_category_name() {
        return this.category_name;
    },
    get get_page_number() {
        return this.page_number;
    },



    }
    // alert("Prod data "+product_name_id+"hhh")
    // alert("Cate data "+category_searched_name)
    
    filter_by_data.set_product_name=product_name_id;
    filter_by_data.set_category_name=category_searched_name;

        
    $('button[name="number_of_this_page"]').on("click",function(){
        // alert()
        filter_by_data.set_page_number=$(this).html()
    })



    $('#latest_products,#latest_popularity,#latest_best_rating').on('click', function(e){
        e.preventDefault()
        sorting_by_latest_products=document.getElementById("latest_products")
        sorting_by_latest_popularity=document.getElementById("latest_popularity")
        sorting_latest_best_rating=document.getElementById("latest_best_rating")

        if(sorting_by_latest_products==this){
            filter_by_data.set_sorting_technique=$(this).text()
        }
        else if(sorting_by_latest_popularity==this){
            filter_by_data.set_sorting_technique=$(this).text()
        }
        else if(sorting_latest_best_rating==this){
            filter_by_data.set_sorting_technique=$(this).text()
        
        
        }
        }),

    $('#showing_ten,#showing_twenty,#showing_thirty').on('click', function(e){
        e.preventDefault()
        viewing_showing_ten=document.getElementById("showing_ten")
        viewing_showing_twenty=document.getElementById("showing_twenty")
        viewing_showing_thirty=document.getElementById("showing_thirty")

        if(viewing_showing_ten==this){
            filter_by_data.set_viewing_nummber=$(this).text()
        }
        else if(viewing_showing_twenty==this){
            filter_by_data.set_viewing_nummber=$(this).text()
        }
        else if(viewing_showing_thirty==this){
            filter_by_data.set_viewing_nummber=$(this).text()
        }



    }),
    


    $('#price_all,#price_1,#price_2,#price_3,#price_4,#price_5').on("click",function(){
        
        price_all_isChecked=document.getElementById("price_all")
        
        price_1_isChecked=document.getElementById("price_1")
        
        price_2_isChecked=document.getElementById("price_2")
        
        price_3_isChecked=document.getElementById("price_3")
        
        price_4_isChecked=document.getElementById("price_4")
        
        price_5_isChecked=document.getElementById("price_5")

        if(price_all_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_price=$("label[for='"+idVal+"']").text()

        }
        if(price_1_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_price=$("label[for='"+idVal+"']").text()

        }
        if(price_2_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_price=$("label[for='"+idVal+"']").text()

        }
        if(price_3_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_price=$("label[for='"+idVal+"']").text()
        }
        if(price_4_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_price=$("label[for='"+idVal+"']").text()

        }
        if(price_5_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_price=$("label[for='"+idVal+"']").text()

        }
    
    }),


    // filter by color 


    $('#color_all,#color_1,#color_2,#color_3,#color_4,#color_5').on("click",function(){
        
        color_all_isChecked=document.getElementById("color_all")
        
        color_1_isChecked=document.getElementById("color_1")
        
        color_2_isChecked=document.getElementById("color_2")
        
        color_3_isChecked=document.getElementById("color_3")
        
        color_4_isChecked=document.getElementById("color_4")
        
        color_5_isChecked=document.getElementById("color_5")

        if(color_all_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_color=$("label[for='"+idVal+"']").text()
        }
        if(color_1_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_color=$("label[for='"+idVal+"']").text()
        }
        if(color_2_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_color=$("label[for='"+idVal+"']").text()
        }
        if(color_3_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_color=$("label[for='"+idVal+"']").text()
        }
        if(color_4_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_color=$("label[for='"+idVal+"']").text()
        }
        if(color_5_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_color=$("label[for='"+idVal+"']").text()
        }
    
    }

    ),
    // filter by size
    $('#size_all,#size_1,#size_2,#size_3,#size_4,#size_5,#size_6,#size_7').on("click",function(){
        
        size_all_isChecked=document.getElementById("size_all")
        
        size_1_isChecked=document.getElementById("size_1")
        
        size_2_isChecked=document.getElementById("size_2")
        
        size_3_isChecked=document.getElementById("size_3")
        
        size_4_isChecked=document.getElementById("size_4")
        
        size_5_isChecked=document.getElementById("size_5")
        
        size_6_isChecked=document.getElementById("size_6")

        size_7_isChecked=document.getElementById("size_7")

        if(size_all_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_size=$("label[for='"+idVal+"']").text() 
               }
        if(size_1_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_size=$("label[for='"+idVal+"']").text()
                }
        if(size_2_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_size=$("label[for='"+idVal+"']").text() 
               }
        if(size_3_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_size=$("label[for='"+idVal+"']").text() 
               }
        if(size_4_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_size=$("label[for='"+idVal+"']").text()  
              }
        if(size_5_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_size=$("label[for='"+idVal+"']").text()
             }
        if(size_6_isChecked==this){
        var idVal = $(this).attr("id");
        filter_by_data.set_filter_by_size=$("label[for='"+idVal+"']").text()
            }
        if(size_7_isChecked==this){
            var idVal = $(this).attr("id");
            filter_by_data.set_filter_by_size=$("label[for='"+idVal+"']").text()
        }
    
    })

   

// setInterval(function(){
    $('#latest_products,#latest_popularity,#latest_best_rating,#showing_ten,#showing_twenty,#showing_thirty,#price_all,#price_1,#price_2,#price_3,#price_4,#price_5,#color_all,#color_1,#color_2,#color_3,#color_4,#color_5,#size_all,#size_1,#size_2,#size_3,#size_4,#size_5,#size_6,#size_7,button[name="number_of_this_page"]').on("click",function(){
    

        
        $.ajax({
        type :"POST",
        url : "show_sort",
        data:{
            get_filter_by_price: filter_by_data.get_filter_by_price,
            get_filter_by_color: filter_by_data.get_filter_by_color,
            get_filter_by_size: filter_by_data.get_filter_by_size,
            get_sorting_technique: filter_by_data.get_sorting_technique,
            get_number_of_showing: filter_by_data.get_viewing_nummber,
            category_name_from_client : filter_by_data.get_category_name,
            p_name : filter_by_data.get_product_name,
            page_number:filter_by_data.get_page_number
            
        },
        headers:{
            // 'X-CSRFToken': $("#my_token").val(),
  
    
        },
        
    success:function(res){
        var data=""
        for(var i in res){
            var text=$("#my_token").val()
            $("#Data_Appears").empty()
            
            if(res[i].Number_of_review==7 ){
                function my_func(){
                    $("#alert_message").html("<div class='alert alert-success' role='alert'>Successful Filter !</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
                    setTimeout(clear_my_func,4000)
                    set_rating_stars_for_counter7='<div class="links"  style="float:left width="500px;height:200px;"><div class="wrapper" style="float:left"> <div class="popup" style="float:left; position:relative; ">     <iframe style="width:375px"  name="iframe_name'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" ></iframe>      </div></div><form   style="float:left" id="stars_form" action="star" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>        <button name="'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" class="btn_prog" type="submit" style="float:left; border-color:transparent; background-color:transparent;"></input><div style="float:left;">         <label><div style="float:left;"><label> <div class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label><label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label></div></button></form></div>'
                    console.log(set_rating_stars_for_counter7)
                    data+='<div class="card-group" style="float: left;"><div class="card" style="width: 400px; height: 150;" ><div style="width: 100%; height: min-content;  " class="zoom" >                <form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>                <button type="submit" style="border: transparent;; width: 100%; height:300px; border-color: transparent; background: transparent; background-color:transparent ; ">                <img class="card-img-top" src=/media/'+res[i].img+' style="width: 100%; height:300px; " alt="Card image cap">               </button>                </form>                        </div><div class="card-body" style="height:75px;"><h5 class="card-title">'+ String(res[i].product_name) + '</h5><h6 class="card-title" style="float:left"> <b>Price</b> <b style="color: yellowgreen;">' + String(res[i].price)+ '  '+ String(res[i].currency) +'</b></h6>'+   set_rating_stars_for_counter7  +'</div> <div class="card-body">'+String(res[i].brief_description) +'</div><div class="card-body"><div style="border: 1px; "><div style="display: inline-block;"><button type="button" class="btn btn-outline-primary">Add to Cart</button></div><div style="display: inline-block; border: 1px"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/><button type="submit" class="btn btn-outline-warning">View Product</button></form></div></div></div><div class="card-footer"><small class="text-muted">Added on "'+String(res[i].time_Added)+'</small></div></div></div><div style="width: 5px;"></div>'

            }
            else if(res[i].Number_of_review==6){

        
                function my_func(){
                    $("#alert_message").html("<div class='alert alert-success' role='alert'>Successful Filter !</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
    
                    setTimeout(clear_my_func,4000)

                    set_rating_stars_for_counter6='<div class="links"  style="float:left width="500px;height:200px;"><div class="wrapper" style="float:left"> <div class="popup" style="float:left; position:relative; ">     <iframe style="width:375px" name="iframe_name'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" ></iframe>      </div></div><form   style="float:left" id="stars_form" action="star" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>        <button name="'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" class="btn_prog" type="submit" style="float:left; border-color:transparent; background-color:transparent;"></input><div style="float:left;">   <label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label><label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label></div></button></form></div>'

            data+='<div class="card-group" style="float: left;"><div class="card" style="width: 400px; height: 150;" ><div style="width: 100%; height: min-content;  " class="zoom"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>               <button type="submit" style="border: transparent;; width: 100%; height:300px; border-color: transparent; background: transparent; background-color:transparent ; ">                <img class="card-img-top" src=/media/'+res[i].img+' style="width: 100%; height:300px; " alt="Card image cap">                    </button>                   </form>                </div><div class="card-body" style="height:75px;"><h5 class="card-title">'+ String(res[i].product_name) + '</h5><h6 class="card-title" style="float:left"> <b>Price</b> <b style="color: yellowgreen;">' + String(res[i].price)+ '  '+ String(res[i].currency)+'</b></h6>'+   set_rating_stars_for_counter6 +'</div> <div class="card-body">'+String(res[i].brief_description) +'</div><div class="card-body"><div style="border: 1px; "><div style="display: inline-block;"><button type="button" class="btn btn-outline-primary">Add to Cart</button></div><div style="display: inline-block; border: 1px"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/><button type="submit" class="btn btn-outline-warning">View Product</button></form></div></div></div><div class="card-footer"><small class="text-muted">Added on "'+String(res[i].time_Added)+'</small></div></div></div><div style="width: 5px;"></div>'
            
            }
            else if(res[i].Number_of_review==5 ){
                
        
                function my_func(){
                    $("#alert_message").html("<div class='alert alert-success' role='alert'>Successful Filter !</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
    
                    setTimeout(clear_my_func,4000)



                
                
                    set_rating_stars_for_counter5='<div class="links"  style="float:left width="500px;height:200px;"><div class="wrapper" style="float:left"> <div class="popup" style="float:left; position:relative; ">     <iframe  style="width:375px" name="iframe_name'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" ></iframe>      </div></div><form  style="float:left" id="stars_form" action="star" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>        <button name="'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" class="btn_prog" type="submit" style="float:left; border-color:transparent; background-color:transparent;"> </input><div style="float:"left;">   <label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label><label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label></div></button></form></div>'

                
                
                data+='<div class="card-group" style="float: left;"><div class="card" style="width: 400px; height: 150;" ><div style="width: 100%; height: min-content;  " class="zoom"> <form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>   <button type="submit" style="border: transparent;; width: 100%; height:300px; border-color: transparent; background: transparent; background-color:transparent ; "> <img class="card-img-top" src=/media/'+res[i].img+' style="width: 100%; height:300px; " alt="Card image cap">    </button>                    </form>                    </div><div class="card-body" style="height:75px;"><h5 class="card-title">'+ String(res[i].product_name) + '</h5><h6 class="card-title" style="float:left"> <b>Price</b> <b style="color: yellowgreen;">' + String(res[i].price)+ '  '+ String(res[i].currency) +'</b></h6>'+    set_rating_stars_for_counter5  +'</div> <div class="card-body">'+String(res[i].brief_description) +'</div><div class="card-body"><div style="border: 1px; "><div style="display: inline-block;"><button type="button" class="btn btn-outline-primary">Add to Cart</button></div><div style="display: inline-block; border: 1px"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/><button type="submit" class="btn btn-outline-warning">View Product</button></form></div></div></div><div class="card-footer"><small class="text-muted">Added on "'+String(res[i].time_Added)+'</small></div></div></div><div style="width: 5px;"></div>'
                
                }

            else if(res[i].Number_of_review==4){

        
                function my_func(){
                    $("#alert_message").html("<div class='alert alert-success' role='alert'>Successful Filter !</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
    
                    setTimeout(clear_my_func,4000)
                    set_rating_stars_for_counter4='<div class="links"  style="float:left width="500px;height:200px;"><div class="wrapper" style="float:left"> <div class="popup" style="float:left; position:relative; ">     <iframe style="width:375px"  name="iframe_name'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" ></iframe>      </div></div><form   style="float:left" id="stars_form" action="star" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>        <button name="'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" class="btn_prog" type="submit" style="float:left; border-color:transparent; background-color:transparent;"> </input><div style="float:"left;">   <label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label></div></button></form></div>'

            data+='<div class="card-group" style="float: left;"><div class="card" style="width: 400px; height: 150;" ><div style="width: 100%; height: min-content;  " class="zoom">             <form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>            <button type="submit" style="border: transparent;; width: 100%; height:300px; border-color: transparent; background: transparent; background-color:transparent ; ">            <img class="card-img-top" src=/media/'+res[i].img+' style="width: 100%; height:300px; " alt="Card image cap">                </button>                </form>                   </div><div class="card-body" style="height:75px;"><h5 class="card-title">'+ String(res[i].product_name) + '</h5><h6 class="card-title" style="float:left"> <b>Price</b> <b style="color: yellowgreen;">' + String(res[i].price)+ '  '+ String(res[i].currency) +'</b></h6>'+     set_rating_stars_for_counter4      +'</div> <div class="card-body">'+String(res[i].brief_description) +'</div><div class="card-body"><div style="border: 1px; "><div style="display: inline-block;"><button type="button" class="btn btn-outline-primary">Add to Cart</button></div><div style="display: inline-block; border: 1px"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/><button type="submit" class="btn btn-outline-warning">View Product</button></form></div></div></div><div class="card-footer"><small class="text-muted">Added on "'+String(res[i].time_Added)+'</small></div></div></div><div style="width: 5px;"></div>'

            }
            else if(res[i].Number_of_review==3 ){
        
                function my_func(){
                    $("#alert_message").html("<div class='alert alert-success' role='alert'>Successful Filter !</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
    
                    setTimeout(clear_my_func,4000)

                    set_rating_stars_for_counter3='<div class="links"  style="float:left width="500px;height:200px;"><div class="wrapper" style="float:left"> <div class="popup" style="float:left; position:relative; ">     <iframe style="width:375px"  name="iframe_name'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" ></iframe>      </div></div><form    style="float:left" id="stars_form" action="star" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>        <button name="'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" class="btn_prog" type="submit" style="float:left; border-color:transparent; background-color:transparent;"> </input><div style="float:left;">          <label><div style="float:left;"><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label></div></button></form></div>'


                data+='<div class="card-group" style="float: left;"><div class="card" style="width: 400px; height: 150;" ><div style="width: 100%; height: min-content;  " class="zoom" >                <form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>                <button type="submit" style="border: transparent;; width: 100%; height:300px; border-color: transparent; background: transparent; background-color:transparent ; ">                <img class="card-img-top" src=/media/'+res[i].img+' style="width: 100%; height:300px; " alt="Card image cap">                    </button>                    </form>                        </div><div class="card-body" style="height:75px;"><h5 class="card-title">'+ String(res[i].product_name) + '</h5><h6 class="card-title" style="float:left"> <b>Price</b> <b style="color: yellowgreen;">' + String(res[i].price)+ '  '+ String(res[i].currency) +'</b></h6>'+     set_rating_stars_for_counter3      +'</div> <div class="card-body">'+String(res[i].brief_description) +'</div><div class="card-body"><div style="border: 1px; "><div style="display: inline-block;"><button type="button" class="btn btn-outline-primary">Add to Cart</button></div><div style="display: inline-block; border: 1px"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/><button type="submit" class="btn btn-outline-warning">View Product</button></form></div></div></div><div class="card-footer"><small class="text-muted">Added on "'+String(res[i].time_Added)+'</small></div></div></div><div style="width: 5px;"></div>'
    
            }
            else if(res[i].Number_of_review==2){
        
                function my_func(){
                    $("#alert_message").html("<div class='alert alert-success' role='alert'>Successful Filter !</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
    
                    setTimeout(clear_my_func,4000)

                    set_rating_stars_for_counter2='<div class="links"  style="float:left width="500px;height:200px;"><div class="wrapper" style="float:left"> <div class="popup" style="float:left; position:relative; ">     <iframe style="width:375px"  name="iframe_name'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" ></iframe>      </div></div><form   style="float:left" id="stars_form" action="star" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>        <button name="'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" class="btn_prog" type="submit" style="float:left; border-color:transparent; background-color:transparent;"> </input><div style="float:"left;">   <label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label><label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label></div></button></form></div>'


                data+='<div class="card-group" style="float: left;"><div class="card" style="width: 400px; height: 150;" ><div style="width: 100%; height: min-content;  " class="zoom">                <form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>                <button type="submit" style="border: transparent;; width: 100%; height:300px; border-color: transparent; background: transparent; background-color:transparent ; ">              <img class="card-img-top" src=/media/'+res[i].img+' style="width: 100%; height:300px; " alt="Card image cap">                  </button>                    </form>                       </div><div class="card-body" style="height:75px;"><h5 class="card-title">'+ String(res[i].product_name) + '</h5><h6 class="card-title" style="float:left"> <b>Price</b> <b style="color: yellowgreen;">' + String(res[i].price)+ '  '+ String(res[i].currency) +'</b></h6>'+     set_rating_stars_for_counter2      +'</div> <div class="card-body">'+String(res[i].brief_description) +'</div><div class="card-body"><div style="border: 1px; "><div style="display: inline-block;"><button type="button" class="btn btn-outline-primary">Add to Cart</button></div><div style="display: inline-block; border: 1px"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/><button type="submit" class="btn btn-outline-warning">View Product</button></form></div></div></div><div class="card-footer"><small class="text-muted">Added on "'+String(res[i].time_Added)+'</small></div></div></div><div style="width: 5px;"></div>'
    
            }
            else if(res[i].Number_of_review==1){

                function my_func(){
                    $("#alert_message").html("<div class='alert alert-success' role='alert'>Successful Filter !</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
    
                    setTimeout(clear_my_func,4000)
                    set_rating_stars_for_counter1='<div class="links"  style="float:left width="500px;height:200px;"><div class="wrapper" style="float:left"> <div class="popup" style="float:left; position:relative; ">     <iframe style="width:375px"  name="iframe_name'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" ></iframe>      </div></div><form   style="float:left" id="stars_form" action="star" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>        <button name="'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" class="btn_prog" type="submit" style="float:left; border-color:transparent; background-color:transparent;"> </input><div style="float:"left;">   <label><div  class="gold" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label></div></button></form></div>'

                data+='<div class="card-group" style="float: left;"><div class="card" style="width: 400px; height: 150;" ><div style="width: 100%; height: min-content;  " class="zoom"> <form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>                <button type="submit" style="border: transparent;; width: 100%; height:300px; border-color: transparent; background: transparent; background-color:transparent ; ">                <img class="card-img-top" src=/media/'+res[i].img+' style="width: 100%; height:300px; " alt="Card image cap">                    </button>                    </form> </div><div class="card-body" style="height:75px;"><h5 class="card-title">'+ String(res[i].product_name) + '</h5><h6 class="card-title" style="float:left"> <b>Price</b> <b style="color: yellowgreen;">' + String(res[i].price)+ '  '+ String(res[i].currency) +'</b></h6>'+     set_rating_stars_for_counter1      +'</div> <div class="card-body">'+String(res[i].brief_description) +'</div><div class="card-body"><div style="border: 1px; "><div style="display: inline-block;"><button type="button" class="btn btn-outline-primary">Add to Cart</button></div><div style="display: inline-block; border: 1px"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/><button type="submit" class="btn btn-outline-warning">View Product</button></form></div></div></div><div class="card-footer"><small class="text-muted">Added on "'+String(res[i].time_Added)+'</small></div></div></div><div style="width: 5px;"></div>'
    
            }
            
            else if(res[i].Number_of_review==0){
        


                function my_func(){
                    $("#alert_message").html("<div class='alert alert-success' role='alert'>Successful Filter !</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
    
                    setTimeout(clear_my_func,4000)
                    set_rating_stars_for_counter0='<div class="links"  style="float:left width="500px;height:200px;"><div class="wrapper" style="float:left"> <div class="popup" style="float:left; position:relative; ">     <iframe style="width:375px"  name="iframe_name'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" ></iframe>      </div></div><form    style="float:left" id="stars_form" action="star" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>        <button name="'+'****'+String(res[i].category_name_id)+'----'+String(res[i].child_category)+'++++'+String(res[i].product_name)+'===='+'" class="btn_prog" type="submit" style="float:left; border-color:transparent; background-color:transparent;"> </input><div style="float:"left;">   <label><div  class="silver" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label><label><div  class="silver" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="silver" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div  class="silver" style="float: left;"><input  type="radio"  style="visibility:hidden"  disabled></div></label><label><div   class="silver" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="silver" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label><label><div   class="silver" style="float: left;"><input  type="radio"  style="visibility:hidden" disabled></div></label></div></button></form></div>'

                data+='<div class="card-group" style="float: left;"><div class="card" style="width: 400px; height: 150;" ><div style="width: 100%; height: min-content;  " class="zoom">                <form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/>                <button type="submit" style="border: transparent;; width: 100%; height:300px; border-color: transparent; background: transparent; background-color:transparent ; ">                <img class="card-img-top" src=/media/'+res[i].img+' style="width: 100%; height:300px; " alt="Card image cap">                    </button>                    </form>                    </div><div class="card-body" style="height:75px;"><h5 class="card-title">'+ String(res[i].product_name) + '</h5><h6 class="card-title" style="float:left"> <b>Price</b> <b style="color: yellowgreen;">' + String(res[i].price)+ '  '+ String(res[i].currency) +'</b></h6>'+     set_rating_stars_for_counter0      +'</div> <div class="card-body">'+String(res[i].brief_description) +'</div><div class="card-body"><div style="border: 1px; "><div style="display: inline-block;"><button type="button" class="btn btn-outline-primary">Add to Cart</button></div><div style="display: inline-block; border: 1px"><form action="detail" method="POST">  <input name="csrfmiddlewaretoken" value="'+  String(text)   +'" hidden><input type="hidden" value="'+String(res[i].product_name) +'" name="view_product_name" /><input type="hidden" value="'+String(res[i].category_name_id)+'" name="view_product_category"/><input type="hidden" value="'+String(res[i].child_category)+'" name="view_child_category"/><button type="submit" class="btn btn-outline-warning">View Product</button></form></div></div></div><div class="card-footer"><small class="text-muted">Added on "'+String(res[i].time_Added)+'</small></div></div></div><div style="width: 5px;"></div>'



            }else if("Search Field is Empty Please Search For Product At First"){

                function my_func(){
                    $("#alert_message").html("<div class='alert alert-danger' role='alert'>"+"Please Search for a Product First"+"</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#alert_message").empty()
                    }
    
                    setTimeout(clear_my_func,4000)


            }
            
            
            
            console.log(res[i])
            console.log(res[i].product_name)
            console.log(res[i].category_name_id)
            console.log(res[i].child_category)

        }
        $("#Data_Appears").html(data)
        // alert($("#my_btn").text())

        



        //  var elements = document.getElementsByClassName("ptn_prog");
        // for(var i=0; i<elements.length; i++) {
        //     alert(elements.)
        // }


        var btn = document.querySelectorAll('.btn_prog')
        const arr=[]
        for(var i=0; i<btn.length; i++){
        arr.push({
            key:'button[name="'+btn[i].name.toString()+'"]',
            value:'iframe[name="iframe_name'+btn[i].name.toString()+'"]'
        })
    }

    for (const [key, value] of Object.entries(arr)) {
        
        // alert(arr[key].key);

         $(value.value.toString()).hide();
         console.log(value.value.toString())

        $(arr[key].key).mouseenter(function (d) {
            d.preventDefault();
            //  $('#stars_form').submit();

            var data = new FormData();
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "star",true);
            
            str =value.value.toString().replace('iframe[name="',"").replace('"]',"").toString()

            var first_cat = str.substring(
                str.indexOf("****"), 
                str.lastIndexOf("----")
            ).replace("****","");
            
            
             
            var second_child = str.substring(
                str.indexOf("----"), 
                str.lastIndexOf("++++")
            ).replace("----","" );
            
            var third_prod_name = str.substring(
                str.indexOf("++++"), 
                str.lastIndexOf("====")
            ).replace("++++","" );
            console.log("first_cat "+first_cat)
            console.log("second_child "+second_child)
            console.log("third_prod_name "+third_prod_name)





            data.append('view_product_category', first_cat);
            data.append('view_child_category', second_child);
            data.append('view_product_name', third_prod_name);

            xhr.send(data);
            console.log(value.value.toString().replace('iframe[name="',"").replace('"]',"").toString())
            xhr.onload = function () {

                // Process our return data
                if (xhr.status >= 200 && xhr.status < 300) {
                    console.log(xhr.responseText);
                    console.log(value.value.toString().replace('iframe[name="',"").replace('"]',"").toString())
                    iframe=document.getElementsByName(value.value.toString().replace('iframe[name="',"").replace('"]',"").toString())[0]
                    iframe.contentWindow.document.open();
                    iframe.contentWindow.document.write(xhr.responseText);
                    iframe.contentWindow.document.close();
                    // $(value.value.toString()).attr("srcdoc",xhr.responseText)

                } else {
                    // Runs when it's not
                    // console.log(xhr.responseText);
                }
            
            };


            
        
        $(arr[key].key).fadeOut('slow');
         $(value.value.toString()).fadeIn('slow');
        
        
        });
    
        $(value.value.toString()).mouseleave(function () {
            
            $(value.value.toString()).fadeOut('slow');
            $(arr[key].key).fadeIn('slow');
           
    
                
        });


        }

}
    ,error:function(res){
        // alert("Failed "+res.status)
    }
})})})