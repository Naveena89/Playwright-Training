let pascalTriangle = (rows) => {
  
    for(let i = 0; i < rows; i++){
      let str = '';
      let number = 1;
            for(let k = 1; k <= (rows - i); k++){
        str += ' ';
      }
            for(let j = 0; j <= i; j++){
        str += number + ' ';  
        
        number = number * (i - j) / (j + 1);
      }
      
      for(let k =  i + 1; k <= rows; k++){
        str += ' ';
      }
      
      console.log(str);
    }
    
 }
 pascalTriangle(5);