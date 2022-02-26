
let domlİST = document.querySelector('#list')

function newElement(){

    
    let task = document.querySelector('#task').value;
    if(task){

        let liDom = document.createElement('li');
        domlİST.append(liDom);
        liDom.innerHTML= `${task}`
        document.querySelector('#task').value="";
        $(".success").toast("show");
      
        //close buton
        let span = document.createElement('span');
        let text =document.createTextNode('\u00D7'); //ASCII tablosundan aldık
        span.className='close';
        span.appendChild(text)
        liDom.appendChild(span)

        //delete item
        span.onclick = function(){
            let sil = this.parentElement;
            sil.style.display ='none';
        }
    }
   
    else{

        $(".error").toast("show");
    }

}
//complate task 
domlİST.addEventListener('click',complate)

function complate(item){

    if(item.target.tagName='li'){
        item.target.classList.toggle('checked')
    }
}

