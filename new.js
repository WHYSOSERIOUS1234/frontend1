let divAccess = $('.buttons')
let buttonAcess = $('button')
let url = 'https://inshorts.deta.dev/news?category='
let cat;
 let categoryArr = ['science', 'all', 'business', 'sports' , 'world' , 'politics', 'technology' , 'startup', 'entertainment' , 'miscellaneous' , 'hatke' , 'national' , 'automobile']
// function adding buttons
function addButtons() {
  let i = 0
  while(i < 13) {
    $('.buttons').append(`<button class=${categoryArr[i]}>${categoryArr[i]}</button>`)
    i++
  }

}
addButtons()


// Home page function
function homePage(){
    $('body').append('<button class=home>Home</button>')
    $('.cat').append('<section class="articles"></section>')
    for(let i = 0; i < categoryArr.length; i++) {
        $.get(url + categoryArr[i], (data) => {
        
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
       
        })}  
         
    }  
homePage()





$('.all').click(function(){
    $.get(url + 'all', (data) => {
        console.log(data.data[0].title)
         $('.cat').empty()
         
         $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
           
            
        
    }})})




$('.business').click(function(){
$.get(url + 'business', (data) => {
     $('.cat').empty()
     
     $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
        
    
}})})




$('.sports').click(function(){
    $.get(url + 'sports', (data) => {
         $('.cat').empty()
         
         $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
            
        
    }})})


    
    
    
    $('.world').click(function(){
        $.get(url + 'world', (data) => {
             $('.cat').empty()
             
             $('.cat').append('<section class="articles"></section>')
             for(let i = 0; i < 9; i++) {
                $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

                $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                
            
        }})})

       
       
       
        $('.politics').click(function(){
            $.get(url + 'politics', (data) => {
                 $('.cat').empty()
                 
                 $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                    
                
            }})})

           //ff
           
            $('.technology').click(function(){
                $.get(url + 'technology', (data) => {
                     $('.cat').empty()
                     
                     $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                        
                    
                }})})

        $('.startup').click(function(){
             $.get(url + 'startup', (data) => {
                 $('.cat').empty()
             
                 $('.cat').append('<section class="articles"></section>')
                for(let i = 0; i < 9; i++) {
                $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

                $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                
            
        }})})

        $('.entertainment').click(function(){
            $.get(url + 'entertainment', (data) => {
                 $('.cat').empty()
                 
                 $('.cat').append('<section class="articles"></section>')
                 for(let i = 0; i < 9; i++) {
                    $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                    
                
            }})})


        
        
            $('.miscellaneous').click(function(){
            $.get(url + 'miscellaneous', (data) => {
                 console.log(data)
                $('.cat').empty()
                $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                    
                
            }})})


            
            
            $('.hatke').click(function(){
                $.get(url + 'hatke', (data) => {
                     console.log(data)
                     $('.cat').empty()
                     $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                        
                    
                }})})


                
                
                $('.national').click(function(){
                    $.get(url + 'national', (data) => {
                         console.log(data)
                         $('.cat').empty()
                         $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                            
                        
                    }})})


                    $('.science').click(function(){
                        $.get(url + 'science', (data) => {
                             $('.cat').empty()
                             $('.cat').append('<section class="articles"></section>')
         for(let i = 0; i < 9; i++) {
           
            $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)

            $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                            
                        }})})


                        
                        $('.automobile').click(function(){
                            $.get(url + 'automobile', (data) => {
                                 $('.cat').empty()
                                 $('.cat').append('<section class="articles"></section>')
             for(let i = 0; i < 9; i++) {
               
                $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)
    
                $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
                                
                            }})})
      
      
        
         $('.home').click(function (){
            $('.cat').empty()
                 $('.cat').append('<section class="articles"></section>')
             for(let i = 0; i < categoryArr.length; i++) {
            $.get(url + categoryArr[i], (data) => {
                console.log(data)
                $('.articles').append(`<h2 class=heading>${data.data[i].title} <img class='picture' src=${data.data[i].imageUrl}></h2>`)
    
                $('.articles').append(`<p class="words">${data.data[i].content}</br> <em>written by:${data.data[i].author}</em><br>${data.data[i].date}</p>`)
           
            })}  
             
        }  )

        
                           