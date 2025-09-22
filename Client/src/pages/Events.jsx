import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Events = () => {
  // Animation states
  const [animatedSections, setAnimatedSections] = useState({
    hero: false,
    calendar: false,
    upcoming: false,
    featured: false,
    past: false,
    newsletter: false
  });

  // Calendar state
  const [date, setDate] = useState(new Date());
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDates, setEventDates] = useState([
    new Date(2024, 9, 15), // October 15, 2024
    new Date(2024, 10, 5), // November 5, 2024
    new Date(2024, 11, 1), // December 1, 2024
    new Date(2025, 4, 26), // May 26, 2025
  ]);

  // Refs for sections
  const heroRef = useRef(null);
  const calendarRef = useRef(null);
  const upcomingRef = useRef(null);
  const featuredRef = useRef(null);
  const pastRef = useRef(null);
  const newsletterRef = useRef(null);

  // Sample event data
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Monastery Festival",
      date: "October 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Tawang Monastery",
      image: "/public/bg2.jpg",
      description: "Join us for a celebration of Buddhist culture with traditional dances, music, and rituals."
    },
    {
      id: 2,
      title: "Meditation Retreat",
      date: "November 5-7, 2024",
      time: "All day",
      location: "Rumtek Monastery",
      image: "/public/card.png",
      description: "A three-day immersive meditation retreat guided by senior monks."
    },
    {
      id: 3,
      title: "Sacred Art Exhibition",
      date: "December 1, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Hemis Monastery",
      image: "/public/bg2.jpg",
      description: "Exhibition of rare thangka paintings and Buddhist artifacts."
    }
  ];

  const featuredEvent = {
    title: "Buddha Purnima Celebration",
    date: "May 26, 2025",
    location: "Multiple Monasteries",
    image: "/public/card.png",
    description: "The most auspicious day in the Buddhist calendar celebrating Buddha's birth, enlightenment, and death. Join special ceremonies, prayer sessions, and cultural performances across various monasteries."
  };

  const pastEvents = [
    {
      id: 1,
      title: "Summer Dharma Teachings",
      date: "July 10-15, 2024",
      location: "Thiksey Monastery",
      image: "/public/card.png"
    },
    {
      id: 2,
      title: "Cultural Heritage Day",
      date: "August 20, 2024",
      location: "Lamayuru Monastery",
      image: "/public/card.png"
    },
    {
      id: 3,
      title: "Monastic Life Workshop",
      date: "September 5, 2024",
      location: "Phuktal Monastery",
      image: "/public/card.png"
    },
    {
      id: 4,
      title: "Traditional Music Concert",
      date: "September 18, 2024",
      location: "Diskit Monastery",
      image: "/public/card.jpg"
    }
  ];

  // Function to check if a date has an event
  const hasEvent = (date) => {
    return eventDates.some(eventDate => 
      date.getDate() === eventDate.getDate() && 
      date.getMonth() === eventDate.getMonth() && 
      date.getFullYear() === eventDate.getFullYear()
    );
  };

  // Handle date change
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate);
  };

  // Handle month change
  const handleActiveStartDateChange = ({ activeStartDate }) => {
    if (activeStartDate) {
      setActiveMonth(activeStartDate.getMonth());
    }
  };

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section;
          setAnimatedSections(prev => ({
            ...prev,
            [section]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section refs
    if (heroRef.current) observer.observe(heroRef.current);
    if (calendarRef.current) observer.observe(calendarRef.current);
    if (upcomingRef.current) observer.observe(upcomingRef.current);
    if (featuredRef.current) observer.observe(featuredRef.current);
    if (pastRef.current) observer.observe(pastRef.current);
    if (newsletterRef.current) observer.observe(newsletterRef.current);

    return () => {
      // Cleanup observer
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (calendarRef.current) observer.unobserve(calendarRef.current);
      if (upcomingRef.current) observer.unobserve(upcomingRef.current);
      if (featuredRef.current) observer.unobserve(featuredRef.current);
      if (pastRef.current) observer.unobserve(pastRef.current);
      if (newsletterRef.current) observer.unobserve(newsletterRef.current);
    };
  }, []);

  return (
    <div className="bg-amber-50 text-gray-800 min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        data-section="hero"
        className={`relative h-[60vh] flex items-center justify-center bg-cover bg-center transition-all duration-1000 ${
          animatedSections.hero ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
        style={{ backgroundImage: 'url("/public/bg2.jpg")' }}
      >
        <div className="absolute inset-0 bg-amber-900 bg-opacity-60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-100">
            Monastery Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-amber-50">
            Experience the rich cultural heritage and spiritual traditions through our monastery events
          </p>
          <Link 
            to="/explore" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105 inline-flex items-center group"
          >
            <span>Explore All Events</span>
            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
          </Link>
        </div>
      </section>

      {/* Calendar Section */}
      <section 
        ref={calendarRef}
        data-section="calendar"
        className={`py-16 bg-amber-50 transition-all duration-1000 ${
          animatedSections.calendar ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-amber-800">
            Event Calendar
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-amber-200">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-7/12">
                  <div className="custom-calendar">
                    <Calendar
                      onChange={handleDateChange}
                      value={date}
                      onActiveStartDateChange={handleActiveStartDateChange}
                      tileClassName={({ date }) => 
                        hasEvent(date) ? 'event-date' : null
                      }
                      tileContent={({ date }) => 
                        hasEvent(date) ? <div className="event-dot"></div> : null
                      }
                      className="rounded-lg shadow-sm border-amber-200 border"
                    />
                  </div>
                  <style jsx="true">{`
                    .custom-calendar .react-calendar {
                      width: 100%;
                      border: none;
                      font-family: inherit;
                    }
                    .custom-calendar .react-calendar__tile {
                      position: relative;
                      height: 48px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      transition: all 0.2s ease;
                    }
                    .custom-calendar .react-calendar__tile:hover {
                      background-color: rgba(245, 158, 11, 0.1);
                    }
                    .custom-calendar .react-calendar__tile--active {
                      background-color: #f59e0b !important;
                      color: white;
                    }
                    .custom-calendar .react-calendar__tile--now {
                      background-color: rgba(245, 158, 11, 0.2);
                    }
                    .custom-calendar .react-calendar__navigation {
                      margin-bottom: 1rem;
                    }
                    .custom-calendar .react-calendar__navigation button {
                      min-width: 44px;
                      background: none;
                      font-size: 16px;
                      border-radius: 6px;
                      transition: all 0.2s ease;
                    }
                    .custom-calendar .react-calendar__navigation button:hover {
                      background-color: rgba(245, 158, 11, 0.1);
                    }
                    .custom-calendar .react-calendar__month-view__weekdays {
                      font-weight: bold;
                      color: #92400e;
                    }
                    .custom-calendar .event-date {
                      font-weight: bold;
                      color: #92400e;
                    }
                    .custom-calendar .event-dot {
                      position: absolute;
                      bottom: 4px;
                      left: 50%;
                      transform: translateX(-50%);
                      width: 6px;
                      height: 6px;
                      background-color: #f59e0b;
                      border-radius: 50%;
                    }
                  `}</style>
                </div>
                
                <div className="lg:w-5/12 bg-amber-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-4 text-amber-800">
                    {selectedDate ? (
                      `Events on ${selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
                    ) : (
                      "Upcoming Events"
                    )}
                  </h3>
                  
                  <div className="space-y-4">
                    {selectedDate && hasEvent(selectedDate) ? (
                      upcomingEvents
                        .filter(event => {
                          const eventDate = new Date(event.date);
                          return eventDate.getDate() === selectedDate.getDate() &&
                                 eventDate.getMonth() === selectedDate.getMonth();
                        })
                        .map(event => (
                          <div key={event.id} className="flex items-start p-3 bg-white rounded-lg border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="bg-amber-100 rounded-full p-2 mr-3">
                              <i className="fas fa-calendar-day text-amber-600"></i>
                            </div>
                            <div>
                              <h4 className="font-medium text-amber-800">{event.title}</h4>
                              <p className="text-sm text-gray-600">{event.time} • {event.location}</p>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="text-center py-6">
                        <div className="inline-block p-3 bg-amber-100 rounded-full mb-3">
                          <i className="fas fa-calendar text-amber-600 text-xl"></i>
                        </div>
                        <p className="text-gray-600">Select a date to see events</p>
                        <p className="text-sm text-gray-500 mt-2">Dates with events are highlighted</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section 
        ref={upcomingRef}
        data-section="upcoming"
        className={`py-16 transition-all duration-1000 ${
          animatedSections.upcoming ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-800">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-amber-600/20 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  opacity: animatedSections.upcoming ? 1 : 0,
                  transform: animatedSections.upcoming 
                    ? 'translateY(0)' 
                    : 'translateY(20px)',
                  transition: `all 0.7s ease ${index * 0.2}s`
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-amber-700">{event.title}</h3>
                    <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">Upcoming</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="far fa-calendar-alt text-amber-500 mr-2"></i>
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="far fa-clock text-amber-500 mr-2"></i>
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-map-marker-alt text-amber-500 mr-2"></i>
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <button className="w-full bg-amber-100 hover:bg-amber-600 hover:text-white text-amber-800 py-2 rounded-lg transition-all duration-300 hover:shadow-md group">
                    <span className="group-hover:mr-2 transition-all duration-300">Register Now</span>
                    <i className="fas fa-arrow-right opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section 
        ref={featuredRef}
        data-section="featured"
        className={`py-16 bg-amber-100/50 transition-all duration-1000 ${
          animatedSections.featured ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-800">
            Featured Event
          </h2>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto border border-amber-200">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="inline-block bg-amber-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                  Special Event
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-700">
                  {featuredEvent.title}
                </h3>
                <div className="flex items-center mb-3">
                  <i className="far fa-calendar-alt text-amber-500 mr-2"></i>
                  <span className="text-gray-700">{featuredEvent.date}</span>
                </div>
                <div className="flex items-center mb-6">
                  <i className="fas fa-map-marker-alt text-amber-500 mr-2"></i>
                  <span className="text-gray-700">{featuredEvent.location}</span>
                </div>
                <p className="text-gray-600 mb-8">
                  {featuredEvent.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30 hover:scale-105 flex items-center group">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </button>
                  <button className="bg-transparent border border-amber-600 text-amber-700 hover:bg-amber-600/20 px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center group">
                    <i className="far fa-calendar-plus mr-2 group-hover:animate-pulse"></i>
                    <span>Add to Calendar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section 
        ref={pastRef}
        data-section="past"
        className={`py-16 transition-all duration-1000 ${
          animatedSections.past ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-800">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-amber-600/20 transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  opacity: animatedSections.past ? 1 : 0,
                  transform: animatedSections.past 
                    ? 'translateY(0)' 
                    : 'translateY(20px)',
                  transition: `all 0.5s ease ${index * 0.15}s`
                }}
              >
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-amber-900 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-amber-700 group-hover:text-amber-800 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="flex items-center mb-1 text-sm text-gray-600">
                    <i className="far fa-calendar-alt text-amber-500 mr-2"></i>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <i className="fas fa-map-marker-alt text-amber-500 mr-2"></i>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <button className="w-full bg-amber-100 hover:bg-amber-600 hover:text-white text-amber-800 py-2 rounded text-sm transition-all duration-300 flex items-center justify-center group">
                    <span>View Gallery</span>
                    <i className="fas fa-images ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 ">
            <Link 
              to="/archives" 
              className="inline-flex items-center text-amber-700 hover:text-amber-800 transition-all duration-300 group"
            >
              <span className='border p-2 rounded-md'>View All Past Events</span>
              <i className="fas fa-long-arrow-alt-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
            </Link>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Events;