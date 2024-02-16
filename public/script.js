document.getElementById('generateImgBtn').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    try {
        const response = await fetch('/generate-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });
        const data = await response.json();
        if (data.success) {
            const imageUrl = data.imageUrl;
            // Display the generated image
            
            let imageEl = document.getElementById("imageEl");
            imageEl.src = imageUrl;
        } else {
            alert('Failed to generate image. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }

});
        document.getElementById('generateVideoBtn').addEventListener('click', async () => {
            const promptText = document.getElementById('promptVideo').value;
            try {
                const response = await fetch('/generate-video', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ prompt: promptText })
                });
                const data = await response.json();
                if (data.success) {
                    const videoUrl = data.videoUrl;
                    // Display the generated video URL
                    document.getElementById("videoEl").src = videoUrl;
                } else {
                    alert('Failed to generate video. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });

        document.getElementById('generateAudioBtn').addEventListener('click', async () => {
            const audioPrompt = document.getElementById('audioPrompt').value;
            try {
                const response = await fetch('/generate-audio', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({prompt: audioPrompt})
                });
                const data = await response.json();
                if (data.success) {
                    const audioUrl = data.audioUrl;
                    let audioEl = document.getElementById("audioEl");
                    // Set the source of the audio element
                    audioEl.src = audioUrl;
                    let audioTestEl = document.getElementById("audioTest");
                    audioTestEl.textContent = audioUrl;
                    // Load the audio
                    audioEl.load();
                } else {
                    alert('Failed to generate audio. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });