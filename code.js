const btn = document.querySelector('button');

const calculateBill = (e) =>{
    e.preventDefault();
    let bill = document.querySelector('.bill').value;
    let people = document.querySelector('.peopleCount').value;
    let tip = document.querySelector('.percentage').value;
    const sum = document.querySelector('h2 span');
    bill = Number(bill);
    people = Number(people);
    tip = Number(tip);
    const result = calculate(bill,people,tip);
    sum.textContent = result;
}

function calculate(bill,people,tip) {
    if((bill * 100/people) < 1){
        return alert(`it's very strange to split ${bill} for ${people} peoples , but it less the 0.01 🤔`)
    }
    if(people !== 0){
        let result = ((bill + ((bill * tip)/100)) / people).toFixed(2);
    return result;
    } else {
        return alert("enter how many people will split the check");
    }
}

btn.addEventListener('click', calculateBill);