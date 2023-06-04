
// Slider 

let flag = 0;

function control(x){
flag = flag + x ;
  
   // Next Button
   if(flag == 4){
       flag = 0;
   }  
     
   //Previous Button
   if(flag == -1){
   flag = 4;
   }

   show(flag);

}

show(flag);


function show(num){
    let slide = document.getElementsByClassName('slider');
    slide[num].style.display = "block";
    // Display None Condition 
    if(flag == 0){
        slide[1].style.display = "none";
        slide[2].style.display = "none";
    }
    if(flag == 1){
        slide[0].style.display = "none";
        slide[2].style.display = "none";
    }
    if(flag == 2){
        slide[0].style.display = "none";
        slide[1].style.display = "none";
    }
    
    if(flag == 0){
    slide[0].style.display = "block";
    }
 
   

    }
//navbar page 
function nav(){
    let navbar = document.getElementsByClassName('navbar');
     
    alert("sahil");
    
}
     
    

