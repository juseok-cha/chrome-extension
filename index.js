const inputBtn = document.getElementById("input-btn");
const myLead = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');


inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    renderLeads();
});

function renderLeads() {
    let listItems = ""
    for (var i = 0; i < myLead.length; i++) {
        // ulEl.innerHTML +=  "<li>" + myLead[i] + "</li>"
        listItems += "<li>" + myLead[i] + "</li>"
    };
    
    ulEl.innerHTML = listItems
}
