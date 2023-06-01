class orderInfo
{
  constructor()
  {
     this.customer = Aliases.Orders.OrderForm.Group.Customer;
     this.city = Aliases.Orders.OrderForm.Group.City;
     this.street = Aliases.Orders.OrderForm.Group.Street;
     this.zip = Aliases.Orders.OrderForm.Group.Zip;
     this.state = Aliases.Orders.OrderForm.Group.State;
     this.card = Aliases.Orders.OrderForm.Group.CardNo;
     this.price = Aliases.Orders.OrderForm.Group.Price;
     this.okButton = Aliases.Orders.OrderForm.ButtonOK;
     this.order = Aliases.Orders.MainForm.OrdersView;
  }

  set_order_info()
  {
    this.customer.SetText(Project.Variables.customerName);
    this.city.SetText(Project.Variables.city);
    this.state.SetText(Project.Variables.state);
    this.street.SetText(Project.Variables.street);
    this.zip.SetText(Project.Variables.zip);
    this.card.SetText(Project.Variables.card_no);
    this.price.SetText(Project.Variables.price);
    this.okButton.Click();
    
  }

  check_order_info()
  {
    this.order.DblClickItem(Project.Variables.customerName, 3);
    aqObject.CheckProperty(this.price, "wText", cmpEqual, Project.Variables.price);
    this.okButton.Click();
  }
}

module.exports.OrderInfo = new orderInfo();

