const total=document.getElementById("total");
const death=document.getElementById("death");
const recover=document.getElementById("recover");
const btn = document.getElementById("btn");

function reload() {
    location.reload();
    init();
}

$(document).ready(function(){
    
    init();
    function init() {
        var url = "https://corona.askbhunte.com/api/v1/data/nepal"
        var api = '';
        $.get(url, function (api) {
            console.log(api.recovered);
            recover.innerText = api.recovered;
            death.innerText = api.deaths;
            total.innerText = api.tested_positive;
        })
    }
    
})