Fach_1_Fach = "Physik Arbeit"
Fach_1_Rechte = "01, "
Fach_1_Seitenanzahl = 7


///////////////////
///////////////////

Fach_2_Fach = "Mathe Arbeit"
Fach_2_Rechte = ""
Fach_2_Seitenanzahl = 1


///////////////////
///////////////////

Fach_3_Fach = "Bio Test"
Fach_3_Rechte = "01, "
Fach_3_Seitenanzahl = 1


///////////////////
///////////////////



Guthaben_1 = "1,5"







function loadScript( url, callback ) {
    var script = document.createElement( "script" )
          script.type = "text/javascript";
        script.src = url;
         script.onload = function() {
           callback()
        };
       document.head.appendChild(script); 
  }
  // call the function...
  loadScript("Fach_1.js", function() {
    alert('script ready!'); 
  });
  
  