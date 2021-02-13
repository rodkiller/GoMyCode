var remove = document.getElementsByClassName('btn-danger')

for( var i=0 ; i < remove.length ;i++)
    {
        remove[i].addEventListener('click',function(event){
            
            event.target.parentElement.parentElement.remove();
            UpdateTotal()
        })

    }

function UpdateTotal(){
    var total=0 ;
    var carte=document.getElementsByClassName('cart-items')[0];
    var element=carte.getElementsByClassName('cart-row');
    for( var i=0 ; i < element.length ;i++){
        var price=parseFloat(element[i].getElementsByClassName('cart-price')[0].innerText.replace('$',''));
        var quantite=parseFloat(element[i].getElementsByClassName('cart-quantity-input')[0].value);

        total=total+(price*quantite)
        console.log(price,quantite);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$'+total ;
}