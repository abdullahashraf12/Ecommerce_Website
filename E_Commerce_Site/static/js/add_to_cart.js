function adjustPopover(popover, iframe,res) {

    iframe.style.width="480px";
    iframe.style.height="250px";
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(res);
    iframe.contentWindow.document.close();
    console.log("add to card")
    console.log("add to card")
    console.log("add to card")
    console.log("add to card")
}


    


$(document).ready(function() {




    setInterval(function(){

        data_to_cart={
        
            url_html:"",
     
            set set_url_html(html){
                this.url_html=html
            },
            get get_url_html() {
                return this.url_html;
    
            
        }
    }




    
axios.get('get_from_cart')
                  .then((response) => {
                    products_count = $($.parseHTML(response.data)).filter("#products_count").html();
                    data_to_cart.set_url_html=response.data

                    if(products_count!=0){
                        $("#products_in_card").attr("class","word")
                        $("#products_in_card").attr("hidden",false)
                        $("#products_in_card").html(products_count)
                        $("#my_btn_iframe").attr("disabled", false);

                        // $("#my_btn_iframe").popover('show')



                    }else{
                        $("#products_in_card").attr("class","")
                        $("#products_in_card").attr("hidden",true);
                        $("#my_btn_iframe").attr("disabled", true);
                        $("#my_btn_iframe").popover('hide')


                    }

                }).catch((error) => {
                                console.log(error);
                                }
                        )
                            
                            
        
                    $('#my_btn_iframe').popover({ 
                        
                        title : 'My Checkout',
                        html : true,
                        placement : "bottom",
                        container: 'body',
                        
            content: function() {
                var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList
                myDefaultWhiteList.iframe = ['style','src','id','onload',"contentWindow","class","width","height","contentDocument"]

                // html=response.data
                console.log(data_to_cart.get_url_html)
             
             
             
             
             
//                 // document.getElementById('my_iframe').contentDocument.location.reload(true);

             
             
             
             
                return "<iframe id='my_iframe' style='border:none;'  class='popover' onload='adjustPopover(&quot;.pop-bottom&quot; , this , data_to_cart.get_url_html )'></iframe>";    

                   }}
                   )

              
                

            },500)



    $("#add_to_cart").on("click",function(e){
        e.preventDefault();
        var form=document.getElementById("quan_f");
        csrftoken = form.getElementsByTagName("input")[0].value; 
        data_to_cart={
            glob_cate:"",
            child_cat:"",
            product_name:"",
            sizes:"",
            color:"",
            account:"",
            url_html:"",
            set set_glob_cate(glob_cate_n){
                this.glob_cate=glob_cate_n
            },
            set set_child_cat(child_cat_n){
                this.child_cat=child_cat_n
            },
            set set_product_name(product_name_n){
                this.product_name=product_name_n
            },
            set set_sizes(sizes_n){
                this.sizes=sizes_n
            },
            set set_color(color_n){
                this.color=color_n
            },
            set set_account(account_n){
                this.account=account_n
            },
            
            set set_url_html(html){
                this.url_html=html
            },
            get get_url_html() {
                return this.url_html;
            },
            get get_glob_cate() {
                return this.glob_cate;
            },
            get get_child_cat() {
                return this.child_cat;
            },
              get get_product_name() {
                return this.product_name;
            },
              get get_sizes() {
                return this.sizes;
            },
              get get_color() {
                return this.color;
            },
              get get_account() {
                return this.account;
            },
            
        };
        
        if($("#account").attr("name") == null){
            alert("true acc is null ")
        }else{

           

            var checkboxes_color = [];
            $('#checkboxes_colors input:checked').each(function() {
                checkboxes_color.push($(this).attr('name'));
            });
            var checkboxes_sizes = [];
            
            $('#checkboxes_sizes input:checked').each(function() {
                checkboxes_sizes.push($(this).attr('name'));
            });

            alert(checkboxes_color)
            alert(checkboxes_sizes)

            if(checkboxes_sizes=="" && $('#checkboxes_sizes').length > 0){
                function my_func(){
                    $("#message_Add_to_cart").html("<div class='alert alert-danger' role='alert'>Please Check At Least 1 Size To Order :(</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#message_Add_to_cart").empty()
                    }
                    setTimeout(clear_my_func,4000)

            }
            else if(checkboxes_color=="" && $('#checkboxes_colors').length > 0){
                function my_func(){
                    $("#message_Add_to_cart").html("<div class='alert alert-danger' role='alert'>Please Check At Least 1 Color To Order :(</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#message_Add_to_cart").empty()
                    }
                    setTimeout(clear_my_func,4000)
            }else{
                function my_func(){
                    $("#message_Add_to_cart").html("<div class='alert alert-success' role='alert'>Added Successfully! :)</div>")
    
                    }
                    my_func()
    
    
                    function clear_my_func(){
                        $("#message_Add_to_cart").empty()
                    }
                    setTimeout(clear_my_func,4000)
                 





                    var data = new FormData();
                    data.append("cat_name",$("#category_name_global").html())
                    data.append("child_name",$("#child_name_global").html())
                    data.append("prod_name",$("#prod_name_global").html())
                    data.append("size",checkboxes_sizes.toString())
                    data.append("color",checkboxes_color.toString())
                    data.append("price",$("#price").attr("name"))
                    data.append("account",$("#account").attr("name"))
                    data.append("quantity",$("#quan").val())

                const options = {
                    headers: {"X-CSRFToken" :csrftoken}
                  };

                axios.post('add_to_cart',data,options)
                  .then((response) => {
                    products_count = $($.parseHTML(response.data)).filter("#products_count").html();
                    data_to_cart.set_url_html=response.data

                    if(products_count!=0){
                        $("#products_in_card").attr("class","word")
                        $("#products_in_card").attr("hidden",false)
                        $("#products_in_card").html(products_count)
                        document.getElementById('my_iframe').contentWindow.location.reload();
                        
                    }else{
                        $("#products_in_card").attr("class","")
                        $("#products_in_card").attr("hidden",true);
                        
                    }

                    $('#my_btn_iframe').popover({ 
                        
                        title : 'My Checkout',
                        html : true,
                        placement : "bottom",
                        container: 'body',
                        
            content: function() {
                var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList
                myDefaultWhiteList.iframe = ['style','src','id','onload',"contentWindow","class","width","height"]

                //  html=response.data.toString()
                console.log(data_to_cart.get_url_html)
                return "<iframe id='my_iframe' style='border:none;'  class='popover' onload='adjustPopover(&quot;.pop-bottom&quot; , this , data_to_cart.get_url_html )'></iframe>";    

                   }})

              
                }).catch(
                (error) => {
                        console.log(error);
                     }
                )
                    }}})
                })