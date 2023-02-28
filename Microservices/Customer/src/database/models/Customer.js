const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    email: String,
    password: String,
    salt: String,
    phone: String,
    address:[
        { type: Schema.Types.ObjectId, ref: 'address', require: true }
    ],
    cart: [
        {
            product: {
                _id: {type: String, requirement: true},
                name: {type: String},
                banner: {type: String},
                price: {type: Number}
            },
            unit: {Type: Number, requirement: true}
        }
    ],
    wishlist:[
        { 
            _id: {type: String, requirement: true},
            name: {type: String},
            discription: {type: String},
            banner: {type: String},
            available: {type: boolean},
            price: {type: Number}
        }
    ],
    orders: [ 
        {
            _id: {type: String, requirement: true},
            amount: {type: String},
            date: {type: Date, default: Date.now()}
        }
    ]
},{
    toJSON: {
        transform(doc, ret){
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports =  mongoose.model('customer', CustomerSchema);