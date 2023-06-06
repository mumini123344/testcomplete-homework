var min = 0;
var max = 1000000;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let orders = Aliases.Orders;
let mainForm = orders.MainForm;
let orderForm = orders.OrderForm;
let groupBox = orderForm.Group;
let okButton = orderForm.ButtonOK;
let cardText = groupBox.CardNo;
let listView = mainForm.OrdersView;

function FillRandom(){
  KeywordTests.OpeningOrder.Run();
  KeywordTests.NewOrder.Run();
  cardText.Click();
  cardText.Keys(randomNumber+"^A^C");
  var val = Sys.Clipboard;
  Log.Message(val);
  okButton.Click();
  listView.DblClickItem(0, "MyMoney");
  cardText.Click();
  var new_val = "924923"
  cardText.Keys("^A"+ new_val);
  okButton.Click();
  listView.DblClickItem(0, "MyMoney");
  aqObject.CheckProperty(cardText, "wText", cmpEqual, new_val);
  okButton.Click();
  mainForm.OrdersView.ClickItem(0, "MyMoney");
  let toolBar = mainForm.ToolBar;
  aqObject.CheckProperty(toolBar, "Enabled", cmpEqual, true);
  toolBar.ClickItem(5, false);
  aqObject.CheckProperty(orders.OrderForm.Group, "Enabled", cmpEqual, true);
  
}

