import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const paymentsSchema = new Schema(
  {
    registeredUser: {
      id: String,
      fullName: String,
      email: String,
    },
    paymentUser: {
      customer: {
        id: Number,
        name: String,
        email: String,
        examName: String,
      },
      payment: {
        status: String,
        refunded: Boolean,
        orderNumber: Number,
        totalFormatted: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Payments = mongoose.models.Payments || mongoose.model("Payments", paymentsSchema);

export default Payments;
