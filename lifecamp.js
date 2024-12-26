function loadGoogleMapsAPI() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Replace 'YOUR_API_KEY' with your actual Google Maps API key.
// Call this function when you want to load the Google Maps API.
loadGoogleMapsAPI();


// Google Maps API Initialization
function initMap() {
    const location = { lat: 6.508214, lng: 3.448389 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Ikate, Lagos"
    });
}




    let selectedDate = null;

    // Initialize Calendar for the current month
    document.addEventListener("DOMContentLoaded", function() {
        const today = new Date();
        renderCalendar(today.getFullYear(), today.getMonth());
    });

    function renderCalendar(year, month) {
        const calendar = document.getElementById("calendar");
        calendar.innerHTML = '';  // Clear previous calendar

        const header = document.createElement("div");
        header.className = "header";
        header.innerHTML = `
            <button onclick="changeMonth(${year}, ${month - 1})">&lt;</button>
            <span>${year}-${month + 1}</span>
            <button onclick="changeMonth(${year}, ${month + 1})">&gt;</button>
        `;
        calendar.appendChild(header);

        // Days of the week
        const daysContainer = document.createElement("div");
        daysContainer.className = "days";
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        days.forEach(day => {
            const dayElement = document.createElement("div");
            dayElement.textContent = day;
            daysContainer.appendChild(dayElement);
        });
        calendar.appendChild(daysContainer);

        // Dates
        const datesContainer = document.createElement("div");
        datesContainer.className = "dates";

        // Calculate first day and total days in the month
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Fill empty slots before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptySlot = document.createElement("div");
            datesContainer.appendChild(emptySlot);
        }

        // Fill days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateElement = document.createElement("div");
            dateElement.textContent = day;
            dateElement.onclick = () => selectDate(year, month, day);

            if (selectedDate && selectedDate.year === year && selectedDate.month === month && selectedDate.day === day) {
                dateElement.classList.add("selected");
            }

            datesContainer.appendChild(dateElement);
        }

        calendar.appendChild(datesContainer);
    }

    function changeMonth(year, month) {
        if (month < 0) {
            year--;
            month = 11;
        } else if (month > 11) {
            year++;
            month = 0;
        }
        renderCalendar(year, month);
    }

    function selectDate(year, month, day) {
        selectedDate = { year, month, day };
        renderCalendar(year, month);
        document.getElementById("selectedDate").textContent = `Selected Date: ${year}-${month + 1}-${day}`;
    }

    function confirmAppointment() {
        if (selectedDate) {
            alert(`Appointment confirmed for ${selectedDate.year}-${selectedDate.month + 1}-${selectedDate.day}`);
        } else {
            alert("Please select a date for your appointment.");
        }
    }





    // slide fade
    // Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0
    );
}

// Function to add the "visible" class to elements in view
function revealSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', revealSections);

// Initial check in case some sections are already in view
revealSections();



// JavaScript for Navbar Toggle
// JavaScript for Navbar Toggle
const toggleButton = document.getElementById("NavmenuToggle");
const closeNavButton = document.getElementById("closeNavToggle");
const navLinks = document.getElementById("mainnavLinks");

// Function to show or hide the navigation menu
const toggleNav = () => {
navLinks.classList.toggle("show");
};

// Event listener for the main toggle button
if (toggleButton) {
toggleButton.addEventListener("click", toggleNav);
}

// Event listener for the close button inside the menu
if (closeNavButton) {
closeNavButton.addEventListener("click", toggleNav);
}

// Optional: Close the nav menu when clicking on a link (for smaller screens)
const navItems = document.querySelectorAll(".mainnav-links a");
navItems.forEach((item) => {
item.addEventListener("click", () => {
  navLinks.classList.remove("show");
});
});

