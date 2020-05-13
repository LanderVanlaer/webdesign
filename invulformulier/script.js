document.querySelector("#kleur-page").addEventListener('change', function() {
    document.body.classList.remove('red', 'blue', 'yellow');
    if (this.value !== 'default')
        document.body.classList.add(this.value)
});
document.querySelector("#swap-colors").addEventListener('click', () => document.querySelector("body > main > section:nth-child(1)").classList.add('colored'));
document.querySelector("#show-footer").addEventListener('click', function() {
    if (this.innerText == 'Show footer') {
        this.innerText = 'Hide footer';
        document.querySelector("body > footer").style.display = "block";
    } else {
        this.innerText = 'Show footer';
        document.querySelector("body > footer").style.display = "none";
    }
})
document.querySelector("#change-footer").addEventListener('click', () => document.querySelector("body > footer").classList.toggle('bim-bam'));

document.forms[0].onsubmit = function(e) {
    const throwErr = (err) => {
        e.preventDefault();
        alert(`Het formulier bevat volgende fouten: ${err}\nGa terug naar het formulier en verbeter!`);
    };

    if (!this.name.value) return throwErr(`Er werd geen naam ingevuld!`);

    if (!this.postcode.value) return throwErr(`Er werd geen postcode ingevuld!`);

    if (this.postcode.value.length > 4 || !this.postcode.value) return throwErr(`Gelieve een geldige postcode in te vullen!`);

    if (!/^\S+@\S+\.\S+$/.test(this.email.value) /*test : %@%.% */ ) return throwErr(`Gelieve een geldig emailadres in te vullen!`);


    //validated
    const tab = window.open();
    tab.document.write(
        `<p>Je hebt volgende gegevens opgegeven:
        Naam: ${this.name.value}
        Postcode: ${this.postcode.value}
        Emailadres: ${this.email.value}
        Je studeert ${this.elements.studeer.value?"voldoende":"onvoldoende"}
        ${this.slagen.checked?"Je wilt slagen.":""}
        ${this.bissen.checked?"Je wilt bissen.":""}</p>`.replace(/\n/g, "\n<br>"));
}