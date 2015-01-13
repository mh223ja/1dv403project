/*global*/
"use strict";
var Project = {

    thumbImages: [],
    background: null,
    windowDiv:undefined,
    container: undefined,
    //thumbImg: undefined,
    counter:0,
    
    init: function() {
        console.log("hi");
       Project.renderDesktop(); //initialize and set up desktop
       //Project.renderWindow();
       //Project.getImages();
        //Project.changeImage();
    },


    renderDesktop: function() {
        
        //set up basic desktop layout with icon at bottom
    
        var footer = document.getElementById("footer");
        
        var iconDiv = document.createElement("div");
        footer.appendChild(iconDiv);

        var iconImage = document.createElement("img");
        iconImage.setAttribute("src", "pics/icon.jpg");
        iconImage.className = "iconSettings";
        //iconDiv.appendChild(iconImage);
        
        var iconInfo = document.createElement("a");
        iconInfo.setAttribute("href", "#");
        //iconInfo.addEventListener("click", Project.renderWindow());
        //iconImage.appendChild(imageInfo);
        iconInfo.appendChild(iconImage);
        iconDiv.appendChild(iconInfo);
      
    
        var desktopText = document.createElement("p");
        desktopText.className = "textSettings";
        footer.appendChild(desktopText);
        desktopText.innerHTML = "Morgan's fab desktop gallery";
        
        //adds window on icon click
        
        iconImage.onclick = function(){
            Project.counter++;
            if(Project.counter>1){
                return false;
            }
           
           
          
            
        };
    },

    renderWindow: function() {
        console.log("here");
  
        //var windowDiv = window.open("toolbar = no, location = no, status = no, menubar = no, scrollbars=yes, resizable=yes, width = 40%, height = 40%");
    
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
         
        var closeWindow = document.createElement("a");
        closeWindow.setAttribute("href", "#");
        closeWindow.onclick= function(){
            Project.counter = 0;
            imageContainer.removeChild(Project.windowDiv);
        };
       
        var headerImage = document.createElement("img");
        headerImage.setAttribute("src", "pics/windows_close_program_98973.jpg");
        headerImage.setAttribute("Id", "headerImage");
        //closeWindow.addEventListener("click", function() {  
            //imageContainer.removeChild(Project.windowDiv);
      //  });
       //headerImage.appendChild(closeWindow);
        
       /* closeWindow.onclick= function(){
            imageContainer.removeChild(Project.windowDiv);
        };*/
        
          
        var loadingImg =document.createElement("img");
        loadingImg.setAttribute("src", "pics/loading2.gif");
        loadingImg.setAttribute("Id", "loadingImg");
        
        windowHeader.appendChild(loadingImg);
        windowHeader.appendChild(headerImage);
        headerImage.appendChild(closeWindow);
       
       
        console.log("there");
        
        Project.getImages();
      
    },

     getImages: function() {
         console.log("you");
        var xhr= new XMLHttpRequest();
       // xhr.open('GET', "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
       // xhr.send(null);
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
            
            var imageMaxWidth = 0;
            var imageMaxHeight = 0;
            var thumbImageInfo;
            var setImageLink;
            var thumbImg;
            var thumbDiv;
             for(var i = 0; i<Project.thumbImages.length;i++){
                        thumbImageInfo=Project.thumbImages[i];
                        thumbImageInfo.i = i;
                        
                        console.log(thumbImageInfo.thumbWidth);
                        thumbDiv = document.createElement("div");
                        thumbDiv.setAttribute("Id", "thumbDiv");
                        thumbImg = document.createElement("img");
                        thumbImg.setAttribute("src", thumbImageInfo.thumbURL);
                        //thumbImg.addEventListener(MouseEvent.Click, Project.changeDesktop(this.i));
                        //thumbImg.style.maxWidth=thumbImageInfo.thumbWidth;
                        //thumbImg.style.maxHeight=thumbImageInfo.thumbHeight;
                        Project.windowDiv.appendChild(thumbDiv);
                        thumbDiv.appendChild(thumbImg);
                        
                        setImageLink = document.createElement("a");
                        setImageLink.setAttribute("href", "#");
                        //setImageLink.url=Project.thumbImages[i].URL;
                        //setImageLink.onClick(Project.changeBackground);
                        console.log(setImageLink);
                        //setImageLink.addEventListener("click", function(e){
                            //Project.changeDesktop(thumbImg);
                    
                        thumbImg.appendChild(setImageLink);
                       Project.changeDesktop(Project.thumbImages[i].URL, setImageLink);
                       
                       }
        
                       //Project.addOnClick(thumbImg);
                     
             },
              // Project.addOnClick();
             
        
      /* addOnClick: function(){
            var clickDiv = document.getElementById("thumbDiv");
            console.log(clickDiv.a);
            var link = clickDiv.a;
            link.onmousedown = function(){
                Project.changeDesktop();
                
                
            };*/
            
                
            
            //var link = document.getElementById("imageDiv");
           // switchImages.onclick= function(){
             //   document.getElementById("container").style.backgroundImage = "url('clickImage.URL')";
                
                
       
        
        
        
        changeDesktop: function(image, link){
            
            console.log(image);
            console.log(link);
            link.onclick=function(){
                alert("click");
            document.getElementById("container").style.background="url('image')";
           //var desktopContainer= document.getElementById("container");
            //var chosenThumbUrl = thumbImageInfo.URL;
           // console.log(chosenThumbUrl) ;
            
           // desktopContainer.style.backgroundImage="url("chosenThumbUrl")";
            
            };
}
};


    
window.onload = Project.init;