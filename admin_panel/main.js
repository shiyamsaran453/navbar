const imageInput = document.getElementById('imageInput');
const pre_view = document.getElementById('img_preview');
const product_name=document.getElementById('p_name').value;
const product_price=document.getElementById('p_price').value;
const product_details=document.getElementById('p_details').value;
// image
imageInput.addEventListener('change', (event) => {
const file = event.target.files[0];
if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        pre_view.src = e.target.result;
        pre_view.style.display = 'block';
    }
    reader.readAsDataURL(file);
}
})
preview=()=>{
//product
document.getElementById('pre_name').innerText=product_name;
document.getElementById('pre_price').innerText=product_price;
document.getElementById('pre_details').innerText=product_details;
document.getElementById('preview').style.display='flex';
}
//product
add_product=()=>{
    const pro_lst=document.getElementById('PRODUCT');
    const crt_div=document.createElement('div');
    crt_div.setAttribute('id','div');
    const crt_img=document.createElement('img');
    crt_img.setAttribute('class','img');
    const name=document.createElement('span');
    const price=document.createElement('span');
    const details=document.createElement('span');
    //image
    const reader = new FileReader();
    reader.onload = function(e) {
        crt_img.src = e.target.result;
        crt_img.style.display = 'block';
    }
    reader.readAsDataURL(file);
    //name
    name.innerText=product_name;
    //price
    price.innerText=product_price;
    //details
    details.innerText=product_details;
}
