document.addEventListener('DOMContentLoaded', (event) => {  
    let keywords = [  
        'bestseller',  
        'headphone',  
        'camera',  
        'speaker',  
        'lenovo',  
        'laptop',  
        'dell',  
        'jbl',  
        'sony',  
        'white',  
        'blue',  
        'black',  
        'beige',  
        'grey',  
    ];  

    let resultbox = document.querySelector(".resultbox");  
    let inputBox = document.querySelector(".inputbox");  
    const cards = document.querySelectorAll('.card');

    // Add input event listener to the input box  
    inputBox.addEventListener('input', function() {  
        let input = inputBox.value.trim();   
        resultbox.innerHTML = ''; // to Clear previous results  

        if (input.length) {  
            // Filter keywords based on the user's input  
            let result = keywords.filter((keyword) => {  
                return keyword.toLowerCase().includes(input.toLowerCase());  
            });  
            console.log(result);
            
            // Display the filtered keywords in the result box  
            resultbox.innerHTML = result.map((e) => `<li class="resultitem"><a href="#" class="searchkeyword">${e}</a></li>`).join('');  
            let keywordLinks = resultbox.querySelectorAll('.searchkeyword');  
            keywordLinks.forEach(link => {  
                link.addEventListener('click', function(event) {  
                    event.preventDefault(); // Prevent the default link behavior  
                    let keyword = this.textContent; // Get the selected keyword text  
                    filterCards(keyword); // Call the filtering function  
                });  
            });  
        }  else {  
            // If input is empty, show all cards  
            filterCards(''); // Calling filterCards with an empty string to show all  
        }  
    });  

    // Function to filter cards based on the selected keyword  
    function filterCards(selectedKeyword) {  
        let cards = document.querySelectorAll('.card');  

        cards.forEach(card => {  
            let statusElements = card.querySelectorAll('.status h1');  
            let b = false;  

            // to Check if any status element contains the selected keyword  
            statusElements.forEach(statusElement => {  
                if (statusElement.textContent.toLowerCase().includes(selectedKeyword.toLowerCase())) {  
                    b = true;  
                }  
            });  

            // Show or hide cards based on the match found  
            card.style.display = b ? '' : 'none'; // Show if matches, otherwise hide  
        });  
    }  
});  