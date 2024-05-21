import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";


async function main() {
    try {
        await mongoose.connect(config.database_url as string);

        app.listen(config.port, () => {
            console.log(`  app listening on port ${config.port}`)

        })
        console.log('server connection successfull');
    } catch (error) {

        console.log(error);
    }


}


main()