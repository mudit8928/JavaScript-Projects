let result = document.getElementById('cal');
let show = document.getElementById('input');
let result_box = document.getElementById('result');
let height_Element = document.getElementById('height');
let weight_Element = document.getElementById('weight');

result.addEventListener('click',() => {
    let height_value = parseFloat(height_Element.value);
    let weight_value = parseFloat(weight_Element.value);
    console.log(height_value);
    console.log(weight_value);
    console.log('working');
    if(height_value <= 272 && weight_value <= 635){
        b = height_value**2
        let BMI = (weight_value / b);
        console.log(BMI);
        show.innerHTML = BMI;
    }else{
        alert('Kuch Values Galat ho rahi hai Bhai...');
    }
});