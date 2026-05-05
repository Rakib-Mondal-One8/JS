const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please give a valid height'
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight";
    }else{
        const bmi = (weight/((height*height)/1000)).toFixed(1)
        // show the result
        results.innerHTML = `<span>BMI: ${bmi}</span>`;
        const bmiType = document.querySelector('#bmi-type')
        if(bmi < 18.6){
            bmiType.innerHTML = `<span>Wight TYPE: Under Weight</span>`
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            bmiType.innerHTML = `<span>Wight TYPE: Normal Weight</span>`;
        }
        else{
            bmiType.innerHTML = `<span>Wight TYPE: OverWeight</span>`;
        }
    }

})