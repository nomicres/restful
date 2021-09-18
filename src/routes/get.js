module.exports = (doGet) => async (req, res) => {
  try {
    const result = await doGet(req.query)
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}
