//full backend on a clund function
//npm installed express & cors & stripe

// all this file is in node.js language
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51K04JxHcRDYM36RV91OrjjT2vUi5z6HP7jmQPRZbxpSq06R9gKVRyqaOsGbk8hjRgmEYUa95Nj2ykJktFOZRWr6x00AOfs5PMY');

//set up app api

//app config
const app = express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());

//api routes get post put delete etc...
app.get('/', (request, response)=> response.status(200).send('hello world'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received for >>>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in pennies subunit
        currency: 'gbp',
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})
//listenc command
exports.api = functions.https.onRequest(app);
//example endpoint http://localhost:5001/clone-e9b58/us-central1/api