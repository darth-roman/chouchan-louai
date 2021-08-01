var quill = new Quill('#editor', {
    theme: 'snow'
})

const theoryTitle = document.getElementById("title")
const theoryBody = document.getElementById("editor")
const submitBtn = document.getElementById("submit-btn")
const form = document.getElementsByTagName("form")[0]

submitBtn.addEventListener("click", function(){
    console.log(theoryBody.firstChild.firstChild.outerHTML);
})

