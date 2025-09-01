const progressSteps = document.querySelectorAll(".progress-step");
const progressLine = document.getElementById("progress-line");
const totalSteps = progressSteps.length;

function updateProgress(stepNumber) {
  // Remove active class from all steps
  progressSteps.forEach((step) => {
    step.classList.remove("active");
  });

  // Add active class to the current and previous steps
  for (let i = 0; i < stepNumber; i++) {
    progressSteps[i].classList.add("active");
  }

  // Calculate and update the line width
  const percentage = ((stepNumber - 1) / (totalSteps - 1)) * 100;
  progressLine.style.width = percentage + "%";
}

// Add click listeners to each step
progressSteps.forEach((step) => {
  step.addEventListener("click", () => {
    const stepNumber = parseInt(step.dataset.step);
    updateProgress(stepNumber);
  });
});

// Initialize the progress bar to the first step on page load
updateProgress(1);
