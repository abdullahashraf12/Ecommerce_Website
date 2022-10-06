// $(document).ready(function () {
    $.ajax({
    type :"GET",
    url : "show_data_pics_category",
    headers:{
        'Content-Type':'application/json',
        //  'X-CSRFToken':csrftoken ,
    },
    success:function(res){
    
    // assign images variable_for category
    // assign images variable_for discounts
    
    // alert("Success");
        // console.log(res)
    for (var key in res.category_data){
       
        var p_src=document.getElementById("my_image_"+key)
        console.log(res.category_data[key].global_images);

        p_src.setAttribute("src","media/"+res.category_data[key].global_images);
        console.log(res.category_data[key].global_images)
        // $("#my_image_"+key).attr("src","media/"+res.category_data[key].global_images)
        $('#Category_type_'+key).html(res.category_data[key].category_type_id)
        $('#b_t_'+key).html(res.category_data[key].small_brief_text)
        // console.log(res.category_data[key])
    }

    },
    error:function(res){
        console.log("Failed "+res.status)
       } 
      })
    // })