const axios = require('axios');

async function getUserLocation() {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by this browser.");
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);

                    if (response.data) {
                        const { countryName, locality } = response.data;
                        resolve({ country: countryName, town: locality });
                    } else {
                        reject("Unable to retrieve location data.");
                    }
                } catch (error) {
                    reject(error);
                }
            },
            (error) => reject(error)
        );
    });
}

module.exports = getUserLocation;