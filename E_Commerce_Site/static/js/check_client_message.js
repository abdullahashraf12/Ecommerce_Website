$(document).ready(function () {    
    $("#sendMessageButton").click(function(e){
        e.preventDefault();
        var div=document.getElementById("contact_form")
        csrftoken = div.getElementsByTagName("input")[0].value 
       
    $.ajax({
    
        type :"POST",
        url : "contact_us",
        data:{
            first_name:$('#name').val(),
            account:$('#email').val(),
            subject:$('#subject').val(),
            message:$('#message').val(),
    
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
            if(res.success=="success"){

                function my_func(){

                $("#is_valid_true").html("<div class='alert alert-success' role='alert'>Your Message Has Been Sent</div>")
               

                }

                my_func()


                function clear_my_func(){
                    $("#is_valid_true").empty()
                }

                setTimeout(clear_my_func,4000)
                



            }else{

                function my_func(i){
                    $("#is_valid_true").empty()
                    $("#is_valid_true").html("<div class='alert alert-danger' role='alert'>"+i+"</div>")
    
                    }
                    my_func(res.failed)
    
    
                    function clear_my_func(){
                        $("#is_valid_true").empty()
                    }
    
                    setTimeout(clear_my_func,4000)


            }
        }
       
        
        }
        ,error:function(res){
            alert(res[i])
            

        }

    })})})
















// function my_func(){

// if($("#is_valid").text()=="valid"){
//     $("#is_valid_true").html("<div class='alert alert-success' role='alert'>Your Message Has Been Sent</div>")
// }
// }



// my_func()



// function clear_my_func(){
//     $("#is_valid_true").empty()
// }

// setTimeout(clear_my_func,4000)
// })
// "<div class='alert alert-success' role='alert'>This is a success alert—check it out!</div>"