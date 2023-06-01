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
let listView = order.mainForm.OrdersView;

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
  customerText.SetText(fillingUp.name);
  cityText.SetText(fillingUp.city);
  streetText.SetText(fillingUp.street);
  zipText.SetText(fillingUp.zip);
  stateText.SetText(fillingUp.state);
  cardText.SetText(fillingUp.card);
  orderForm.ButtonOK.ClickButton();

}

function order_info_Two(){
  customerText.SetText(fillingUpTwo.name);
  cityText.SetText(fillingUpTwo.city);
  streetText.SetText(fillingUpTwo.street);
  zipText.SetText(fillingUpTwo.zip);
  stateText.SetText(fillingUpTwo.state);
  cardText.SetText(fillingUpTwo.card)
  orderForm.ButtonOK.ClickButton();
}

function main_func(){
  order_info();
  order_info_Two();
  delete_order();
  mainForm.Close();

}


function delete_order(){
  listView.ClickItemR(0, "MyMoney");
  listView.PopupMenu.Click("Delete order");
  order.dlgConfirmation.btnYes.ClickButton();
}


