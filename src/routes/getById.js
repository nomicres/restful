module.exports = (doGetById) => async (req, res) => {
  try {
    const result = await doGetById(req.params.id, req.query)
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}
