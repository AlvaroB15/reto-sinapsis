import {QUERY_GET_CATEGORY, QUERY_LIST_CATEGORIES} from "../config/constantes.config";
import {queryMysql} from "../config/database";

export const getAllCategoriesService = async () => {
    try {

        return await queryMysql(QUERY_LIST_CATEGORIES, []);

    } catch (error) {
        throw new Error(error);
    }
};

export const getCategory = async (idCategory) => {
    try {

        return await queryMysql(QUERY_GET_CATEGORY, [idCategory]);

    } catch (error) {
        throw new Error(error);
    }
};
