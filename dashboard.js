const parentDropdown = document.getElementById('parentDropdown');
const childDropdown = document.getElementById('childDropdown');
const grandchildDropdown = document.getElementById('grandchildDropdown');
const proceedButton = document.getElementById('proceedButton');

// Define the options for the child dropdown based on the parent selection
parentDropdown.addEventListener('change', updateChildDropdown);
childDropdown.addEventListener('change', updateGrandchildDropdown);
proceedButton.addEventListener('click', proceedToTalchowkFutsal);

// Initialize the dropdowns
updateChildDropdown();
updateGrandchildDropdown();

// Update the child dropdown options
function updateChildDropdown() {
  const selectedOption = parentDropdown.value;

  // Clear previous options
  clearDropdown(childDropdown);
  clearDropdown(grandchildDropdown);

  // Add new options based on the selected value
  if (selectedOption === 'Pokhara') {
    addChildOption('Lekhnath');
    addChildOption('Chauthe');
    addChildOption('Amarsingh');
  } else if (selectedOption === 'Tanahun') {
    addChildOption('Khaireni');
  }

  // Clear grandchild dropdown if child dropdown is not selected
  if (childDropdown.value === '') {
    clearDropdown(grandchildDropdown);
  }
}

// Update the grandchild dropdown options
function updateGrandchildDropdown() {
  const selectedOption = childDropdown.value;

  // Clear previous options
  clearDropdown(grandchildDropdown);

  // Add new options based on the selected value
  if (selectedOption === 'Lekhnath') {
    addGrandchildOption('Tc', 'Talchowk');
    addGrandchildOption('Kc', 'KalikaChowk');
  } else if (selectedOption === 'Khaireni') {
    addGrandchildOption('Bhurunge');
  } else if (selectedOption === 'Chauthe') {
    addGrandchildOption('As', 'AirportSide');
  } else if (selectedOption === 'Amarsingh') {
    addGrandchildOption('Hs', 'HospitalChowk');
  }
}

// Clear all options in a dropdown
function clearDropdown(dropdown) {
  dropdown.innerHTML = '<option value="">Select an option</option>';
}

// Add an option to the child dropdown
function addChildOption(value) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = value;
  childDropdown.appendChild(option);
}

// Add an option to the grandchild dropdown
function addGrandchildOption(value, text) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text || value;
  grandchildDropdown.appendChild(option);
}

// Proceed to "talchowkfutsal.html" page if conditions are met
function proceedToTalchowkFutsal(event) {
  event.preventDefault();
  const parentValue = parentDropdown.value;
  const childValue = childDropdown.value;
  const grandchildValue = grandchildDropdown.value;

  if (parentValue === 'Pokhara' && childValue === 'Lekhnath' && grandchildValue === 'Tc') {
    window.location.href = 'talchowkfutsal.html';
  }
}
