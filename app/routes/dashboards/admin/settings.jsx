import React, { useState } from 'react';

const SettingsPage = () => {
  // General Settings
  const [siteName, setSiteName] = useState('E-Tech Events');
  const [siteDescription, setSiteDescription] = useState('The hub for all your favorite tech events');
  const [contactEmail, setContactEmail] = useState('contact@e-tech-events.com');
  const [supportEmail, setSupportEmail] = useState('support@e-tech-events.com');
  
  // Notification Settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [newEventNotifications, setNewEventNotifications] = useState(true);
  const [reviewNotifications, setReviewNotifications] = useState(true);
  const [bookingNotifications, setBookingNotifications] = useState(true);
  
  // Social Media Settings
  const [facebookUrl, setFacebookUrl] = useState('https://facebook.com/etechevents');
  const [twitterUrl, setTwitterUrl] = useState('https://twitter.com/etechevents');
  const [instagramUrl, setInstagramUrl] = useState('https://instagram.com/etechevents');
  const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/company/etechevents');
  
  // Payment Settings
  const [currency, setCurrency] = useState('USD');
  const [stripePublicKey, setStripePublicKey] = useState('pk_test_sample123456789');
  const [stripeSecretKey, setStripeSecretKey] = useState('sk_test_••••••••••••••••');
  const [paypalClientId, setPaypalClientId] = useState('client_id_••••••••••••••••');
  
  // Form submission handler
  const handleSubmit = (e, section) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    alert(`${section} settings saved successfully!`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">General Settings</h3>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e, 'General')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Site Description</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                Save General Settings
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Notification Settings</h3>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e, 'Notification')}>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="emailNotifications"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-900">
                  Enable Email Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="newEventNotifications"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={newEventNotifications}
                  onChange={(e) => setNewEventNotifications(e.target.checked)}
                />
                <label htmlFor="newEventNotifications" className="ml-2 block text-sm text-gray-900">
                  Notify when new events are created
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="reviewNotifications"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={reviewNotifications}
                  onChange={(e) => setReviewNotifications(e.target.checked)}
                />
                <label htmlFor="reviewNotifications" className="ml-2 block text-sm text-gray-900">
                  Notify when new reviews are submitted
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="bookingNotifications"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={bookingNotifications}
                  onChange={(e) => setBookingNotifications(e.target.checked)}
                />
                <label htmlFor="bookingNotifications" className="ml-2 block text-sm text-gray-900">
                  Notify when new bookings are made
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                Save Notification Settings
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Social Media Settings</h3>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e, 'Social Media')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={facebookUrl}
                  onChange={(e) => setFacebookUrl(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter URL</label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={twitterUrl}
                  onChange={(e) => setTwitterUrl(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={instagramUrl}
                  onChange={(e) => setInstagramUrl(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                Save Social Media Settings
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Payment Settings</h3>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e, 'Payment')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                <select
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stripe Public Key</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={stripePublicKey}
                  onChange={(e) => setStripePublicKey(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Stripe Secret Key</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={stripeSecretKey}
                  onChange={(e) => setStripeSecretKey(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PayPal Client ID</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={paypalClientId}
                  onChange={(e) => setPaypalClientId(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                Save Payment Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;