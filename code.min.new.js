
  function go1(){


var firstImage = document.getElementsByTagName("img")[2];
var srcc = firstImage.src;

    
    var title = document.title;
  
   var golink = "https://moddedguru.com/download/?aname="+title+"&size="+size+"&arm="+downloadarm+"&ver="+version+"&link="+downloadlink+"&image="+srcc;
    
  window.location.replace(golink);
  }
     
