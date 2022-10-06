var number_q =0
$(document).ready(function () {

// alert($('#3322').ttr("value"));
// 
var form=document.getElementById("quan_f")
csrftoken = form.getElementsByTagName("input")[0].value
// alert($("#quan1234").val())
// var cat_name=$('#cat_name1').val();
// var child_name=$('#child_name2').val();
// var prod_name=$('#prod_name3').val();
// console.log(cat_name)
// console.log(child_name)
// console.log(prod_name)

$("#quan_f").submit(function (e) {
    e.preventDefault();

$.ajax({
    type :"POST",
    url : "show_quantity",
    data:{
        cat_name:$('#cat_name1').val(),
        child_name:$('#child_name2').val(),
        prod_name:$('#prod_name3').val(),


    },
    headers:{
        // 'Content-Type':'application/json',
        // 'Content-Type':'multipart/form-data',
        // 'csrfmiddlewaretoken': '{{ csrf_token }}',
        'X-CSRFToken':csrftoken ,

    },
    
success:function(res){
// assign images variable_for category
// assign images variable_for discounts
var number=$("#quan").val();

    console.log(number)
    for(var i in res){
       
        console.log(res[i][0].Quantity)
        

        if(number==res[i][0].Quantity){
            alert("The Maximum Number Has Reached")
            
            
            number_q=res[i][0].Quantity
            $("#plus").attr('disabled', true);

        }else{
            $("#plus").removeAttr('disabled');

        }



}
},

error:function(res){
    console.log("Failed "+res.status)
    } 
    })
})
})

