let myLead = [];
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));

// What these codeds mean?
if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    render(myLead);
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        if (leads[i] != "") {
            listItems += 
                    `<li>
                        <a href=${leads[i]} target="blank">
                            ${leads[i]}
                        </a>
                    </li>`
        } 
        // ulEl.innerHTML +=  "<li>" + myLead[i] + "</li>"
    };
    
    ulEl.innerHTML = listItems
};

deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear();
    myLead = [];
    render(myLead);
    console.log("deleted")
})

inputBtn.addEventListener("click", function() {
    // Prevent an empty element
    if (inputEl.value === "") {
        alert("It's empty!")
        return
    }
    myLead.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLead", JSON.stringify(myLead))
    render(myLead)
})