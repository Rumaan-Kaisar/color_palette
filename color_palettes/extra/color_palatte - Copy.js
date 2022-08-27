


//let list = document.getElementById("color_showcase");
//
//let list_of_names = ['<div class="color_box" style = "background: aqua";><span>Haba</span></div>', 
//                     '<div class="color_box" style = "background: aqua";><span>Haba</span></div>', 
//                     '<div class="color_box" style = "background: aqua";><span>Haba</span></div>', 
//                     '<div class="color_box" style = "background: aqua";><span>Haba</span></div>' ];
// 
//list_of_names.forEach((item)=>{
//  let li = document.createElement("li");
//  li.innerHTML = item;
//  list.appendChild(li);
//})


var headingDiv = document. getElementById("projectName");
let list = document.getElementById("color_showcase");

var mydata = data;

//repeat num times
for(var i = 0; i < mydata.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = '<div class="color_box" style = "background: ' + item.color + '";><span>' + item.name + '</span></div>';
        list.appendChild(li);
    
    
    let header = document.createElement("h1");
    headingDiv.innerHTML = "<h1>" + mydata[i].Project_name+ "</h1>";
    console.log(mydata[i].Project_name)
    
    mydata[i].used_colors.forEach((item)=>{
        console.log(item.color)
        let li = document.createElement("li");
        li.innerHTML = '<div class="color_box" style = "background: ' + item.color + '";><span>' + item.name + '</span></div>';
        list.appendChild(li);
    })
    
}





var sqrs = document.querySelectorAll(".color_box");    /*All 6 square divs*/

function checkColr(){
    //-------------------------This loop checks clicked colors against picked color---------------------------
        for(var i = 0; i < sqrs.length; i++) {
            /*add click  addEventListener*/
            sqrs[i].addEventListener("click", function(){
                var clkdColr = this.style.backgroundColor;      /*grab color from clicked color*/
                console.log(clkdColr);
                navigator.clipboard.writeText(clkdColr);
            });
        }
}

checkColr()



//
//
//// -----------   function to display project mode colors    ------------
//
//function projectMode(){
//    let list = document.getElementById("color_showcase"); // first unordered list
//
//    var mydata = data; // Get the stored colors
//
//    
//    for(var i = 0; i < mydata.length; i++) {
//        // creating nested unordered list with heading
//        let ul = document.createElement("ul");
//        ul.innerHTML ='<ul id="'+mydata[i].Project_name+'"><h1>'+mydata[i].Project_name +'</h1></ul>';
//        list.appendChild(ul);
//
//
//        let list2 = document.getElementById(mydata[i].Project_name);    // Selecting new ul
//
//        // accessing the colors
//        mydata[i].used_colors.forEach((item)=>{
//            let li = document.createElement("li");  // creating new list element
//            li.innerHTML = '<div class="color_box" style = "background: ' + item.color + '";><span>' + item.name + '</span></div>';
//            list2.appendChild(li);  // appending new list element to ul
//        })
//
//    }
//    
//    checkColr()
//}
//
//
//
//
//// ----------   function to display color bank   ---------------
//function colorBank(){
//    
//    var mydata = data;  // Get the stored colors
//    
////    // Hide the previous project mode colors
////    for(var j = 0; j < mydata.length; j++) {
////        if(document.getElementById(mydata[j].Project_name)){
////           var old_ul = document.getElementById(mydata[j].Project_name);
////            old_ul.style.display = "none";         
////        }
////    }
//    
//    
//    let list3 = document.getElementById("color_showcase");
//
//
//    // accessing the colors
//    for(var i = 0; i < mydata.length; i++) {
//        mydata[i].used_colors.forEach((item)=>{
//            let li = document.createElement("li");
//            li.innerHTML = '<div class="color_box" style = "background: ' + item.color + '";><span>' + item.name + '</span></div>';
//            list3.appendChild(li);
//        })
//    }
//    
//    checkColr()
//}
//
//
//
//
//
//
//// ------------ EnetListeners for buttons ------------
//var project_button = document.getElementById("prj_btn")
//project_button.addEventListener("click", projectMode)
//
//var colrBank_button = document.getElementById("color_btn")
//colrBank_button.addEventListener("click", colorBank)
//
//
//
//
//var sqrs = document.querySelectorAll(".color_box");    /*All 6 square divs*/
//console.log(sqrs)
//
//function checkColr(){
//    //-------------------------This loop copies the clicked colors ---------------------------
//        for(var i = 0; i < sqrs.length; i++) {
//            /*add click  addEventListener*/
//            sqrs[i].addEventListener("click", function(){
//                var clkdColr = this.style.backgroundColor;      /*grab color from clicked color*/
//                console.log(clkdColr);
//                navigator.clipboard.writeText(clkdColr);
//            });
//        }
//}









