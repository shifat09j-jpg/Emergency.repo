
// Total coins
let coins = 100;


const coinCount = document.getElementById("coin-count");


const callButtons = document.querySelectorAll(".call-btn");


const callHistoryList = document.getElementById("call-history");


const clearBtn = document.getElementById("clear-history");


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

    callHistoryList.prepend(div); 
}

// Add event listeners to all call buttons
callButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        
        if (coins < 20) {
            alert("You don't have enough coins to make a call!");
            return;
        }

        // Alert show
        alert("Calling...");

       
        coins -= 20;
        coinCount.textContent = coins;

       
        const name = btn.getAttribute("data-name");
        const number = btn.getAttribute("data-number");
        addCallHistory(name, number);
    });
});

// Clear history
clearBtn.addEventListener("click", () => {
    callHistoryList.innerHTML = "";
});



// Love counter
let love = 0;


const loveCount = document.getElementById("love-count");


const loveButtons = document.querySelectorAll(".love-btn");


loveButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        love++;
        loveCount.textContent = love;
    });
});










