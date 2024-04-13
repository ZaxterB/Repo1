var canvas = document.getElementById('desktop');
var context = canvas.getContext('2d');
context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;
context.imageSmoothingEnabled = false;
make_base();
make_computer();
let scaled_width=window.innerWidth/384;
let scaled_height=window.innerHeight/216;
function make_base()
{
    base_image = new Image();
    base_image.src = 'static/room2.png';
    base_image.onload = function(){
        context.drawImage(base_image, 0, 0, scaled_width*384, scaled_height*216);
    };
}
function make_computer()
{
    computer_image = new Image();
    computer_image.src = 'static/PC_2.1.png'
    computer_image.onload = function() {
        context.drawImage(computer_image, 0, window.innerHeight/2, scaled_width*180, scaled_height*108)
    }
}