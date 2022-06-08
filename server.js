const express = require('express')
const PORT = process.env.PORT || 1970
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
} )
app.listen(1970, () => console.log(`listening at http://localhost:${PORT}`))


console.log('Hello World!')