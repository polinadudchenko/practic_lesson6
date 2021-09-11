const myPromise = new Promise(callback);


function callback(res, rej) {
    const obj = { name: 'Polina', age: 29 }
    if (false) {
        res(obj)
    } else {
        rej('Object is not found')
    }
}
myPromise
    .then(response => {
        console.log('result res', response)
        return 5
    })
    .then(num => {
        console.log(num)
        return num + 1
    })
    .then(num => { console.log(num) })
    .catch(error => { console.log('catch', error) })
    .finally(() => { console.log('finish'); })
console.log(myPromise);


function postInfo(success, error) {
    //const obj = { name: 'Polina', age: 29 }
    const obj = null;
    const successResult = success(obj);
    const errorResult = error(obj);
    return successResult ? successResult : errorResult
}

function success(value) {
    if (typeof value === 'object') {
        return value
    }
    return false
}
function error(value) {
    if (typeof value !== 'object') {
        return value
    }
    return 'Data is not found'
}

const getInfo = postInfo(success, error);
console.log(getInfo);