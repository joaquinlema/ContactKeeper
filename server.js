//entry point back end
const express = require('express');

const app = express();

app.get('/', (req, res) =>
    //res.send('Hello world')
    res.json({ msg: 'welcome to postman nodejs intregration' })
);

//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));