export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  myPromise.then((result) => result).catch((err) => err);
  return myPromise;
}
