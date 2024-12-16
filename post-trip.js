document.addEventListener("DOMContentLoaded", () => {
  const postTripForm = document.getElementById("post-trip-form");

  postTripForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const location = document.getElementById("location").value;
    const budget = document.getElementById("budget").value;
    const description = document.getElementById("description").value;

    // Simulate posting the trip (replace with actual API call)
    console.log("New Trip Posted:", { title, location, budget, description });

    alert("Trip posted successfully!");
    postTripForm.reset();
  });
});