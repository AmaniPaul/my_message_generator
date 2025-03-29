const devilFruits = ['Hito Hito no Mi: Model: Nika', 'Mera Mera no Mi', 'Doku Doku no Mi', 'Nikyu Nikyu no Mi',
    'Uo Uo no Mi, Model: Seiryu', 'Gasha Gasha no Mi', 'Nagi Nagi no Mi', 'Jake Jake no Mi'
];
const breathingTechniques = ['Sun', 'Water', 'Flame', 'Thunder', 'Stone', 'Wind', 'Moon', 'Flower', 
    'Insect', 'Serpent', 'Love', 'Sound', 'Mist', 'Beast'];
const fightingPartners = ['Luffy', 'Goku', 'Gon', 'Naruto', 'Ichigo', 'Thorfin', 'Tanjiro'];

function randomizedMessage(devilFruits, breathingTechniques, fightingPartners) {
    const devilFruit = devilFruits[Math.floor(Math.random()*devilFruits.length)];
    console.log(`Your devil fruit is the ${devilFruit}.`)
    
    const breathingTechnique = breathingTechniques[Math.floor(Math.random()*breathingTechniques.length)];
    console.log(`You fight with the ${breathingTechnique} breathing technique.`);

    const fightingPartner = fightingPartners[Math.floor(Math.random()*fightingPartners.length)];
    console.log(`${fightingPartner} will fight alongside you.`);

    return;
}

randomizedMessage(devilFruits, breathingTechniques, fightingPartners);
