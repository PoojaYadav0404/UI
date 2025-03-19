function addNewItemRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ActiveSheet = ss.getActiveSheet();
  var MasterSheets = ["Instructions", "Orders List","Order Review Fmt(CGST/SGST)", "Order Review Fmt(IGST)", "Dropdown", "Client Mst", "Item Mst", "Mail Temp"];
  //var SheetName = ActiveSheet.getName();
  if (MasterSheets.includes(ActiveSheet.getName())) {
    SpreadsheetApp.getActiveSpreadsheet().toast("Adding row in wrong sheet", "Warning!!!");
  }
  else {
    var AddRowPosition = ActiveSheet.getLastRow() - 27;

    var Ui = SpreadsheetApp.getUi();
    var Alerts = Ui.prompt("Add Rows", "How much rows you want to add(Type Number)", Ui.ButtonSet.OK_CANCEL);
    var RowsToAdd = Alerts.getResponseText();

    ActiveSheet.insertRowsAfter(AddRowPosition, RowsToAdd);
    ActiveSheet.getRange(17, 1, ActiveSheet.getLastRow() - 27 - 16, ActiveSheet.getLastColumn()).setBorder(true, null, true, null, true, false);
    ActiveSheet.getRange(17,3,ActiveSheet.getLastRow() - 27-16,3).setBorder(false, false, false, false, false, false);
    ActiveSheet.getRange(17,3,ActiveSheet.getLastRow() - 27-16,3).setBorder(true, true, true, true, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID);

    //=ARRAYFORMULA({"AMT. (Rs.)";if (B16:B20="","", H16:H20*J16:J20)})
    ActiveSheet.getRange("K16").setValue('=ARRAYFORMULA({"AMT. (Rs.)";if (B17:B' + (Number(AddRowPosition) + Number(RowsToAdd)) + '="","", H17:H' + (Number(AddRowPosition) + Number(RowsToAdd)) + '*J17:J' + (Number(AddRowPosition) + Number(RowsToAdd)) + ')})')

    SpreadsheetApp.getActiveSpreadsheet().toast("New row added successfully", "Successfull");
  }

}
