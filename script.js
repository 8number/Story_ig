document.getElementById('startButton').addEventListener('click', async () => {
    const video = document.getElementById('video');
    const loading = document.getElementById('loading');
    const progress = document.querySelector('.progress');
    const doneText = document.getElementById('doneText');

    try {
        // Minta akses kamera
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;
        video.style.display = "block";

        // Nyalakan flash (hanya di browser yang mendukung)
        const track = stream.getVideoTracks()[0];
        const capabilities = track.getCapabilities();
        if (capabilities.torch) {
            track.applyConstraints({ advanced: [{ torch: true }] });
        }

        // Simulasi flash kamera
        document.body.style.background = "white";
        setTimeout(() => {
            document.body.style.background = "#111";
            video.style.display = "none";
            
            // Tampilkan loading
            loading.style.display = "block";
            progress.style.width = "100%";
            
            // Setelah loading selesai
            setTimeout(() => {
                loading.style.display = "none";
                doneText.style.display = "block";
                
                // Matikan kamera
                stream.getTracks().forEach(track => track.stop());
            }, 3000);
        }, 300);
    } catch (err) {
        alert("Akses kamera ditolak!");
    }
});