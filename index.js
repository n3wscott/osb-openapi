//import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist"
const swaggerUiAssetPath = require("swagger-ui-dist").getAbsoluteFSPath();

var port = 8000;

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(swaggerUiAssetPath));
app.use('/spec', express.static('./'))

app.listen(port);
console.log('Listening on port ' + port);