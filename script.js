
// Data Sources
const formFields = [
    { label: 'Name', type: 'text', id: 'name', placeholder:"Name", required: true },
    { label: 'Gender', type: 'radio', id: 'gender', required: true, options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ] },                
    { label: 'Date of Birth', type: 'text', id: 'dob', placeholer:"Birth", required: true },
    { label: 'Email', type: 'text', id: 'email', placeholer:"Email@email.com", required: true },
    { label: 'Mobile', type: 'text', id: 'mobile', placeholer:"888-777-666", required: true },
    { label: 'Customer Id', type: 'text', id: 'customerId', placeholer:"83493-EFG-0001", required: true },
    { label: 'Membership', type: 'text', id: 'membership', required: true },
];

const formFooter = [
    { label: 'Cancel', type: 'button', id: 'cancel', required: false },
    { label: 'Save', type:'submit', id:'submit', required: false }
];

const membershipType = [
    { label: 'Classic', type: 'radio', id: 'classic', required: true, },
    { label: 'Silver', type: 'radio', id: 'silver', required: true },
    { label: 'Gold', type: 'radio', id: 'gold', required: true }
];

const infoContextText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


// Global Variables
let formDisplay = true;
const svgIconCard = '../assets/card.svg';
const svgWhite = '../assets/card--white.svg';
const faceSvg = '../assets/face.svg';
const activeColor = '#373d40';
const inactiveColor = '#f5f8f9';
const iconLabel = 'an image of a card';
const arrowButton = document.getElementById('arrow');
const cancelFormButton = document.getElementById('cancel');
const formContainer = document.getElementById('formFields');
let circle; 


// Functions


    // Select the body directly
    let mainContainer = document.body;
console.log("body selected", mainContainer);

// Create the main container div
let mainContainerDiv = document.createElement('div');
mainContainerDiv.classList.add('main-container');

// Append the main container div to the body
mainContainer.appendChild(mainContainerDiv);

// Create the container div
let containerDiv = document.createElement('div');
containerDiv.classList.add('container');

// Avatar Container 
let avatarContainer = document.createElement('div');
avatarContainer.classList.add('avatar-container');
containerDiv.appendChild(avatarContainer);

// Avatar Image
let avatarImage = document.createElement('img');
avatarImage.setAttribute('src', faceSvg);
avatarContainer.appendChild(avatarImage);

// Arrow Container
let arrowButtonDiv = document.createElement('div');
arrowButtonDiv.classList.add('arrow-container');
containerDiv.appendChild(arrowButtonDiv);

 // Arrow Button
 let arrowButtonImg = document.createElement('button');
 arrowButtonImg.setAttribute('id', 'arrow');
 arrowButtonImg.classList.add('arrow');
 arrowButtonDiv.appendChild(arrowButtonImg);

//  Arrow Image
let arrowImage = document.createElement('Img');
arrowImage.setAttribute('src', '../assets/arrow.svg' );
arrowImage.setAttribute('id', 'arrow-svg');
arrowButtonImg.appendChild(arrowImage);

// Append the container div to the main container div
mainContainerDiv.appendChild(containerDiv);

// Second Container div which holds the form
let formContainerDiv = document.createElement('div');
formContainerDiv.classList.add('container', 'container:nth-child(2)');

// Form Container
let formContainerParent = document.createElement('div');
formContainerParent.classList.add('form-container');
formContainerDiv.appendChild(formContainerParent);

// List Container
let listLabelContainer = document.createElement('div');
listLabelContainer.classList.add('list-label-container');
formContainerParent.appendChild(listLabelContainer);

// Input container
let inputContainer = document.createElement('div');
inputContainer.classList.add('input-element-container');
formContainerParent.appendChild(inputContainer);

// Membership Selector
let membershipOptionContainer = document.createElement('div');
// membershipOptionContainer.classList.add('container', 'container:nth-child(3)');
formContainerDiv.appendChild(membershipOptionContainer);

let membershipContainer = document.createElement('div');
membershipContainer.classList.add('selectors-alignment');
membershipContainer.classList.add('membership-container');
formContainerDiv.appendChild(membershipContainer);

// Form Footer
let footerContainer = document.createElement('div');
footerContainer.classList.add('container', 'container:nth-child(4)');
formContainerDiv.appendChild(footerContainer);

let formFooterElements = document.createElement('div');
formFooterElements.classList.add('form-footer');
footerContainer.appendChild(formFooterElements);

mainContainerDiv.appendChild(formContainerDiv);

// FormFields > Labels
formFields.forEach(field => {
    // Skip if the field's id is 'membership'
    if (field.id === 'membership') return;

    // Create a div for each form field
    const formFieldDiv = document.createElement('div');
    formFieldDiv.classList.add('label-container');

    // Create a label element for the form field
    const label = document.createElement('label');
    label.textContent = field.label;

    // Append the label to the form field div
    formFieldDiv.appendChild(label);

    // Append the form field div to the container or wherever you want to add it
    listLabelContainer.appendChild(formFieldDiv);
});

formFields.forEach(field =>{
    // Skip if the field's id is'membership'
    if (field.id ==='membership') return;

    const inputElement = document.createElement('div');
    inputElement.classList.add('input-container');

    
    const input = document.createElement('input');
    input.setAttribute('type', field.type);
    input.setAttribute('id', field.id);
    input.setAttribute('placeholder', field.label);
    input.setAttribute('required', field.required);
    inputElement.appendChild(input);

    inputContainer.appendChild(inputElement);

});

membershipType.forEach(field =>{
    const membershipTypeDiv = document.createElement('div');
    membershipContainer.appendChild(membershipTypeDiv);

    const memberShipSelectors = document.createElement('div');
    membershipTypeDiv.appendChild(memberShipSelectors);

    const membershipSelector = document.createElement('span');
    membershipSelector.classList.add('span-alignment');
    memberShipSelectors.appendChild(membershipSelector);
    const circle = document.createElement('div');
        circle.classList.add('circle', 'active');
        membershipSelector.appendChild(circle);

    const svgCard = document.createElement('img');
    svgCard.setAttribute('src', svgIconCard);
    svgCard.classList.add('svg-card-alignment')
    circle.appendChild(svgCard);

   

    const labelText = document.createTextNode(field.label);
    membershipSelector.appendChild(labelText);
});

let membershipLabel = document.createElement('p');
membershipLabel.classList.add('membership-label');
membershipLabel.textContent = 'Membership Type';
membershipContainer.appendChild(membershipLabel);

formFooter.forEach(field =>{
    const formFooterElement = document.createElement('div');
    formFooterElement.classList.add('form-footer-element');
    formFooterElements.appendChild(formFooterElement);

    const footerButtons = document.createElement('button');
    footerButtons.setAttribute('id', field.id);

    // Add the class to the button
    if(field.id === 'cancel') {
        footerButtons.classList.add('cancel-form');
    } else {
        footerButtons.classList.add('submit-form');
    }

    footerButtons.classList.add('footer-button');
    footerButtons.textContent = field.label;
    formFooterElement.appendChild(footerButtons);
})


function toggleForm(formDisplay) {
    let nthContainer = document.querySelector('.main-container > .container:nth-child(2)');
    const formContainerDisplay = document.getElementById('groupedFormContainers');
    const infoContainer = document.querySelector('.info-container');

    if (!formDisplay) {
        formContainerDisplay.classList.add('hidden-container');
        addInfoContainer(nthContainer);
    } else {
        formContainerDisplay.classList.remove('hidden-container');
        if (infoContainer) {
            infoContainer.remove();
        }
    }
}

document.getElementById('arrow').addEventListener('click', function() {
    let img = document.getElementById('arrow-svg');
    img.classList.toggle('rotate');
    formDisplay = !formDisplay;
    toggleForm(formDisplay);
});
// cancelFormButton.addEventListener('click', function() {
//     // Your cancel form function
// });