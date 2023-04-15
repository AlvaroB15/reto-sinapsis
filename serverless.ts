import type {AWS} from "@serverless/typescript";

import postProduct from "@functions/post-product";
import listProducts from "src/functions/list-product";
import listCategory from "src/functions/list-category";

const serverlessConfiguration: AWS = {
    service: "sinapsis",
    frameworkVersion: "3",
    plugins: ["serverless-esbuild"],
    provider: {
        name: "aws",
        runtime: "nodejs16.x",
        stage: "dev",
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
            NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",

            DB_HOST: 'reto-sinapsis.cvo5il8szliw.us-east-1.rds.amazonaws.com',
            DB_USER: 'rds_sinapsis',
            DB_PASSWORD: 'root123.',
            DB_PORT: '3306',
            DB_DATABASE: 'sinapsis',
        },
        iam: {
            role: {
                name: "role_prueba_sinapsis",
                statements: [
                    {
                        Effect: "Allow",
                        Action: [
                            "secretsmanager:GetSecretValue"
                        ],
                        Resource: "*"
                    },
                    {
                        Effect: "Allow",
                        Action: [
                            "ec2:CreateNetworkInterface",
                            "ec2:DescribeNetworkInterface",
                            "ec2:DeleteNetworkInterface",
                            "ec2:DescribeVpcs",
                            "ec2:DescribeSubnets",
                            "ec2:DescribeSecurityGroups",
                        ],
                        Resource: "*"
                    },
                    {
                        Effect: "Allow",
                        Action: [
                            "execute-api:Invoke"
                        ],
                        Resource: "arn:aws:execute-api:*:*:*"
                    }
                ],
            }
        }
    },
    // import the function via paths
    functions: {postProduct, listProducts, listCategory},
    package: {individually: true},
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ["aws-sdk"],
            target: "node16",
            define: {"require.resolve": undefined},
            platform: "node",
            concurrency: 10,
        },
    },
};

module.exports = serverlessConfiguration;
