// Change Status
const buttonsChangeStatus = document.querySelectorAll("[button-change-status]")
if(buttonsChangeStatus.length > 0){
    const formChangeStatus = document.querySelector("#form-change-status")
    const path = formChangeStatus.getAttribute("data-path")


    buttonsChangeStatus.forEach(button => {
        button.addEventListener("click", ()=>{
            const statusCurrent = button.getAttribute("data-status");
            const id = button.getAttribute("data-id");
            
            let statusChange = statusCurrent == "active" ? "inactive" : "active"

            // console.log(statusCurrent)
            // console.log(id)
            // console.log(statusChange)
            const action = path + `/${statusChange}/${id}?_method=PATCH`;
            formChangeStatus.action = action

            formChangeStatus.submit();
        })
    })
}
// End Change Status

// Delete items
    const buttonsDelete = document.querySelectorAll("[button-delete]");
    if(buttonsDelete.length > 0){
        const formDeleteItems = document.querySelector("#form-delete-item");
        const path = formDeleteItems.getAttribute("data-path");

        buttonsDelete.forEach(button =>{
            button.addEventListener("click", () =>{
                const isConfirm = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")
                if(isConfirm){
                    const id = button.getAttribute("data-id");
                    const action = `${path}/${id}?_method=DELETE`;
                    formDeleteItems.action = action;
                    formDeleteItems.submit();
                }
            })
        })
    }
// End Delete items