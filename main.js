function calculateBasic() {
    var hypotonuse = document.getElementById("hypinput").value;
    var oppangle = document.getElementById("oppanginput").value;
    var adjangle = document.getElementById("adjanginput").value;
    var sin = parseInt(oppangle/hypotonuse);
    document.getElementById("sindiv").innerHTML = "Sineϴ: " + sin;
    var cos = parseInt(adjangle/hypotonuse);
    document.getElementById("cosdiv").innerHTML = "Cosineϴ: " + cos;
    var tan = parseInt(oppangle/adjangle);
    document.getElementById("tandiv").innerHTML = "Tangentϴ: " + tan;
    

}


function resetBasic() {
    var hypotonuse = document.getElementById("hypinput").value = "";
    var oppangle = document.getElementById("oppanginput").value = "";
    var adjangle = document.getElementById("adjanginput").value = "";
    document.getElementById("sindiv").innerHTML = "Sineϴ: "
    document.getElementById("cosdiv").innerHTML = "Cosineϴ: "
    document.getElementById("tandiv").innerHTML = "Tangentϴ: "

}

function resetSecant() {
    document.getElementById("secantinput").value = ""
}
function resetCosecant() {
    document.getElementById("cosecantinput").value = ""
}
function resetCotangent() {
    document.getElementById("cotangentinput").value = ""
    document.getElementById("cotangentinput1").value = ""

}


function calc1() {
    var sec = "1/0";
    var csc = "1/1";
    var sec2 = "0";
    var csc2 = "1";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;

    
}
function calc2() {
    var sec = "1/1/2";
    var csc = "1/rt(3)/2";
    var sec2 = "1/2";
    var csc2 = "rt(3)/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc3() {
    var sec = "1/rt(2)/2";
    var csc = "1/rt(2)/2";
    var sec2 = "rt(2)/2";
    var csc2 = "rt(2)/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc4() {
    var sec = "1/rt(3)/2";
    var csc = "1/1/2";
    var sec2 = "rt(3)/2";
    var csc2 = "1/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc5() {
    var sec = "1/1";
    var csc = "1/0";
    var sec2 = "1";
    var csc2 = "0";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc6() {
    var sec = "1/rt(3)/2";
    var csc = "1/-1/2";
    var sec2 = "rt(3)/2";
    var csc2 = "-1/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc7() {
    var sec = "1/rt(2)/rt(2)";
    var csc = "1/-rt(2)/rt(2)";
    var sec2 = "rt(2)/rt(2)";
    var csc2 = "-rt(2)/rt(2)";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc8() {
    var sec = "1/-(1/2)";
    var csc = "1/-rt(3)/2";
    var sec2 = "-(1/2)";
    var csc2 = "-rt(3)/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc9() {
    var sec = "1/0";
    var csc = "1/-1";
    var sec2 = "0";
    var csc2 = "-1";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc10() {
    var sec = "1/-1";
    var csc = "1/-rt(3)/2";
    var sec2 = "-1";
    var csc2 = "-rt(3)/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc11() {
    var sec = "1/-rt(2)/2";
    var csc = "1/-rt(2)/2";
    var sec2 = "-rt(2)/2";
    var csc2 = "-rt(2)/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc12() {
    var sec = "1/-rt(3)/2";
    var csc = "1/-1/2";
    var sec2 = "-rt(3)/2";
    var csc2 = "-1/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc13() {
    var sec = "1/-1";
    var csc = "1/0";
    var sec2 = "-1";
    var csc2 = "0";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc14() {
    var sec = "1/-rt(3)/2";
    var csc = "1/1/2";
    var sec2 = "-rt(3)/2";
    var csc2 = "1/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc15() {
    var sec = "1/-rt(2)/2";
    var csc = "1/rt(2)/2";
    var sec2 = "-rt(2)/2";
    var csc2 = "rt(2)/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}
function calc16() {
    var sec = "1/-1/2";
    var csc = "1/rt(3)/2";
    var sec2 = "-1/2";
    var csc2 = "rt(3)/2";
    var cot = sec2 + "/" + csc2;
    document.getElementById("sec").innerHTML = "Secϴ = " + sec;
    document.getElementById("csc").innerHTML = "Cscϴ = " + csc;
    document.getElementById("cot").innerHTML = "Cotϴ = " + cot;
    document.getElementById("cos").innerHTML = "Cosϴ = " + sec2;
    document.getElementById("sin").innerHTML = "Sinϴ = " + sec2;
    var tan = csc2 + "/" + sec2;
    document.getElementById("tan").innerHTML = "Tanϴ = " + tan;
}