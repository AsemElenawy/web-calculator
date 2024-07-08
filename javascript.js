let v1 = "";
let v2 = "";

let operator = 0;
let input = document.querySelectorAll('.buttonNumbers');
let screen = document.querySelector('.screen');
input.forEach(buttonNumbers => {
    buttonNumbers.addEventListener('click', () => {
        if (operator !== 0) {
            v2 += buttonNumbers.value

        };
        if (success_op == 0) {
            screen.innerHTML += buttonNumbers.value
        }

    })
});

const buttonsOperators = document.querySelectorAll('.operators')

buttonsOperators.forEach(button => {
    button.addEventListener('click', () => {
        v1 = screen.textContent;
        operator = button.textContent;
        if (success_op == 0) {
            screen.innerHTML += button.textContent;
        }

    })
})
let success_op = 0;
let result = document.querySelector("#result");
result.addEventListener('click', () => {
    if (success_op == 0) {
        screen.innerHTML += "=";
    }
    if (operator == "+" && success_op == 0) {
        screen.innerHTML += sum(parseInt(v1), parseInt(v2));
    }
    if (operator == "-" && success_op == 0) {
        screen.innerHTML += sub(parseInt(v1), parseInt(v2));
    }
    if (operator == "*" && success_op == 0) {
        screen.innerHTML += mul(parseInt(v1), parseInt(v2));
    }
    if (operator == "/" && success_op == 0) {
        screen.innerHTML += devision(parseInt(v1), parseInt(v2));
    }
    operator = 0;
    v1 = "";
    v2 = "";
    success_op = 1;



})
function sum(num1, num2) {
    return num1 + num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function devision(num1, num2) {
    return num1 / num2;
}
let del = document.querySelector("#delete");
del.addEventListener('click', () => {
    screen.innerHTML = "";
    success_op = 0
});







