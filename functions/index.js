/* eslint-disable object-curly-spacing */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";
import logger from "firebase-functions/logger";
import { cors } from "cors"; // ({ origin: true })
import nodemailer from "nodemailer";

initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  // auth: { user: "user", pass: "password" },
});

let mailOptions = {
  from: "Arc development",
  to: "test.email.t9641253@gmail.com",
  subject: "Testing Node Mailer",
  text: "Test successful",
};

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.sendMail = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
