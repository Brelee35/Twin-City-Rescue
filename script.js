// ========================================
// Twin Cities Animal Rescue
// JavaScript
// ========================================

// Information about the ways visitors can help
const helpOptions = {
    volunteer: {
        title: "Volunteering",
        description: "Volunteers can help with animal care, events, outreach, and other rescue activities."
    },

    foster: {
        title: "Fostering",
        description: "Foster families provide temporary, safe homes for animals while they wait for permanent placement."
    },

    adoption: {
        title: "Adoption",
        description: "Interested in adoption? We can help you learn more about available animals and the adoption process."
    },

    other: {
        title: "Other Ways to Help",
        description: "There are many ways to support Twin Cities Animal Rescue. Contact us to learn how you can make a difference."
    }
};
// Additional information about each type of involvement
const interestDetails = {
    volunteer: {
        time: "Flexible volunteer opportunities are available.",
        nextStep: "Contact us to learn about current volunteer opportunities."
    },

    foster: {
        time: "Foster commitments can vary depending on the animal.",
        nextStep: "Contact us to learn about becoming a foster family."
    },

    adoption: {
        time: "The adoption process depends on the animal and family.",
        nextStep: "Contact us to learn about available animals."
    },

    other: {
        time: "There are several ways to support our rescue.",
        nextStep: "Contact us to discuss other ways you can help."
    }
};
// Array used to organize the available interests
const interestTypes = [
    "volunteer",
    "foster",
    "adoption",
    "other"
];

// Show information based on the visitor's selection
function showInterestInfo() {
    const interest = document.getElementById("interest");
    const interestInfo = document.getElementById("interestInfo");

    if (!interest || !interestInfo) {
        return;
    }

    const selectedInterest = interest.value;

    if (helpOptions[selectedInterest]) {
        interestInfo.innerHTML = `
            <h3>${helpOptions[selectedInterest].title}</h3>
            <p>${helpOptions[selectedInterest].description}</p>
        `;
    } else {
        interestInfo.innerHTML = "";
    }
}

// Save the visitor's information
function saveUserData() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const interest = document.getElementById("interest");

    if (name) {
        localStorage.setItem("rescueName", name.value);
    }

    if (email) {
        localStorage.setItem("rescueEmail", email.value);
    }

    if (interest) {
        localStorage.setItem("rescueInterest", interest.value);
    }
}

// Load saved visitor information
function loadUserData() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const interest = document.getElementById("interest");

    const savedName = localStorage.getItem("rescueName");
    const savedEmail = localStorage.getItem("rescueEmail");
    const savedInterest = localStorage.getItem("rescueInterest");

    if (name && savedName) {
        name.value = savedName;
    }

    if (email && savedEmail) {
        email.value = savedEmail;
    }

    if (interest && savedInterest) {
        interest.value = savedInterest;
        showInterestInfo();
    }
}

// Validate the interest form
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const interest = document.getElementById("interest");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const interestError = document.getElementById("interestError");
    const messageError = document.getElementById("messageError");

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    interestError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Check name
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    // Check email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email address.";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Check interest
    if (interest.value === "") {
        interestError.textContent = "Please select how you would like to help.";
        isValid = false;
    }

    // Check message length
    if (message.value.trim() !== "" && message.value.trim().length < 10) {
        messageError.textContent = "Please enter at least 10 characters.";
        isValid = false;
    }

    // Save information if everything is valid
    if (isValid) {
        saveUserData();

        alert(
            "Thank you for your interest in supporting Twin Cities Animal Rescue!"
        );
    }
}

// Set up the page when it loads
function initializePage() {
    const interest = document.getElementById("interest");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const form = document.getElementById("interestForm");

    if (interest) {
        interest.addEventListener("change", showInterestInfo);
        interest.addEventListener("change", saveUserData);
    }

    if (name) {
        name.addEventListener("input", saveUserData);
    }

    if (email) {
        email.addEventListener("input", saveUserData);
    }

    if (form) {
        form.addEventListener("submit", validateForm);
    }

    loadUserData();
}

// Run the page setup
document.addEventListener("DOMContentLoaded", initializePage);
