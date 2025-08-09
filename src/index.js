const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const router  = require('./routes/v1/index');
// const CityRepository = require('./repository/city-repository');
const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // app.use('/city', CityRepository);
    app.use('/api/v1', router);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();
