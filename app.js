let friends = ['rich', 'marty', 'brian', 'christy', 'lena'];

let button = document.createElement('button');
let btnText = document.createTextNode('sing');
button.appendChild(btnText);
document.body.appendChild(button);

button.className = 'btn btn-warning';
button.addEventListener('click', function () {
    for (let i = 0; i < friends.length; i++) {
        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode(friends[i]);
        h3.appendChild(h3Text);
        let div = document.createElement('div');
        div.className = 'friend';
        div.appendChild(h3);
        document.body.appendChild(h3);


        for (let j = 99; j > 0; j--) {

            let p = document.createElement('p');
            let pText;

            if (j > 2) {
                pText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
            } else if (j === 2) {
                pText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
            } else {
                pText = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
            }

            p.appendChild(pText);

            div.appendChild(p);
        }


        document.body.appendChild(div);
    }
})
