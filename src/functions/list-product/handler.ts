import {APIGatewayEvent, Handler} from "aws-lambda";
import {formatJSONResponse} from "@libs/api-gateway";
import {middyfy} from "@libs/lambda";

import {getAllProductsService, getProductsByCategoryService} from "../../services/product";
import {getCategory} from "../../services/category";

const listProduct: Handler = async (event: APIGatewayEvent) => {

    try {
        let response;

        if (event.pathParameters) {
            // Verificar si la categoria existe
            let verifyCategory = await getCategory(event.pathParameters.idCategory);

            if (!verifyCategory[0]) {
                return messageJson("La categoria consultada no esta registrada ", 200)
            }

            response = await getProductsByCategoryService(Number(event.pathParameters.idCategory));
        } else {
            response = await getAllProductsService();
        }

        return messageJson("List products ", 200, response)

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

export const main = middyfy(listProduct);
