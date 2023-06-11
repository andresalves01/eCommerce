const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('id');
fetch(`https://diwserver.vps.webdock.cloud/products/${title}`)
    .then(res => res.json())
    .then(data => {
        let str = ''
        let produto = data
        str += `<div class="row">
        <div class="col-lg-4 m-2">
            <img src="${produto.image}" style="height: 500px;" class="card-img-top">
        </div>
        <div class="col-lg-6 m-3">
            <h1><b>${produto.title}</b></h1>
            <h4>Valor: R$${produto.price},90</h4>
            <p>${produto.description}
            </p>
            <p>Avaliaçôes: ${produto.rating.rate} (${produto.rating.count})</p>
        </div>
    </div>`
        document.getElementById("produtos").innerHTML = str
    })