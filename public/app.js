document.getElementById('upload-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData
    });
  
    if (response.ok) {
      alert('File uploaded successfully.');
    } else {
      alert('Error uploading file.');
    }
  });