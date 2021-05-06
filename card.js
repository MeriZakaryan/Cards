const openSideBar = () =>{
    let sideBar = document.querySelector(".side-bar")
    sideBar.classList.add("side-bar-opened")
    document.getElementsByClassName("closeBtn")[0].classList.remove('hide')
}
const closeSideBar = () => {
    let sideBar = document.querySelector(".side-bar")
    sideBar.classList.remove("side-bar-opened")
    document.getElementsByClassName("closeBtn")[0].classList.add('hide')
}
const openPopup = (event) =>{
    let text = event.target.previousElementSibling.innerText
    let popupFone = document.getElementsByClassName("popup-fone")
    popupFone[0].classList.add('popup-fone-open')
    let popupText = document.createElement('p')
    popupText.setAttribute('class' , 'popup-text')
    popupText.innerText = text;
    document.getElementsByClassName('popup')[0].appendChild(popupText)
}
const closePopup = () => {
    let popupFone = document.getElementsByClassName("popup-fone")
    popupFone[0].classList.remove('popup-fone-open')
    document.getElementsByClassName('popup')[0].removeChild(document.getElementsByClassName('popup-text')[0])
}
