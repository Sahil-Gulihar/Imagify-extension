document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', handleSubmit);
  });
  
  async function handleSubmit() {
    const inputTextArea = document.getElementById('img-input');
    const inputText = inputTextArea.value;
  
    console.log("INPUT TEXT IS", inputText);
  
    try {
      const res = await fetch("https://corsproxy.io/?https://text2image.sahilgullihar-cloudflare.workers.dev/?id=" + inputText);
  
      const imageData = await res.blob();
      const imageURL = URL.createObjectURL(imageData);
  
      const imageContainer = document.getElementById('image-container');
      const img = document.createElement('img');
      img.src = imageURL;
      img.alt = 'Generated Image';

      imageContainer.innerHTML = '';
      imageContainer.appendChild(img);
    } catch (error) {
      console.error('Error:', error);
    }
  }


  const submitBtn = document.getElementById('submit-btn');
     const imgInput = document.getElementById('img-input');
     const imageContainer = document.getElementById('image-container');
     const loadingAnimation = document.querySelector('.loading');

     function showLoadingAnimation() {
       loadingAnimation.style.display = 'block';
     }

     function hideLoadingAnimation() {
       loadingAnimation.style.display = 'none';
     }


  