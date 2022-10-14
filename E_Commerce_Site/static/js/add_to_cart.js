function adjustPopover(popover, iframe,res) {
    var height = iframe.contentWindow.document.body.scrollHeight + 'px';
    popoverContent = $(popover).next('.popover-content');
    iframe.style.height=height;
    popoverContent.css('height', height);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(res);
    iframe.contentWindow.document.close();
    iframe.style.height="200px";
    console.log(iframe)
    console.log("vksjdbvnjkdns")
    console.log("jnkjnn")
    console.log("sancjknskjajncksa")
    console.log("dsnvijkdnsjlndskljvnsdjknj")

}



$(document).ready(function() {




  
    $("#add_to_cart").click(function(e){
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
                        

                        if(products_count!=0){
                            $("#products_in_card").attr("class","word")
                            $("#products_in_card").attr("hidden",false)
                            $("#products_in_card").html(products_count)

                        }else{
                            $("#products_in_card").attr("class","")
                            $("#products_in_card").attr("hidden",true);
                        }
                        var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList

                        myDefaultWhiteList.iframe = ['style','onload',"contentWindow"]

                        $('#my_btn_iframe').popover({ 

                            title : 'My Checkout',
                            html : true,
                            placement : "bottom",
                            content: function() {
                            html=response.data.toString()
                                console.log(html)
                                return "<iframe style='border:none' onload='adjustPopover(&quot;.pop-bottom&quot; , this , html )'></iframe>";    
                               
                             }
                         })

                      }, (error) => {
                        console.log(error);
                      });


            
                    }}}
                    )})