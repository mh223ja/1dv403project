/*global*/

"use strict";
var Project = {

    thumbImages: [],
    background: null,
    windowDiv:undefined,
    container: undefined,

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
        
        iconInfo.addEventListener("click", Project.renderWindow());
        
        console.log("hi again");
    },

    renderWindow: function() {
        console.log("here");
  
        //var windowDiv = window.open("toolbar = no, location = no, status = no, menubar = no, scrollbars=yes, resizable=yes, width = 40%, height = 40%");
    
        var imageContainer = document.getElementById("container");
        Project.windowDiv = document.createElement("div");
        imageContainer.appendChild(Project.windowDiv);

        var windowHeader = document.createElement("div");
        Project.windowDiv.appendChild(windowHeader);

        var headerText = document.createElement("p");
        windowHeader.appendChild(headerText);
        headerText.innerHTML = "Image Viewer";
        console.log("there");
        
        Project.getImages();
      
    },

     getImages: function() {
         console.log("you");
        var xhr= new XMLHttpRequest();
        xhr.open('GET', "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
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
                    Project.thumbImages = JSON.parse(xhr.responseText);
                    console.log(Project.thumbImages);
                    console.log("here");
                    Project.displayImages();
               }
                }
            };
        xhr.open('GET', "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        },
        
        displayImages: function(){
            console.log("Displayimages");
            console.log(Project.thumbImages);
            thumbImg=undefined;
            var imageMaxWidth = 0;
            var imageMaxHeight = 0;
    
             for(var i = 0; i<Project.thumbImages.length;i++){
                        var thumbImageInfo=Project.thumbImages[i];
                        
                        
                        console.log(thumbImageInfo.thumbWidth);
                        var thumbDiv = document.createElement("div");
                        var thumbImg = document.createElement("img");
                        thumbImg.setAttribute("src", thumbImageInfo.thumbURL);
                        //thumbImg.style.maxWidth=thumbImageInfo.thumbWidth;
                        //thumbImg.style.maxHeight=thumbImageInfo.thumbHeight;
                        Project.windowDiv.appendChild(thumbDiv);
                        thumbDiv.appendChild(thumbImg);
                        
                        var setImageLink = document.createElement("a");
                        setImageLink.url=Project.thumbImages[i].URL;
                        setImageLink.setAttribute("href", setImageLink.url);
                        setImageLink.url=Project.thumbImages[i].URL;
                        console.log(setImageLink);
                        thumbImg.appendChild(setImageLink);
                      
                        
                        if(Project.thumbImages[i].thumbWidth> imageMaxWidth){
                          imageMaxWidth = Project.thumbImages[i].thumbWidth;
                          thumbDiv.style.maxWidth=imageMaxWidth;
                        }
                        if(Project.thumbImages[i].thumbHeight>imageMaxHeight){
                            imageMaxHeight= Project.thumbImages[i].thumbHeight;
                            thumbDiv.style.maxHeight=imageMaxHeight;
                        }
                        
                        
                        
                    
                    }
                   
        },
        
        
        changeDesktop: function(thumbImageInfo){
            var desktopContainer= document.getElementById("container");
            var chosenThumbUrl = thumbImageInfo.thumbUrl;
            desktopContainer.style.backgroundImage = "url('chosenThumbUrl')";
            
        
}
};


               
      
    
window.onload = Project.init;