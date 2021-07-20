export const factEditFunction = (editfact, facts) => {
    const copy = [...facts]
    const foundFact = copy.find(fact => editfact._id === fact._id)
    for (const key in foundFact) {
        foundFact[key] = editfact[key]
    }
    return copy
}