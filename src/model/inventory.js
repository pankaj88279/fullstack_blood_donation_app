const { mongoose } = require("../config/db");

let inventorySchema = new mongoose.Schema({

    inventoryType: {
        type: String,
        require: [true, 'inventory type require'],
        enum: ['in', 'out'],

    },
    bloodGroup: {
        type: String,
        require: [true, 'bloodGroup type require'],
        enum: ['O+', 'O+', 'AB+', 'A+', 'A-', 'B+', 'B-'],
    },
    quantity: {
        type: String,
        required: [true, "quantity is required"]
    },
    organisationName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organisationName',
        required: [true, 'organisation name is required']
    },
    hospitalName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: function () {
            return this.inventoryType === 'out'
        }
    },
    doner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: function () {
            return this.inventoryType === 'in'
        }
    }

}, {
    timestamps: true
});


const inventory = mongoose.model('Inventory', inventorySchema)

exports.inventory = inventory;