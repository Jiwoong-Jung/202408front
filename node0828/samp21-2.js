//동기적으로 콜백 지옥
function work(sec, callback) {
    setTimeout(() => {
        callback(new Date().toISOString());
    }, sec * 1000);
};

work(1, (result) => {
    console.log('첫번째 작업', result);

    work(1, (result) => {
        console.log('두번째 작업', result);

        work(1, (result) => {
            console.log('세번째 작업', result);
        });
    });
});
