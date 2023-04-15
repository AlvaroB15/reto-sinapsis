import { handlerPath } from "@libs/handler-resolver";
import { AWSLambda } from "../../utils/lambdaFunctionInterface";

const handler: AWSLambda = {
	handler: `${handlerPath(__dirname)}/handler.main`,
	name: "add-product",
	description: "Guardas los datos de un producto",
	events: [
		{
			http: {
				method: "post",
				path: "new-product"
			},
		},
	],
};
export default handler;
