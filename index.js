// This is the boiler plate or template to use ongoin

// Import all packages
import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

// Setup Express instance
const app = express()

// Setup Middleware
app.use(express.json())                                     // want my application to be able to use json when using express
app.use(express.static('public'))                           // if there was a public folder, we can easily reach in and use those files/folders
app.use(express.urlencoded({extended: false}))             // Helps send info along at end of URL 
app.use(morgan('dev'))                                      // While in dev environment, can use morgan for more logs (just for dev environment)

// ROUTES GO HERE
import handlerFunctions from './controller.js'
const {getInvoices, addInvoice, deleteInvoice, editInvoice} = handlerFunctions
app.get('/invoices', getInvoices)
app.post('/invoice', addInvoice)
app.delete('/invoice/:id', deleteInvoice)
app.put('/invoice/:id', editInvoice)



// Open door to server
ViteExpress.listen(app, 2319, () => console.log(`we have a 2319 report to http://localhost:2319`))                           // 2319 is the port

// Need to come up with an API
