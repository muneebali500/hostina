// Get DOM elements
const toggleOptions = document.querySelectorAll(".toggle-option");
const monthlyPriceBox = document.getElementById("monthlyPriceBox");
const yearlyPriceBox = document.getElementById("yearlyPriceBox");

// Monthly elements
const monthlySlider = document.getElementById("monthlyPriceSlider");
const monthlyTooltip = document.getElementById("monthlyPriceTooltip");
const monthlyTooltipPrice = document.getElementById("monthlyTooltipPrice");

// Yearly elements
const yearlySlider = document.getElementById("yearlyPriceSlider");
const yearlyTooltip = document.getElementById("yearlyPriceTooltip");
const yearlyTooltipPrice = document.getElementById("yearlyTooltipPrice");

// Setup slider functionality
function setupSlider(slider, tooltip, tooltipPrice) {
  slider.addEventListener("input", function () {
    const value = parseInt(this.value);
    const min = parseInt(this.min);
    const max = parseInt(this.max);
    const percent = ((value - min) / (max - min)) * 100;

    console.log(value, min, max, percent);

    tooltip.style.left = percent + "%";
    tooltip.style.display = "block";
    tooltipPrice.textContent = "$" + value;
  });

  slider.addEventListener("mouseenter", function () {
    tooltip.style.display = "block";
  });

  slider.addEventListener("mouseleave", function () {
    tooltip.style.display = "none";
  });

  // Initialize tooltip position
  const initialValue = parseInt(slider.value);
  const min = parseInt(slider.min);
  const max = parseInt(slider.max);
  const initialPercent = ((initialValue - min) / (max - min)) * 100;
  tooltip.style.left = initialPercent + "%";
  tooltipPrice.textContent = "$" + initialValue;
}

// Setup both sliders
setupSlider(monthlySlider, monthlyTooltip, monthlyTooltipPrice);
setupSlider(yearlySlider, yearlyTooltip, yearlyTooltipPrice);

// Toggle between Monthly/Yearly
toggleOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const billingType = this.getAttribute("data-billing");

    // Update active state
    toggleOptions.forEach((opt) => opt.classList.remove("active"));
    this.classList.add("active");

    // Show/hide price boxes
    if (billingType === "monthly") {
      yearlyPriceBox.classList.add("d-none");
      monthlyPriceBox.classList.remove("d-none");
    } else {
      monthlyPriceBox.classList.add("d-none");
      yearlyPriceBox.classList.remove("d-none");
    }
  });
});
