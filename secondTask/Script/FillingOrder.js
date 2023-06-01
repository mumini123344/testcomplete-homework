let order = Aliases.Orders;
let mainForm = Aliases.Orders.MainForm;
let orderForm = Aliases.Orders.OrderForm;
let groupBox = orderForm.Group;
let customerText = groupBox.Customer;
let cityText = groupBox.City;
let streetText = groupBox.Street;
let zipText = groupBox.Zip;
let stateText = groupBox.State;
let cardText = groupBox.CardNo;
let listView = order.MainForm.OrdersView;

var fillingUp = {
  name: "Rati",
  city: "Tbilisi",
  street: "Digomi",
  zip: "1232",
  state: "Saburtalos",
  card: "3213123123123"
};

var fillingUpTwo = {
  name: "Toro",
  city: "Tbilisi",
  street: "Varketili",
  zip: "9329",
  state: "samgori",
  card: "456346342534"
};

function order_info(){
  mainForm.MainMenu.Click("Orders|New order...");
  customerText.SetText(fillingUp.name);
  cityText.SetText(fillingUp.city);
  streetText.SetText(fillingUp.street);
  zipText.SetText(fillingUp.zip);
  stateText.SetText(fillingUp.state);
  cardText.SetText(fillingUp.card);
   aqObject.CheckProperty(stateText, "wText", cmpEqual, fillingUp.state);
   aqObject.CheckProperty(cityText, "wText", cmpEqual, fillingUp.city);
   aqObject.CheckProperty(zipText, "wText", cmpEqual, fillingUp.zip);
   aqObject.CheckProperty(customerText, "wText", cmpEqual, fillingUp.name);
   aqObject.CheckProperty(streetText, "wText", cmpEqual, fillingUp.street);
  orderForm.ButtonOK.ClickButton();

}

function order_info_Two(){
  mainForm.MainMenu.Click("Orders|New order...");
  customerText.SetText(fillingUpTwo.name);
  cityText.SetText(fillingUpTwo.city);
  streetText.SetText(fillingUpTwo.street);
  zipText.SetText(fillingUpTwo.zip);
  stateText.SetText(fillingUpTwo.state);
  cardText.SetText(fillingUpTwo.card);
   aqObject.CheckProperty(stateText, "wText", cmpEqual, fillingUpTwo.state);
   aqObject.CheckProperty(cityText, "wText", cmpEqual, fillingUpTwo.city);
   aqObject.CheckProperty(zipText, "wText", cmpEqual, fillingUpTwo.zip);
   aqObject.CheckProperty(customerText, "wText", cmpEqual, fillingUpTwo.name);
   aqObject.CheckProperty(streetText, "wText", cmpEqual, fillingUpTwo.street);
  orderForm.ButtonOK.ClickButton();
}

function main_func(){
  order_info();
  order_info_Two();
  delete_order();
  mainForm.Close();
//  order.dlgConfirmation.btnNo.ClickButton();

}


function delete_order(){
  listView.ClickItemR(0, "MyMoney");
  listView.PopupMenu.Click("Delete order");
  order.dlgConfirmation.btnYes.ClickButton();
}