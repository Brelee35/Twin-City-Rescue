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

// Start the page when it loads
function initializePage() {
    const interest = document.getElementById("interest");

    if (interest) {
        interest.addEventListener("change", showInterestInfo);
    }
}

// Run the page setup
document.addEventListener("DOMContentLoaded", initializePage);
