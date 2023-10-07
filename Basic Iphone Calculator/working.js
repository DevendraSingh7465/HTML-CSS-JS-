
var concatenatedValue = "";
function displayNumber(number) {
    var display = document.getElementById("display");
    concatenatedValue += number;
    display.value = concatenatedValue;
}

function symbol(string){
    var display = document.getElementById("display");
    concatenatedValue += string;
    display.value = concatenatedValue;
}

function resetdisplay(){
    var display = document.getElementById("display");
    display.value = 0;
    concatenatedValue = "";
    answer.value = "";
}
function result(){
    
    if(concatenatedValue.includes('x')){
        var a = concatenatedValue.split('x');
        let num1 = a[0];
        let num2 = a[1];
        let result = (parseFloat(num1) * parseFloat(num2));
        console.log(result);
        document.getElementById('answer').value = result;
        
    }
    else if(concatenatedValue.includes('+')){
        var a = concatenatedValue.split('+');
        let num1 = a[0];
        let num2 = a[1];
        let result = (parseFloat(num1) + parseFloat(num2));
        console.log(result);
        document.getElementById('answer').value = result;
        
    }
    else if(concatenatedValue.includes('-')){
        var a = concatenatedValue.split('-');
        let num1 = a[0];
        let num2 = a[1];
        let result = (parseFloat(num1) - parseFloat(num2));
        console.log(result);
        document.getElementById('answer').value = result;
    }
    else if(concatenatedValue.includes('÷')){
        var a = concatenatedValue.split('÷');
        let num1 = a[0];
        let num2 = a[1];
        let result = (parseFloat(num1) / parseFloat(num2));
        console.log(result);
        document.getElementById('answer').value = result;
    }
    
    else{
        let result = "Invalid Value";
        document.getElementById('answer').value = result;
    }
}
function percentage(){
    let result = (parseFloat(concatenatedValue)/100);
    document.getElementById('answer').value = result;
}