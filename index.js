const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./router/userRouter');
const categoriesRouter = require('./router/categoriesRouter');
const blogPostsRouter = require('./router/blogPostsRouter');
const Users = require('./controllers/Users');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);

app.post('/login', Users.loginUser);

app.use('/categories', categoriesRouter);

app.use('/post', blogPostsRouter);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
