if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#remove_for_mobile").remove();

    $("#for_mobile").html("<div style='float: left;'><input type='text' name='search_textfield' id='search_textfield'  style='width: 300px; height: 40px;'  placeholder='Search For Products'></div><div style='float: left;'><button type='submit'  style='filter: invert(1);'  class='btn btn-outline-primary' >Search</button></div>")
}else{

 
}
