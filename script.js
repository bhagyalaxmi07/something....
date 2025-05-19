function navigate(destination) {
  switch (destination) {
    case 'login':
      window.location.href = 'login.html';
      break;
    case 'signup':
      window.location.href = 'signup.html';
      break;
    case 'attrition':
      window.location.href = 'attrition.html';
      break;
    case 'layoffs':
      window.location.href = 'layoffs.html';
      break;
    default:
      alert("Unknown destination.");
  }
}
