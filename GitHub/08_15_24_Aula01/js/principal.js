var banners = ["Os melhores do Brasil", "Qualidade e preço baixo!", "Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var banner = 0;
console.log("Hello world!");
alert("Hello! I am an alert box!!");

function trocarBanner(){
    banner = (banner + 1) % 4;
    document.querySelector("h2#mensagem").textContent = banners[banner];
}
setInterval(trocarBanner, 1000);
