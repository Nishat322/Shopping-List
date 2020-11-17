function handleShoppingList(){
    
    
    //when a form is submitted --> to add item
    $('#js-shopping-list-form').submit(function(event){
        //stops the default submit behavior
        event.preventDefault();

        //stores submitted item in the variable addItem
        let addItem = $(this).find('input[name="shopping-list-entry"]').val()
        console.log(addItem)
        
        //addItem to the end of the list 
        $(".shopping-list").append(outputList(addItem))
            
    }) 

    //when delete is selected 

    $('.shopping-list').on('click', '.shopping-item-delete', function (event) { 
        this.closest('li').remove() 
    })
    
    //when an item is checked or unchecked
    $(".shopping-list").on("click",".shopping-item-toggle", function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
    
    function outputList(addItem){
        return `<li> 
                <span class="shopping-item"> ${addItem} </span> 
                 <div class="shopping-item-controls"> 
                    <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> 
                     <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> 
                </div> 
             </li>`
    }

}

handleShoppingList();


//remove specific item use .empty on the click
