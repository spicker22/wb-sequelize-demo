// Need to install packages 'npm i sequelize pg pg-hstore

import { Sequelize } from "sequelize";

async function connectToDB(dbURI) {
    console.log(`Connecting to DB ${dbURI}`)

    // Configures: Takes the sequlize class to use
    const sequelize = new Sequelize(dbURI , {
        logging: console.log,                               // This sets where the logs go, set to false to disable
        define: {
            timestamps: false,                              // This sets the automativ generation of created_at and updated_at columns
            underscore: true                                // THis will tell it to use underscores rather than camelCase for columns names. 
        }
    })

    try {
        await sequelize.authenticate()                      // Make sure sequalize can connect securely to database
        console.log('Connect successfully to DB')           
    }   catch (error) {
        console.log('Unable to connect to DB', error)
    }
    return sequelize
}

export default connectToDB