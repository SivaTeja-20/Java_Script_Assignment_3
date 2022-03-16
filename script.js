// Function of berth arrangement


function berth(s)
{
    if (s % 8 == 1 || s % 8 == 4){
        return "Your seat is: Lower berth"
    }else if (s % 8 == 2 || s % 8 == 5){
            return "Your seat is: Middle berth" 
    }else if(s % 8 == 3 || s % 8 == 6){
            return "Your seat is: Upper berth"
    }else if(s % 8 == 7){
            return "Your seat is: Side lower berth"
    }else {
        return "Your seat is: Side upper berth"
    }   
}

function berth_type(s,r)
{
       
    if (r==1 && s>=1  && s<=8 ){
         console.log(berth(s))    
    }else  if (r==2 && s>=9 && s<=16){
         console.log(berth(s))
    }else  if (r==3 && s>=17 && s<=24){
         console.log(berth(s))
    }else  if (r==4 && s>=25 && s<=32){
         console.log(berth(s))   
    }else  if (r==5 && s>=33 && s<=40){
         console.log(berth(s))
    }else  if (r==6 && s>=41 && s<=48){
        console.log(berth(s))
    }else  if (r==7 && s>=49 && s<=56){
         console.log(berth(s))
    }else  if (r==8 && s>=57 && s<=64){
        console.log(berth(s))
    }else  if (r==9 && s>=65 && s<=72){
         console.log(berth(s))
    }else {
        return "IVALID"
    }
  
}

console.log(berth_type(54,7))
console.log(berth_type(45,6))
console.log(berth_type(12,2))
 