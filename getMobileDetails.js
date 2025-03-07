// getMobileDetails.js

export async function getMobileDetails() {
    try {
        const response = await fetch('common_mobile_devices.json');
        const jsonData = await response.json();
        
        const container = document.getElementById('mobile-list');
        const ul = document.createElement('ul');
        ul.style.display = 'flex';
        ul.style.flexWrap = 'wrap';
        ul.style.gap = '40px';
        ul.style.flexDirection = 'row';
        
        const button = document.createElement('details-button');
        jsonData.devices.forEach((device) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${device.img}" width="100" height="100"> <br>
                <strong>Brand:</strong> ${device.brand} <br>
                <strong>Model:</strong> ${device.model} <br>
                <strong>Release Year:</strong> ${device.release_year} <br>

                <hr>
            `;

            const button = document.createElement('button');
            button.textContent = 'Show Details';
            li.appendChild(button);
            ul.appendChild(li);
            button.addEventListener('click', () => {
                const fullDetails = document.createElement('li');
                fullDetails.innerHTML = `

                    Display Size: ${device.display_size} 
                    Processor: ${device.processor} 
                    RAM: ${device.RAM} 
                    Storage: ${device.storage} 
                    Battery: ${device.battery} 
                    Price Range: ${device.price_range}
                    
                    
                `;
               alert("Details: " + fullDetails.innerHTML);
            });

        });
        
        container.appendChild(ul);
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}
