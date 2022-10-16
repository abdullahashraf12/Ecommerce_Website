function adjustPopover(popover, iframe,res) {
    var height = (Number.parseInt(iframe.contentWindow.document.body.scrollHeight)+100).toString() + 'px';
    var width=(Number.parseInt(iframe.contentWindow.document.body.scrollWidth)+100).toString() + 'px';
    iframe.style.width=width;
    iframe.style.height=height;
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(res);
    iframe.contentWindow.document.close();
    console.log(iframe)
    console.log(height)
    console.log(width)
    console.log("sancjknskjajncksa")
    console.log("dsnvijkdnsjlndskljvnsdjknj")

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


setInterval(function (){
            data_to_cart={
        
            url_html:"",
     
            set set_url_html(html){
                this.url_html=html
            },
            get get_url_html() {
                return this.url_html;
    
            
        }
    }

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
    }, 400);