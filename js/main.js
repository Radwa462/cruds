//localStorage.setItem("name", "Radwa")
//console.log(localStorage.getItem("name"));
//localStorage.removeItem()
// console.log(localStorage);


var productlist 
if(localStorage.getItem("productlist")== null){
    productlist =[]
}
else{
    productlist = JSON.parse( localStorage.getItem("productlist"))
    displayproducts(productlist)
}


var teto
var productname = document.getElementById("productName")
var productprice = document.getElementById("productprice")
var productcatagory = document.getElementById("productcatagory")
var productDesc = document.getElementById("productDesc")
//var productlist = [ ];
var SaveBtn =document.getElementById("SaveBtn")

function localStorageupdate(){
    localStorage.setItem("productlist" , JSON.stringify(productlist))
}

//console.log(productName ,productprice ,productcatagory ,productDes);

function addProduc()  {
    var product = {
       name: productname.value,
       price: productprice.value,
       categ: productcatagory.value,
       Desc: productDesc.value,
    };
      productlist.push(product);
      localStorageupdate()
    // localStorage.setItem("productlist" , JSON.stringify(productlist))
    console.log(productlist);
    displayproducts(productlist);
    clearInput ();

} 

function displayproducts(data){
    var cartona =``

    for(var i=0 ; i<data.length ; i++){
         cartona +=` <tr>
                <td>${i}</td>
                <td>${data[i].name}</td>
                <td>${data[i].price}</td>
                <td>${data[i].categ}</td>
                <td>${data[i].desc}</td>
                <td> <button onclick="updateproduct(${i})" class="btn btn-warning"> update </button></td>
                <td> <button onclick=" deleteproduct(${i})" class="btn btn-danger"> delete </button></td>
            </tr>`
        }

    document.getElementById("tbody").innerHTML = cartona
}

var testinput = document.getElementById("test")

function sendDate(){
   // console.log("Say Hi");
    
console.log(testinput.value);
}

var add =document.getElementById("add")
var update =document.getElementById("update")

function show1(){
    console.log("Hello from update");
    add.classList.remove("d-none")
    update.classList.add("d-none")
}
function show2(){
    console.log("Hello from update");
    add.classList.add("d-none")
    update.classList.remove("d-none")
}  


function deleteproduct(index){
    
    productlist.splice(index,1)
    localStorageupdate()
    console.log(productlist);
    displayproducts(productlist)
}



function clearInput (){
 productname.value ='';
 productprice.value ='';
 productcatagory.value='';
 productDesc.value='';
}

function updateproduct(index){
  productname.value = productlist[index].name;
   productprice.value = productlist[index].price;
 productcatagory.value= productlist[index].catag;
 productDesc.value= productlist[index].desc;
 teto = index
 SaveBtn.classList.remove("d-none")
 console.log(teto);
 
}

function Saveupdate(){
    productlist[teto].name=productname.value;
    productlist[teto].price = productprice.value;
    productlist[teto].catag =  productcatagory.value;
    productlist[teto].desc = productDesc.value;
    localStorageupdate()
    displayproducts(productlist)
    console.log(productlist);
    SaveBtn.classList.add("d-none")
    clearInput ()
}


function searchprodect(data){
console.log(data);
var newprodectlist =[]
for( var i=0 ; i< productlist.length ; i++){
   
   
    if(productlist[i].name.toLowerCase().includes(data.toLowerCase())){
       
       newprodectlist.push(productlist[i])
        console.log("fonded",productlist[i]);
    }
       displayproducts(newprodectlist);
}


}