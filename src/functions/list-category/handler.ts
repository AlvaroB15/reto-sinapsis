import {Handler} from "aws-lambda";
import {formatJSONResponse} from "@libs/api-gateway";
import {middyfy} from "@libs/lambda";

import {getAllCategoriesService} from "../../services/category";

const listCategories: Handler = async () => {

    try {

        const response = await getAllCategoriesService();
        return messageJson("List categories ", 200, response)

    } catch (error) {
        return messageJson(error.message, 500);
    }
};

const messageJson = (message: string, statusCode: number, data?) => {

    const objMessage = {
        message,
        status: statusCode,
    }

    if (data) {
        objMessage["data"] = data;
    }

    return formatJSONResponse(objMessage);
}

export const main = middyfy(listCategories);
