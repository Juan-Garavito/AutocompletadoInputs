let inputs = Array.from(document.querySelectorAll(".inputs"))
let completed = false

window.addEventListener("paste",(e)=>{
    let codigo = e.clipboardData.getData("Text")

    if(codigo.length > 5){
        alert("nonoononono")
        valueInputs(inputs,true)
        valueInputs(inputs,false)
        return
    }

   valueInputs(inputs,true,codigo)
})


function recorreInputs(){
    inputs.some((input,i) => {
        if(input.value.length < 1){
            input.select()
            inputAnterior =  inputs[i-1]
            return true
        }
        input.disabled = true
        completed = i == inputs.length-1 ? true : false
    })
}

window.addEventListener("input",(e)=>{
    recorreInputs()
    window.addEventListener("keydown",(e)=>{
        if(!completed){
            if(e.key == "Backspace"){
                if(inputAnterior != undefined){
                    recorreInputs()
                    inputAnterior.disabled = false
                    inputAnterior.value = ""
                    inputAnterior.select()
                }
            }
        }
    }) 
})



function valueInputs(inputs,disabled,text = undefined) {
    inputs.forEach((ele,i)=>{
        ele.disabled = disabled
        if(text == undefined){
            return
        }
        ele.value = text[i]
    })
}