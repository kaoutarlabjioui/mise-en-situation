const QUESTIONS =[
{

question: "Quel élément HTML est utilisé pour créer un lien hypertexte ?",
reponse:"<a>"

},
{

 question: "Quel élément HTML est utilisé pour créer un lien hypertexte ?",
 reponse:"<a>"
 },
 {

 question: "Quel élément HTML est utilisé pour créer un lien hypertexte ?",
 reponse:"<a>"
},

]

const Qplace1 = document.getElementById("q1");
const Rplace1 = document.getElementById("collapseOne");
const Qplace2 = document.getElementById("q2");
const Rplace2 = document.getElementById("collapseTwo");
const Qplace3 = document.getElementById("q3");
const Rplace3= document.getElementById("collapseThree");
var NbQ=0;
function rempliData(){
       Qplace1.textContent=QUESTIONS[NbQ].question;
       Rplace1.textContent=QUESTIONS[NbQ].reponse;
       Qplace2.textContent=QUESTIONS[NbQ].question;
       Rplace2.textContent=QUESTIONS[NbQ].reponse;
       Qplace3.textContent=QUESTIONS[NbQ].question;
       Rplace3.textContent=QUESTIONS[NbQ].reponse;

    }
rempliData();
// for (var NbQ = 0; NbQ < QUESTIONS.length; NbQ++) {
    // rempliData();
// }




























