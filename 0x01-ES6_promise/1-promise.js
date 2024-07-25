// export default function getFullResponseFromAPI(success) {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       resolve({
//         status: 200,
//         body: 'Success',
//       });
//     } else {
//       const msg = 'The fake API is not working currently';
//       const err = new Error(msg);
//       reject(err);
//     }
//   });
// }

//   .then((result) => {
//     console.log(result);
//     return result;
//   }).catch((err) => {
//     console.log(err);
//     return err;
//   });
// } else {
//   new Promise((resolve, reject) => {
//     reject(new Error('The fake API is not working currently'));
//   }).catch((error) => {
//     console.log(error);
//     return error;
//   });
//   // }
// }

// // export {getFullResponseFromAPI}

// // Promises upon promises
// function getFullResponseFromAPI(success) {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       resolve({
//         status: 200,
//         body: 'Success',
//       });
//     } else {
//       reject(new Error('The fake API is not working currently'));
//     }
//   });
// }

// export default getFullResponseFromAPI;

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
