import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const paymentsSchema = new Schema(
  {
    clerkUser: {
      userID: String,
      userFullName: String,
      userEmail: String,
    },
    lemonsqueezyUser: {
      customerInfo: {
        identifier: String,
        customerID: Number,
        created_at: String,
        updated_at: String,
      },
      paymentsInfo: {
        status: String,
        refunded_at: String || null,
        total_formatted: String,
      },
      customerName: String,
      customerEmail: String,
    },
    examName: String,
  },
  {
    timestamps: true,
  }
);

const Payments = mongoose.models.Payments || mongoose.model("Payments", paymentsSchema);

export default Payments;
