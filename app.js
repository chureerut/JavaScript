
//ถ้าไม่ได้กำหนดค่าให้ตัวแปร ค่าจะเป็น undefined
let nameTest = "ก้องรักสยาม";
console.log(nameTest);

//typeof เช็คชนิดข้อมูล
//null ไม่มีการกำหนดค่าถูกกำหนดค่าโดยผู้เขียน
//undefined ไม่มีการกำหนดค่า (เป็นค่าเริ่มต้นของโปรแกรม)

let money = 500; //number (integer)
console.log(typeof(money));

//สร้างโดยใช้คำสั่ง Array()
// let array1 = new Array();
// let array2 = Array(สมาชิกตัวที่1, สมาชิกตัวที่2, สมาชิกตัวที่3);

let myArray = new Array();
myArray[0] = 2000;
myArray[1] = 3000;
console.log(myArray);

let myArray3 = ["100","200","300"];
myArray3[2] = "900";
console.log(myArray3[2]);

