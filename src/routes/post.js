module.exports = (doPost) => async (req, res) => {
  try {
    const result = await doPost(req.body)
    res.status(201).json(result)
  } catch (e) {
    res.status(500).json({ error: e.message })
    throw new Error(e)
  }
}
