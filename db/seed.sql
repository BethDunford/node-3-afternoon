CREATE TABLE product (
  product_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(200) NOT NULL,
  description VARCHAR(200) NOT NULL,
  price INTEGER NOT NULL,
  image_url TEXT NOT NULL
);