// Colección de Categorías
db.createCollection("categorias", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Debe ser una cadena y es obligatoria"
                }
            }
        }
    }
});

// Colección de Productos
db.createCollection("productos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "idCategoria", "precio", "stock"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Debe ser una cadena y es obligatoria"
                },
                idCategoria: {
                    bsonType: "objectId",
                    description: "Debe ser un ObjectId y es obligatorio"
                },
                precio: {
                    bsonType: "decimal",
                    minimum: 0,
                    description: "Debe ser un número decimal no negativo y es obligatorio"
                },
                stock: {
                    bsonType: "int",
                    minimum: 0,
                    description: "Debe ser un número entero no negativo y es obligatorio"
                }
            }
        }
    }
});

// Colección de Clientes
db.createCollection("clientes", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombres", "numeroTelefono"],
            properties: {
                nombres: {
                    bsonType: "string",
                    description: "Debe ser una cadena y es obligatoria"
                },
                numeroTelefono: {
                    bsonType: "string",
                    pattern: "^[0-9]+$",
                    description: "Debe ser una cadena numérica y es obligatoria"
                },
                direccionEntrega: {
                    bsonType: "string",
                    description: "Puede ser una cadena"
                }
            }
        }
    }
});

// Colección de Pedidos
db.createCollection("pedidos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["idCliente", "fechaHora", "estado"],
            properties: {
                idCliente: {
                    bsonType: "objectId",
                    description: "Debe ser un ObjectId y es obligatorio"
                },
                fechaHora: {
                    bsonType: "date",
                    description: "Debe ser una fecha y hora y es obligatoria"
                },
                estado: {
                    bsonType: "string",
                    description: "Debe ser una cadena y es obligatoria"
                }
            }
        }
    }
});

// Colección de Detalle del Pedido
db.createCollection("detallePedido", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["idPedido", "idProducto", "cantidad", "precioUnitario"],
            properties: {
                idPedido: {
                    bsonType: "objectId",
                    description: "Debe ser un ObjectId y es obligatorio"
                },
                idProducto: {
                    bsonType: "objectId",
                    description: "Debe ser un ObjectId y es obligatorio"
                },
                cantidad: {
                    bsonType: "int",
                    minimum: 0,
                    description: "Debe ser un número entero no negativo y es obligatorio"
                },
                precioUnitario: {
                    bsonType: "decimal",
                    minimum: 0,
                    description: "Debe ser un número decimal no negativo y es obligatorio"
                }
            }
        }
    }
});


// Insertar al menos un registro en la colección de Categorías
db.categorias.insertOne({ idCategoria: 1, nombre: "Aseo" });

// Insertar al menos un registro en la colección de Productos
db.productos.insertOne({ idProducto: 1, nombre: "Arroz", idCategoria: 1, precio: 6000, stock: 100 });

// Insertar al menos un registro en la colección de Clientes
db.clientes.insertOne({ idCliente: 1, nombres: "Miguel Tabares", numeroTelefono: "3126629424", direccionEntrega: "Cra. 68 # 37 - 24" });

// Insertar al menos un registro en la colección de Pedidos
db.pedidos.insertOne({ idPedido: 1, idCliente: 1, fechaHora: new Date(), estado: "pendiente" });

// Insertar al menos un registro en la colección de Detalle del Pedido
db.detallePedido.insertOne({ idDetalle: 1, idPedido: 1, idProducto: 1, cantidad: 2, precioUnitario: 6000 });
