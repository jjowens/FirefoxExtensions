document.body.style.border = "5px solid red";

function replaceContent(tagName, searchKeyword, replacement) {
    let objs = document.getElementsByTagName(tagName);

    let re = new RegExp(searchKeyword, 'gi')

    for (let index = 0; index < objs.length; index++) {
        const element = objs[index];
        
        element.innerText = element.innerText.replace(re, replacement);
    }
}

function replaceMultipleTags(tagNames, searchKeyword, replacement) {
    let tagArray = tagNames.split(",");

    for (let index = 0; index < tagArray.length; index++) {
        const tagName = tagArray[index];
        replaceContent(tagName.trim(), searchKeyword, replacement);
    }
}

function updateContent() {
    let tagNames = "h1, h2, h3, a, p";

    replaceMultipleTags(tagNames, "firefox", "Electric Firefox");
}

updateContent();