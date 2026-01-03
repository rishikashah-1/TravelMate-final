console.log("book.js loaded");

document.addEventListener("DOMContentLoaded", () => {

  const bookingForm = document.getElementById("bookingForm");

  const destinationSelect = document.getElementById("destination");
  const packageSelect = document.getElementById("package");
  const travelersInput = document.getElementById("travelers");

  const daysEl = document.getElementById("days");
  const basePriceEl = document.getElementById("basePrice");
  const packagePriceEl = document.getElementById("packagePrice");
  const travelerCountEl = document.getElementById("travelerCount");
  const totalPriceEl = document.getElementById("totalPrice");

  // DESTINATION DATA
  const destinationData = {
    Rishikesh: { days: 3, basePrice: 8500 },
    Ladakh: { days: 7, basePrice: 13000 },
    Spiti: { days: 8, basePrice: 15500 },
    Ziro: { days: 5, basePrice: 18000 }
  };

  // PACKAGE EXTRA COST
  const packageExtra = {
    Standard: 0,
    Deluxe: 3000,
    Luxury: 6000
  };

  function updatePrice() {
    const destination = destinationSelect.value;
    const selectedPackage = packageSelect.value;
    const travelers = parseInt(travelersInput.value) || 1;

    travelerCountEl.textContent = travelers;

    if (!destination || !selectedPackage) {
      daysEl.textContent = "-";
      basePriceEl.textContent = "0";
      packagePriceEl.textContent = "0";
      totalPriceEl.textContent = "0";
      return;
    }

    const { days, basePrice } = destinationData[destination];
    const extra = packageExtra[selectedPackage];
    const total = (basePrice + extra) * travelers;

    daysEl.textContent = days;
    basePriceEl.textContent = basePrice;
    packagePriceEl.textContent = extra;
    totalPriceEl.textContent = total;
  }

  destinationSelect.addEventListener("change", updatePrice);
  packageSelect.addEventListener("change", updatePrice);
  travelersInput.addEventListener("input", updatePrice);

  // ✅ FORM SUBMIT
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingData = {
      name: bookingForm.querySelector('input[type="text"]').value,
      email: bookingForm.querySelector('input[type="email"]').value,
      phone: bookingForm.querySelector('input[type="tel"]').value,

      destination: destinationSelect.value,
      package: packageSelect.value,
      travelers: travelersInput.value,

      days: daysEl.textContent,
      basePrice: basePriceEl.textContent,
      packagePrice: packagePriceEl.textContent,
      totalPrice: totalPriceEl.textContent
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    // ✅ REDIRECT TO PAYMENT
    window.location.href = "payment.html";
  });

});
