var list=document.getElementsByClassName('technologieli');
var elt=document.getElementsByClassName('imagetechnologie');

for(var i=0 ; i<list.length;i++){
    var element=list[i];
    console.log(i);
    element.addEventListener('click',function(event){
        event.preventDefault();  
        var flag=event.currentTarget.textContent;
       console.log(flag);
        for(var j=0; j<elt.length;j++){
            elt[j].classList.add("desativetechno");      
        }

        switch (flag) {
            case 'Mobile':
                elt[0].classList.remove("desativetechno");
                break;
            case 'Front-end':
                elt[1].classList.remove("desativetechno");
                break;
            case 'Back-end':
                elt[2].classList.remove("desativetechno");
                break;
            case 'CMS':
                elt[3].classList.remove("desativetechno");
                break;
            case 'Database':
                elt[4].classList.remove("desativetechno");
                break;
            case 'Devops':
                elt[5].classList.remove("desativetechno");
                break;
            default:
                console.log('erreur');
        }
    })
}





