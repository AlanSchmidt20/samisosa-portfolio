const mercadopago = require("mercadopago");
const express = require("express");
const app = express();

mercadopago.configure({
  access_token:
    "TEST-8856631559370206-031622-17dd175f1aef42de47c3914058f426f8-467966555",
});

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  const orderId = generateOrderId();
  saveOrderIdToDatabase(orderId);

  let preference = {
    items: items.map((item) => ({
      title: item.title,
      unit_price: item.price,
      quantity: item.quantity,
    })),
    back_urls: {
      success: "http://localhost:3000/success",
      pending: "http://localhost:3000/pending",
      failure: "http://localhost:3000/failure",
    },
    auto_return: "approved",
    notification_url: "http://localhost:4000/webhooks",
    external_reference: orderId,
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.send(
      JSON.stringify({
        url: response.body.init_point,
      })
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating payment");
  }
});
app.listen(4000, () => console.log("Listening on port 4000!"));

//TEST-c65da426-e45e-499a-8c0f-e05b2234553e
// numero de aplicacion Número de la aplicación/ID:  8856631559370206
