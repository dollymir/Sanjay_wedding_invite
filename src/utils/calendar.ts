// Utility to generate and download an iCalendar (.ics) file
// and provide Google Calendar links for Sanjay & Simran's Wedding

export function downloadWeddingCalendar() {
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sanjay & Simran Wedding Celebrations//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    // Event 1: Celebrations Commencement (Janau to Ring Ceremony)
    'BEGIN:VEVENT',
    'UID:sanju-simran-day1-20270103@sanjaysimranwedding.com',
    'DTSTAMP:20260101T000000Z',
    'DTSTART;TZID=Asia/Kolkata:20270103T110000',
    'DTEND;TZID=Asia/Kolkata:20270103T233000',
    'SUMMARY:Sanjay & Simran Wedding Celebrations – Day 1',
    'DESCRIPTION:Day 1 Celebrations: Janau Ceremony (11:00 AM), The Carnival (2:00 PM), Pujya Baharan Saheb (6:30 PM), Ring Ceremony (8:30 PM). With love from the Groom\'s Family!',
    'LOCATION:Ringing Bells, Near Ring Road',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    // Event 2: Main Wedding Day (Sathsod to Grand Reception)
    'BEGIN:VEVENT',
    'UID:sanju-simran-day2-20270104@sanjaysimranwedding.com',
    'DTSTAMP:20260101T000000Z',
    'DTSTART;TZID=Asia/Kolkata:20270104T100000',
    'DTEND;TZID=Asia/Kolkata:20270104T235900',
    'SUMMARY:Sanjay & Simran Main Wedding Day & Reception – Day 2',
    'DESCRIPTION:Day 2 Celebrations: Sathsod (10:00 AM), Dikh (2:00 PM), Bharat (4:00 PM), Wedding Ceremony / Pheras (6:00 PM), Reception (8:30 PM). Venue: Ringing Bells, Near Ring Road.',
    'LOCATION:Ringing Bells, Near Ring Road',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Sanjay-and-Simran-Wedding-2027.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarLink(): string {
  const title = encodeURIComponent('Sanjay & Simran Wedding Celebrations');
  const details = encodeURIComponent(
    'Celebrate the auspicious wedding ceremonies of Sanjay & Simran on 3 & 4 January 2027.\n\nDay 1: Janau (11 AM), Carnival (2 PM), Pujya Baharan Saheb (6:30 PM), Ring Ceremony (8:30 PM)\nDay 2: Sathsod (10 AM), Dikh (2 PM), Bharat (4 PM), Wedding Ceremony (6 PM), Reception (8:30 PM)\n\nVenue: Ringing Bells, Near Ring Road.'
  );
  const location = encodeURIComponent('Ringing Bells, Near Ring Road');
  // Dates in UTC: 2027-01-03 11:00 AM IST is 05:30 UTC -> 20270103T053000Z
  // 2027-01-04 11:59 PM IST is 18:29 UTC -> 20270104T183000Z
  const dates = '20270103T053000Z/20270104T183000Z';
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}
