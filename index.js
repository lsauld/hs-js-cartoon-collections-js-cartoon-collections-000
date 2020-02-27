function dwarfRollCall(dwarves) {
  
var string = "";
 for(var i=dwarves.length/2 ; i< dwarves.length; i++){
   
   string+= `${i+1}. ${dwarves[i]} `;
    
   }
 return string;
}


function summonCaptainPlanet(planeteerCalls){
  
  
  var array1 =[] ;
  
  for(var i=0; i<planeteerCalls.length; i++){
  
    array1.push(planeteerCalls[i].toUpperCase() + "!");
}
    return array1;

}




function longPlaneteerCalls(words) {
  for(var i=0; i<words.length; i++){
    if(words[i].length >4){
      return  true;
    }
  } 
  return false;
}



function findTheCheese (foods) {
  var cheeseFoods = ["cheddar","gouda","camembert", "swiss"];
  for(var i=0; i < foods.length; i++){
    for(var j=0; j< cheeseFoods.length; j++){
      if(cheeseFoods[j]===foods[i]){
       return cheeseFoods[j];
      }  
    }
  }
  return "no cheese!";
}





























