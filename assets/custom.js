// Remove Checked attr
let OptionSize = document.querySelector('[name="Size"]');
if (OptionSize) {
    OptionSize.removeAttribute('checked');
    document.getElementsByClassName("product-form__submit").setAttribute('disabled', '');
}

// Update Dropdown Value
function handleSelectChange(event) {

    var selectElement = event.target;
    var value = selectElement.value;

    document.querySelector(".product-form__submit").removeAttribute("disabled");
    document.querySelector("input[name='Size'][value="+value+"]").click();
}