"use strict";

var Project = {
    
    thumbImages: [],
    windowDiv: undefined,
    counter:0,
    
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
           
            Project.counter++;
            if(Project.counter>1){
                return false;
            }
             var imageContainer = document.getElementById("container");
        
        
        Project.windowDiv = document.createElement("div");
        Project.windowDiv.setAttribute("Id", "windowDiv");
        imageContainer.appendChild(Project.windowDiv);

        var windowHeader = document.createElement("div");
        windowHeader.setAttribute("Id", "windowHeader");
        Project.windowDiv.appendChild(windowHeader);

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
            //console.log("click");
            Project.counter = 0;
            imageContainer.removeChild(Project.windowDiv);
        };
        
       windowHeader.appendChild(closeLink);
       closeLink.appendChild(headerImage);
     
        
          
        var loadingImg =document.createElement("img");
        loadingImg.setAttribute("src", "pics/loading2.gif");
        loadingImg.setAttribute("Id", "loadingImg");
        
        windowHeader.appendChild(loadingImg);
     
       
       
        console.log("there");
        
        Project.getImages();
        
        
        };
    
    },
    
      getImages: function() {
         console.log("you");
        var loadingIcon = document.getElementById("loadingImg");
        console.log(loadingIcon);
        var xhr= new XMLHttpRequest();
     
         xhr.addEventListener("readystatechange", function() {
            console.log(xhr.readyState);
        }, false);
        xhr.onreadystatechange = function(e){
            console.log("are");
            if(xhr.readyState == 4){
                console.log(xhr.status);
                if(xhr.status == 200){
                    console.log(xhr.responseText);
                    loadingIcon.parentNode.removeChild(loadingIcon);
                    console.log(loadingIcon);
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
            
            var maxWidth=0;
            var maxHeight=0;
            var thumbImageInfo;
            var setImageLink;
            var thumbImg;
            var thumbDiv;
             for(var i = 0; i<Project.thumbImages.length;i++){
                        thumbImageInfo=Project.thumbImages[i];
                       // thumbImageInfo.i = i;
                        
                        
                        thumbDiv = document.createElement("div");
                        thumbDiv.setAttribute("Id", "thumbDiv");
                        thumbImg = document.createElement("img");
                        thumbImg.setAttribute("src", thumbImageInfo.thumbURL);
                      
                
                        
                        setImageLink = document.createElement("a");
                        setImageLink.setAttribute("href", "#");
                        setImageLink.setAttribute("Id", "setImageLink");
                        //setImageLink.url=Project.thumbImages[i].URL;
                        
                        Project.changeDesktop(Project.thumbImages[i].URL, setImageLink);
                     
                        thumbDiv.appendChild(setImageLink);
                        setImageLink.appendChild(thumbImg);
                       
                        Project.windowDiv.appendChild(thumbDiv);
                        
                        if(Project.thumbImages[i].thumbWidth> maxWidth){
                            maxWidth = Project.thumbImages[i].thumbWidth;
                        }
                        
                        if(Project.thumbImages[i].thumbHeight>maxHeight){
                            maxHeight = Project.thumbImages[i].thumbHeight;
                        }
                        //Project.changeDesktop(Project.thumbImages[i].URL, setImageLink);
                        
                        thumbDiv.style.height = maxHeight + "px";
                        thumbDiv.style.width = maxWidth + "px";
                        
                        //Project.changeDesktop();
                        
                       
                       }
                      
                      
    
             },
             
          
             
          changeDesktop: function(image, link){
              console.log("Change");
              link.onclick = function(){
                  document.getElementById("container").style.background = "url('" + image +"')";
              };
             
           
             
              
           
          
          },
        
};

window.onload=Project.init;

