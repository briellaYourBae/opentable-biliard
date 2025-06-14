import { useEffect, useState } from 'react';

export default function BookingCalendar() {
  const [dateSummary, setDateSummary] = useState({});

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const countPerDate = {};
    bookings.forEach((b) => {
      countPerDate[b.date] = (countPerDate[b.date] || 0) + 1;
    });
    setDateSummary(countPerDate);
  }, []);

  return (
    <div>
      <h4>🗓️ Kalender Booking</h4>
      <ul className="list-group mt-3">
        {Object.keys(dateSummary).length === 0 && (
          <li className="list-group-item text-muted">Belum ada booking</li>
        )}
        {Object.entries(dateSummary).map(([date, total], i) => (
          <li key={i} className="list-group-item d-flex justify-content-between">
            <span>{date}</span>
            <span className="badge bg-primary rounded-pill">{total} Booking</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
