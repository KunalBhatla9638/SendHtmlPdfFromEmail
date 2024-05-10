
const htmlCode = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Offer: 20% Off!</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            
           
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            /*background-color: #fff;*/
             background-color: black;
             
            padding: 40px 30px;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #007bff;
            margin-bottom: 20px;
        }
        p {
            text-align: center;
            /*color: #333;*/
            color: white;
            margin-bottom: 20px;
        }
        .discount {
            text-align: center;
            font-size: 36px;
            color: #28a745;
            margin-bottom: 30px;
        }
        .code {
            display: inline-block;
            padding: 10px 20px;
            background-color: #28a745;
            color: #fff;
            font-weight: bold;
            border-radius: 5px;
            text-transform: uppercase;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        .note {
            text-align: center;
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Special Offer : Get 20% Off!</h1>
        <p>Order now from our food application and enjoy a delicious meal with a discount.</p>
        <div class="discount">Use code: <span class="code">FOOD20</span></div>
        <p class="note">*Offer valid for a limited time only. Terms and conditions apply.</p>
    </div>
</body>
</html>

`

module.exports = htmlCode