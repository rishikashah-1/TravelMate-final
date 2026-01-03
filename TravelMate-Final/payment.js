document.addEventListener("DOMContentLoaded", () => {

  const data = JSON.parse(localStorage.getItem("bookingData"));

  if (!data) {
    alert("No booking found!");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("payAmount").textContent = data.totalPrice;

  document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Payment Successful! 🎉");
     
     window.location.href = "confirm.html";
  });

});
