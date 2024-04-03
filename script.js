function detectDementia() {
  const mr_delay = parseFloat(document.getElementById('mr_delay').value);
  const age = parseFloat(document.getElementById('age').value);
  const educ = parseFloat(document.getElementById('educ').value);
  const ses = parseFloat(document.getElementById('ses').value);
  const cdr = parseFloat(document.getElementById('cdr').value);
  const etiv = parseFloat(document.getElementById('etiv').value);
  const ewbv = parseFloat(document.getElementById('ewbv').value);
  const asf = parseFloat(document.getElementById('asf').value);
  const mmse = parseFloat(document.getElementById('mmse').value);
  const gender = document.getElementById('gender').value;

  // Calculate the score
  let score = 0;

  if (mr_delay > 0) {
    score += 1;
  }

  if (age > 65) {
    score += 1;
  }

  if (educ < 12) {
    score += 1;
  }

  if (ses < 2) {
    score += 1;
  }

  if (cdr >= 0.5) {
    score += 1;
  }

  if (etiv < 1400) {
    score += 1;
  }

  if (ewbv > 0.3) {
    score += 1;
  }

  if (asf > 1.2) {
    score += 1;
  }

  if (mmse < 24) {
    score += 1;
  }

  if (gender === 'Male') {
    score += 1;
  }

  // Determine the result
  let result;
  if (score >= 5) {
    result = 'High likelihood of dementia';
  } else if (score >= 3) {
    result = 'Moderate likelihood of dementia';
  } else {
    result = 'Low likelihood of dementia';
  }

  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.innerText = result;
}
