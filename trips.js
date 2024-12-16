document.addEventListener("DOMContentLoaded", () => {
  const tripResultsContainer = document.querySelector("#trip-results .grid-container");

  // Function to load trips from local storage
  function loadTripsFromLocalStorage() {
    const storedTrips = localStorage.getItem("trips");
    return storedTrips ? JSON.parse(storedTrips) : [];
  }

  // Function to save trips to local storage
  function saveTripsToLocalStorage(trips) {
    localStorage.setItem("trips", JSON.stringify(trips));
  }

  // Function to load and display trips
  function loadTrips(filter = null) {
    const trips = loadTripsFromLocalStorage();

    tripResultsContainer.innerHTML = ""; // Clear existing trips

    let filteredTrips = trips;

    if (filter) {
      const { budget, location } = filter;
      filteredTrips = trips.filter(trip => {
        return (
          (budget === "any" || trip.budget.toLowerCase() === budget.toLowerCase()) &&
          (location === "" || trip.location.toLowerCase().includes(location.toLowerCase()))
        );
      });
    }

    filteredTrips.forEach(trip => {
      const tripCard = document.createElement("div");
      tripCard.classList.add("destination-card");
      tripCard.innerHTML = `
        <h3>${trip.title}</h3>
        <p><strong>Location:</strong> ${trip.location}</p>
        <p><strong>Budget:</strong> ${trip.budget}</p>
        <p>${trip.description}</p>
        <a href="#" class="btn">View Details</a>
      `;
      tripResultsContainer.appendChild(tripCard);
    });
  }

  // Load trips on initial page load
  loadTrips();

  // Event Listener for filter form
  document.getElementById("apply-filters").addEventListener("click", () => {
    const budget = document.getElementById("budget").value;
    const location = document.getElementById("location").value;
    loadTrips({ budget, location });
  });

  // Event Listener for post-trip form
  document.getElementById("post-trip-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const location = document.getElementById("location").value;
    const budget = document.getElementById("budget").value;
    const description = document.getElementById("description").value;

    const newTrip = { title, location, budget, description };

    const currentTrips = loadTripsFromLocalStorage(); // Load existing trips
    currentTrips.push(newTrip); 

    saveTripsToLocalStorage(currentTrips); // Save the updated trips array
    loadTrips(); // Immediately reload trips to display the new post

    alert("Trip posted successfully!");
    postTripForm.reset();
  });
});