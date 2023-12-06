// Need to install packages 'npm i sequelize pg pg-hstore


// MODEL JS basic boilerplate
import {DataTypes, Model} from "sequelize";
import connectToDB from "./db.js";
import url from 'url';
import util from 'util';


// The title of the database is called INVOICE
const db = await connectToDB('postgres:///INVOICES')           

// The Invoice class that is the 'Invoices' table
class Invoice extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Invoice.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.TEXT
        },
        rate: {
            type: DataTypes.INTEGER
        },
        hours: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: "invoices",
        sequelize: db
    }
)





// Boilerplate Only run this file if run directly
if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
    console.log('Syncing database...');
    await db.sync();
    console.log('Finished syncing database!');
  }

// Exporting these classes to be able to use in other files. 
export {Invoice}