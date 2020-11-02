
let divInfo = document.querySelector('.information');
let rightDirection = document.querySelector('.right-direction');
let leftDirection = document.querySelector('.left-direction');
let formDiv = document.querySelector('.information-form');
let boxOneDiv = document.querySelector('.box-one');
let boxTwoDiv = document.querySelector('.box-two');



divInfo.addEventListener('mouseover', function(){
    rightDirection.style.visibility = 'visible';
    leftDirection.style.visibility = 'visible';

})
divInfo.addEventListener('mouseout', function(){
    rightDirection.style.visibility = 'hidden';
    leftDirection.style.visibility = 'hidden';
})




let backGroundpics = ['url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80) ',
'url(https://images.unsplash.com/photo-1520467795206-62e33627e6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80) '
];



/* setInterval(function(){ 
    
    for(let i = 0; i < backGroundpics.length; i++) {
           divInfo.style.backgroundImage =  backGroundpics[i];
          };

          if ( divInfo.style.backgroundImage = backGroundpics[1]) {
              setInterval  (function() {

                    divInfo.style.backgroundImage = 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80) ';
                   

              } , 3000);
            
          }
   
   ; }, 3000); */


   function changeImages(){
       if (divInfo.style.backgroundImage = 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80)') 
       {  
           setInterval(function(){
            formDiv.style.visibility = 'visible';
      
           } , 1700);

           setInterval(function(){
            divInfo.style.backgroundImage = 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80) ';
            
           } , 2000);

           setInterval(function(){
            boxOneDiv.style.visibility = 'visible';
            
            
           } , 3000);

        };

   }



   function changeSecondImage(){

         formDiv.style.visibility = 'hidden';
         boxOneDiv.style.visibility = 'hidden';
         divInfo.style.backgroundImage = 'url(https://images.unsplash.com/photo-1520467795206-62e33627e6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80) ';
         boxTwoDiv.style.visibility = 'visible';
         
   }

   
   changeImages()


   

