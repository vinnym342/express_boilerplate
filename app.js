const express = require('express')

// Create new express ap
const app = express()

// Start our web server
app.listen(3000, () => {
  console.log('=================================')
  console.log('Server start on 3000')
})
