import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like  />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing like component", () => {

    it("Que por defecto, el componente muestre en el parrafo Likes:0", () => {
        const p = container.querySelector("p");
        expect(p.textContent).toBe("Likes: 0");
    });

    it("Incrementar en 1 el numero de likes cuando se haga click en like", () => {
        const boton = container.querySelector("button");
        const p = container.querySelector("p");
        const texto = p.textContent;
        const valor = parseInt(texto.split(" ")[1]);
        
        act(() => {
          boton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });

        const incremento = valor + 1;
        expect(p.textContent).toBe("Likes: "+incremento);
    });

    it("Decrementar en 1 el numero de likes cuando se haga click en dislike", () => {
        const boton = container.querySelectorAll("button")[1];
        const p = container.querySelector("p");
        const texto = p.textContent;
        const valor = parseInt(texto.split(" ")[1]);
          
        act(() => {
          boton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        const decremento = valor - 1;
        expect(p.textContent).toBe("Likes: "+decremento);
    });

});