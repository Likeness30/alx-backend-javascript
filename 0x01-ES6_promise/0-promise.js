// Define the function to return a promise
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    const success = true; // Change this to false to simulate a failure

    if (success) {
      resolve('Success');
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Error');
    }
  });
}

// Export the function as the default export
export default getResponseFromAPI;
