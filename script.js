// const pages = {}

// document.querySelectory("buttonn"),addEventListener("click", (evt) => {
//     document.getElementById("page1"),innerHTML =
// });

function generateSecondPage() {
    
    let newPageContainer = document.createElement('div');
    newPageContainer.style.backgroundColor= 'grey';

    let newPage = document.createElement('p')
    newPage.textContent= 'This is page two';    
    document.body.appendChild(newPage);
    newPage.style.backgroundColor='white'; 
    newPageContainer.appendChild(newPage);

    let newPageParagraph = document.createElement('paragraphtwo')
    newPageParagraph.textContent = 'Welcome Agent, cycle through "complete" button and "Generate" button to see mission objectives, keep pressing and scroll to load more data.'
    newPageParagraph.style.backgroundColor= 'white'
    document.body.appendChild(newPageParagraph);
    
    const clonedArray= generateArray(5).map(item => `[Clone] ${item}`);
    displayArrayOnScreen(clonedArray);
    let clonedContainer = newPageContainer.cloneNode(true);
    document.body.appendChild(clonedContainer);
}



    document.addEventListener('DOMContentLoaded', function () {
    let anchorLink = document.getElementById('Link'); 
    anchorLink.addEventListener('click', function (event) {
        event.preventDefault();
        generateSecondPage();
    })
});
// creating array for agent data

function generateArray(length) {
    const agentArrayy = [];
    for(let i=0; i<length; i++) {
        agentArrayy.push(`[ID: #${i + 1}, Agent: Echo, Location: NY]`);
    }
    return agentArrayy;
}

function displayArrayOnScreen(array) {
    const displayElement= document.getElementById('display');
    displayElement.style.backgroundColor= 'white';
    displayElement.innerHTML = array.map(item => `<p>${item}</p>`).join('');
}

document.addEventListener('DOMContentLoaded', function () {
    const generateButton= document.getElementById('generateButton');
    
    generateButton.addEventListener('click', function () {
        const generatedArray= generateArray(5);
        displayArrayOnScreen(generatedArray);
    });
});

// commented this out bc i dont want it to overwrite my first array

// let newParagraph = document.createElement('paragraph2')
// newParagraph.textContent = 'Welcome Agent, Hold while we load data.';
// document.body.appendChild(newPage);

// changing array data

// let currentArrayData= [];

// function generateArray(length) {
//     const newArrayData = [];
//     for (let i=0; i < length; i++) {
//         newArrayData.push(`[ID: #${i + 1}, Agent: Foxtrot, Location: NY]`);
//     }

// currentArrayData= newArrayData;
// return newArrayData;
// }
// function displayArrayOnScreen(array) {
//     const displayElement = document.getElementById('display');
//     displayElement.style.backgroundColor = 'white';
//     displayElement.innerHTML = array.map(item => `<p>${item}</p>`).join('');
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const generateButton = document.getElementById('generateButton');

//     generateButton.addEventListener('click', function () {
        
//         const updatedArrayData = generateArray(5);

        
//         displayArrayOnScreen(updatedArrayData);
//     });
// });


// tried to swap between two different arrays i'm not sure how to get this to work im backtracking
// function changeArrayData() {
//     currentArrayData[0]= `[ID: #1, Agent: Delta, Location: SF]`;
//     currentArrayData[1]= `[ID: #2, Agent: Alpha, Location: SF]`;
//     currentArrayData[2]= `[ID: #3, Agent: Charlie, Location: CA]`;
//     currentArrayData[3]= `[ID: #4, Agent: Xeno, Location: SF]`;
//     currentArrayData[4]= `[ID: #5, Agent: Zephyr, Location: NY]`;
   
    
// }
// function toggleGeneratedArray() {
//     isCurrentArrayGenerated = !isCurrentArrayGenerated;

//     if (isCurrentArrayGenerated) {
       
//         currentArrayData = generateArray(5);
//     } else {
        
//         changeArrayData();
//     }
// }
// document.addEventListener('DOMContentLoaded', function () {
//     const generateButton = document.getElementById('generateButton');

    
//     currentArrayData = generateArray(5);
    

//     generateButton.addEventListener('click', function () {
       
//         toggleGeneratedArray();
//     });
// });