var calcBtn = document.getElementById('calculate');
var yearVal = document.getElementById('yearValue');
var monVal = document.getElementById('monthValue');
var dayVal = document.getElementById('dateValue');

calcBtn.addEventListener('click',function(){
    var birthdate = new Date(document.getElementById('birthday').value);
    var today = new Date();

    var ageInMilliseconds = today - birthdate;
    var ageDate = new Date(ageInMilliseconds);
        
    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;

    yearVal.textContent=years;
    monVal.textContent=months;
    dayVal.textContent=days;

    emoji.style.display = 'block';
});