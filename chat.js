function send() {
    let ambilkotak= document.getElementById("tulis");
    let ambilteks= ambilkotak.value

    ambilkotak.value="";

    let a =document.getElementById("space")
    const baru = document.createElement('p')
    const text = document.createTextNode(ambilteks)
    baru.appendChild(text)
    a.appendChild(baru)

} 