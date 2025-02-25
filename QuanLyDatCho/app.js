const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const bookingRoutes = require('./routes/bookingRoutes');

// Cài đặt EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware để parse dữ liệu từ form
app.use(bodyParser.urlencoded({ extended: true }));

// Static files (CSS, JS,...)
app.use(express.static(path.join(__dirname, 'public')));

// Sử dụng routes
app.use('/', bookingRoutes);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
