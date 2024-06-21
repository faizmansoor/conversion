function convertctof(){
    var cel = document.getElementById("c").value;
    var far = (cel*9/5) + 32;
    document.getElementById("f").value = far;

}
function convertkgtolbs(){
    var kilo = document.getElementById("kWeight").value;
    var lbs = (kilo * 2.2);
    document.getElementById("lWeight").value = lbs;
}
function convertkmtom(){
    var kilom = document.getElementById("kDistance").value;
    var miles = kilom * 0.62137;
    document.getElementById("mDistance").value = miles;
}