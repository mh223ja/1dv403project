/*global*/

"use strict";
var Project = {
    
    init: function(){
        Project.renderDesktop();
        Project.renderWindow();
        Project.getImages();
},
    RenderDesktop: function(){
        var footer = document.getElementById("footer");
        var iconDiv = document.createElement("div");
        footer.appendChild("iconDiv");
        
        var iconImage = document.createElement("img");
        iconImage.setAttribute("src","link");
        iconDiv.appendChild("iconImage");
        
    },
    
    RenderWindow: function(){
    var containerDiv = document.getElementById("container");
    var windowDiv = document.createElement("div");
    containerDiv.appendChild("windowDiv");
    
    var windowHeader= document.createElement("div");
        windowDiv.appendChild("windowHeader");
     
    var headerText = document.createElement("p");
        windowHeader.appendChild("headerText");
        headerText.innerHTML = "Image Gallery";
    
    
}
};
    window.onload = Project.init;