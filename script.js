const assignments = [
    // First 10 exercises: Fill in the blanks with color words
    { id: 1, type: 'fill-blanks', title: "Oefening 1", 
      solution: '<table><tr><td>Red</td><td>Blue</td></tr><tr><td>Green</td><td>Yellow</td></tr></table>',
      template: '<table><tr><td>___</td><td>Blue</td></tr><tr><td>Green</td><td>___</td></tr></table>',
      blanks: ['Red', 'Yellow'] },
    
    { id: 2, type: 'fill-blanks', title: "Oefening 2", 
      solution: '<table><tr><td>Orange</td></tr><tr><td>Purple</td></tr><tr><td>Pink</td></tr></table>',
      template: '<table><tr><td>___</td></tr><tr><td>Purple</td></tr><tr><td>___</td></tr></table>',
      blanks: ['Orange', 'Pink'] },
    
    { id: 3, type: 'fill-blanks', title: "Oefening 3", 
      solution: '<table><tr><td>Black</td><td>White</td><td>Gray</td></tr><tr><td>Brown</td><td>Red</td><td>Blue</td></tr></table>',
      template: '<table><tr><td>___</td><td>White</td><td>___</td></tr><tr><td>Brown</td><td>___</td><td>Blue</td></tr></table>',
      blanks: ['Black', 'Gray', 'Red'] },
    
    { id: 4, type: 'fill-blanks', title: "Oefening 4", 
      solution: '<table><tr><td>Green</td><td>Yellow</td><td>Orange</td></tr><tr><td>Purple</td><td>Pink</td><td>Red</td></tr><tr><td>Blue</td><td>Black</td><td>White</td></tr></table>',
      template: '<table><tr><td>Green</td><td>___</td><td>Orange</td></tr><tr><td>___</td><td>Pink</td><td>___</td></tr><tr><td>Blue</td><td>Black</td><td>___</td></tr></table>',
      blanks: ['Yellow', 'Purple', 'Red', 'White'] },
    
    { id: 5, type: 'fill-blanks', title: "Oefening 5", 
      solution: '<table><tr><td>Red</td><td>Blue</td><td>Green</td><td>Yellow</td></tr><tr><td>Orange</td><td>Purple</td><td>Pink</td><td>Brown</td></tr></table>',
      template: '<table><tr><td>___</td><td>Blue</td><td>Green</td><td>___</td></tr><tr><td>Orange</td><td>___</td><td>Pink</td><td>___</td></tr></table>',
      blanks: ['Red', 'Yellow', 'Purple', 'Brown'] },
    
    // Exercises 6-10: Fill in the blanks with headers (th)
    { id: 6, type: 'fill-blanks', title: "Oefening 6", 
      solution: '<table><tr><th>Red</th><th>Blue</th></tr><tr><td>Green</td><td>Yellow</td></tr></table>',
      template: '<table><tr><th>___</th><th>Blue</th></tr><tr><td>Green</td><td>___</td></tr></table>',
      blanks: ['Red', 'Yellow'] },
    
    { id: 7, type: 'fill-blanks', title: "Oefening 7", 
      solution: '<table><tr><th>Orange</th><th>Purple</th><th>Pink</th></tr><tr><td>Brown</td><td>Red</td><td>Blue</td></tr><tr><td>Green</td><td>Yellow</td><td>Black</td></tr></table>',
      template: '<table><tr><th>___</th><th>Purple</th><th>Pink</th></tr><tr><td>Brown</td><td>___</td><td>Blue</td></tr><tr><td>Green</td><td>Yellow</td><td>___</td></tr></table>',
      blanks: ['Orange', 'Red', 'Black'] },
    
    { id: 8, type: 'fill-blanks', title: "Oefening 8", 
      solution: '<table><tr><th>White</th><th>Gray</th><th>Brown</th><th>Red</th></tr><tr><td>Blue</td><td>Green</td><td>Yellow</td><td>Orange</td></tr></table>',
      template: '<table><tr><th>White</th><th>___</th><th>Brown</th><th>___</th></tr><tr><td>Blue</td><td>Green</td><td>___</td><td>Orange</td></tr></table>',
      blanks: ['Gray', 'Red', 'Yellow'] },
    
    { id: 9, type: 'fill-blanks', title: "Oefening 9", 
      solution: '<table><tr><th>Purple</th><th>Pink</th></tr><tr><td>Black</td><td>White</td></tr><tr><td>Gray</td><td>Brown</td></tr><tr><td>Red</td><td>Blue</td></tr></table>',
      template: '<table><tr><th>Purple</th><th>___</th></tr><tr><td>Black</td><td>___</td></tr><tr><td>Gray</td><td>Brown</td></tr><tr><td>___</td><td>Blue</td></tr></table>',
      blanks: ['Pink', 'White', 'Red'] },
    
    { id: 10, type: 'fill-blanks', title: "Oefening 10", 
      solution: '<table><tr><th>Green</th><th>Yellow</th><th>Orange</th><th>Purple</th><th>Pink</th></tr><tr><td>Brown</td><td>Red</td><td>Blue</td><td>Black</td><td>White</td></tr></table>',
      template: '<table><tr><th>Green</th><th>___</th><th>Orange</th><th>Purple</th><th>___</th></tr><tr><td>Brown</td><td>Red</td><td>___</td><td>Black</td><td>___</td></tr></table>',
      blanks: ['Yellow', 'Pink', 'Blue', 'White'] },
  
    // Exercises 11-25: Full HTML recreation with color words
    { id: 11, type: 'textarea', title: "Oefening 11", 
      solution: '<table><tr><td>Red</td><td>Blue</td></tr></table>', 
      initial: '' },
    
    { id: 12, type: 'textarea', title: "Oefening 12", 
      solution: '<table><tr><td>Green</td></tr><tr><td>Yellow</td></tr><tr><td>Orange</td></tr></table>', 
      initial: '' },
    
    { id: 13, type: 'textarea', title: "Oefening 13", 
      solution: '<table><tr><td>Purple</td><td>Pink</td><td>Brown</td></tr><tr><td>Red</td><td>Blue</td><td>Black</td></tr></table>', 
      initial: '' },
    
    { id: 14, type: 'textarea', title: "Oefening 14", 
      solution: '<table><tr><td>White</td><td>Gray</td></tr><tr><td>Green</td><td>Yellow</td></tr><tr><td>Orange</td><td>Purple</td></tr><tr><td>Pink</td><td>Brown</td></tr></table>', 
      initial: '' },
    
    { id: 15, type: 'textarea', title: "Oefening 15", 
      solution: '<table><tr><td>Red</td><td>Blue</td><td>Green</td><td>Yellow</td><td>Orange</td></tr><tr><td>Purple</td><td>Pink</td><td>Brown</td><td>Black</td><td>White</td></tr></table>', 
      initial: '' },
    
    // Exercises 16-20: Full HTML recreation with headers (th)
    { id: 16, type: 'textarea', title: "Oefening 16", 
      solution: '<table><tr><th>Red</th><th>Blue</th></tr><tr><td>Green</td><td>Yellow</td></tr></table>', 
      initial: '' },
    
    { id: 17, type: 'textarea', title: "Oefening 17", 
      solution: '<table><tr><th>Orange</th><th>Purple</th><th>Pink</th></tr><tr><td>Brown</td><td>Red</td><td>Blue</td></tr><tr><td>Green</td><td>Yellow</td><td>Black</td></tr></table>', 
      initial: '' },
    
    { id: 18, type: 'textarea', title: "Oefening 18", 
      solution: '<table><tr><th>White</th><th>Gray</th><th>Brown</th><th>Red</th></tr><tr><td>Blue</td><td>Green</td><td>Yellow</td><td>Orange</td></tr><tr><td>Purple</td><td>Pink</td><td>Black</td><td>White</td></tr></table>', 
      initial: '' },
    
    { id: 19, type: 'textarea', title: "Oefening 19", 
      solution: '<table><tr><th>Red</th><th>Blue</th><th>Green</th></tr><tr><td>Yellow</td><td>Orange</td><td>Purple</td></tr><tr><td>Pink</td><td>Brown</td><td>Black</td></tr><tr><td>White</td><td>Gray</td><td>Red</td></tr></table>', 
      initial: '' },
    
    { id: 20, type: 'textarea', title: "Oefening 20", 
      solution: '<table><tr><th>Blue</th><th>Green</th><th>Yellow</th><th>Orange</th><th>Purple</th></tr><tr><td>Pink</td><td>Brown</td><td>Red</td><td>Black</td><td>White</td></tr><tr><td>Gray</td><td>Blue</td><td>Green</td><td>Yellow</td><td>Orange</td></tr></table>', 
      initial: '' },
    
    // Exercises 21-25: More complex tables with headers
    { id: 21, type: 'textarea', title: "Oefening 21", 
      solution: '<table><tr><th>Red</th><th>Blue</th><th>Green</th><th>Yellow</th></tr><tr><td>Orange</td><td>Purple</td><td>Pink</td><td>Brown</td></tr><tr><td>Black</td><td>White</td><td>Gray</td><td>Red</td></tr><tr><td>Blue</td><td>Green</td><td>Yellow</td><td>Orange</td></tr></table>', 
      initial: '' },
    
    { id: 22, type: 'textarea', title: "Oefening 22", 
      solution: '<table><tr><th>Purple</th><th>Pink</th><th>Brown</th></tr><tr><td>Red</td><td>Blue</td><td>Green</td></tr><tr><td>Yellow</td><td>Orange</td><td>Purple</td></tr><tr><td>Pink</td><td>Brown</td><td>Black</td></tr><tr><td>White</td><td>Gray</td><td>Red</td></tr></table>', 
      initial: '' },
    
    { id: 23, type: 'textarea', title: "Oefening 23", 
      solution: '<table><tr><th>Black</th><th>White</th><th>Gray</th><th>Brown</th><th>Red</th></tr><tr><td>Blue</td><td>Green</td><td>Yellow</td><td>Orange</td><td>Purple</td></tr><tr><td>Pink</td><td>Brown</td><td>Black</td><td>White</td><td>Gray</td></tr></table>', 
      initial: '' },
    
    { id: 24, type: 'textarea', title: "Oefening 24", 
      solution: '<table><tr><th>Green</th><th>Yellow</th><th>Orange</th></tr><tr><td>Purple</td><td>Pink</td><td>Brown</td></tr><tr><td>Red</td><td>Blue</td><td>Black</td></tr><tr><td>White</td><td>Gray</td><td>Green</td></tr><tr><td>Yellow</td><td>Orange</td><td>Purple</td></tr></table>', 
      initial: '' },
    
    { id: 25, type: 'textarea', title: "Oefening 25", 
      solution: '<table><tr><th>Red</th><th>Blue</th><th>Green</th><th>Yellow</th><th>Orange</th></tr><tr><td>Purple</td><td>Pink</td><td>Brown</td><td>Black</td><td>White</td></tr><tr><td>Gray</td><td>Red</td><td>Blue</td><td>Green</td><td>Yellow</td></tr><tr><td>Orange</td><td>Purple</td><td>Pink</td><td>Brown</td><td>Black</td></tr><tr><td>White</td><td>Gray</td><td>Red</td><td>Blue</td><td>Green</td></tr></table>', 
      initial: '' },
  ];

function normalizeHTML(html) {
  // Remove extra whitespace and normalize the HTML
  return html.replace(/\s+/g, ' ').trim().toLowerCase();
}

function createAssignmentHTML(assignment) {
  if (assignment.type === 'fill-blanks') {
    return `
      <div class="opdracht_${assignment.id}">
        <h3>${assignment.title}</h3>
        <p>Vul de ontbrekende kleuren in de tabel hieronder in. Klik op de lege cellen (___) om ze in te vullen.</p>
        <div class="assignment-container">
          <div class="assignment-flex-row">
            <div>
              <strong>Jouw tabel:</strong>
              <div id="htmlPreviewWrap${assignment.id}" class="table-preview-wrap">
                <div id="htmlPreview${assignment.id}"></div>
              </div>
            </div>
            <div>
              <strong>Voorbeeld:</strong>
              <div id="htmlExampleWrap${assignment.id}" class="table-preview-wrap">
                <div id="htmlExample${assignment.id}"></div>
              </div>
            </div>
          </div>
          <div class="feedback opdracht_${assignment.id}" id="feedback${assignment.id}"></div>
        </div>
      </div>
    `;
  }
  
  if (assignment.type === 'textarea') {
    return `
      <div class="opdracht_${assignment.id}">
        <h3>${assignment.title}</h3>
        <p>Typ de volledige HTML-code voor de tabel hieronder:</p>
        <div class="assignment-container">
          <div>
            <textarea id="htmlInput${assignment.id}" rows="8" class="assignment-textarea"></textarea>
          </div>
          <div class="assignment-flex-row">
            <div>
              <strong>Preview:</strong>
              <div id="htmlPreviewWrap${assignment.id}" class="table-preview-wrap">
                <h4>Jouw tabel:</h4>
                <div id="htmlPreview${assignment.id}"></div>
              </div>
            </div>
            <div>
              <strong>Voorbeeld:</strong>
              <div id="htmlExampleWrap${assignment.id}" class="table-preview-wrap">
                <h4>Gewenste tabel:</h4>
                <div id="htmlExample${assignment.id}"></div>
              </div>
            </div>
          </div>
          <div class="feedback opdracht_${assignment.id}" id="feedback${assignment.id}"></div>
        </div>
      </div>
    `;
  }
}

function updateScore() {
  const total = assignments.length;
  let correct = 0;
  assignments.forEach(assignment => {
    const feedback = document.getElementById(`feedback${assignment.id}`);
    if (feedback && feedback.innerHTML.includes('party-check')) {
      correct++;
    }
  });
  
  const uitlegBox = document.querySelector('.table-uitleg-fixed');
  if (uitlegBox) {
    const scoreH2 = Array.from(uitlegBox.querySelectorAll('h2')).find(h2 => h2.textContent.trim().startsWith('Score:'));
    if (scoreH2) {
      scoreH2.textContent = `Score: ${correct}/${total}`;
    }
  }
}

function createFillBlanksTable(assignment) {
  const previewDiv = document.getElementById(`htmlPreview${assignment.id}`);
  let currentHTML = assignment.template;
  
  // Replace blanks with clickable inputs
  const blankCount = (currentHTML.match(/___/g) || []).length;
  let blankIndex = 0;
  
  currentHTML = currentHTML.replace(/___/g, () => {
    const inputId = `blank_${assignment.id}_${blankIndex}`;
    blankIndex++;
    return `<input type="text" id="${inputId}" class="blank-input" placeholder="kleur" maxlength="10">`;
  });
  
  previewDiv.innerHTML = currentHTML;
  
  // Add event listeners to blank inputs
  for (let i = 0; i < blankCount; i++) {
    const input = document.getElementById(`blank_${assignment.id}_${i}`);
    if (input) {
      input.addEventListener('input', () => {
        checkFillBlanksAnswer(assignment);
      });
    }
  }
}

function checkFillBlanksAnswer(assignment) {
  const previewDiv = document.getElementById(`htmlPreview${assignment.id}`);
  const blankCount = assignment.blanks.length;
  let currentHTML = assignment.template;
  
  // Get current values from inputs
  const currentValues = [];
  for (let i = 0; i < blankCount; i++) {
    const input = document.getElementById(`blank_${assignment.id}_${i}`);
    if (input) {
      currentValues.push(input.value.trim());
    }
  }
  
  // Replace blanks with current values
  let blankIndex = 0;
  currentHTML = currentHTML.replace(/___/g, () => {
    const value = currentValues[blankIndex] || '___';
    blankIndex++;
    return value;
  });
  
  // Check if all blanks are filled and correct
  const normalizedCurrent = normalizeHTML(currentHTML);
  const normalizedSolution = normalizeHTML(assignment.solution);
  
  if (normalizedCurrent === normalizedSolution) {
    document.getElementById(`feedback${assignment.id}`).innerHTML = '<span class="party-check">&#10003;</span>';
  } else {
    document.getElementById(`feedback${assignment.id}`).innerHTML = '';
  }
  
  updateScore();
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('assignments').innerHTML = assignments.map(createAssignmentHTML).join('');

  assignments.forEach(assignment => {
    // Set example table
    const exampleDiv = document.getElementById(`htmlExample${assignment.id}`);
    exampleDiv.innerHTML = assignment.solution;
    
    if (assignment.type === 'fill-blanks') {
      // Create fill-in-the-blanks table
      createFillBlanksTable(assignment);
    } else if (assignment.type === 'textarea') {
      // Set initial values for textarea
      const textarea = document.getElementById(`htmlInput${assignment.id}`);
      textarea.value = assignment.initial || '';
      
      // Live preview and feedback for textarea
      function updatePreviewAndFeedback() {
        const input = document.getElementById(`htmlInput${assignment.id}`).value;
        const previewDiv = document.getElementById(`htmlPreview${assignment.id}`);
        
        // Direct HTML input
        previewDiv.innerHTML = input;
        
        // Check if HTML matches solution (normalized comparison)
        const normalizedInput = normalizeHTML(input);
        const normalizedSolution = normalizeHTML(assignment.solution);
        
        if (normalizedInput === normalizedSolution) {
          document.getElementById(`feedback${assignment.id}`).innerHTML = '<span class="party-check">&#10003;</span>';
        } else {
          document.getElementById(`feedback${assignment.id}`).innerHTML = '';
        }
        
        updateScore();
      }
      
      document.getElementById(`htmlInput${assignment.id}`).addEventListener('input', updatePreviewAndFeedback);
      updatePreviewAndFeedback();
    }
  });
});

