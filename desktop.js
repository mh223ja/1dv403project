/*global*/

"use strict";
var Project = {

    thumbnails: null,
    background: null,

    init: function() {
        console.log("hi");
        Project.getImages();
        //Project.renderDesktop();
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
        
        iconInfo.addEventListener("click", Project.renderWindow());
        
           
          

        console.log("hi again");
    },

    renderWindow: function() {
        console.log("here");
  
        //var windowDiv = window.open("toolbar = no, location = no, status = no, menubar = no, scrollbars=yes, resizable=yes, width = 40%, height = 40%");
    
        var imageContainer = document.getElementById("container");
        var windowDiv = document.createElement("div");
        imageContainer.appendChild(windowDiv);

        var windowHeader = document.createElement("div");
        windowDiv.appendChild(windowHeader);

        var headerText = document.createElement("p");
        windowHeader.appendChild(headerText);
        headerText.innerHTML = "Image Viewer";
        console.log("there");
        
        Project.getImages();
      
    },

     getImages: function() {
         console.log("you");
        var xhr= new XMLHttpRequest();
        xhr.open('GET', "http://://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        //xhr.setRequestHeader("content-type", "application/json");
         xhr.addEventListener("readystatechange", function() {
            console.log(xhr.readyState);
        }, false);
        xhr.onreadystatechange = function(e){
            console.log("are");
            if(xhr.readyState == 4){
                console.log(xhr.status);
                if(xhr.status == 200){
                    console.log(xhr.responseText);
                    var thumbImages = JSON.parse(xhr.responseText);
                    console.log(thumbImages);
                    
                    console.log("here");
               }
                }
            };
     xhr.open('GET', "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        },
        
};
               
      
    
window.onload = Project.init;