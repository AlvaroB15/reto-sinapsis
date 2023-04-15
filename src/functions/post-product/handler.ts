import {APIGatewayEvent, Handler} from "aws-lambda";
import {formatJSONResponse} from "@libs/api-gateway";
import {middyfy} from "@libs/lambda";

import {addProductService} from "../../services/product";
import {Product} from "../../dto/product";

const addProduct: Handler = async (event: APIGatewayEvent) => {

    try {

        const {name, category_id, description, color, price, quantity} = JSON.parse(JSON.stringify(event.body));

        const newProduct: Product = {
            name,
            category_id,
            description,
            color,
            price,
            quantity,
        };
        const response = await addProductService(newProduct);

        if (response.affectedRows === 0) {
            return messageJson("No se pudo registrar correctamente", 200)
        }

        return messageJson("Product registered", 200)

    } catch (error) {
        return messageJson(error.message, 400);
    }
};

const messageJson = (message: string, statusCode: number) => {
    return formatJSONResponse({
        message,
        status: statusCode,
    });
}

export const main = middyfy(addProduct);
