import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    const { userId, items, amount, address } = req.body;

    // Validate required data
    if (!userId || !items || !amount || !address) {
      return res.status(400).json({ success: false, message: "Missing required order data." });
    }

    // Save the order in MongoDB
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address
    });

    await newOrder.save();

    // Clear user's cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    // Format Stripe line items
    const line_items = items.map((item) => ({
      price_data: {
        currency: "bdt", // ✅ Correct ISO code for Bangladeshi Taka
        product_data: {
          name: item.name
        },
        unit_amount: item.price * 100, // Convert to paisa
      },
      quantity: item.quantity
    }));

    // Add delivery fee
    line_items.push({
      price_data: {
        currency: "bdt",
        product_data: {
          name: "Delivery Charges"
        },
        unit_amount: 600, // BDT 6.00
      },
      quantity: 1
    });

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    console.log("Stripe session URL:", session.url);

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, message: "Error placing order." });
  }
};

const verifyOrder = async(req, res) =>{
       const  {orderId, success} = req.body;

       try{
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderrId,{payment:true});
            res.json({success:true, message:"Paid"})
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false, message:"Not Paid"})
        }

       } catch(error){
                 console.log(error);
                 res.json({success:false, message:"Error"})
       }
}

export { placeOrder, verifyOrder};
