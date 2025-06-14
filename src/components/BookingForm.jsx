import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    table: '1',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // ✅ CEK JADWAL BENTROK
    const alreadyBooked = bookings.find(b =>
      b.date === formData.date &&
      b.time === formData.time &&
      b.table === formData.table
    );

    if (alreadyBooked) {
      alert(`Maaf, Meja ${formData.table} sudah dibooking pada ${formData.date} jam ${formData.time}. Silakan pilih waktu lain.`);
      return;
    }

    // ✅ SIMPAN BOOKING
    bookings.push(formData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert('Booking berhasil!');
    setFormData({ name: '', phone: '', table: '1', date: '', time: '' });
  };

  return (
    <form className="p-4 border rounded bg-white shadow-sm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Nama</label>
        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>No HP</label>
        <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Pilih Meja</label>
        <select name="table" className="form-select" value={formData.table} onChange={handleChange}>
          <option value="1">Meja 1</option>
          <option value="2">Meja 2</option>
          <option value="3">Meja 3</option>
          <option value="4">Meja 4</option>
          <option value="5">Meja 5</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Tanggal</label>
        <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Jam</label>
        <input type="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-success">Booking</button>
    </form>
  );
}
