function init(){
    $.getJSON("goods.json", goodsOut);
}

function initPop(){
    $.getJSON("goodspop.json", goodsOut);
}

function initTp(){
    $.getJSON("goodstp.json", goodsOut);
}

function goodsOut(data) {
    var out="";
    for (var key in data){
        out += `<li class="products__item">`;
        out += `<a href="#" class="products__link">`;
        out += `<div class="products__price">`;
        if (data[key].new_price != 0)
        out += `<p class="products__new-price">$${data[key].new_price.toFixed(2)}<br>`;
        if (data[key].base_price != 0)
        out += `<p class="products__base-price">$${data[key].base_price.toFixed(2)}<br>`;
        if (data[key].old_price != 0)
        out += `<span class="products__old-price">$${data[key].old_price.toFixed(2)}</span></p>`;
        out += `</div>`;
        if (data[key].sale != 0)
        out += `<p class="products__sale">-${data[key].sale}%</p>`;
        out += `<img class="products__img" src="${data[key].img}" alt="cross-img" width="255">`;
        out += `<div class="products__about">`;
        out += `<p class="products__sex">${data[key].sex}</p>`;
        out += `<p class="products__name">${data[key].name}</p>`;
        out += `<p class="products__order">#${data[key].order}</p>`;
        out += `</div>`;
        out += `</a>`;      
        out += `</li>`;      
    }
    $('.products__list').html(out);
}

$(document).ready(function(){
    init();
});

var prodnew = document.querySelector("#products-new");
var pop = document.querySelector("#products-popular");
var toppic = document.querySelector("#products-top_picks");
prodnew.onclick = init;
pop.onclick = initPop;
toppic.onclick = initTp;
