function fetchData() {  //예를 들어 axios
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;  // 여기에 실제 데이터를 가져오는 코드를 넣으면 됨
            if (success) {
                resolve('Data fetched successfully!');
            } else {
                reject('Failed to fetch data.');
            }
        }, 2000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getData();  // Data fetched successfully! (after 2 seconds)