//variable----------------------------------------------------------
let score = 0
let counter = 0
let chrono = document.querySelector('#timer')
let secondebyseconde
let time = 10
let questions = ["Quel est la capitale de la France ?", "Quel est la capitale de l'Allemagne ?", "Quel est la capitale de l'Italie ?", "Quel est la capitale de l'Espagne ?", "Quel est la capitale de l'Angleterre?"]

let reponse = [
    ["1 : Paris", "2: Marseille", "3 : Lyon", "4 : Bordeaux"],
    ["1 : Munich", "2: Berlin", "3 : Francfort", "4 : Breme"],
    ["1 : Milan", "2: Turin", "3 : Rome", "4 : Venise"],
    ["1 : Barcelone", "2: Madrid", "3 : Seville", "4 : Majorque"],
    ["1 : Manchester", "2: Liverpool", "3 : Londre", "4 : Birmingham"],
]

let goodanswer = [reponse[0][0], reponse[1][1], reponse[2][2], reponse[3][1], reponse[4][2]]



//-------------fonction demarrer-------------------------------------------- 


function start() {

    if (counter == 0) {     //Si les question sont égale à zéro
        document.querySelector("#novisible").style.display = "block"     //Dans le document.selectionne l'id novisible.
        clearInterval(secondebyseconde)        //Arrete ton timer
        secondebyseconde = setInterval(timer, 1000)         //Variable du temps = le setInterval permet de couper le temps toute les miliseconde
    }

    let questionsContainer = document.querySelector("#questions")     //Variable des question = Dans le document selectionne moi l'id questions

    if (time == 0) {     //Si le temps est égale à zéro
        document.querySelector("#novisible").style.display = "none"    //Dans le document sélectionne moi l'id novisible.prends le style.et prends la valeur "none"
        document.querySelector("#end").innerHTML = "Quizz fini"    //Dans le dom selectionne moi l'id end . insere moi dans la div la valeur Quizz fini

        if (score > 2) {    //Si le score est supérieur à 2
            document.querySelector("#score").innerHTML = `Votre score est de ${score} vous avez gagné`     //Dans le document selectionne moi l'id score. et dans le html affiche moi "votre score est de()vous avez gagné"
        } else {
            document.querySelector("#score").innerHTML = `Votre score est de ${score} vous avez perdu` // "votre score est de " + score + " vous avez gagné"
        }

    } else {
        questionsContainer.innerHTML = questions[counter]
        displayAnswer()
    }



}

function displayAnswer() { //Creation fonction displayAnswer
    let bouton = document.querySelectorAll(".reponse") //Création Variable bouton, dans le document selectione la class reponse
    for (let i = 0; i < bouton.length; i++) { // l'index i = 0; i est inferieur 
        bouton[i].innerHTML = reponse[counter][i];
    }

}

function answer(elem) {
    if (elem.innerHTML == goodanswer[counter]) {
        score++
        document.querySelector("#score").innerHTML = score;
    }
    counter++;
    start()
}

answer(document.querySelector('#reponse'))

//-----------------------Fonction restart--------------------------------------------

function restart() {
    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", location.reload(), false);
}

//-------------fonction timer-------------------------------------------- 

function timer() {
    time--
    document.querySelector('#timer').innerHTML = time
    if (time == 0) {
        clearInterval(secondebyseconde)
    }

}





