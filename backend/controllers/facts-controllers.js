import FactsMessage from '../model/facts.js' 
import mongoose from 'mongoose'

export const getfacts = async (req, res) => {

    try {
        const factMessages = await FactsMessage.find().exec()
        res.status(200).json(factMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createFact = async (req, res) => {
    const fact = req.body
    const newFact = new FactsMessage(fact)
    try {
        await newFact.save()
        res.status(201).json(newFact)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteFact = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
    await FactsMessage.findByIdAndRemove(id)
    res.json({message: 'post deleted successfully'})
}

export const updateFact = async (req, res) => {
    const {id} = req.params
    const fact = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
    const updateFact = {...fact, _id: id}
    await FactsMessage.findByIdAndUpdate(id, updateFact, {new: true})
    res.json(updateFact)
}