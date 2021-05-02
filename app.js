// 1.
// var students = new Array("Shabana","Urooj","Sharjeel");

// 2.
// var students = ["Shabana","Urooj","Sharjeel"];

// 3. .
// document.write("<h1>"+"STRING ARRAY"+"</h1>");
// var wildAnimals = ["lion","elephant","zebra","fox"];
// document.write("<h3>"+wildAnimals+"</h3>"+"<br>");

// 4. 
// document.write("<h1>"+"NUMBER ARRAY"+"</h1>");
// var rollNumber = [1001,1002,1003,1004];
// document.write("<h3>"+rollNumber+"</h3>"+"<br>");

// 5. 
// document.write("<h1>"+"BOOLEAN ARRAY"+"</h1>");
// var typeBoolean = [true,false];
// document.write("<h3>"+typeBoolean+"</h3>"+"<br>");

// 6.
// document.write("<h1>"+"MIXED ARRAY"+"</h1>");
// var mixedArray = ["Purple",15,true,"689"];
// document.write("<h3>"+mixedArray+"</h3>"+"<br>");

// 7. 

// document.write("<h1>"+"QUALIFICATIONS :"+"</h1>");
// var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// for(var i = 0; i< qualifications.length; i++){
//     document.write("<h3>"+i +") "+ qualifications[i]  +"<br>"+"</h3>");
// }

// 8.


// var students = ["Micheal","John","Tony"];
// var marks = [320,230,480];
// for(var i = 0; i < 3; i++){
//     document.write("<h1>"+"Scores of "+
//         students[i]+ " is "+marks[i]+". Percentage : "+
//         marks[i]*100/500+" %"+"<br>"
//         +"</h1>");
// }

// Q.No 9
// var colorName = ["red ","blue ","green", "black ","white "];
// original array

// document.write("<h1>"+"Original array:"+"</h1>"+"<br>");
// document.write(colorName)
// 9.a
// Add color to the beginning 

// document.write("<h1>"+"Add color to the beginning:"+"</h1>"+"<br>");

// var input = prompt("Add color to the beginning :");
// var x =colorName.unshift(" "+input);
// document.write("<h3>"+colorName+"</h3>");

// 9.b
// Add color add to the end

// document.write("<h1>"+"Add color to the end"+"</h1>"+"<br>");
// var endColor = prompt("Add color add to the end :");
// colorName.push(" "+endColor);
// document.write("<h3>"+colorName+"</h3>");

// 9.c
// Add two more color to the beginning

// document.write("<h1>"+"Add two more color to the beginning"+"</h1>"+"<br>");
// var twoMore = prompt("Add two more color to the beginning");
// colorName.unshift(twoMore);
// document.write("<h3>"+colorName+"</h3>");

// 9.d
// Delete the first color
// document.write("<h1>"+"Delete the first color"+"</h1>"+"<br>");
// colorName.splice(1,2);
// document.write("<h3>"+colorName+"</h3>");

// 9.e
// Delete the last color
// document.write("<h1>"+"Delete the last color"+"</h1>"+"<br>");
// colorName.pop();
// document.write("<h3>"+colorName+"</h3>");

// 9.f
// Ask the user at which index he/she wants to add a color & color name.
// Then add the color to desired position/index. . Display the updated array
// in your browser.

// document.write("<h1>"+"Add color desired position:"+"</h1>"+"<br>");
// var startingIndex = prompt("Where do you want add a color?", "1-5");
// var color = prompt("Which color would you like to add?");
// colorName.splice(--startingIndex,0,color);
// document.write("<h3>"+colorName+"</h3>");

// 9.g. Ask the user at which index he/she wants to delete color(s) & how many
// colors he/she wants to delete. Then remove the same number of color(s)
// from user-defined position/index. . Display the updated array in your
// browser.

// document.write("<h1>"+"Deleting color desired position:"+"</h1>"+"<br>");
// var numberOfColors = prompt("How many color would you like to delete?","1-7");
// var indexOfColors = prompt("From where would you like to delete color?","0-7");
// colorName.splice(indexOfColors,numberOfColors);
// document.write("<h3>"+colorName+"</h3>");

// 10

// var scores =[320,230,480,120];
// document.write("<h1>"+"Scores of Students : "+scores+"<br/>"+"</h1>")
// var orderedScore = scores.sort()
// document.write("<h1>"+"Ordered Scores of Students : "+orderedScore+"</h1>")

//11

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("<h1>"+"Cities : <br>"+cities+"</h1>");
// var selectedCities =cities.slice(2,4);
// document.write("<h1>"+"Selected Cities : <br>"+selectedCities+"</h1>");

// 12

// var arr =["This","is","my","cat"];
// document.write("<h1>"+"Array : <br/>"+
//     arr+"</h1>"+"<br/>");
// var arrString =arr.join(" ");
// document.write("<h1>"+"String : <br/>"+arrString+"</h1>");

// 13

// var devices = ["keyboard","mouse","printer","monitor"];
// for(var i = 0; i < devices.length; i++){
//     document.write("<h1>"+"Out :<br/>"+devices[i]+"<br>"+"</h1>")
// }

// 14

// var devices = ["keyboard","mouse","printer","monitor"];
//  devices.reverse()
// for(var i = 0; i < devices.length; i++){
//     document.write("<h1>"+"Out :<br/>"+devices[i]+"<br>"+"</h1>")
// }

// 15

// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select>");
// for (var i = 0; i< phones.length; i++){
//     document.write("<option>"+ phones[i]+"</option>");
// }
// document.write("</select>");

// table

// var number = +prompt("Enter number","5")
// for (var i = 1; i <= 20; i++){
//     document.write(number + " x " + i + " = "+ number*i+"<br/>")
// }
