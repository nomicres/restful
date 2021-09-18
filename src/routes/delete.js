module.exports = (doDelete) => async (req, res) => {
  try {
    const result = await doDelete(req.params.id)
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}
