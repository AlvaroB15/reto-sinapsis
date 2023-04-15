import {handlerPath} from "@libs/handler-resolver";
import {AWSLambda} from "../../utils/lambdaFunctionInterface";

const handler: AWSLambda = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    name: "list-product",
    description: "Liste los registros de la Tabla producto",
    events: [
        {
            http: {
                method: "get",
                path: "product"
            },
        },
        {
            http: {
                method: "get",
                path: "product/{idCategory}"
            },
        },
    ],
};
export default handler;
