const bookings = []; // Mảng lưu dữ liệu tạm thời

// Hiển thị danh sách đặt chỗ
exports.getAllBookings = (req, res) => {
    res.render('index', { bookings });
};

// Thêm đặt chỗ mới
exports.addBooking = (req, res) => {
    const { customerName, date, time } = req.body;
    const id = bookings.length + 1;
    bookings.push({ id, customerName, date, time, status: 'Pending' });
    res.redirect('/');
};

// Hiển thị form sửa
exports.getEditForm = (req, res) => {
    const booking = bookings.find(b => b.id == req.params.id);
    res.render('edit', { booking });
};

// Cập nhật đặt chỗ
exports.updateBooking = (req, res) => {
    let booking = bookings.find(b => b.id == req.params.id);
    if (booking) {
        booking.customerName = req.body.customerName;
        booking.date = req.body.date;
        booking.time = req.body.time;
    }
    res.redirect('/');
};

// Hủy đặt chỗ
exports.cancelBooking = (req, res) => {
    let booking = bookings.find(b => b.id == req.params.id);
    if (booking) {
        booking.status = 'Cancelled';
    }
    res.redirect('/');
};

// ✅ Xác nhận đặt chỗ
exports.confirmBooking = (req, res) => {
    let booking = bookings.find(b => b.id == req.params.id);
    if (booking && booking.status === 'Pending') {
        booking.status = 'Confirmed';
    }
    res.redirect('/');
};
