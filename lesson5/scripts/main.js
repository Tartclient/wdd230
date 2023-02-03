const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	if (input.value !== "") {
        const chapter = input.value;

		const listItem = document.createElement("li");
		const deleteBtn = document.createElement("button");

		listItem.textContent = chapter;
		deleteBtn.textContent = "❌";
        
		deleteBtn.addEventListener("click", () => {
            list.removeChild(listItem);
		});

        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);
	}
    input.value = ""; 
    input.focus();
});
