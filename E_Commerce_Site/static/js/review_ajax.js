$(document).ready(function () {    

$("#button_submit_review").click(function(e){
    e.preventDefault();

if($("#client_account").val()=="None"){
    alert("You Are Not Registered")

}


else if($('#rating_input').val()==null){
    alert("You Must put Your Rating Star For This Product")
}

else if($('#client_message').val()==null){
    alert("You Must put Your Review Message")
}


else{   
var form=document.getElementById("review")
csrftoken = form.getElementsByTagName("input")[0].value 
$.ajax({
    
    type :"POST",
    url : "set_review",
    data:{
        cat_name:$('#cat_name1').val(),
        child_name:$('#child_name2').val(),
        prod_name:$('#prod_name3').val(),
        rating_input:$('#rating_input').val(),
        client_message:$('#client_message').val(),

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
// var number=$("#quan").val();

//     console.log(number)
    for(var i in res){
        console.log(res[i][0])
        if(res[i][0]=="success"){
            console.log(res[i][0])
    alert("Your Review Has Been Successively Saved")


}else{
    alert("Your Review Has Been Failed You Cannot Submit Twice")
}
}
},error:function(res){
    alert("Failed "+res.status)
}
})}
})
})