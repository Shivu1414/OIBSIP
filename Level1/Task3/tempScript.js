const calculateTemp = () =>{
    const num1=document.getElementById('temp').value;
    // console.log(num1);

    const temp1=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[temp1.selectedIndex].value;
   
    const celToFah = (celi) =>{
       let fahrenheit=Math.round((celi*9/5)+32);
    //    document.write(fahrenheit);
       return fahrenheit;
    }

    const fahToCel = (fahr) =>{
     let celsius=Math.round((fahr-32)*(5/9));
    //  document.write(celsius);
     return celsius;
    }

    let result;
    if(valueTemp=='cel'){
        result=celToFah(num1);
        // document.write(result);
        resultContainer.innerHTML='= '+result+'°Fahrenheit';
        // document.getElementById('resultContainer').innerHTML='= ${result}°Fahrenheit';
    }
    else{
        result=fahToCel(num1);
        // document.write(result);
        resultContainer.innerHTML=result;
        resultContainer.innerHTML='= '+result+'°Celsius';
        // document.getElementById('resultContainer').innerHTML='= ${result}°Celsius';
    }
}