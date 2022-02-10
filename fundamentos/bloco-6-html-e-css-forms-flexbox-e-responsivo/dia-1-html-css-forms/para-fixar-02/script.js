// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', prevent)
INPUT_CHECKBOX.addEventListener('click', preventBox)
INPUT_TEXT.addEventListener('keypress', preventText)


function prevent(event)
{
    event.preventDefault();
}
function preventBox(event)
{
    event.preventDefault()
}
function preventText(event)
{
    if(event.key !== 'a')
    {
        return event.preventDefault()
        
    }
    else
    {
        return
    }
}