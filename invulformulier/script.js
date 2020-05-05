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
    if (!/^\S+@\S+\.\S+$/.test(this.email.value)) /*test : (*@*.*))*/ {
        alert('Gelieve een geldige mail door te sturen');
        e.preventDefault();
    }
    if (this.postcode.value.length > 4 || !this.postcode.value) {
        alert('Gelieve een gelidige postcode in te vullen');
        e.preventDefault();
    }
}