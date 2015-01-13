"use strict";

var Project = {
    
    thumbImages: [],
    
    init: function(){
       
        var footer = document.getElementById("footer");
        
        var iconDiv = document.createElement("div");
        footer.appendChild(iconDiv);

        var iconImage = document.createElement("img");
        iconImage.setAttribute("src", "pics/icon.jpg");
        iconImage.className = "iconSettings";
        //iconDiv.appendChild(iconImage);
        
        var iconInfo = document.createElement("a");
        iconInfo.setAttribute("href", "#");
        iconInfo.appendChild(iconImage);
        iconDiv.appendChild(iconInfo);
        
          
        iconImage.onclick = function(){
            var counter;
            counter++;
            if(counter>1){
                return false;
            }
             var imageContainer = document.getElementById("container");
        
        
        var windowDiv = document.createElement("div");
        windowDiv.setAttribute("Id", "windowDiv");
        imageContainer.appendChild(windowDiv);

        var windowHeader = document.createElement("div");
        windowHeader.setAttribute("Id", "windowHeader");
        windowDiv.appendChild(windowHeader);

        var headerText = document.createElement("p");
        headerText.setAttribute("Id", "headerText");
        windowHeader.appendChild(headerText);
        headerText.innerHTML = "Image Viewer";
         
    
       
        var headerImage = document.createElement("img");
        headerImage.setAttribute("src", "pics/windows_close_program_98973.jpg");
        headerImage.setAttribute("Id", "headerImage");
        
        var closeLink = document.createElement("a");
        closeLink.setAttribute("href", "#");
        closeLink.onclick= function(){
            console.log("click");
            counter = 0;
            imageContainer.removeChild(windowDiv);
        };
        
       windowHeader.appendChild(closeLink);
       closeLink.appendChild(headerImage);
     
        
          
        var loadingImg =document.createElement("img");
        loadingImg.setAttribute("src", "pics/loading2.gif");
        loadingImg.setAttribute("Id", "loadingImg");
        
        windowHeader.appendChild(loadingImg);
     
       
       
        console.log("there");
        
       // Project.getImages();
        };
    
    }
    
};

window.onload=Project.init;

