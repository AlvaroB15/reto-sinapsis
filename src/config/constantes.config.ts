export const DATA_SOURCES = {
    mySqlDataSource: {
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_DATABASE: process.env.DB_DATABASE,
    }
};

export const QUERY_INSERT_PRODUCT = 'INSERT INTO `product`(name, category_id, description,color,price,quantity) VALUES(?,?,?,?,?,?)';

export const QUERY_LIST_PRODUCTS = 'SELECT * FROM `product` p INNER JOIN `category` c ON c.id  = p.category_id';

export const QUERY_LIST_PRODUCT_BY_ID = 'SELECT * FROM `product` p INNER JOIN `category` c ON c.id  = p.category_id WHERE category_id=?';

export const QUERY_LIST_CATEGORIES = 'SELECT * FROM `category`';

export const QUERY_GET_CATEGORY = 'SELECT * FROM `category` WHERE id=?';
