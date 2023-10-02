// Remove Checked attr
window.onload = function CheckSizeOptions() {
    let OptionSize = document.querySelector('[name="Size"]');
    if (OptionSize) {
        console.log(OptionSize.value);
        OptionSize.removeAttribute('checked');
        document.querySelector('#select-Size').value = "Select Size";
        var form__submit_btn = document.getElementsByClassName("product-form__submit"); 
        for (var i = 0; i < form__submit_btn.length; i++) { 
            form__submit_btn[i].disabled = true;
        }
    }
}

let OptionSize = document.querySelector('[name="Size"]');
let OptionColor = document.querySelector('[name="Color"]');

if(OptionSize) {
  document.querySelector('input[type=radio][name="Color"]').change(function() {
      console.log('1111111'); // or, use `this.value`
  });
}


// Update Dropdown Value
function cartSelectChange(event) {
    var selectElement = event.target;
    var selectvalue = selectElement.value;
    document.querySelector(".product-form__submit").removeAttribute("disabled");
    document.querySelector("input[name='Size'][value="+selectvalue+"]").click();
}