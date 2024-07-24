function getFullResponseFromAPI(success) {
    if (success === true) {
        return new Promise((res) => {
            res({
                status: 200,
                body: 'Success',
            });
        })
    } else {
        return new Promise((res, rej) => {
            rej(new Error('The fake API is not working currently'));
        });
    }
}

export default getFullResponseFromAPI;
