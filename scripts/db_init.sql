CREATE TABLE IF NOT EXISTS "categories" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" CHAR(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS "products"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "name" CHAR(20) NOT NULL,
    "category" INTEGER NULL,
    "price" REAL NOT NULL,
    FOREIGN KEY ("category")
        REFERENCES "categories" ("id")
);

CREATE TABLE IF NOT EXISTS "orders"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "address" CHAR(70) NOT NULL,
    "phone" CHAR(12) NULL,
    "email" CHAR(32) NULL
);

CREATE TABLE IF NOT EXISTS "orders_product"(
    "order" INTEGER NOT NULL,
    "product" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    PRIMARY KEY ("order", "product"),
    FOREIGN KEY ("order")
        REFERENCES "orders" ("id"),
    FOREIGN KEY ("product")
        REFERENCES "products" ("id")
);
