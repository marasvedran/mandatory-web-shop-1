/*<figure class="firstProduct">
    <div id="product1">
    <img src="images/products/DAM/dresses/d%20(3).jpg" alt="Bild på produkt dam">
    <p>Namn på produkten</p>
<p>Märke på produkten</p>
<p>Pris SEK</p>
<button class="shoppingBag"></button>
    <button class="heart-It"></button>
    </div>
    </figure>
    <figure class="firstProduct">
    <div id="product2">
    <img src="images/products/DAM/skirts/d-s(5).jpg" alt="Bild på röd kjol">
    <p>Namn på produkten</p>
<p>Märke på produkten</p>
<p>Pris SEK</p>
<button class="shoppingBag"></button>
    <button class="heart-It"></button>
    </div>
    </figure>
    <figure class="firstProduct">
    <div id="product3">
    <img src="images/products/DAM/trousers/d-t(3).jpg" alt="Rosa byxor">
    <p>Namn på produkten</p>
<p>Märke på produkten</p>
<p>Pris SEK</p>
<button class="shoppingBag"></button>
    <button class="heart-It"></button>
    </div>
    </figure>
    <figure class="firstProduct">
    <div id="product4">
    <img src="images/products/HERR/jackets_men/m-j(1).jpg" alt="Bild på denim jacka">
    <p>Namn på produkten</p>
<p>Märke på produkten</p>
<p>Pris SEK</p>
<button class="shoppingBag"></button>
    <button class="heart-It"></button>
    </div>
    </figure>
    <figure class="firstProduct">
    <div id="product5">
    <img src="images/products/BARN/dresses/ch-d(3).jpg" alt="Bild på klänning för barn">
    <p>Namn på produkten</p>
<p>Märke på produkten</p>
<p>Pris SEK</p>
<button class="shoppingBag"></button>
    <button class="heart-It"></button>
    </div>
    </figure>
    <figure class="firstProduct">
    <div id="product6">
    <img src="images/products/HERR/jumpers_men/m-ju(3).jpg" alt="Bild på blå tröja man">
    <p>Namn på produkten</p>
<p>Märke på produkten</p>
<p>Pris SEK</p>
<button class="shoppingBag"></button>
    <button class="heart-It"></button>
    </div>
    </figure>*/

//when window of products is opened it will load the product images
window.addEventListener('load', ProductLoad);


//array of image objects
let clothProducts =[{product: "dress", name: "Amalia - Espirit", price: 299, description: "Black party lace dress", imgUrl: "images/products/DAM/dresses/d%20(3).jpg", idDiv: "product1" },
    {product: "skirt", name: "Emla - Ivy", price: 199, description: "Red skirt, knee length with belt", imgUrl: "images/products/DAM/skirts/d-s%20(5).jpg", idDiv: "product2" },
    {product: "trousers", name: "Cindy - Dorthy Perkins", price: 599, description: "One piece trousers with print", imgUrl:"images/products/DAM/trousers/d-t%20(3).jpg", idDiv: "product3"},
    {product: "jacket", name: "Davis - Clay", price: 599, description: "Denim jacket for spring with nice details", imgUrl: "images/products/HERR/jackets_men/m-j%20(1).jpg", idDiv: "product4"},
    {product: "dress", name: "Nora - Mini", price: 399, description: "Two colored dress with sparkle for kids", imgUrl:"images/products/BARN/dresses/ch-d%20(3).jpg", idDiv: "product5"},
    {product: "jumper", name: "Enry - Paolo", price: 599, description: "Blue jersey jumpers", imgUrl: "images/products/HERR/jumpers_men/m-ju%20(3).jpg", idDiv: "product6"}
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
        ///images.setAttribute("width", "150px");
        //images.setAttribute("height", "210px");

        let pHeading = document.createElement("p");
        let textHeading = document.createTextNode(clothProducts[places].name);
        newFigures.appendChild(pHeading);
        pHeading.appendChild(textHeading);
        pHeading.style.margin = "8px";

        //get it to be in i own p not the existing one
        let pPrice = document.createElement("p");
        let textPrice = document.createTextNode(clothProducts[places].price.toString() + " SEK");
        newFigures.appendChild(pPrice);
        pPrice.appendChild(textPrice);
        pPrice.style.margin = "8px";



    }

}