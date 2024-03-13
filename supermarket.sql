-- Tabla de Categorías
CREATE TABLE categorias (
    idCategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE
);

-- Tabla de Productos
CREATE TABLE productos (
    idProductos INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    idCategoria INT,
    precio DECIMAL(10, 2),
    stock INT,
    FOREIGN KEY (idCategoria) REFERENCES categorias(idCategoria)
);

-- Tabla de Clientes
CREATE TABLE clientes (
    idClientes INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(255),
    numeroTelefono VARCHAR(15),
    direccionEntrega VARCHAR(255)
);

-- Tabla de Pedidos
CREATE TABLE pedidos (
    idPedido INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT,
    fechaHora DATETIME,
    estado VARCHAR(50),
    FOREIGN KEY (idCliente) REFERENCES clientes(idCliente)
);

-- Detalle del Pedido
CREATE TABLE detallePedido (
    idDetalle INT AUTO_INCREMENT PRIMARY KEY,
    idPedido INT,
    idProducto INT,
    cantidad INT,
    precioUnitario DECIMAL(10, 2),
    FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido),
    FOREIGN KEY (idProducto) REFERENCES productos(idProducto)
);


-- Insertar al menos un registro en la tabla de Categorías
INSERT INTO categorias (idCategoria, nombre) VALUES (1, 'Aseo');

-- Insertar al menos un registro en la tabla de Productos
INSERT INTO productos (idProductos, nombre, idCategoria, precio, stock) VALUES (1, 'Arroz', 1, 6000, 100);

-- Insertar al menos un registro en la tabla de Clientes
INSERT INTO clientes (idClientes, nombres, numeroTelefono, direccionEntrega) VALUES (1, 'Miguel Tabares', '3126629424', 'Cra. 68 # 37 - 24');

-- Insertar al menos un registro en la tabla de Pedidos
INSERT INTO pedidos (idPedido, idCliente, fechaHora, estado) VALUES (1, 1, NOW(), 'pendiente');

-- Insertar al menos un registro en la tabla de Detalle del Pedido
INSERT INTO detallePedido (idDetalle, idPedido, idProducto, cantidad, precioUnitario) VALUES (1, 1, 1, 2, 6000);
