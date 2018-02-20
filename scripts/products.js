//when window of products is opened it will load the product images
window.addEventListener('load', ProductLoad);

//array of image objects
let clothProducts =[{product: "dress", name: "Amalia - Espirit", price: 299, description: "Svart partyklänning i spets", imgUrl: "images/products/DAM/dresses/d%20(3).jpg", idDiv: "product1", buttonClass: "shoppingBag"},
    {product: "skirt", name: "Emla - Ivy", price: 199, description: "Knälång röd kjol med skärp", imgUrl: "images/products/DAM/skirts/d-s%20(5).jpg", idDiv: "product2",  buttonClass: "shoppingBag" },
    {product: "trousers", name: "Cindy - Dorthy Perkins", price: 599, description: "One piece byxor med tryck", imgUrl:"images/products/DAM/trousers/d-t%20(3).jpg", idDiv: "product3",  buttonClass: "shoppingBag"},
    {product: "jacket", name: "Davis - Clay", price: 599, description: "Denimjacka med fina detaljer", imgUrl: "images/products/HERR/jackets_men/m-j%20(1).jpg", idDiv: "product4",  buttonClass: "shoppingBag"},
    {product: "dress", name: "Nora - Mini", price: 399, description: "Tvåfärgad klänning med paljetter för barn", imgUrl:"images/products/BARN/dresses/ch-d%20(3).jpg", idDiv: "product5",  buttonClass: "shoppingBag"},
    {product: "jumper", name: "Enry - Paolo", price: 599, description: "Blå tröja i jersey", imgUrl: "images/products/HERR/jumpers_men/m-ju%20(3).jpg", idDiv: "product6",  buttonClass: "shoppingBag"}
    ];

//function to loop and create elements with content
function ProductLoad(){
    for(let places = 0; places <clothProducts.length; places++){

        let existingSection = document.getElementById("topSeller");

        let newFigures = document.createElement("figure");
        existingSection.appendChild(newFigures);
        newFigures.setAttribute("class", "firstProduct");

        let newDivs = document.createElement("div");
        newFigures.appendChild(newDivs);
        newDivs.setAttribute("id", clothProducts[places].idDiv);

        let images = document.createElement("img");
        newDivs.appendChild(images);
        images.setAttribute("src", clothProducts[places].imgUrl);

        let pHeading = document.createElement("p");
        let textHeading = document.createTextNode(clothProducts[places].name);
        newFigures.appendChild(pHeading);
        pHeading.appendChild(textHeading);
        pHeading.style.margin = "8px";

        let pPrice = document.createElement("p");
        let textPrice = document.createTextNode(clothProducts[places].price.toString() + " SEK");
        newFigures.appendChild(pPrice);
        pPrice.appendChild(textPrice);
        pPrice.style.margin = "8px";

        let descriptionProduct = document.createElement("p");
        let textProduct = document.createTextNode(clothProducts[places].description);
        newFigures.appendChild(descriptionProduct);
        descriptionProduct.appendChild(textProduct);
        descriptionProduct.style.fontSize = "9pt";
        descriptionProduct.style.fontFamily = "Century Gothic";
        descriptionProduct.style.margin = "8px";
        descriptionProduct.style.width = "180px";

        let btnShoppBag = document.createElement("button");
        newFigures.appendChild(btnShoppBag);
        btnShoppBag.setAttribute("class", clothProducts[places].buttonClass);

    }

}