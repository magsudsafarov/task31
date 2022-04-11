// button and counter text
const counter = document.querySelector('#Counter')
const btns = document.querySelectorAll('.btn')

// initialize the count variable
let count = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('increase')) {
            count++;    
        } else if (styles.contains('decrease')) {
            count--
        } else {
            count = 0
        }

        if (count > 0) {
            counter.style.color = 'green'
        }

        if (count < 0) {
            counter.style.color = 'red'
        }

        if (count === 0){
            counter.style.color = 'black'
        }

        counter.textContent = count
    })
})


function Credit() {
    let sum = document.querySelector('.sum').value;
    let percentage = document.querySelector('.percent').value;
    let month = document.querySelector('.month').value;

    let summary = ((sum*percentage)/100)*(month/12);
    summary= Number.parseFloat(summary) + Number.parseFloat(sum);

    document.querySelector('.summaryPercentage').innerHTML=summary;
    document.querySelector('.monthPercentage').innerHTML=(Number.parseFloat(summary)/Number.parseFloat(month)).toFixed(2);
}