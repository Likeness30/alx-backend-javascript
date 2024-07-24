function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      const msg = 'The fake API is not working currently';
      const err = new Error(msg);
      reject(err);
    }
  });
}

export default getFullResponseFromAPI;
