module.exports = (doPut) => async (req, res) => {
  try {
    const result = await doPut(req.params.id, req.body)
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}
