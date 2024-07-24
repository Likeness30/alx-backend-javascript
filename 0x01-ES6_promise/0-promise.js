function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      // For instance lets resolve the promise with some data
      const data = { message: 'API call sucessful' };
      resolve(data);
    }, 1000); // Time delayed for 1 seconds
  });
}

export default getResponseFromAPI;
