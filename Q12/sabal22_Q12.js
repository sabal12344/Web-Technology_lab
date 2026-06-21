function updateClock(){

            let time = new Date();

            let h = time.getHours();
            let m = time.getMinutes();
            let s = time.getSeconds();

            if(h < 10) h = "0" + h;
            if(m < 10) m = "0" + m;
            if(s < 10) s = "0" + s;

            document.getElementById("clock").textContent =
                h + ":" + m + ":" + s;
        }

        setInterval(updateClock, 1000);

        updateClock();