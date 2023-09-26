"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener("DOMContentLoaded", function () {
    var spinner = document.querySelector("#spinner");
    if (spinner) {
        spinner.style.display = "none";
    }
    var todo = document.querySelector("#all");
    if (todo) {
        todo.classList.remove("todo");
    }
});
function getProducts(data) {
    fetch("https://fakestoreapi.com/products")
        .then(function (response) { return response.json(); })
        .then(function (product) { return data(product); })
        .catch(function (error) {
        console.error("Hubo un error en la solicitud:", error);
    });
}
getProducts(function (data) {
    var tabla = document.querySelector(".tbody");
    if (tabla) {
        data.forEach(function (producto) {
            // Creamos nuestros elementos para la primer fila de la tabla
            var tr = document.createElement("tr");
            var th = document.createElement("th");
            var tduno = document.createElement("td");
            var tddos = document.createElement("td");
            var tdtres = document.createElement("td");
            var tdcuatro = document.createElement("td");
            var tdcinco = document.createElement("td");
            var tdseis = document.createElement("td");
            // Nos encargamos de la imagen
            var img = document.createElement("img");
            img.src = producto.image;
            // Agregamos elementos a nuestro tr, th y td
            th.innerHTML = producto.title;
            tduno.appendChild(img);
            tddos.innerHTML = producto.price;
            tdtres.innerHTML = producto.description;
            tdcuatro.innerHTML = producto.category;
            tdcinco.innerHTML = producto.rating.count;
            tdseis.innerHTML = producto.rating.rate;
            // Agrego los th y td a nuestro tr
            tr.appendChild(th);
            tr.appendChild(tduno);
            tr.appendChild(tddos);
            tr.appendChild(tdtres);
            tr.appendChild(tdcuatro);
            tr.appendChild(tdcinco);
            tr.appendChild(tdseis);
            // Agrego el tr a nuestro tbody
            tabla.appendChild(tr);
        });
    }
});
