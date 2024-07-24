function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      // For instance lets resolve the promise with some data
      const data = { message: 'API call sucessful' };
      resolve(data);
    }, 1000); // Its a second delay
  });
}

export default getResponseFromAPI;
