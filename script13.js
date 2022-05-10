function incrementbutton()
{
    var element = document.getElementById("incrementtext");
    var number = element.innerHTML;
    var value = Number(number);

    if(value>=30 && value<50)
     value = value + 5;
    else if(value>=50 && value<100)
     value = value + 10;
    else if(value>=100 && value<150)
     value = value + 15; 
    else if(value>=150 && value<200)
     value = value + 20;
    else
     value = value+25;   

    console.log(value)
    document.getElementById('incrementtext').innerHTML =value;
}