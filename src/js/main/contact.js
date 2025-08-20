// Contact form functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize contact form
  initializeContactForm();

  // Initialize form validation
  initializeFormValidation();
});

/**
 * Initialize contact form functionality
 */
function initializeContactForm() {
  const contactForm = document.getElementById("contact-form");

  if (!contactForm) {
    console.error("Contact form not found");
    return;
  }

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      showMessage("Please fill in all required fields correctly.", "error");
      return;
    }

    // Show loading state
    contactForm.classList.add("loading");

    // Get form data
    const formData = new FormData(contactForm);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      // Submit form to backend
      const response = await fetch("/submit-contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.error) {
        showMessage(result.error, "error");
      } else {
        // Show success message
        showMessage(result.message, "success");

        // Reset form
        contactForm.reset();
        clearValidationStates();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showMessage(
        "Sorry, there was an error sending your message. Please try again or contact us directly.",
        "error"
      );
    } finally {
      // Hide loading state
      contactForm.classList.remove("loading");
    }
  });
}

/**
 * Initialize form validation
 */
function initializeFormValidation() {
  const formInputs = document.querySelectorAll(".form-input, .form-textarea");

  formInputs.forEach((input) => {
    // Real-time validation on input
    input.addEventListener("input", function () {
      validateField(this);
    });

    // Validation on blur
    input.addEventListener("blur", function () {
      validateField(this);
    });
  });
}

/**
 * Validate individual field
 */
function validateField(field) {
  const value = field.value.trim();
  const isRequired = field.hasAttribute("required");
  let isValid = true;

  // Remove previous validation states
  field.classList.remove("is-valid", "is-invalid");

  if (isRequired && !value) {
    isValid = false;
  } else if (value) {
    // Specific validation based on field type
    switch (field.type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        break;
      case "tel":
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        isValid = phoneRegex.test(value);
        break;
      default:
        if (field.name === "name") {
          isValid = value.length >= 2;
        } else if (field.name === "message") {
          isValid = value.length >= 10;
        }
        break;
    }
  }

  // Apply validation state
  if (value && isValid) {
    field.classList.add("is-valid");
  } else if (isRequired && (!value || !isValid)) {
    field.classList.add("is-invalid");
  }

  return isValid;
}

/**
 * Validate entire form
 */
function validateForm() {
  const formInputs = document.querySelectorAll(
    ".form-input[required], .form-textarea[required]"
  );
  let isFormValid = true;

  formInputs.forEach((input) => {
    if (!validateField(input)) {
      isFormValid = false;
    }
  });

  return isFormValid;
}

/**
 * Clear validation states
 */
function clearValidationStates() {
  const formInputs = document.querySelectorAll(".form-input, .form-textarea");
  formInputs.forEach((input) => {
    input.classList.remove("is-valid", "is-invalid");
  });
}

/**
 * Show message with specified type
 */
function showMessage(message, type = "info") {
  // Remove any existing messages
  const existingMessages = document.querySelectorAll(".form-message");
  existingMessages.forEach((msg) => msg.remove());

  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = `form-message ${type}`;
  messageElement.innerHTML = `
        <i class="fas ${
          type === "success"
            ? "fa-check-circle"
            : type === "error"
            ? "fa-exclamation-triangle"
            : "fa-info-circle"
        }"></i>
        ${message}
    `;

  // Insert message at top of form
  const formContainer = document.querySelector(".contact-form-container");
  const formHeading = formContainer.querySelector(".form-heading");
  formContainer.insertBefore(messageElement, formHeading.nextSibling);

  // Add entrance animation
  messageElement.style.opacity = "0";
  messageElement.style.transform = "translateY(-10px)";

  setTimeout(() => {
    messageElement.style.opacity = "1";
    messageElement.style.transform = "translateY(0)";
    messageElement.style.transition = "all 0.3s ease";
  }, 100);

  // Auto remove success messages after 8 seconds
  if (type === "success") {
    setTimeout(() => {
      if (messageElement.parentNode) {
        messageElement.style.opacity = "0";
        messageElement.style.transform = "translateY(-10px)";
        setTimeout(() => {
          if (messageElement.parentNode) {
            messageElement.remove();
          }
        }, 300);
      }
    }, 8000);
  }
}

/**
 * Add smooth scrolling for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/**
 * Add hover effects for contact items
 */
document.addEventListener("DOMContentLoaded", function () {
  const contactItems = document.querySelectorAll(".contact-item");

  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(10px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });
});

/**
 * Handle contact info clicks (for mobile)
 */
document.addEventListener("click", function (e) {
  // Handle phone number clicks
  if (
    e.target.textContent &&
    e.target.textContent.includes("+20 100 12 16 321")
  ) {
    if (window.innerWidth <= 768) {
      window.location.href = "tel:+201001216321";
    }
  }

  // Handle email clicks
  if (
    e.target.textContent &&
    e.target.textContent.includes("Hostina@gmail.com")
  ) {
    window.location.href = "mailto:Hostina@gmail.com";
  }
});

/**
 * Form accessibility enhancements
 */
document.addEventListener("keydown", function (e) {
  // Allow form submission with Ctrl+Enter in textarea
  if (e.ctrlKey && e.key === "Enter" && e.target.tagName === "TEXTAREA") {
    const form = e.target.closest("form");
    if (form) {
      form.dispatchEvent(new Event("submit"));
    }
  }
});

/**
 * Auto-resize textarea based on content
 */
document.addEventListener("input", function (e) {
  if (e.target.tagName === "TEXTAREA") {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
});

/**
 * Add character counter for message field
 */
document.addEventListener("DOMContentLoaded", function () {
  const messageField = document.querySelector('textarea[name="message"]');
  if (messageField) {
    const counterElement = document.createElement("div");
    counterElement.className = "character-counter";
    counterElement.style.cssText = `
            font-size: 1.2rem;
            color: var(--color-text);
            text-align: right;
            margin-top: 0.5rem;
        `;

    messageField.parentNode.appendChild(counterElement);

    function updateCounter() {
      const length = messageField.value.length;
      const minLength = 10;
      counterElement.textContent = `${length} characters (minimum ${minLength})`;
      counterElement.style.color =
        length >= minLength ? "var(--color-secondary)" : "var(--color-text)";
    }

    messageField.addEventListener("input", updateCounter);
    updateCounter();
  }
});
