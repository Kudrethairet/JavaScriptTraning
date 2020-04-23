//challenge 1: age and days
function ageInDays() {
    let birthYear = prompt('what year were you born... Good friend');
    let currentYear = new Date().getFullYear();

    let ageInDayss = (currentYear - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + " days")
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();



}

function addCat() {
    let img = document.createElement('img');
    let div = document.getElementById('flex-box-gen');
    // let div= document.getElementsByClassName('flex-box-container-2');

    img.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(img);
    //document.getElementsByClassName('flex-box-container-2').appendChild(img)
}

//challeng 3 Rock paper scissors
function rpsGame(yourChioce) {
    console.log(yourChioce.src);
    let humanChoice, botChoice;
    humanChoice = yourChioce.id;
    console.log(humanChoice)
}