/*global*/

"use strict";
var Project = {

    thumbnails: null,
    background: null,

    init: function() {
        console.log("hi");
        Project.renderDesktop();
        //Project.renderWindow();
        //Project.getImages();
        //Project.changeImage();
    },

    renderDesktop: function() {
        

        var footer = document.getElementById("footer");
        var iconDiv = document.createElement("div");
        footer.appendChild(iconDiv);

        var iconImage = document.createElement("img");
        iconImage.setAttribute("src", "pics/icon.jpg");
        iconImage.className = "iconSettings";
        //iconDiv.appendChild(iconImage);
        
        var iconInfo = document.createElement("a");
        iconInfo.setAttribute("href", "#");
        //iconImage.appendChild(imageInfo);
        iconInfo.appendChild(iconImage);
        iconDiv.appendChild(iconInfo);
        
        var desktopText = document.createElement("p");
        desktopText.className = "textSettings";
        footer.appendChild(desktopText);
        desktopText.innerHTML = "Morgan's fab desktop gallery";
        
        iconInfo.onClick = Project.renderWindow (); 
        
           
          

        console.log("hi again");
    },

    renderWindow: function() {
        console.log("here");
        var containerDiv = document.getElementById("container");
        var windowDiv = document.createElement("div");
        containerDiv.appendChild(windowDiv);

        var windowHeader = document.createElement("div");
        windowDiv.appendChild(windowHeader);

        var headerText = document.createElement("p");
        windowHeader.appendChild(headerText);
        headerText.innerHTML = "Image Viewer";
        console.log("there");
    },

    getImages: function() {
        var thumbnailInfo;
        var xhr = new XMLHttpRequest();
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                thumbnailInfo = JSON.parse(xhr.responseText);
            }
        }
    },

    changeImage: function() {

    }

};
window.onload = Project.init;