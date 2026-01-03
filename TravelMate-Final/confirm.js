document.addEventListener("DOMContentLoaded", () => {

  const data = JSON.parse(localStorage.getItem("bookingData"));

  if (!data) {
    alert("No booking data found!");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("name").textContent = data.name;
  document.getElementById("email").textContent = data.email;
  document.getElementById("phone").textContent = data.phone;
  document.getElementById("destination").textContent = data.destination;
  document.getElementById("package").textContent = data.package;
  document.getElementById("days").textContent = data.days;
  document.getElementById("travelers").textContent = data.travelers;
  document.getElementById("basePrice").textContent = data.basePrice;
  document.getElementById("packagePrice").textContent = data.packageExtra;
  document.getElementById("totalPrice").textContent = data.totalPrice;

});


