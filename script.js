var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;


//add listeners

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);



function myResult() {

//Take initial values and stick 'em in variables

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

// Apply formulas 

if(inputTypeValue === "inr" && resultTypeValue === "inr") 
	{
	result.value = input.value;

	}

else if (inputTypeValue == "inr" && resultTypeValue == "euro") 
	{

	result.value = Number(input.value) * 0.013;
	}

else if (inputTypeValue == "inr" && resultTypeValue == "dollar")
	{

	result.value = Number(input.value) * 0.012;
	}



if(inputTypeValue === "dollar" && resultTypeValue === "dollar") 
	{
		result.value = input.value;

	}

else if (inputTypeValue == "dollar" && resultTypeValue == "euro") 
	{

	result.value = Number(input.value) * 1.02;
	}

else if (inputTypeValue == "dollar" && resultTypeValue == "inr")
	{

	result.value = Number(input.value) * 81.45;
	}



if(inputTypeValue === "euro" && resultTypeValue === "euro") 
	{
	result.value = input.value;
	}

else if (inputTypeValue == "euro" && resultTypeValue == "inr") 
	{

	result.value = Number(input.value) * 79.87;
	}

else if (inputTypeValue == "euro" && resultTypeValue == "dollar")
	{

	result.value = Number(input.value) * 0.98;
	}


}

