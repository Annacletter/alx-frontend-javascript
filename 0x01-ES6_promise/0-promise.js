function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Perform asynchronous operation here (e.g., fetch data from an API)
        
        // For demonstration purposes, let's resolve the Promise with a dummy value
        setTimeout(() => {
            resolve("Dummy response from API");
        }, 1000); // Simulate a delay of 1 second
    });
}

export default getResponseFromAPI;

