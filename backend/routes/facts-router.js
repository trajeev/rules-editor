import express from 'express'
import {getfacts, createFact, deleteFact, updateFact} from '../controllers/facts-controllers.js'

const router = express.Router()

router.get('/', getfacts)
router.post('/', createFact)
router.patch('/:id', updateFact)
router.delete('/:id', deleteFact)

export default router