// Select all call buttons
const callButtons = document.querySelectorAll(".call-btn");

// Call history container
const callHistoryList = document.getElementById("call-history");

// Clear button
const clearBtn = document.getElementById("clear-history");

// Function: Add call to history
function addCallHistory(name, number) {

    const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const div = document.createElement("div");
    div.className = "flex items-center justify-between bg-gray-50 p-2 rounded-lg";

    div.innerHTML = `
        <div>
            <p class="font-medium text-sm">${name}</p>
            <p class="text-gray-600 text-xs">${number}</p>
        </div>
        <p class="text-xs text-gray-500">${time}</p>
    `;

    callHistoryList.prepend(div); // Add at the top
}

// Add event listeners to all call buttons
callButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        const number = btn.getAttribute("data-number");
        addCallHistory(name, number);
    });
});

// Clear history
clearBtn.addEventListener("click", () => {
    callHistoryList.innerHTML = "";
});



