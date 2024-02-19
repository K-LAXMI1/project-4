const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'blue') {
            body.style.backgroundColor = "blue"
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = "green"
        }
        if (e.target.id === 'navy') {
            body.style.backgroundColor = "navy"
        }
        if (e.target.id === 'grey') {
            body.style.backgroundColor = "grey"
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = "yellow"
        }
        if (e.target.id === 'aqua') {
            body.style.backgroundColor = "aqua"
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = "purple"
        }
    });
});
