const pizzas = [
    {
        id: 1,
        nombre: "grandeMuzza",
        ingredientes: ["muzza", "brocoli"],
        precio: 123,
    },
    {
        id: 2,
        nombre: "grandeAlbaca",
        ingredientes: ["albaca", "pepinos"] ,
        precio: 456 ,
    },
    {
        id: 3,
        nombre: "grandePalmitos",
        ingredientes: ["palmitos", "salsa"],
        precio: 789,
    },
    {
        id: 4,
        nombre: "grandeHuevo",
        ingredientes:["huevo", "tomate"],
        precio: 321,
    },
    {
        id: 5,
        nombre: "grandeMorron",
        ingredientes: ["morron", "zapallo"],
        precio: 654,
    },
    {
        id: 6,
        nombre: "grandeJamon",
        ingredientes: ["jamon", "zanahoria"],
        precio: 987,
    }
];

// A-

// const idImpares = pizzas.filter((pizza) => {
//     return pizza.id % 2 === 1;
// });

// idImpares.forEach((pizza) =>{
//     console.log(`La ${pizza.nombre} tiene id impar`);
// });


// B-

// const pizzaconPrecio = (precio) => {
//     return pizzas.some( (pizza) => {
//         return pizza.precio < 600;
//     })  
//         ? console.log(`Hay pizzas menores a $600 `)
//         : console.log(`No hay pizzas menores a $600 `);
// };

// pizzaconPrecio();

// C-

// const precioynombrePizza = pizzas.filter((pizza) => {
//     return pizza.nombre && pizza.precio;
// });

// precioynombrePizza.forEach ((pizza) => {
//     console.log(` La ${pizza.nombre} tiene el valor de ${pizza.precio}`);
// })

// D-

// const ingredientesFiltro = pizzas.filter ((pizza) =>{
//         return pizza.ingredientes;
// });

// ingredientesFiltro.forEach((pizza) =>{
//     console.log(`La ${pizza.nombre} tiene los siguientes ingredientes ${pizza.ingredientes}.`);
// })
