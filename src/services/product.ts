import {QUERY_INSERT_PRODUCT, QUERY_LIST_PRODUCT_BY_ID, QUERY_LIST_PRODUCTS} from "../config/constantes.config";
import {Product} from "../dto/product";
import {queryMysql} from "../config/database";

export const addProductService = async (newProduct: Product) => {
    try {

        const dataParams = [newProduct.name, newProduct.category_id, newProduct.description,
            newProduct.color, newProduct.price, newProduct.quantity];

        return await queryMysql(QUERY_INSERT_PRODUCT, dataParams);

    } catch (error) {
        throw new Error(error);
    }
};

export const getAllProductsService = async () => {
    try {

        return await queryMysql(QUERY_LIST_PRODUCTS, []);

    } catch (error) {
        throw new Error(error);
    }
};

export const getProductsByCategoryService = async (idCategory) => {
    try {

        return await queryMysql(QUERY_LIST_PRODUCT_BY_ID, [idCategory]);

    } catch (error) {
        throw new Error(error);
    }
};
