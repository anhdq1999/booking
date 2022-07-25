const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const orderSchema = new Schema(
    {
        orderDetails: [
            {
                room: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'rooms',
                    require: true,
                },
                dates: {
                    checkInDate: {
                        type: Date,
                        required: true,
                    },
                    checkOutDate: {
                        type: Date,
                        required: true,
                    },
                },
                adults: {
                    type: Number,
                    required: true,
                    default: 1,
                },
                child: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                infants: {
                    type: Number,
                    required: true,
                    default: 0,
                },
                price: {
                    type: Number,
                    required: true,
                },
                notes: { type: String },
            },
        ],
        paymentMethod: {
            type: String,
            required: true,
        },
        paidAt: { type: Date },
        refundAt: { type: Date },
        status: {
            type: String,
            require: true,
            enum: ['UNPAID', 'PAID', 'CANCEL'],
            default: 'UNPAID',
        },

        taxPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        customerName: {
            type: String,
            required: true,
        },
        customerPhone: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
orderSchema.plugin(mongooseDelete, {
    deleteAt: true,
    overrideMethods: true,
});
module.exports = mongoose.model('Order', orderSchema);
