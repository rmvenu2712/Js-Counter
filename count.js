const decrementBtn= document.getElementById('decrement')
const incrementBtn= document.getElementById('increment')
const countElement = document.getElementById('count')
const resetbtn=document.getElementById('reset')

let count= 0;

function updatecount(){
    countElement.textContent = count;
}
decrementBtn.addEventListener('click',()=>{
    count--;
    updatecount();
})
incrementBtn.addEventListener('click',()=>{
    count++;
    updatecount();
})
resetbtn.addEventListener('click',()=>{
    count =0
    updatecount();
})
updatecount()