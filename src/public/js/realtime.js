const socket = io();

document.getElementById("addForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        title: e.target.title.value,
        price: e.target.price.value
    };
    socket.emit("new-product", data);
});

document.getElementById("deleteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    socket.emit("delete-product", e.target.id.value);
});

socket.on("update-products", (products) => {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    products.forEach(p => {
        const li = document.createElement("li");
        li.id = p.id;
        li.innerText = `${p.title} - $${p.price}`;
        list.appendChild(li);
    });
});

socket.on("product-error", (msg) => {
    alert("Error: " + msg);
});