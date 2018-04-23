function init(){
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    var out="";
    for (var key in data){
        out += `<li class="products__item">`;
        out += `<a href="#" class="products__link">`;
        out += `<div class="products__price">`;
        out += `<p class="products__new-price">$${+data[key].new_price}<br>`;
        out += `<p class="products__base-price">$${data[key].base_price}<br>`;
        out += `<span class="products__old-price">$${data[key].old_price}</span></p>`;
        out += `<p class="products__sale">-${data[key].sale}%</p>`;
        out += `</div>`;
        out += `<img class="products__img" src="${data[key].img}" alt="cross-img" width="200">`;
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