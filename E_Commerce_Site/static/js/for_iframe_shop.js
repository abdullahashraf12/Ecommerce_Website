var data=""
  $("#child").empty()
  for(var i=0;i<5;i++){
    if(i==0){
    data+='<div style="float:left"> <div style="float:left"> <b> 7 Stars </b> </div><div style="float:left" id="child"><label for="file"></label><progress  id="file" value="100" max="100"> 32% </progress> </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'
  }
  else if(i==1){
    data+='<div style="float:left"> <div  style="float:left" > <b> 6 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="90" max="100"> 32% </progress> </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

  }else if(i==2){
    data+='<div style="float:left"> <div  style="float:left" > <b> 5 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="80" max="100"> 32% </progress> </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

}else if(i==3){
  data+='<div style="float:left"> <div  style="float:left" > <b> 4 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="70" max="100"> 32% </progress>   </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

}else if(i==4){
  data+='<div style="float:left"> <div  style="float:left" > <b> 3 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="60" max="100"> 32% </progress>  </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

}else if(i==5){
  data+='<div style="float:left"> <div  style="float:left" > <b> 2 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="50" max="100"> 32% </progress>  </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

}
  }
  $("#child").html(data)

