

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

Anzeigetext = Lernzettel_Nummer + " - " + vollständiges_Datum

if (Lernzettel_Nummer == "root") {
  Anzeigetext = ""
}




//Quere Seiten
//doc.addPage('a4', 'l')
//doc.addImage(imgData_5, 'JPEG', 0, 0, 294.7, 209.7);

var doc = new jsPDF();

doc.setFontSize(9);
doc.setTextColor(170, 170, 170);
doc.addImage(imgData_1, 'JPEG', 0, 0, 209.7, 294.7);
//doc.text(142, 20.5, Anzeigetext);
//doc.text(138, 20.5, Anzeigetext);
doc.text(breite_1_1,höhe_1_1, Anzeigetext);
doc.text(breite_1_2,höhe_1_2, Anzeigetext);
if (Seitenanzahl >= 2){
doc.addPage()
doc.addImage(imgData_2, 'JPEG', 0, 0, 209.7, 294.7);
doc.text(breite_2_1,höhe_2_1, Anzeigetext);
doc.text(breite_2_2,höhe_2_2, Anzeigetext);

if (Seitenanzahl >= 3){
doc.addPage()
doc.addImage(imgData_3, 'JPEG', 0, 0, 209.7, 294.7);
doc.text(breite_3_1,höhe_3_1, Anzeigetext);
doc.text(breite_3_2,höhe_3_2, Anzeigetext);

if (download_name == Lz_19_Fach + " Lernzettel.pdf"){
  doc.text(150, 150, <a href="https://youtu.be/hJzW717BgFI?si=U-UULiDhJAOlSL8i">Gutes Video zu Aussprache + Generell</a>);
}

if (Seitenanzahl >= 4){
  doc.addPage()
  doc.addImage(imgData_4, 'JPEG', 0, 0, 209.7, 294.7);
  doc.text(breite_4,höhe_4, Anzeigetext);
  if (Seitenanzahl >= 5){
    doc.addPage()
    doc.addImage(imgData_5, 'JPEG', 0, 0, 209.7, 294.7);
    if (Seitenanzahl >= 6){
      doc.addPage()
      doc.addImage(imgData_6, 'JPEG', 0, 0, 209.7, 294.7);
      doc.text(breite_6,höhe_6, Anzeigetext);
      if (Seitenanzahl >= 7){
        doc.addPage()
        doc.addImage(imgData_7, 'JPEG', 0, 0, 209.7, 294.7);
        doc.text(breite_7,höhe_7, Anzeigetext);
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



