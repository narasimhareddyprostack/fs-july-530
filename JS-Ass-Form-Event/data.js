function changeColorHandler() {
    document.getElementById('abc').style.backgroundColor = "yellow"
}
function changeCaseHandler() {

    let name = document.getElementById('ename').value
    console.log(name)
    document.getElementById('ename').value = name.toUpperCase();

}