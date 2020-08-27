const express = require('express');
const routes = require('./controllers/index.js');
//importing sequelize connection that is in connection.js
const sequelize = require('./config/connection');

//setup handlebars as template engine
const exphbs = require('express-handlebars');
//helper function
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

//make public folder available
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

//to use express-session and sequelize-store
//creates session
const session = require('express-session');
//connects session to database
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 15 * 60 * 1000, // Cleanup expired sessions
    expiration: 5 * 60 * 1000 // expires after 5 minutes of inactivity
  })
};

app.use(session(sess));
//end session/ sequelize store

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//takes the contents of the public folder and makes them static
app.use(express.static(path.join(__dirname, 'public')));
//set up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
//.sync mthod is sequalize taking the models and connecting them to associated database tables. IF it doesn't find one it will create one
//"force: true" will drop and re-create all database tables on startup
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3001'));
}).catch(err => console.log(err))