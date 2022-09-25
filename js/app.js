window.addEventListener('load', function(){
    const inputName = document.querySelector('#name');
    const inputNumber = document.querySelector('#number');
    const inputMonth = document.querySelector('#ccmonth');
    const inputYear = document.querySelector('#ccyear');
    const cardNumber = document.querySelector('#card-number');
    const cardName = document.querySelector('#card-name');
    const cardMonth = document.querySelector('#month');
    const cardYear = document.querySelector('#year');
    const inputCvc = document.querySelector('#cvc-in');
    const cardCvc = document.querySelector('#cvv');
    const nameError = document.querySelector('.name-error');
    const numberError = document.querySelector('.number-error');
    const dateError = document.querySelector('.date-error');
    const cvcError = document.querySelector('.cvc-error');
    const blankError = document.querySelector('.blank-error');
    const blankCvcError = document.querySelector('.blankcvc-error');
    const confirm = document.querySelector('#conf-btn');
    const completePage = document.querySelector('#complete-page');
    const cardDetails = document.querySelector('.card-details');
    const submitError = document.querySelector('.submit-error');
    var names;
    var letters;
    var nameConf;
    var numConf;
    var monthconf;
    var monthblankconf;
    var yearconf;
    var yearblankconf;
    var cvcconf;
    var cvcblankconf;

    

    
   
    inputName.addEventListener('keyup', function(e){
        e.preventDefault;
        names = inputName.value.toUpperCase();
        cardName.innerText = names;
        letters = /^[A-Za-z_ ]+$/;
        if(names.match(letters)){
            nameError.style.display ="none";
            nameConf = 1;
        } else {
            nameError.style.display = "block"; 
            nameConf = 0;
        };
        return(nameConf);
        
    });

    

    inputNumber.addEventListener('keyup', function(e){
        e.preventDefault;
        cardNumber.innerText = inputNumber.value;
        
        if (isNaN(inputNumber.value)) {
            numberError.style.display = "block";
            numConf = 0;
        } else {
            numberError.style.display = "none";
            numConf = 1;
        };

        return(numConf);
       

    });

    // cardNumber.addEventListener('input', function(e){
    //     e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    // })


    inputMonth.addEventListener('keyup', function(e){
        e.preventDefault;
        cardMonth.innerText = inputMonth.value;
        if (isNaN(inputMonth.value)||inputMonth.value>12){
            dateError.style.display = "block";
            monthconf = 0;
        } else {
            dateError.style.display = "none";
            monthconf = 1;
        };

        if (inputMonth.value.length == 0){
            blankError.style.display = 'block';
            monthblankconf = 0;
        } else {
            blankError.style.display = 'none';
            monthblankconf = 1;
        };

        return [monthconf, monthblankconf];

       
    });

    inputYear.addEventListener('keyup' , function(e){
        e.preventDefault;
        cardYear.innerText = inputYear.value;
        if (isNaN(inputYear.value)){
            dateError.style.display = "block";
            yearconf = 0;
        
        } else {
            dateError.style.display = "none";
            yearconf = 1;
        };
        
        if (inputYear.value.length == 0){
            blankError.style.display = 'block';
            yearblankconf = 0;
        } else {
            blankError.style.display = 'none';
            yearblankconf = 1;
        };

        return [yearconf, yearblankconf];
        

        
    });

    inputCvc.addEventListener('keyup', function(e){
        e.preventDefault;
        cardCvc.innerText = inputCvc.value;
        if (isNaN(inputCvc.value)){
            cvcError.style.display = "block";
            cvcconf = 0;

       
        } else {
            cvcError.style.display = "none";
            cvcconf = 1;
        }

        if (inputCvc.value.length == 0){
            blankCvcError.style.display = 'block';
            cvcblankconf = 0;
        } else {
            blankCvcError.style.display = 'none';
            cvcblankconf = 1;
        };
        
        return [cvcconf , cvcblankconf];
        
        
    });


    
    confirm.addEventListener('click', function(e){
        e.preventDefault;
        // confirm.disabled = true;

        if (nameConf ==1 && numConf ==1 && monthconf ==1 && monthblankconf ==1 && yearconf ==1 && yearblankconf ==1 && cvcconf ==1 && cvcblankconf ==1){
            cardDetails.style.display = "none";
            completePage.style.display = "block";
            confirm.disabled = false;
        

        } else {
            cardDetails.style.display = "block";
            completePage.style.display = "none";
            submitError.style.display = 'block';
           
        }

       

    });
    
    
});

