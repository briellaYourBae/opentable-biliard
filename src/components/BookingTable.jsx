import { useEffect, useState } from 'react';

export default function BookingTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(data);
  }, []);

  const handleDelete = (index) => {
    const newBookings = [...bookings];
    newBookings.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(newBookings));
    setBookings(newBookings);
  };

  return (
    <div className="mt-4">
      <h4>📋 Daftar Booking</h4>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Nama</th>
            <th>No HP</th>
            <th>Meja</th>
            <th>Tanggal</th>
            <th>Jam</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td>{b.name}</td>
              <td>{b.phone}</td>
              <td>{b.table}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>
                <button onClick={() => handleDelete(i)} className="btn btn-danger btn-sm">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">Belum ada booking</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
