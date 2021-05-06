const postOrder = () => {
    const newOrder = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        description: document.getElementById("description").value,
        //url: document.getElementById("url").value,
    };

    const apiOrders = "http://localhost:2023/api/orders";
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newOrder),
    };

    fetch(apiOrders, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alert(`Tu pedido se ha añadido correctamente ${data.newOrder.name}`);
            document.getElementById("name").value = "";
            document.getElementById("surname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("description").value = "";
            //document.getElementById("url").value = "";
        })
        .catch((error) => {
            console.error(error);
        });
};