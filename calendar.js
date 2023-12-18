$(document).ready(function() {
    $('#calendar').evoCalendar({
        calendarEvents: [
      {
        id: 'bHay68s', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        name: "Vacation Leave",
        badge: "02/13 - 02/15", // Event badge (optional)
        date: ["February/13/2020", "February/15/2020"], // Date range
        description: "Vacation leave for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      },
      {
        id: 'bHay68a', // Event's ID (required)
        name: "Republic Day", // Event name (required)
        date: "January/26/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'bHay68d', // Event's ID (required)
        name: "Christmas", // Event name (required)
        date: "December/25/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'bHay68r', // Event's ID (required)
        name: "Independence Day", // Event name (required)
        date: "August/15/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'bHay681', // Event's ID (required)
        name: "Gandhi Jayanti", // Event name (required)
        date: "October/02/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'bHay681u', // Event's ID (required)
        name: "Teacher's Day", // Event name (required)
        date: "September/05/2020", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'bHay681p', // Event's ID (required)
        name: "Maha Shivratri", // Event name (required)
        date: "March/08/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },
      {
        id: 'bHay68', // Event's ID (required)
        name: "Maharashtra Day", // Event name (required)
        date: "May/01/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'bHay686', // Event's ID (required)
        name: "Ganesh Chaturthi", // Event name (required)
        date: "September/07/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },
      {
        id: 'bHay686', // Event's ID (required)
        name: "Holi", // Event name (required)
        date: "March/25/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },
      {
        id: 'bHay686', // Event's ID (required)
        name: "Eid-Al-Fitr", // Event name (required)
        date: "April/09/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },
      {
        id: 'bHay686', // Event's ID (required)
        name: "Diwali", // Event name (required)
        date: "November/01/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },
      {
        id: 'bHay686', // Event's ID (required)
        name: "Ram Navami", // Event name (required)
        date: "April/17/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },
      {
        id: 'bHay686e', // Event's ID (required)
        name: "Gudi Padwa", // Event name (required)
        date: "April/09/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },
      {
        id: 'bHay686e', // Event's ID (required)
        name: "Vijayadashami", // Event name (required)
        date: "October/12/2024", // Event date (required)
        type: "holiday", // Event type (required)
        everyYear: false // Same event every year (optional)
      },
    ]
    })
})