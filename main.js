async function getdata() {
    
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        const result = products.map(function (ele) {
            return `
                <div class="product">
                    <h2>${ele.title}</h2>
                    <img src=${ele.thumbnail} />
                    <span>${ele.price}$</span>
                    <p>${ele.brand}</p>
                    <button onclick="getDetails(${ele.id})">Details</button>
                </div>
            `;
        }).join('');

        document.querySelector(".products").innerHTML = result;
    
}
 async function getDetails(productId) {
    console.log(window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = await response.data;
    const product = data.products;
    const result = product.map(function(ele){
        return `<li>${ele}</li>
        `;
    }).join('');
    document.queryselector(".products").innerHtml="";
    document.querySelector(".details").innerHTML = result;
}
getdata();

   