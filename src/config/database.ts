import * as mysql from "mysql";
import {DATA_SOURCES} from './constantes.config';
import {ResponseMysql} from "../dto/responseMysql";

const dataSource = DATA_SOURCES.mySqlDataSource;
/**
 * generates pool connection
 */
const poolConnection =
    mysql.createPool({
        host: dataSource.DB_HOST,
        user: dataSource.DB_USER,
        password: dataSource.DB_PASSWORD,
        database: dataSource.DB_DATABASE,
    });

export const queryMysql = async (query, arrEscapingQuery): Promise<ResponseMysql> => {
    try {

        return await new Promise((resolve, reject) => {
            poolConnection.query(query, arrEscapingQuery, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })
        })

    } catch (error) {
        throw new Error(error);
    }

}
