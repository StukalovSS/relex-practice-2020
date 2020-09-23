
export default function createAccordion(btntxt: string[], ptxt: string[]): HTMLDivElement {
    const accordion: HTMLDivElement = document.createElement('div');
    accordion.classList.add( 'accordion' );

    for (let i = 0; i < btntxt.length; i++) {
        let accordContainer:HTMLDivElement = document.createElement( 'div' ),
            accordBtn: HTMLButtonElement = document.createElement( 'button' ),
            accordText: HTMLParagraphElement = document.createElement( 'p' );

        accordBtn.classList.add( 'accord-btn' );
        accordBtn.innerHTML = btntxt[i];
        accordText.style.display = 'none';
        accordText.innerHTML = ptxt[i];
        
        accordContainer.appendChild( accordBtn );
        accordContainer.appendChild( accordText );
        accordion.appendChild( accordContainer );
        
        accordBtn.addEventListener('click', event => {
            let pWithText: HTMLElement = 
                (event.target as HTMLButtonElement).nextSibling as HTMLElement;
            pWithText.style.display = 
                pWithText.style.display === 'none' ? 'block' : 'none';
        });
    }

    return accordion;
}
