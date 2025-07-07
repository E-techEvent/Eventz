import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';

// Dummy bookings data - in a real app, this would be imported from a shared data source
const bookingsData = [
  { id: 'B001', eventName: 'Tech Conference 2025', userName: 'John Smith', userEmail: 'john@example.com', ticketType: 'VIP', price: '$599', status: 'Confirmed', date: 'Feb 15, 2025', paymentMethod: 'Credit Card', notes: 'Requires special accommodation' },
  { id: 'B002', eventName: 'Finance Summit', userName: 'Sarah Johnson', userEmail: 'sarah@example.com', ticketType: 'Standard', price: '$299', status: 'Confirmed', date: 'Feb 12, 2025', paymentMethod: 'PayPal', notes: '' },
  { id: 'B003', eventName: 'Developer Meetup', userName: 'Michael Brown', userEmail: 'michael@example.com', ticketType: 'Standard', price: '$99', status: 'Pending', date: 'Feb 10, 2025', paymentMethod: 'Bank Transfer', notes: 'Waiting for payment confirmation' },
  { id: 'B004', eventName: 'Tech Conference 2025', userName: 'Emma Wilson', userEmail: 'emma@example.com', ticketType: 'Standard', price: '$399', status: 'Confirmed', date: 'Feb 8, 2025', paymentMethod: 'Credit Card', notes: '' },
  { id: 'B005', eventName: 'AI Workshop', userName: 'James Taylor', userEmail: 'james@example.com', ticketType: 'Premium', price: '$199', status: 'Cancelled', date: 'Feb 5, 2025', paymentMethod: 'PayPal', notes: 'Refund processed on Feb 6' },
  { id: 'B006', eventName: 'Blockchain Summit', userName: 'Olivia Davis', userEmail: 'olivia@example.com', ticketType: 'VIP', price: '$499', status: 'Confirmed', date: 'Feb 3, 2025', paymentMethod: 'Credit Card', notes: '' },
  { id: 'B007', eventName: 'UX Design Conference', userName: 'William Martinez', userEmail: 'william@example.com', ticketType: 'Standard', price: '$249', status: 'Pending', date: 'Jan 28, 2025', paymentMethod: 'Bank Transfer', notes: 'Waiting for payment confirmation' },
  { id: 'B008', eventName: 'Data Science Forum', userName: 'Sophia Anderson', userEmail: 'sophia@example.com', ticketType: 'Premium', price: '$349', status: 'Confirmed', date: 'Jan 25, 2025', paymentMethod: 'Credit Card', notes: '' },
];

const BookingDetailPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    status: '',
    ticketType: '',
    price: '',
    notes: ''
  });

  // Find the booking with the matching ID
  useEffect(() => {
    const foundBooking = bookingsData.find(b => b.id === id);
    if (foundBooking) {
      setBooking(foundBooking);
      setFormData({
        status: foundBooking.status,
        ticketType: foundBooking.ticketType,
        price: foundBooking.price,
        notes: foundBooking.notes || ''
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would update the booking in the database
    // For now, we'll just update our local state
    setBooking(prev => ({
      ...prev,
      status: formData.status,
      ticketType: formData.ticketType,
      price: formData.price,
      notes: formData.notes
    }));
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (!booking) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">Booking not found</h2>
          <p className="mt-2 text-gray-500">The booking you're looking for doesn't exist or has been removed.</p>
          <Link to="/dashboard/admin/bookings" className="mt-4 inline-block bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-primary-hover)]">
            Back to Bookings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <Link to="/dashboard/admin/bookings" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Bookings
          </Link>
          <h2 className="text-2xl font-bold mt-2">Booking Details: {booking.id}</h2>
        </div>
        <div>
          {!isEditing ? (
            <button 
              onClick={toggleEdit}
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2 px-4 rounded"
            >
              Edit Booking
            </button>
          ) : (
            <button 
              onClick={toggleEdit}
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {!isEditing ? (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Booking Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Booking ID</p>
                    <p className="font-medium">{booking.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Event</p>
                    <p className="font-medium">{booking.eventName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{booking.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'Confirmed' ? 'bg-[var(--color-secondary-hover)] text-[var(--color-primary)]' : 
                      booking.status === 'Pending' ? 'bg-[var(--color-secondary-hover)] text-[var(--color-primary)]' : 
                      'bg-gray-200 text-gray-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Customer Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{booking.userName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{booking.userEmail}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Ticket Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Ticket Type</p>
                    <p className="font-medium">{booking.ticketType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium">{booking.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="font-medium">{booking.paymentMethod}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Additional Information</h3>
                <div>
                  <p className="text-sm text-gray-500">Notes</p>
                  <p className="font-medium">{booking.notes || 'No notes available'}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Edit Booking</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                      <option value="Confirmed">Confirmed</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Type</label>
                    <select
                      name="ticketType"
                      value={formData.ticketType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    >
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                      <option value="VIP">VIP</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Additional Information</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2 px-6 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDetailPage;
