const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const serviceInput = document.getElementById("service");
const tipRange = document.getElementById("tipRange");

const tipValue = document.getElementById("tipValue");
const tipAmount = document.getElementById("tipAmount");
const totalPerPerson = document.getElementById("totalPerPerson");

function calculateTip() {
    let bill = parseFloat(billInput.value);
    let people = parseInt(peopleInput.value);
    let service = parseFloat(serviceInput.value);
    let customTip = parseFloat(tipRange.value) / 100;

    // Prevent errors
    if (isNaN(bill) || bill <= 0) {
        tipAmount.textContent = "₦0.00";
        totalPerPerson.textContent = "₦0.00";
        return;
    }

    if (isNaN(people) || people <= 0) {
        people = 1; // fallback
    }

    // Combine service + custom tip
    let totalTipPercent = service + customTip;

    let tip = bill * totalTipPercent;
    let total = bill + tip;
    let perPerson = total / people;

    // Display with Naira symbol
    tipAmount.textContent = "₦" + tip.toFixed(2);
    totalPerPerson.textContent = "₦" + perPerson.toFixed(2);
}

// Update slider text
tipRange.addEventListener("input", () => {
    tipValue.textContent = tipRange.value + "%";
    calculateTip();
});

// Live updates
billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);
serviceInput.addEventListener("change", calculateTip);

// Run once on page load
calculateTip();