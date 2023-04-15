import {handlerPath} from "@libs/handler-resolver";
import {AWSLambda} from "../../utils/lambdaFunctionInterface";

const handler: AWSLambda = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    name: "list-category",
    description: "Liste los registros de la Tabla category",
    events: [
        {
            http: {
                method: "get",
                path: "category"
            },
        },
    ],
};
export default handler;
