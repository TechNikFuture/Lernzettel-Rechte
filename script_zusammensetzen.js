

var Tage = new Date().getDate() ;
var Monate = new Date().getMonth() + 1;

if (Tage <= 9) {
  var Tage = "0" + Tage;
}
if (Monate <= 9) {
  var Monate = "0" + Monate;
}
var Datum = Tage + "." + Monate;



var Stunden = new Date().getHours();
var Minuten = new Date().getMinutes();

if (Minuten <= 9){
  Minuten = "0" + Minuten
}

if (Stunden <= 9){
  Stunden = "0" + Stunden
}



var Uhrzeit = Stunden + ":" + Minuten
var vollständiges_Datum = Datum + ", " + Uhrzeit

console.log(vollständiges_Datum)







///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

Fach = "Kunst Arbeit"

Seitenanzahl = "1"

Lernzettel_Nummer = "11"

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


//Quere Seiten
//doc.addPage('a4', 'l')
//doc.addImage(imgData_5, 'JPEG', 0, 0, 294.7, 209.7);

var doc = new jsPDF();

doc.setFontSize(9);
doc.setTextColor(170, 170, 170);
doc.addImage(imgData_1, 'JPEG', 0, 0, 209.7, 294.7);
//doc.text(142, 20.5, Lernzettel_Nummer + " - " + vollständiges_Datum);
//doc.text(138, 20.5, Lernzettel_Nummer + " - " + vollständiges_Datum);
doc.text(130, 20.5, Lernzettel_Nummer + " - " + vollständiges_Datum);
doc.text(75, 150, Lernzettel_Nummer + " - " + vollständiges_Datum);
if (Seitenanzahl >= 2){
doc.addPage()
doc.addImage(imgData_2, 'JPEG', 0, 0, 209.7, 294.7);
doc.text(170, 15, Lernzettel_Nummer + " - " + vollständiges_Datum);
doc.text(170, 290, Lernzettel_Nummer + " - " + vollständiges_Datum);
if (Seitenanzahl >= 3){
doc.addPage()
doc.addImage(imgData_3, 'JPEG', 0, 0, 209.7, 294.7);
doc.text(90, 29, Lernzettel_Nummer + " - " + vollständiges_Datum);
doc.text(170, 290, Lernzettel_Nummer + " - " + vollständiges_Datum);
if (Seitenanzahl >= 4){
  doc.addPage()
  doc.addImage(imgData_4, 'JPEG', 0, 0, 209.7, 294.7);
  doc.text(145, 58, Lernzettel_Nummer + " - " + vollständiges_Datum);
  if (Seitenanzahl >= 5){
    doc.addPage()
    doc.addImage(imgData_5, 'JPEG', 0, 0, 209.7, 294.7);
    if (Seitenanzahl >= 6){
      doc.addPage()
      doc.addImage(imgData_6, 'JPEG', 0, 0, 209.7, 294.7);
      doc.text(140, 66, Lernzettel_Nummer + " - " + vollständiges_Datum);
      if (Seitenanzahl >= 7){
        doc.addPage()
        doc.addImage(imgData_7, 'JPEG', 0, 0, 209.7, 294.7);
        doc.text(56, 260, Lernzettel_Nummer + " - " + vollständiges_Datum);
        if (Seitenanzahl >= 8){
          doc.addPage()
          doc.addImage(imgData_8, 'JPEG', 0, 0, 209.7, 294.7);
          if (Seitenanzahl >= 9){
            doc.addPage()
            doc.addImage(imgData_9, 'JPEG', 0, 0, 209.7, 294.7);
          }
        }
      }
    }
  }
}
}
}





download_name = Fach + " Lernzettel Klasse 9.pdf"
