const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const stateRoutes = require('./routes/stateRoutes');
const clientRoutes = require('./routes/clientRoutes');
const periodRoutes = require('./routes/periodRoutes');
const liftTypeRoutes = require('./routes/liftTypeRoutes');
const cityRoutes = require('./routes/cityRoutes');
const areaRoutes = require('./routes/areaRoutes');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/states', stateRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/periods', periodRoutes);
app.use('/api/lift-types', liftTypeRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/areas', areaRoutes);

// Swagger setup
const swaggerDocument = yaml.load('./swagger.yaml');

const swaggerOptions = {
  customCss: `
    .swagger-ui .topbar { background-color: #2c3e50; }
    .swagger-ui .topbar .topbar-wrapper { color: white; }
    .swagger-ui .info { margin: 20px; padding: 20px; background-color: #ecf0f1; border-radius: 5px; }
    .swagger-ui .scheme-container { background-color: #ecf0f1; border-radius: 5px; }
  `,
  customSiteTitle: 'My API Docs',
  customfavIcon: './favicon.png',
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

module.exports = app;
