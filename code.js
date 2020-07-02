const btn = document.querySelector('button');

const calculateBill = () =>{
    event.preventDefault();
    let bill = document.querySelector('.bill').value;
    let people = document.querySelector('.peopleCount').value;
    let tip = document.querySelector('.percentage').value;
    const sum = document.querySelector('h2 span');
    bill = Number(bill);
    people = Number(people);
    tip = Number(tip.substring(0, tip.length - 1));
    const result = calculate(bill,people,tip);
    sum.textContent = result;
    console.log("result z pierwszego " + result);
}

function calculate(bill,people,tip) {
    if(people !== 0){
        let result = ((bill + ((bill * tip)/100)) / people).toFixed(2);
    return result;
    } else {
        return alert("enter how many people will split the check");
    }
}

btn.addEventListener('click', calculateBill);