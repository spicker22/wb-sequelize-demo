// let TEST_DATA = [
//     { id: 0, description: 'Content plan', rate: 50, hours: 4 },
//     { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
//     { id: 2, description: 'Website design', rate: 50, hours: 5 },
//     { id: 3, description: 'Website development', rate: 100, hours: 5 },
//   ];


import {Invoice} from "./models.js"
import { Op } from 'sequelize';


// list of key value pairs 
const handlerFunctions = {

    getInvoices: async (req, res) => {
        //res.send(TEST_DATA)
        const invoices = await Invoice.findAll()
        res.send(invoices)
    },

    addInvoice: async (req, res) => {
       const {description} = req.body
       const newRow = { 
        description, 
        rate: 0,
        hours: 0
       }

       await Invoice.create(newRow)
       const invoices = await Invoice.findAll()
       res.send(invoices)
    },

    deleteInvoice: async (req, res) => {
        // const {id} = req.params
        // const filteredData = TEST_DATA.filter((el) => el.id !== +id )           // The '+' infront of the id creates a num. If you dont do this, might compare string to a number.
        // TEST_DATA = filteredData
        // res.send(TEST_DATA)

        const {id} = req.params
        const invoice = await Invoice.findByPk(id)                // Finding the invoice you want to delete
        await invoice.destroy()                             // deleting the identiified invoice
        const invoices = await Invoice.findAll()            // Getting all the udpated list of the invoices
        res.send(invoices)                                  // Sending the data to ..
    },

    editInvoice: async (req, res) => {
        // const {id} = req.params                                      // get id param
        // const {description, hours, rate} = req.body                 // get descritpion, rate, hours from body object
        // const editJob = TEST_DATA.find((job) => job.id === +id)     // find object to change
        // editJob.description = description                           // Change object ( the description)
        // editJob.rate = rate                                         // Change object ( the rate) 
        // editJob.hours = hours                                       // Change object ( the hours) 
        // res.send(TEST_DATA)                                         // Sending data to ...


        const {id} = req.params
        const {description, hours, rate} = req.body         // get descritpion, rate, hours from body object
        const editInvoice = await Invoice.findByPk(id)          // Finding the invoice you want to delete

        editInvoice.description = description                   // Change object ( the description)    
        editInvoice.rate = rate                                 // Change object ( the rate)  
        editInvoice.hours = hours                               // Change object ( the hours)  

        await editInvoice.save()                                // deleting the identiified invoice
        const invoices = await Invoice.findAll()                // Getting all the udpated list of the invoices
        res.send(invoices)                                      // Sending the data to ..
    }
}

export default handlerFunctions