let calculations = []

function clicked() {
    let height = Number(document.querySelector('#height').value)/100;
    let weight = Number(document.querySelector('#weight').value);
    let name = document.querySelector('#name').value;
    console.log ("Let's check your BMI.");
    let BMI = weight/(height*height);
    

    //Check if inputs are assigned to var
    console.log (name);
    console.log (height);
    console.log (weight);

    const element = document.querySelector("h2");
    element.textContent = "Hello " + name + " your BMI is: " + BMI.toFixed(1);

    document.querySelector('#height').value = "";
    document.querySelector('#weight').value = "";
    document.querySelector('#name').value = "";

    let calculation = {
       name: name,
       height: height,
       weight: weight,
       BMI: BMI
    }
    console.log(calculation);

    calculations.push (calculation);
    console.log(calculations)

}