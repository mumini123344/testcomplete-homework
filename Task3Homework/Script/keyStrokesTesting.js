function main(){
  Aliases.Orders.OrderForm.Group.Customer.Keys("ratiani");
  Aliases.Orders.OrderForm.Group.Customer.Keys("^a[Del]");
  
  var adress = "თბილისი, ნუცუბიძის 72, 0177";
  var city = aqString.SubString(adress, 0, 6);
  var zip = aqString.SubString(adress, 22, 26);
  Aliases.Orders.OrderForm.Group.City.Keys(city);
  Aliases.Orders.OrderForm.Group.Zip.Keys(zip);
  Aliases.Orders.OrderForm.Group.Street.Keys(adress);
  
  
  
  
  Log.Message(Aliases.Orders.OrderForm.Group.WinFormsObject("label8").Equals("Street:"));
  

}