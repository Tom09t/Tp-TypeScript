import { product } from "./types";

document.addEventListener("DOMContentLoaded", () => {
    const spinner = document.querySelector<HTMLDivElement>("#spinner");
    if (spinner) {
      spinner.style.display = "none";
    }
    const todo = document.querySelector<HTMLElement>("#all");
    if (todo) {
      todo.classList.remove("todo");
    }
  });
  
  function getProducts(data: (product: any) => void) {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((product) => data(product))
      .catch((error) => {
        console.error("Hubo un error en la solicitud:", error);
      });
  }
  
  getProducts((data) => {
    const tabla = document.querySelector<HTMLTableSectionElement>(".tbody");
  
    if (tabla) {
      data.forEach((producto: any) => {
        // Creamos nuestros elementos para la primer fila de la tabla
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const tduno = document.createElement("td");
        const tddos = document.createElement("td");
        const tdtres = document.createElement("td");
        const tdcuatro = document.createElement("td");
        const tdcinco = document.createElement("td");
        const tdseis = document.createElement("td");
        // Nos encargamos de la imagen
        const img = document.createElement("img");
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