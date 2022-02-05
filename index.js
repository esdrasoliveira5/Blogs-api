const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./router/userRouter');
const Users = require('./controllers/Users');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use('/user', userRouter);

app.post('/login', Users.loginUser);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
