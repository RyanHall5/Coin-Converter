let submitButton = document.querySelector('submit');

submit.addEventListener('click', display);

function display() {
  
  let total = document.getElementById('input').value * 100;
  
  //error checking input value
  if (total>=0){
    //calculating amount of each coin needed
    let quarters = Math.floor(total/25);
    total = total%25;

    let dimes = Math.floor(total/10);
    total = total%10;

    let nickles = Math.floor(total/5);
    total = total%5;

    let pennies = Math.floor(total);

    //displaying each coin amount
    document.getElementById('quarters').textContent=quarters;
    document.getElementById('dimes').textContent=dimes;
    document.getElementById('nickles').textContent=nickles;
    document.getElementById('pennies').textContent=pennies;
    
    //revealing table
    table = document.querySelector('table');
    table.style.visibility='visible';
  }
  
}

