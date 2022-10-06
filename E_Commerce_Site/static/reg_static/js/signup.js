var form=document.getElementById("register-form")
csrftoken = form.getElementsByTagName("input")[0].value

$("#Account").on("keyup",function () {
    $.ajax({
    type :"POST",
    url : "sign_up_validation",
    headers:{
        'Content-Type':'application/json',
        'X-CSRFToken':csrftoken ,
    },
    success:function(res){
        $("#message").empty();
        // console.log(res)
    for (var key in res.acc){
        

        if (res.acc[key].Account == $("#Account").val())
        {
            console.log(res.acc[key].Account)

            // console.log($("#Account").val())

        $("#message").html('Account is in db').css('color', 'red');
        
    }
    }
    },
    error:function(res){
       } 
      })})