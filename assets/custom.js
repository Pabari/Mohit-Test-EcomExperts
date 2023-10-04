// Remove Checked attr
window.onload = function CheckSizeOptions() {
    let OptionSize = document.querySelector('[name="Size"]');
    if (OptionSize) {
        OptionSize.removeAttribute('checked');
        document.querySelector('#select-Size').value = "Select Size";
        var form__submit_btn = document.getElementsByClassName("product-form__submit"); 
        for (var i = 0; i < form__submit_btn.length; i++) { 
            form__submit_btn[i].disabled = true;
        }
    }
}

let OptionSize = document.querySelector('[name="Size"]');

if(OptionSize) {
  document.addEventListener("DOMContentLoaded", function() {
      var OptionColors = document.querySelectorAll('input[type=radio][name="Color"]');
      
      OptionColors.forEach(function(OptionColor) {
          OptionColor.addEventListener("change", function() {
            document.querySelector('#select-Size').value = OptionSize.value;
            document.querySelector("input[name='Size'][value="+OptionSize.value+"]").click();
          });
      });
  });

}


// Update Dropdown Value
function cartSelectChange(event) {
    var selectElement = event.target;
    var selectvalue = selectElement.value;
    document.querySelector(".product-form__submit").removeAttribute("disabled");
    document.querySelector("input[name='Size'][value="+selectvalue+"]").click();
}