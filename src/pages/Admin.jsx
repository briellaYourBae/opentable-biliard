import BookingTable from '../components/BookingTable';
import BookingCalendar from '../components/BookingCalendar';

export default function Admin() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">📊 Halaman Admin - Manajemen Booking</h2>
      <BookingCalendar />
      <BookingTable />
    </div>
  );
}
