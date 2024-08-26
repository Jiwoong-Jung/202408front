const onClickAdd = () => {
    //1
    const textEl = document.getElementById("add-text");
    const text = textEl.value;
    textEl.value = "";
    console.log(text);
    //2
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text;
    
    //3
    const button = document.createElement("button");
    button.textContent = "삭제";
    button.addEventListener("click", () => {
        const deleteTarget = button.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    //4
    div.appendChild(p);
    div.appendChild(button);
    li.appendChild(div);
    document.getElementById("memo-list").appendChild(li);
}


document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());