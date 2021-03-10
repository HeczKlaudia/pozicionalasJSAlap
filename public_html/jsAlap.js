//alert("Hello világ section!");
document.write("Hello world section!");
console.log("üzenet - debug");
var valtA = "";
var valtB = "";
var valtA = "";

function szamolas() {
    valtA = document.getElementById("a").value;
    valtB = document.getElementById("b").value;
    var muvJel = document.getElementById("muv").value;
    if (muvJel==="+") {
        var osszeg=osszead();
    }
    else if (muvJel==="-") {
    var osszeg = Number(valtA) - Number(valtB);
    }
    else if (muvJel==="*") {
    var osszeg = Number(valtA) * Number(valtB);
    }
    else if (muvJel==="/") {
    var osszeg = Number(valtA) / Number(valtB);
    }
    document.getElementById("szoveg").innerHTML = osszeg;
}

function osszead() {
    var osszeg = Number(valtA) + Number(valtB);
    return osszeg;
}