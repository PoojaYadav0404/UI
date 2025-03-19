function Menu(){
  var Ui = SpreadsheetApp.getUi();
  Ui.createMenu("NEW MENU")
  .addSeparator()
  .addItem("Generate Int. Part Code", "genNewPartCode")
  .addSeparator()
  .addToUi();
}
