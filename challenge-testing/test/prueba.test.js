const { CarritoCompra } = require("../index.js");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra(); // Crea una instancia nueva antes de cada prueba
  });

  it("agregarProducto agrega un producto al carrito", () => {
    const producto = { nombre: "Producto 1", precio: 10 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toContain(producto); // Verifica que el producto esté en el carrito
  });

  it("calcularTotal calcula correctamente el total de la compra", () => {
    // Agrega algunos productos al carrito
    carrito.agregarProducto({ nombre: "Producto 1", precio: 10 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 20 });
    carrito.agregarProducto({ nombre: "Producto 3", precio: 30 });

    expect(carrito.calcularTotal()).toBe(60); // Verifica que el total sea 60
  });

  it("aplicarDescuento aplica correctamente el descuento al total de la compra", () => {
    // Agrega algunos productos al carrito
    carrito.agregarProducto({ nombre: "Producto 1", precio: 10 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 20 });
    carrito.agregarProducto({ nombre: "Producto 3", precio: 30 });

    expect(carrito.aplicarDescuento(10)).toBe(54); // Aplica un descuento del 10%
  });
});
