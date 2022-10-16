// setInterval(function (){
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

axios.post('get_from_cart')
          .then((response) => {
            products_count = $($.parseHTML(response.data)).filter("#products_count").html();
            data_to_cart.set_url_html=response.data

            if(products_count!=0){
                $("#products_in_card").attr("class","word")
                $("#products_in_card").attr("hidden",false)
                $("#products_in_card").html(products_count)
                $("#my_btn_iframe").attr("disabled", false);


            }else{
                $("#products_in_card").attr("class","")
                $("#products_in_card").attr("hidden",true);
                $("#my_btn_iframe").attr("disabled", true);
            }

            $('#my_btn_iframe').popover({ 
                
                title : 'My Checkout',
                html : true,
                placement : "bottom",
                container: 'body',
                
    content: function() {
        var myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList
        myDefaultWhiteList.iframe = ['style','src','id','onload',"contentWindow","class","width","height"]
        console.log(response.data.toString())

         html=response.data.toString()
        console.log(data_to_cart.get_url_html)
        return "<iframe id='my_iframe' style='border:none;'  class='popover' onload='adjustPopover(&quot;.pop-bottom&quot; , this , data_to_cart.get_url_html )'></iframe>";    

           }})

      
        }).catch(
        (error) => {
                console.log(error);
             }
        )
// }, 400);