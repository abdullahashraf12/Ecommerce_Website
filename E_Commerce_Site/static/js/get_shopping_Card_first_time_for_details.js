function adjustPopover_1(popover, iframe,res) {
    iframe.style.width="400px";
    iframe.style.height="250px";
    iframe.contentWindow.document.open();
    console.log("1 st time only")
    console.log(res)
    iframe.contentWindow.document.write(res);
    iframe.contentWindow.document.close();
    console.log("1 st time only")

}




data_to_cart={

    url_html:"",
    set set_url_html(html){
        this.url_html=html
    },
    get get_url_html() {
        return this.url_html;
    }
    
};



$(document).ready(function(e){
    const sendGetRequest = async () => {

 await axios.get('get_from_cart')
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

                 html=response.data
                console.log(data_to_cart.get_url_html)
                return "<iframe id='my_iframe' style='border:none;'  class='popover' onload='adjustPopover_1(&quot;.pop-bottom&quot; , this , data_to_cart.get_url_html )'></iframe>";    

                   }})

              
                }).catch(
                (error) => {
                        console.log(error);
                     }
                )
                    
            
            
            }


            sendGetRequest();
            })