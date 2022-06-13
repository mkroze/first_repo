//-------------------------------------------------
//  Array of objects
//-------------------------------------------------
const cartContent = [
    {
        id:0,
        name: "Laisse",
        price: 1,
        number: 1,
        url_img:"Images/laisse.jpg",
        isLiked : false
    },
    {
        id:1,
        "name": "Collier",
        "price": 10,
        "number": 1,
        "url_img": "Images/collier.jpg",
        isLiked : false
    },
    {
        id:2,
        "name": "Gamelle",
        "price": 100,
        "number": 1,
        "url_img": "Images/gamelle.jpg",
        isLiked : false
    },
    {
        id:3,
        "name": "Laisse",
        "price": 1000,
        "number": 1,
        "url_img": "Images/laisse.jpg",
        isLiked : false
    },
    {
        id:4,
        "name": "Malle",
        "price": 10000,
        "number": 1,
        "url_img": "Images/malle.jpg",
        isLiked : false
    },
    {
        id:5,
        "name": "Medaillon",
        "price": 100000,
        "number": 1,
        "url_img": "Images/medaillon.jpg",
        isLiked : false
    },
    {
        id:6,
        "name": "Panier",
        "price": 1000000,
        "number": 1,
        "url_img": "Images/panier.jpg",
        isLiked : false
    },
    {
        id:7,
        "name": "Pince",
        "price": 10000000,
        "number": 1,
        "url_img": "Images/pince.jpg",
        isLiked : false
    },
    {
        id:8,
        "name": "Thermometre",
        "price": 100000000,
        "number": 1,
        "url_img": "Images/thermometre.jpg",
        isLiked : false
    }
];
//-------------------------------------------------
//  Functions
//-------------------------------------------------
function getTotal(arr){
    let sum=0;
    for(element of arr){
        sum+=(element.number*element.price);
    }
    return sum;
}

function displayItem(item){
    let card = document.createElement('div');
    card.setAttribute("class", "item");
    card.setAttribute("id",item.id);

    let zerobox = document.createElement('div');
    zerobox.setAttribute("class", "col1");
    let name = document.createElement('h1');
    name.innerHTML= item["name"];
    let price = document.createElement('p');
    price.innerHTML=item.price; 
    zerobox.appendChild(name);
    zerobox.appendChild(price);
    card.appendChild(zerobox);

    let image = document.createElement('img');
    image.setAttribute("src",item.url_img);
    card.appendChild(image);
   
    let firstBox = document.createElement('div');
    firstBox.setAttribute("class", "col1");

    
    let heart = document.createElement('img');
    heart.setAttribute("onclick", "like(this)");
    heart.setAttribute("src", "Images/whiteHeart.svg");
    
    let buttonDelete = document.createElement('img');
    buttonDelete.setAttribute("onclick", "deleteItem(this)");
    buttonDelete.setAttribute("src", "Images/trash.svg");

    firstBox.appendChild(heart);
    firstBox.appendChild(buttonDelete);
    card.appendChild(firstBox);

    let secondBox = document.createElement('div');
    secondBox.setAttribute("class", "row1");

    let buttonMinus = document.createElement('button');
    buttonMinus.innerText='-';
    buttonMinus.setAttribute("onclick", "removeOne(this)");
    let quantity = document.createElement('p');
    
    quantity.innerHTML=item.number;
    let buttonPlus = document.createElement('button');
    buttonPlus.innerText='+';
    buttonPlus.setAttribute("onclick", "addOne(this)");

    secondBox.appendChild(buttonMinus);
    secondBox.appendChild(quantity);
    secondBox.appendChild(buttonPlus);
    card.appendChild(secondBox);
    
    return card;
}
function displayAllItems(){
    for ( element of cartContent){
        let item = displayItem(element);
        document.getElementById('cart').appendChild(item);
    }
   
}
function displayTotal(){
    let sumDiv = document.createElement('div');
    sumDiv.setAttribute('class','item');
    sumDiv.setAttribute('id','total');
    let sumP = document.createElement('p');
    
    sumP.innerText = 'Le total de votre panier est : ' + getTotal(cartContent);
    
    sumDiv.appendChild(sumP);
    document.getElementById('cart').appendChild(sumDiv);
}
function updateTotal(){
    
    document
    .getElementById('total')
    .getElementsByTagName('p')[0]
    .innerHTML = 'Le total de votre panier est : ' + getTotal(cartContent);
    
}
function deleteItem(value){
    
    document
        .getElementById(value.parentNode.parentNode.id)
        .parentNode
        .removeChild(document.getElementById(value.parentNode.parentNode.id));
        cartContent[value.parentNode.parentNode.id].number=0;
        updateTotal();
}
function removeOne(value){

    if(cartContent[value.parentNode.parentNode.id].number>0){

        let numberz = value
            .parentNode
            .parentNode
            .getElementsByClassName("row1")[0]
            .getElementsByTagName('p')[0];
        cartContent[value.parentNode.parentNode.id].number--;
        numberz.innerText = cartContent[value.parentNode.parentNode.id].number;
        updateTotal();
    }    
}
function addOne(value){
    
    let numberz = value
        .parentNode
        .parentNode
        .getElementsByClassName("row1")[0]
        .getElementsByTagName('p')[0];
    cartContent[value.parentNode.parentNode.id].number++;
    numberz.innerText = cartContent[value.parentNode.parentNode.id].number;
    updateTotal();
}
function like(value){
    console.log('i am a viking');
    
    let isLiked = cartContent[value.parentNode.parentNode.id].isLiked;
    if(isLiked){
        cartContent[value.parentNode.parentNode.id].isLiked=false;
        value.setAttribute("src", "Images/whiteHeart.svg");
    }
    else{
        cartContent[value.parentNode.parentNode.id].isLiked=true;
        value.setAttribute("src", "Images/redHeart.svg");
    }
}
/*
    const node = document.createElement("li");
    const textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
*/