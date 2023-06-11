fetch('https://diwserver.vps.webdock.cloud/products/')
    .then(res => res.json())
    .then(data => {
        let str = ''
        for (let i = 0; i < data.products.length; i++) {
            let produto = data.products[i]
            str += `<div class="card col-md-12 col-lg-4" style="margin-bottom: 5px; margin-top: 5px; padding: 10px;">
                        <img src="${produto.image}" class="card-img-top"">
                        <div class="card-body">
                            <h5 class="card-title">${produto.title}</h5>
                            <p>Lançamento: ${produto.year}</p>
                            <p>Avaliação: ${produto.rating.rate}</p>
                            <p>Preço: R$${produto.price},99</p>
                            <a href="detalhes.html?id=${produto.id}" class="btn btn-success">Detalhes</a>
                        </div>
                        </div>`
        }
        document.getElementById("produtos").innerHTML = str
    })