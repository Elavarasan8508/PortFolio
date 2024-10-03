document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.backgroundColor = '#333';
            skill.style.color = '#f9d342';
});
        skill.addEventListener('mouseout', () => {
            skill.style.backgroundColor = '#f9d342';
            skill.style.color = '#333';
});
    });

    // Smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetID);
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
            });
      });
  }   );
