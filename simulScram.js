function genScram()
{
    var textbox = document.getElementById("scram");
    var s = "";
    var matrix = ["dl", "R", "DR", "ur", "L", "UL", "\\"];
    for(var i = 0; i < 7; i++)
    {
        s += matrix[i];
        s += "("
        var randNum = Math.floor(Math.random() * 12) - 5;
        s += randNum;
        s += ", ";
        var randNum2 = Math.floor(Math.random() * 12) - 5;
        s += randNum2;
        s += ") ";
    }    
    textbox.innerHTML = s;
}