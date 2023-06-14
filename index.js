let products = JSON.parse(localStorage.getItem('cars'));

Object.keys(products).forEach((car) => {
    let carlist = products[car];
let displayFeat = document.querySelector('#displayFeat');
console.log(products[car]);
displayFeat.innerHTML += `
<div
class="col-sm-4 mx-2 my-3 testos"
>
<div class="im">
    <img src=${carlist.image} alt="" />
</div>
<div class="boda">
  <h2>${ carlist.date }</h2>
  <p>R ${ carlist.price }</p>
</div>
</div>
`})