const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Danh sách đặt chỗ
router.get('/', bookingController.getAllBookings);

// Form thêm mới
router.get('/new', (req, res) => {
    res.render('new'); // render views/new.ejs
});

// Thêm đặt chỗ mới
router.post('/add', bookingController.addBooking);

// Form chỉnh sửa
router.get('/edit/:id', bookingController.getEditForm);

// Cập nhật đặt chỗ
router.post('/update/:id', bookingController.updateBooking);

// Hủy đặt chỗ
router.post('/cancel/:id', bookingController.cancelBooking);

// ✅ Route xác nhận đặt chỗ
router.post('/confirm/:id', bookingController.confirmBooking);

module.exports = router;
