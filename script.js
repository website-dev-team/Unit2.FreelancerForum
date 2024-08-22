document.addEventListener("DOMContentLoaded", () => {
    const freelancers = [
        { name: "Alice", occupation: "Writer", price: 30 },
        { name: "Bob", occupation: "Teacher", price: 50 }
    ];

    const freelancerList = document.getElementById("freelancer-list");
    const averagePriceDisplay = document.getElementById("average-price");

    function updateAveragePrice() {
        const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
        const average = total / freelancers.length;
        averagePriceDisplay.textContent = `Average Starting Price: $${average.toFixed(2)}`;
    }

    function addFreelancer(freelancer) {
        freelancers.push(freelancer);

        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Name:</strong> ${freelancer.name} <br><strong>Occupation:</strong> ${freelancer.occupation} <br><strong>Starting Price:</strong> $${freelancer.price}`;
        freelancerList.appendChild(listItem);

        updateAveragePrice();
    }

    // Initial average price calculation
    updateAveragePrice();

    // Add a new freelancer after a few seconds
    setTimeout(() => {
        addFreelancer({ name: "Carol", occupation: "Programmer", price: 70 });
    }, 3000);

    // Simulate adding more freelancers every few seconds
    setInterval(() => {
        const newFreelancer = { 
            name: `Freelancer ${freelancers.length + 1}`, 
            occupation: "Designer", 
            price: Math.floor(Math.random() * 100) + 30 
        };
        addFreelancer(newFreelancer);
    }, 5000);
});
