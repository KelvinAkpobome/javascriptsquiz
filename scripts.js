let n = 0
const x = document.getElementsByClassName("mySlides");
const qOne = document.getElementById("qOne").querySelectorAll(".radiocontainer");
const qTwo = document.getElementById("qTwo").querySelectorAll(".radiocontainer");
const qThree = document.getElementById("qThree").querySelectorAll(".radiocontainer");
const qFour = document.getElementById("qFour").querySelectorAll(".radiocontainer");
const qFive = document.getElementById("qFive").querySelectorAll(".radiocontainer");
let grade = 0

document.getElementsByClassName("button")[0].textContent = 'Click to Start';

function plusSlides() {
    x[n].style.display = 'none';

    if ( n > 0 ){
        x[n-1].style.display = 'block';
        document.getElementsByClassName("button")[0].textContent = 'Next';
    }
    n ++;
    if ( n == 5){
        document.getElementsByClassName("button")[0].style.display = 'none';
        document.getElementsByClassName("button")[1].style.display = 'inline-block';
    }
}

plusSlides();

function clickRadio(n,z) {
    if ( n == qOne && z == 2) {
        qOne[0].style.backgroundColor = 'red';
        qOne[0].style.color = 'white';
        qOne[1].style.backgroundColor = 'green';
        qOne[1].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qOne").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qOne && z == 1) {
        qOne[1].style.backgroundColor = 'green';
        qOne[1].style.color = 'white';
        grade = grade + 1;
        document.getElementById("score").innerHTML = 'Score: ' + grade + '/5';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qOne").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qOne && z == 3) {
        qOne[2].style.backgroundColor = 'red';
        qOne[2].style.color = 'white';
        qOne[1].style.backgroundColor = 'green';
        qOne[1].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qOne").querySelectorAll("input")[i].disabled = true;
        }
    }  else if ( n == qTwo && z == 2) {
        qTwo[0].style.backgroundColor = 'red';
        qTwo[0].style.color = 'white';
        qTwo[2].style.backgroundColor = 'green';
        qTwo[2].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qTwo").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qTwo && z == 1) {
        qTwo[1].style.backgroundColor = 'red';
        qTwo[1].style.color = 'white';
        qTwo[2].style.backgroundColor = 'green';
        qTwo[2].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qTwo").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qTwo && z == 3) {
        qTwo[2].style.backgroundColor = 'green';
        qTwo[2].style.color = 'white';
        grade = grade + 1;
        document.getElementById("score").innerHTML = 'Score: ' + grade + '/5';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qTwo").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qThree && z == 2) {
        qThree[0].style.backgroundColor = 'red';
        qThree[0].style.color = 'white';
        qThree[1].style.backgroundColor = 'green';
        qThree[1].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qThree").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qThree && z == 1) {
        qThree[1].style.backgroundColor = 'green';
        qThree[1].style.color = 'white';
        grade = grade + 1;
        document.getElementById("score").innerHTML = 'Score: ' + grade + '/5';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qThree").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qThree && z == 3) {
        qThree[2].style.backgroundColor = 'red';
        qThree[2].style.color = 'white';
        qThree[1].style.backgroundColor = 'green';
        qThree[1].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qThree").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qFour && z == 2) {
        qFour[0].style.backgroundColor = 'green';
        qFour[0].style.color = 'white';
        grade = grade + 1;
        document.getElementById("score").innerHTML = 'Score: ' + grade + '/5';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qFour").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qFour && z == 1) {
        qFour[1].style.backgroundColor = 'red';
        qFour[1].style.color = 'white';
        qFour[0].style.backgroundColor = 'green';
        qFour[0].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qFour").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qFour && z == 3) {
        qFour[2].style.backgroundColor = 'red';
        qFour[2].style.color = 'white';
        qFour[0].style.backgroundColor = 'green';
        qFour[0].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qFour").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qFive && z == 2) {
        qFive[0].style.backgroundColor = 'red';
        qFive[0].style.color = 'white';
        qFive[2].style.backgroundColor = 'green';
        qFive[2].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qFive").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qFive && z == 1) {
        qFive[1].style.backgroundColor = 'red';
        qFive[1].style.color = 'white';
        qFive[2].style.backgroundColor = 'green';
        qFive[2].style.color = 'white';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qFive").querySelectorAll("input")[i].disabled = true;
        }
    } else if ( n == qFive && z == 3) {
        qFive[2].style.backgroundColor = 'green';
        qFive[2].style.color = 'white';
        grade = grade + 1;
        document.getElementById("score").innerHTML = 'Score: ' + grade + '/5';
        for (let i = 0; i <= 2; i++) {
            document.getElementById("qFive").querySelectorAll("input")[i].disabled = true;
        }
    } else {
        document.getElementById("score").innerHTML = 'Score: ' + grade + '/5';
    }
}

function submit() {
    document.getElementsByTagName("form")[0].style.display = 'block';
    document.getElementsByTagName("h3")[0].style.display = 'none';
    document.getElementById("results").innerHTML = 'You Scored: ' + grade + '/5';
}