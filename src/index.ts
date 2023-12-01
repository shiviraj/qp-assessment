import logger from 'logging-starter'
import app from "./app";
import {initDb} from "./db/init";

const port = process.env.PORT || 3000;

initDb()
    .then(() => {
        app.listen(port, () => {
            logger.info({message: `Server is running on port ${port}`});
        });
    })
    .catch((error: Error) => {
        logger.error({error, errorMessage: 'Failed to init db'})
    })
