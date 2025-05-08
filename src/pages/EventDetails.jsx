import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router';
import { ClipLoader } from 'react-spinners';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const mockEvents = useLoaderData();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(formData)

  useEffect(() => {
    const fetchEvent = () => {
      const foundEvent = mockEvents.find(e => e.id === parseInt(id));
      setEvent(foundEvent);
      setLoading(false);
    };

    fetchEvent();
  }, [id, mockEvents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;

    setFormData({ name, email });

    setIsSubmitted(true);

    e.target.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
    <ClipLoader 
      color="#93e77a"
      size={50}
      speedMultiplier={0.8}
    />
  </div>;
  }

  if (!event) {
    return <div className="flex justify-center items-center h-screen">
    <ClipLoader 
      color="#93e77a"
      size={50}
      speedMultiplier={0.8}
    />
  </div>
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
      >
        ← Back to Events
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={event.thumbnail} 
          alt={event.title} 
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
            <span className="mx-2">•</span>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.location}</span>
          </div>
          <p className="text-lg text-gray-700 mb-6">{event.description}</p>
          
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Reserve Your Seat</h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Your seat has been reserved successfully!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#93e77a] rounded hover:bg-[#87c781] transition-colors"
                >
                  Reserve Seat
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;