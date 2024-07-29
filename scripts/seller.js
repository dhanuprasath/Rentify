document.addEventListener('DOMContentLoaded', function () {
    const propertyForm = document.getElementById('propertyForm');
    const propertiesList = document.getElementById('propertiesList');

    let properties = JSON.parse(localStorage.getItem('properties')) || [];

    function displayProperties() {
        propertiesList.innerHTML = '';
        properties.forEach((property, index) => {
            const propertyDiv = document.createElement('div');
            propertyDiv.className = 'property';
            propertyDiv.innerHTML = `
                <h4>${property.place}</h4>
                <p>Area: ${property.area} sq ft</p>
                <p>Bedrooms: ${property.bedrooms}</p>
                <p>Bathrooms: ${property.bathrooms}</p>
                <p>Hospitals Nearby: ${property.hospitals}</p>
                <p>Colleges Nearby: ${property.colleges}</p>
                <button onclick="editProperty(${index})">Edit</button>
                <button onclick="deleteProperty(${index})">Delete</button>
            `;
            propertiesList.appendChild(propertyDiv);
        });
    }

    propertyForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(propertyForm);
        const property = Object.fromEntries(formData.entries());
        properties.push(property);
        localStorage.setItem('properties', JSON.stringify(properties));
        displayProperties();
        propertyForm.reset();
    });

    window.editProperty = function (index) {
        const property = properties[index];
        document.getElementById('place').value = property.place;
        document.getElementById('area').value = property.area;
        document.getElementById('bedrooms').value = property.bedrooms;
        document.getElementById('bathrooms').value = property.bathrooms;
        document.getElementById('hospitals').value = property.hospitals;
        document.getElementById('colleges').value = property.colleges;
        properties.splice(index, 1);
        localStorage.setItem('properties', JSON.stringify(properties));
        displayProperties();
    };

    window.deleteProperty = function (index) {
        properties.splice(index, 1);
        localStorage.setItem('properties', JSON.stringify(properties));
        displayProperties();
    };

    displayProperties();
});
