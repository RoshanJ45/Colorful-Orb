const createOrb = (color) => {
const orb = document.createElement('div');
orb.classList.add('orb');
orb.style.background = `radial-gradient(circle, ${color}, transparent 70%)`;
orb.style.left = `${Math.random() * 100}vw`;
orb.style.top = `${Math.random() * 100}vh`;
orb.style.animationDelay = `${Math.random() * 3}s`;
document.body.appendChild(orb);
};
const colors = [
'rgba(255, 99, 71, 0.8)',
'rgba(135, 206, 235, 0.8)',
'rgba(255, 215, 0, 0.8)',
'rgba(152, 251, 152, 0.8)',
'rgba(238, 130, 238, 0.8)',
'rgba(70, 130, 180, 0.8)'
];
colors.forEach(color => createOrb(color));

