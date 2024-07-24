function getFullResponseFromAPI(success) {
  if (success === true) {
    return new Promise((res) => {
      res({
        status: 200,
        body: 'Success',
      });
    });
  }
  return new Promise((res, rej) => {
    const err = new Error('The fake API is not working currently');
    rej(err);
  });
}

export default getFullResponseFromAPI;
