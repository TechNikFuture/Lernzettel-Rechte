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







function loadJS(FILE_URL, async = true) {
    let scriptEle = document.createElement("script");
  
    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", async);
  
    document.body.appendChild(scriptEle);
  
    // success event 
    scriptEle.addEventListener("load", () => {
      console.log("File loaded")
    });
     // error event
    scriptEle.addEventListener("error", (ev) => {
      console.log("Error on loading file", ev);
    });
  }
  loadJS("/Fach_1.js", false);


