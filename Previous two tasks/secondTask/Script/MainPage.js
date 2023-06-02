class mainPage{
  
  constructor(){
    this.new_order_button = Aliases.Orders.MainForm.ToolBar;
    
  }

  make_New_Order(){
    this.new_order_button.ClickItem(4, false);
  }
  
}

module.exports.MainPage = new mainPage();

