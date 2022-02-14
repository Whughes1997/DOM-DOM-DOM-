document.addEventListener("DOMContentLoaded", function() {
    const newBtn = document.createElement('button');
    //newBtn.className = "add square";
    document.body.appendChild(newBtn);
    newBtn.textContent = "add square";




    const container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)

    const colorArr = [
        'red',
        'green',
        'blue',
        'white',
        'orange',
        'pink',
        'yellow',
        'purple',
        'grey'
    ];



    var idcount = 0;

    newBtn.addEventListener('click', function() {

            let box = document.createElement('div')
            box.addEventListener("click", setRandomColor);

            box.className = 'square'
            box.id = idcount
            idcount++
            let span = document.createElement("span");
            span.innerText = box.id

            span.className = 'number'
            box.appendChild(span)
            container.appendChild(box)
            let row = document.createElement('row')

            row.classname = 'row'
        }



    )

    function setRandomColor(event) {
        const randomNum = Math.floor(Math.random() * colorArr.length);
        event.target.style.backgroundColor = colorArr[randomNum];
    }

    //Add removal of even box with double click
    //function even() {
    // return Number % 2 == 0;

})