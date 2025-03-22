var additem = [
  
  {itemName:'หมูน้ำสลัด',prie:'18'},
  {itemName:'หมูน้ำสลัดพริกเผา',prie:'18'},
  {itemName:'ไก่หยองน้ำสลัด',prie:'18'},
  {itemName:'ครีมสลัด',prie:'13'},
  {itemName:'เนยสด',prie:'13'},
  {itemName:'ไส้ย่าเล็ก',prie:'8'},
  {itemName:'ไส้เผือก',prie:'8'},
  {itemName:'ไส้ถั่วแดง',prie:'8'},
  {itemName:'ไส้ถั่วดำ',prie:'8'},
  {itemName:'ไส้มันม่วง',prie:'8'},
  {itemName:'กล้วยหอม',prie:'13'},
  {itemName:'เค้กบัตเตอร์',prie:'13'},
  {itemName:'โรลถั่วแดง',prie:'13'},
  {itemName:'ไส้ย่าใหญ่',prie:'13'},
  {itemName:'ปังแผ่น',prie:'36'},
  {itemName:'โมจิถั่ว',prie:'10'},
  {itemName:'โมจิเผือก',prie:'10'},
  {itemName:'โมจิไข่เค็ม',prie:'13'},
  {itemName:'พิชช่า',prie:'18'},
  {itemName:'พิชช่าปูอัด',prie:'18'},
  {itemName:'ไส้กรอก',prie:'18'},
  {itemName:'ก้านบัว',prie:'13'},
  {itemName:'โรลมันเทศ',prie:'13'},
  {itemName:'ครีมพริกเผา',prie:'13'},
  {itemName:'ชาไทย',prie:'8'},
  {itemName:'โรลมันม่วง',prie:'13'},
  {itemName:'โรลช็อกโกแลต',prie:'13'},
  {itemName:'ปังปอนเล็ก',prie:'14'},
  {itemName:'โรลเผือก',prie:'13'},
  {itemName:'ไก่หยองมินิ',prie:'13'},
  {itemName:'ไส้ช็อกโกแลต',prie:'8'},
  {itemName:'ไส้ย่าไข่',prie:'8'},
  {itemName:'พิชช่าฮาวายเอี้ยน',prie:'18'},
  {itemName:'ครัวซองหมู',prie:'18'},
  {itemName:'แพนเบรดเผือก',prie:'13'},
  {itemName:'แพนเบรดแดง',prie:'13'},
  {itemName:'กรอบน้ำตาล',prie:'13'},
  {itemName:'โฮลวิต',prie:'16'},
  {itemName:'เค้กโรล',prie:'10'},
  {itemName:'โมจิดำ',prie:'10'},
  {itemName:'ครัวซองชีต',prie:'23'},

];

let text = "";
for (let i = 0; i < additem.length; i++) {
  text += additem[i].itemName + 
  '<div class = "min-input"><input type="number"class = "input-list" name="" id="myInput'+ i +'" value="" oninput="myFunction('+ i +')"/><input type="number" class = "input-list" name="" id="myInputin2'+ i +'" value="" oninput="myFunction2('+ i +')" /><input type="number"class = "input-list" name="" id="myInputin3'+ i +'" value="" oninput="myFunction3('+ i +')" /><input type="number"class = "input-list" name="" id="myInputin4'+ i +'" value="" oninput="myFunction4('+ i +')" /><p class = "demo" id = "demo'+ i +'"></p></div><p class = "hrid"></p><br><br>';
    

}

document.getElementById("itemid").innerHTML = text;

let item_A;
let item_B;
let item_C;
let item_D;
function myFunction(id) {
  let query = document.getElementById("myInput" + id +"").value;
    item_A = query;
    SetNumber(id, item_A, "", "", "");
}
function myFunction2(id) {
  let query = document.getElementById("myInputin2" + id +"").value;
    item_B = query;
    SetNumber(id, item_A, item_B, "", "");
}
function myFunction3(id) {
    let query = document.getElementById("myInputin3" + id + "").value;
    item_C = query;
    SetNumber(id, item_A, item_B, item_C, "");
}
function myFunction4(id) {
    let query = document.getElementById("myInputin4" + id + "").value;
    item_D = query;
    SetNumber(id, item_A, item_B, item_C, item_D);
}

function SetNumber(id, a, b, c, d) {
    
    document.getElementById("demo"+ id +"").innerHTML = a - b - c - d;
    return ;
}
