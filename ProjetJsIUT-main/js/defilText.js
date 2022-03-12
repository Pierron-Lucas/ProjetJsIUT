var chaine = "Accéder à toute la documentation : </br> Présentation équipe, outils utilisés, les difficultés... ";
var nb_car = chaine.length; 
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;

for (i=0; i<nb_car; i++) {
    texte[i] = txt+tableau[i];
    var txt = texte[i];
}

actual_texte = 0;
function changeMessage(){
    document.getElementById("header-text-page").innerHTML = texte[actual_texte];
    actual_texte++;
    if(actual_texte >= texte.length)
    actual_texte = nb_msg;
}
if(document.getElementById)
    setInterval("changeMessage()",30) /* la vitesse de defilement (plus on a une valeur faible plus 
texte s'affiche rapidement) */