const express = require("express");
const nodemailer = require("nodemailer");
const htmlCode = require("./testhtml");
const puppeteer = require("puppeteer");
const fs = require('fs');

const app = express();
const port = 3000;

async function convertHtmlToPdf(htmlContent, pdfFilePath){
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.setViewport({width: 1080, height: 1024});
    await page.setContent(htmlContent)
    await page.pdf({path : pdfFilePath, format : "A4"})
    await browser.close();
}
  
convertHtmlToPdf(htmlCode, "./content.pdf");

function sendEmail() {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kbhatla.netclues@gmail.com",
        pass: "ybah hthx atmb xiqt", //For kbhatla.netclues@gmail.com
      },
    });

    const mail_config = {
      from: "kbhatla.netclues@gmail.com",
      to: "kbhatla.netclues@gmail.com",
      subject: "Testing",
    //   text: "Testing is done",
        html : htmlCode,
       attachments: [
            {
              filename: 'content.pdf',
              path: "./content.pdf"
            }
          ]
    };

    transport.sendMail(mail_config, (error, info) => {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occured" });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}


app.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((response) => res.send(response.message));
});

app.listen(port, () => {
  console.log("Server is running on the ->", port);
});

