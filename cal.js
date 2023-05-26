
function calculate(){
    var first_value = document.getElementById('first_value').value*1; 
    
    var second_value = document.getElementById('second_value').value*1;
    var selector = document.getElementById('selector').value;
    
    console.log(first_value); console.log(second_value);
    if (selector == 'Add'){
        result = first_value+second_value;     
    }
    if(selector == 'Subtract'){
        result = first_value-second_value;

    }
    if(selector == 'Divide'){
        result = first_value/second_value;
        if(result < 0 ){
            result = alert('cannot go');
        
         }
        

   }
    if(selector == 'Multiply'){
       result = first_value*second_value;

    }

   
  document.getElementById('result').innerHTML= result;

  
  if(result < 0){
    result = alert('cannotgo');

 }

     
    
    }