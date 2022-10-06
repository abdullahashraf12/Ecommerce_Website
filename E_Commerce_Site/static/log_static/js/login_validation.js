// var form=document.getElementById("login100-form_validate-form")
// csrftoken = form.getElementsByTagName("input")[0].value
// $(document).ready(function(){
//     setInterval(function () {
//         $.ajax({
//         type :"POST",
//         url : "sign_in_validation",
//         headers:{
//             'Content-Type':'application/json',
//             'X-CSRFToken':csrftoken ,
//         },
//         success:function(res){
//             $("#message").empty();
//             // console.log(res)
//             console.log(res)

    
//             if(res=="fp"){
//                 $('#message').html('Wrong Password').css('color', 'red');
//             }
//             else if(res=="fa"){
//                 $('#message').html('Account is not Regitered').css('color', 'red');

//             }else if(res=="succ") {
//                 console.log("Success")
            
          
//         }
//         },
//         error:function(res){
//         }
//         });}, 1000)
//     })
