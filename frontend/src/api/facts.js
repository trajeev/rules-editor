import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchFacts = () => axios.get(url)
export const postFact = (fact) => axios.post(url, fact)
export const updateFact = (fact) => axios.patch(`${url}/${fact._id}`, fact)
export const deleteFact = (fact) => axios.delete(`${url}/${fact._id}`)