"use strict";
exports.__esModule = true;
function createAccordion(btntxt, ptxt) {
    var accordion = document.createElement('div');
    accordion.classList.add('accordion');
    for (var i = 0; i < btntxt.length; i++) {
        var accordContainer = document.createElement('div'), accordBtn = document.createElement('button'), accordText = document.createElement('p');
        accordBtn.classList.add('accord-btn');
        accordBtn.innerHTML = btntxt[i];
        accordText.style.display = 'none';
        accordText.innerHTML = ptxt[i];
        accordContainer.appendChild(accordBtn);
        accordContainer.appendChild(accordText);
        accordion.appendChild(accordContainer);
        accordBtn.addEventListener('click', function (event) {
            var pWithText = event.target.nextSibling;
            pWithText.style.display =
                pWithText.style.display === 'none' ? 'block' : 'none';
        });
    }
    return accordion;
}
exports["default"] = createAccordion;
