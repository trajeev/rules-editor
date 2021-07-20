import mongoose from 'mongoose'

const factsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const FactsMessage = mongoose.model('FactsMessage', factsSchema)

export default FactsMessage