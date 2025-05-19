document.addEventListener('DOMContentLoaded', () => {
  const runBtn = document.getElementById('runPredictionBtn');

  if (!runBtn) {
    console.log('Run Prediction button not found!');
    return;
  }

  const currentPage = window.location.pathname.split('/').pop();
  console.log('Current page:', currentPage);

  runBtn.addEventListener('click', () => {
    console.log('Run Prediction button clicked');

    if (currentPage === 'layoffs.html') {
      console.log('Redirecting to layoff-analysis.html');
      window.location.href = 'layoff-analysis.html';
    } else if (currentPage === 'attrition.html') {
      console.log('Redirecting to attrition-analysis.html');
      window.location.href = 'attrition-analysis.html';
    } else {
      alert('Unknown page or action.');
    }
  });
});
