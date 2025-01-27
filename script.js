// Example form submission handling
 let sections = document.querySelector('section');
 let navlinks = document.querySelector('header nav a');

 window.onscroll=() =>{

    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top <offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');

            });
        };
        
    });

    let header= document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100 );
 };
 







document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        document.getElementById('contact-form').reset();
    }
})
