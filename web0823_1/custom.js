        // const title = document.getElementById("title");
        const title = document.querySelector(".title");
        // console.log(title);

        // const frame = document.querySelector("#wrap .box2");
        const frame = document.querySelectorAll("#wrap article");
        for (let i=0; i<frame.length; i++){
            console.log(i, frame[i]);
        }

        // let i = 0;
        // for(let item of frame){
        //     console.log(++i, item);
        // }  