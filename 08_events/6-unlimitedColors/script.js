// const colorList = ['red','green','black','blue','aqua','brown','white']

const randomColor = ()=>{
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId;
document.getElementById('start').addEventListener('click',()=>{
    intervalId = setInterval(()=>{
        color = randomColor()
        document.querySelector('body').style.backgroundColor = color
    },1000)
})

document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(intervalId)
    intervalId=null
})