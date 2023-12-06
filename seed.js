import {Invoice} from "./models.js"

// let TEST_DATA = [
//     { id: 0, description: 'Content plan', rate: 50, hours: 4 },
//     { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
//     { id: 2, description: 'Website design', rate: 50, hours: 5 },
//     { id: 3, description: 'Website development', rate: 100, hours: 5 },
//   ];

const invoice_1 = await Invoice.create({
    description: 'Content plan',
    rate: 50,
    hours: 4
})

const invoice_2 = await Invoice.create({
    description: 'Copy writing',
    rate: 50,
    hours: 2
})

const invoice_3 = await Invoice.create({
    description: 'Website design',
    rate: 50,
    hours: 5
})

const invoice_4 = await Invoice.create({
    description: 'Website development',
    rate: 100,
    hours: 5
})