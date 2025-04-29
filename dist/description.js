const products = {
    1: { name: "iPhone 15 Pro", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8fHx8",price:"$999.99",desp:"this is sample disp 1" },
     };
    

const para=new URLSearchParams(window.location.search);
const id=para.get("id");
if(products[id]){
    document.getElementById("img").src=products[id].img;
    document.getElementById("name").innerText=products[id].name;
    document.getElementById("price").textContent=products[id].price;
    document.getElementById("desp").textContent=products[id].desp;
}
else{
    document.getElementById("title").textContent="Product not found";
    document.getElementById("desp").textContent="";
}