import React from 'react'
import { fabric } from 'fabric'
const Designer = () => {

    const style = {
    drawingArea: {
        position: 'absolute',
        top: '60px',
        left: '122px',
        zIndex: '10',
        width: '200px',
        height: '400px',
    },

    canvasContainer:{
        width: '200px', 
        height: '400px', 
        position: 'relative', 
        userSelect: 'none',
    },

    tshirtDiv:{
        width: '452px',
        height: '548px',
        position: 'relative',
        backgroundColor: '#fff',
    },

    canvas:{
        position: 'absolute',
        width: '200px',
        height: '400px', 
        left: '0px', 
        top: '0px', 
        userSelect: 'none', 
        cursor: 'default',
    }
}
    
//     const nothing = () => {}

//     let canvas = new fabric.Canvas('tshirt-canvas');

//             function updateTshirtImage(imageURL){
//                 fabric.Image.fromURL(imageURL, function(img) {                   
//                     img.scaleToHeight(300);
//                     img.scaleToWidth(300); 
//                     canvas.centerObject(img);
//                     canvas.add(img);
//                     canvas.renderAll();
//                 });
//             }
            

//             {
//                 var reader = new FileReader();
                
//                 reader.onload = function (event){
//                     var imgObj = new Image();
//                     imgObj.src = event.target.result;

//                     // When the picture loads, create the image in Fabric.js
//                     imgObj.onload = function () {
//                         var img = new fabric.Image(imgObj);

//                         img.scaleToHeight(300);
//                         img.scaleToWidth(300); 
//                         canvas.centerObject(img);
//                         canvas.add(img);
//                         canvas.renderAll();
//                     }
//                 }

//                 // If the user selected a picture, load it
// //                if(event.target.files[0]){
// //                    reader.readAsDataURL(event.target.files[0]);
// //                }
//             }





//             // Update the TShirt color according to the selected color by the user
//             document.getElementById("tshirt-color").addEventListener("change", function(){
//                 document.getElementById("tshirt-div").style.backgroundColor = this.value;
//             }, false);

//             // Update the TShirt color according to the selected color by the user
//             document.getElementById("tshirt-design").addEventListener("change", function(){

//                 // Call the updateTshirtImage method providing as first argument the URL
//                 // of the image provided by the select
//                 updateTshirtImage(this.value);
//             }, false);

//             // When the user clicks on upload a custom picture
//             document.getElementById('tshirt-custompicture').addEventListener("change", function(e){
//                 var reader = new FileReader();
                
//                 reader.onload = function (event){
//                     var imgObj = new Image();
//                     imgObj.src = event.target.result;

//                     // When the picture loads, create the image in Fabric.js
//                     imgObj.onload = function () {
//                         var img = new fabric.Image(imgObj);

//                         img.scaleToHeight(300);
//                         img.scaleToWidth(300); 
//                         canvas.centerObject(img);
//                         canvas.add(img);
//                         canvas.renderAll();
//                     };
//                 };

//                 // If the user selected a picture, load it
//                 if(e.target.files[0]){
//                     reader.readAsDataURL(e.target.files[0]);
//                 }
//             }, false);

//             // When the user selects a picture that has been added and press the DEL key
//             // The object will be removed !
//             document.addEventListener("keydown", function(e) {
//                 var keyCode = e.keyCode;

//                 if(keyCode == 46){
//                     console.log("Removing selected element on Fabric.js on DELETE key !");
//                     canvas.remove(canvas.getActiveObject());
//                 }
//             }, false);


//     return (
        
//         <div id="tshirt-div">
//             <img id="tshirt-backgroundpicture" width="350" height="450" src="/home/jnq/Escritorio/JOB/wpress/self/background_tshirt.png"/>

//             <div id="drawingArea" class="drawing-area">					
//                 <div class="canvas-container">
//                     <canvas id="tshirt-canvas" width="200" height="400"></canvas>
//                 </div>
//             </div>
        
        
//         <p>To remove a loaded picture on the T-Shirt select it and press the <kbd>DEL</kbd> key.</p>
        
        
//         <label for="tshirt-design">T-Shirt Design:</label>
//         <select id="tshirt-design" onChange={(e)=> updateTshirtImage(e.value)}>
//             <option value="">Select one of our designs ...</option>
//             <option value="/home/jnq/Escritorio/JOB/wpress/5DM/imgs/PNG5DM/01 - IM STILL THE KING 5DM20-01.png">uno</option>
//             <option value="/home/jnq/Escritorio/JOB/wpress/5DM/imgs/PNG5DM/02 - I GUANA RELAX-01.png">dos</option>
//             <option value="/home/jnq/Escritorio/JOB/wpress/5DM/imgs/PNG5DM/03 - INSERT DRINK 5DM20-01.png">tres</option>
//         </select>

        
        
//         <label for="tshirt-color">T-Shirt Color:</label>
//         <select id="tshirt-color" onChange={(e) => style.tshirtDiv.backgroundColor= e.value}>
        
//             <option value="#fff">White</option>
//             <option value="#000">Black</option>
//             <option value="#f00">Red</option>
//             <option value="#008000">Green</option>
//             <option value="#ff0">Yellow</option>
//         </select>

        
//         <label for="tshirt-custompicture">Upload your own design:</label>
//         <input type="file" id="tshirt-custompicture" onChange={(e) => 
            
//         nothing()
//         }/>
//         </div>
//     )
}

export default Designer