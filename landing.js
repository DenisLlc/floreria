var btnAbrirIndex = document.getElementById('btn-abrir-index');
var url="index.html";
btnAbrirIndex.addEventListener('click', function(){
    abrirEnPestana(url);
});
function abrirEnPestana(url) {
    var a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
}