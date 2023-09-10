// membuat variabel berisi nilai tinggi badan siswa lau diurutkan dari yang paling tinggi 

var akbar = 170;
var chandra = 169;
var iqbal = 100;


console.log("Yang paling tinggi adalah" )
if (iqbal>akbar && iqbal>chandra){
    console.log(iqbal)
    nama = "iqbal"
}
else if (akbar>iqbal && akbar>chandra){
    console.log(akbar)
    nama = "iqbal"
}
else{
    console.log(chandra)
    nama = "iqbal"
}

console.log("Yang paling tinggi kedua adalah")
if (iqbal<akbar && iqbal>chandra || iqbal>akbar && iqbal<chandra){
    console.log(iqbal)
}
else if (akbar<iqbal && akbar>chandra || akbar>iqbal && akbar<chandra){
    console.log(akbar)
}
else{
    console.log(chandra)
}

console.log("Yang paling pendek adalah")
if (iqbal<akbar && iqbal<chandra){
    console.log(iqbal)
}
else if (akbar<iqbal && akbar<chandra){
    console.log(akbar)
}
else{
    console.log(chandra)
}