
        function openNotebook() {
            document.getElementById("notebook").classList.add("open");
        }
        function closeNotebook() {
            document.getElementById("notebook").classList.remove("open");
        }

        function createHearts() {
            const container = document.querySelector('.floating-hearts');
            for (let i = 0; i < 7; i++) {
                let heart = document.createElement('div');
                heart.className = 'heart';
                heart.style.left = Math.random() * 95 + 'vw';
                heart.style.animationDuration = (Math.random() * 9 + 5) + 's';
                container.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 8000);
            }
        }
        setInterval(createHearts, 2000);
