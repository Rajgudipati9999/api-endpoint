const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to the API!')
})

// Example route
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Gudipati' }
  ])
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
