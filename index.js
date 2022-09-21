window.addEventListener("paste",(e)=>{
    let inputs = document.querySelectorAll(".inputs")
    let codigo = e.clipboardData.getData("Text")

    if(codigo.length > 5){
        alert("nonoononono")
        valueInputs(inputs,true)
        valueInputs(inputs,false)
        return
    }

   valueInputs(inputs,true,codigo)
})

function valueInputs(inputs,disabled,text = undefined) {
    inputs.forEach((ele,i)=>{
        ele.disabled = disabled
        if(text == undefined){
            ele.value = ""
            return
        }
        ele.value = text[i]
    })
}