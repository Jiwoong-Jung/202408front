setTimeout(() => {
    setTimeout(() => {
        console.log('todo: Second work!');
    }, 2000);
    console.log('todo: First work!');
}, 3000);
// 비동기 작업을 순서대로 실행하려면 콜백 안에 콜백을 넣어야 한다.