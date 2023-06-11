$(document).ready(function() {

$("button[name='my_btn']").on("click",function(e){
    e.preventDefault();
    const sendGetRequest = async () => {

    var form=document.getElementById(this.id)
    csrftoken = form.getElementsByTagName("input")[0].value; 
    glob_cat = form.getElementsByTagName("input")[1]
    child_Cat = form.getElementsByTagName("input")[2]
    prod_cat = form.getElementsByTagName("input")[3]


    var data = new FormData();
    data.append("glob_cat",form.getElementsByTagName("input")[1].value)
    data.append("child_cat",form.getElementsByTagName("input")[2].value)
    data.append("prod_Cat",form.getElementsByTagName("input")[3].value)

    const options = {
        headers: {"X-CSRFToken" :csrftoken}
      };

    await axios.post('remove_from_card',data,options).then((response) => {
       
        $("div[id='"+form.getElementsByTagName("input")[1].value+"&&&&&&&"+form.getElementsByTagName("input")[2].value+"*******"+form.getElementsByTagName("input")[3].value+"']").empty();
        $("div[id='"+form.getElementsByTagName("input")[1].value+"&&&&&&&"+form.getElementsByTagName("input")[2].value+"*******"+form.getElementsByTagName("input")[3].value+"']").remove();
        alert("done")
  
 
}).catch(
    (error) => {
            console.log(error);
         }
    )

        }

        sendGetRequest();

})

})
