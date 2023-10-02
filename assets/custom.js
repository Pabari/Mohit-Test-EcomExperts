// Remove Checked attr
let OptionSize = document.querySelector('[name="Size"]');
if (OptionSize) {
    //OptionSize.removeAttribute('checked');
    var form__submit_btn = document.getElementsByClassName("product-form__submit"); 
    for (var i = 0; i < form__submit_btn.length; i++) { 
        form__submit_btn[i].disabled = true;
    }
}

// Update Dropdown Value
function cartSelectChange(event) {
    var selectElement = event.target;
    var selectvalue = selectElement.value;
    document.querySelector(".product-form__submit").removeAttribute("disabled");
    document.querySelector("input[name='Size'][value="+selectvalue+"]").click();
}