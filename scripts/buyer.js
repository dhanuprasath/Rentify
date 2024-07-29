document.addEventListener('DOMContentLoaded', function () {
    const properties = JSON.parse(localStorage.getItem('properties')) || [];

    const propertiesList = document.getElementById('propertiesList');

    function displayProperties(filteredProperties) {
        propertiesList.innerHTML = '';
        filteredProperties.forEach(property => {
            const propertyDiv = document.createElement('div');
            propertyDiv.className = 'property';
            propertyDiv.innerHTML = `
                <h4>${property.place}</h4>
                <p>Area: ${property.area} sq ft</p>
                <p>Bedrooms: ${property.bedrooms}</p>
                <p>Bathrooms: ${property.bathrooms}</p>
                <p>Hospitals Nearby: ${property.hospitals}</p>
                <p>Colleges Nearby: ${property.colleges}</p>
                <button onclick="showSellerDetails()">I'm Interested</button>
            `;
            propertiesList.appendChild(propertyDiv);
        });
    }

    window.applyFilters = function () {
        const filterPlace = document.getElementById('filterPlace').value.toLowerCase();
        const filterBedrooms = parseInt(document.getElementById('filterBedrooms').value) || null;
        const filterBathrooms = parseInt(document.getElementById('filterBathrooms').value) || null;

        const filteredProperties = properties.filter(property => {
            return (filterPlace ? property.place.toLowerCase().includes(filterPlace) : true) &&
                   (filterBedrooms ? property.bedrooms === filterBedrooms : true) &&
                   (filterBathrooms ? property.bathrooms === filterBathrooms : true);
        });

        displayProperties(filteredProperties);
    };

    window.showSellerDetails = function () {
        alert("Seller details will be shown here.");
    };

    displayProperties(properties);
});
