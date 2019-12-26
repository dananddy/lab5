let items = [
            '../pics/wp2.jpg',
            '../pics/p2.jpg',
            '../pics/p3.jpg'
        ]
        let currentItem = 0
        let interval

        function printItem(item) {
            document.getElementById("result").innerHTML = item;
            document.getElementById("result").innerHTML = `<img src="${item}" width="400" height="400" alt="123"/>`;
        }

        function initialize() {
            document.getElementById("stopButton").disabled = true;
            printItem(items[0]);
        }

        function start(){
            document.getElementById("startButton").disabled = true;
            document.getElementById("stopButton").disabled = false;

            interval = setInterval(() => {
                if (currentItem === items.length - 1) {
                    currentItem = 0
                } else {
                    currentItem++
                }

                printItem(items[currentItem])
            }, 100)
        }

        function stop(){
            document.getElementById("startButton").disabled = false;
            document.getElementById("stopButton").disabled = true;
            clearInterval(interval)
        }