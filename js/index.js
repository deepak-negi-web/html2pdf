function generate_pdf() {
  // var doc = new jsPDF();
  // doc.autoTable({
  //   html: '#table1',
  //   theme: 'plain',
  //   font: 'helvetica',
  //   halign: 'left'
  // });
  // doc.autoTable({
  //   html: '#table2',
  //   theme: 'plain',
  //   font: 'helvetica'
  // });
  // doc.autoTable({
  //   html: '#table3',
  //   theme: 'plain',
  //   font: 'courier'
  // });
  //
  // var elementHTML = $('#content1').html();
  // var specialElementHandlers = {
  //   '#elementH': function(element, renderer) {
  //     return true;
  //   }
  // };
  // doc.fromHTML(elementHTML, 15, 15, {
  //   'width': 170,
  //   'elementHandlers': specialElementHandlers
  // });
  var invoice = {
    IssueDate: '03 / 12 / 19',
    DueDate: '04 / 02 / 19',
    Net: '21',
    Currency: 'USD',
    Po: '1 / 3 - 147',
  };

  var contact = {
    bill: 'Bill to:',
    address_1: 'Slate Rock and Gravel Company',
    address_2: '222 Rocky Way',
    address_3: '30000 Bedrock,Cobblestone County',
    phn: '+555 7 123 - 5555',
    email: 'fred @rockgravel.bed',
    attn: 'Attn: Fred Flintstone',
  };


  var fontSizes = {
    HeadTitleFontSize: 18,
    Head2TitleFontSize: 16,
    TitleFontSize: 14,
    SubTitleFontSize: 12,
    NormalFontSize: 10,
    SmallFontSize: 8
  };

  var lineSpacing = {
    NormalSpacing: 22,
  };

  var doc = new jsPDF('p', 'pt');

  var rightStartCol1 = 400;
  var rightStartCol2 = 480;


  var InitialstartX = 40;
  var startX = 80;
  var InitialstartY = 50;
  var startY = 124;

  var lineHeights = 18;

  var res = doc.autoTableHtmlToJson(document.getElementById("table1"));
  res = doc.autoTableHtmlToJson(document.getElementById("table2"));
  res = doc.autoTableHtmlToJson(document.getElementById("table3"));

  doc.setFontSize(fontSizes.SubTitleFontSize);
  doc.setFont('times');
  // doc.setFontType('bold');

  doc.textAlign("Issue Date:", {
    align: "left"
  }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(invoice.IssueDate, {
    align: "left"
  }, 160, startY);

  doc.textAlign("Due Date:", {
    align: "left"
  }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(invoice.DueDate, {
    align: "left"
  }, 160, startY);

  doc.textAlign("Net:", {
    align: "left"
  }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(invoice.Net, {
    align: "left"
  }, 160, startY);

  doc.textAlign("Currency:", {
    align: "left"
  }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(invoice.Currency, {
    align: "left"
  }, 160, startY);

  doc.textAlign("P.O.#", {
    align: "left"
  }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(invoice.Po, {
    align: "left"
  }, 160, startY);

  var startBilling = 80;
  var rightcol1 = 370;
  // var rightcol2 = 0;
  startY = startBilling;
  doc.textAlign(contact.bill, {
    align: "left"
  }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('bold');

  doc.textAlign(contact.address_1, {
    align: "left"
  }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');

  doc.textAlign(contact.address_2, {
    align: "left"
  }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');

  doc.textAlign(contact.address_3, {
    align: "left"
  }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');

  doc.textAlign(contact.phn, {
    align: "left"
  }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');

  doc.textAlign(contact.email, {
    align: "left"
  }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');

  doc.textAlign(contact.attn, {
    align: "left"
  }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');

  doc.setLineWidth(1.5);
  doc.setDrawColor(105, 105, 105);
  doc.line(550, 290, 80, 290);

  var startX = 110;
  var startY = 280;
  doc.setFontType('bold');
  doc.textAlign("Items", {
    align: "left"
  }, startX, startY);
  doc.setFontType('normal');

  doc.setFontType('bold');
  doc.textAlign("Quantity", {
    align: "left"
  }, startX + 170, startY);
  doc.setFontType('normal');

  doc.setFontType('bold');
  doc.textAlign("Price", {
    align: "left"
  }, startX + 260, startY);
  doc.setFontType('normal');

  doc.setFontType('bold');
  doc.textAlign("GST", {
    align: "left"
  }, startX + 320, startY);
  doc.setFontType('normal');

  doc.setFontType('bold');
  doc.textAlign("LineTotal", {
    align: "left"
  }, startX + 370, startY);
  doc.setFontType('normal');

  var startX = 110;
  var startY = 310;

  doc.textAlign("Frozen Brontosaurus Ribs", {
    align: "left"
  }, startX, startY);
  doc.setFontType('normal');

  doc.textAlign("2", {
    align: "left"
  }, startX + 170, startY);
  doc.setFontType('normal');


  doc.textAlign("120", {
    align: "left"
  }, startX + 260, startY);
  doc.setFontType('normal');


  doc.textAlign("2%", {
    align: "left"
  }, startX + 320, startY);
  doc.setFontType('normal');

  doc.textAlign("Rs240.00", {
    align: "left"
  }, startX + 370, startY);
  doc.setFontType('normal');

  doc.setLineWidth(1.0);
  doc.setDrawColor(204, 227, 225);
  doc.line(550, 320, 80, 320);

  var startX = 390;
  var startY = 360;

  doc.setFontType('bold');
  doc.setTextColor(255, 0, 0);
  doc.textAlign("TOTAL:", {
    align: "left"
  }, startX, startY, );
  doc.setFontType('normal');

  doc.setTextColor(0, 0, 0);
  doc.textAlign("Rs244.80", {
    align: "left"
  }, startX + 90, startY);
  doc.setFontType('normal');


  doc.save('table.pdf');
}