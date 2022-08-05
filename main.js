// Detecting Keyboard Press

function makeSound(note) {

    switch (note) {
        case 'C\n1':
            var c1 = new Audio('Audio/c1.mp3');
            c1.play();
            break;
        
        case '1':
            var c1 = new Audio('Audio/c1.mp3');
            c1.play();
            break;

        case 'D\n2':
            var d1 = new Audio('Audio/d1.mp3');
            d1.play();
            break;

        case '2':
            var d1 = new Audio('Audio/d1.mp3');
            d1.play();
            break;

        case 'E\n3':
            var e1 = new Audio('Audio/e1.mp3');
            e1.play();
            break;

        case '3':
            var e1 = new Audio('Audio/e1.mp3');
            e1.play();
            break;

        case 'F\n4':
            var f = new Audio('Audio/f.mp3');
            f.play();
            break;

        case '4':
            var f = new Audio('Audio/f.mp3');
            f.play();
            break;           

        case 'G\n5':
            var g = new Audio('Audio/g.mp3');
            g.play();
            break;

        case '5':
            var g = new Audio('Audio/g.mp3');
            g.play();
            break;

        case 'A\n6':
            var a = new Audio('Audio/a.mp3');
            a.play();
            break;

        case '6':
        var a = new Audio('Audio/a.mp3');
        a.play();
        break;

        case 'B\n7':
            var b = new Audio('Audio/b.mp3');
            b.play();
            break;

        case '7':
            var b = new Audio('Audio/b.mp3');
            b.play();
            break;

        case 'C\n8':
            var c2 = new Audio('Audio/c2.mp3');
            c2.play();
            break;

        case '8':
            var c2 = new Audio('Audio/c2.mp3');
            c2.play();
            break;

        case 'D\n9':
            var d2 = new Audio('Audio/d2.mp3');
            d2.play();
            break;

        case '9':
        var d2 = new Audio('Audio/d2.mp3');
        d2.play();
        break;

        case 'E\n0':
            var e2 = new Audio('Audio/e2.mp3');
            e2.play();
            break;

        case '0':
            var e2 = new Audio('Audio/e2.mp3');
            e2.play();
            break;
    }

}




//Detecting click Press

var numNotes = document.querySelectorAll(".note").length;

for (var i = 0; i < numNotes; i++) {
    document.querySelectorAll(".note")[i].addEventListener("click", function(event) {

        var noteInnerText= this.innerText;
        makeSound(noteInnerText);
        buttonAnimation(event.code);

    });
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

    console.log(event);

    makeSound(event.key);
    buttonAnimation(event.code);

});

// Animate Button 

function buttonAnimation(currentDigit) {

    var activeButton = document.querySelector("." + currentDigit); 
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 300);

}