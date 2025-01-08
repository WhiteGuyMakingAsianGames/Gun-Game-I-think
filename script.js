document.addEventListener('DOMContentLoaded', () => {
    const guns = ['Pistol', 'Shotgun', 'Rifle', 'Sniper', 'SMG'];
    const missions = ['Mission 1', 'Bank Heist', 'Jewelry Store Robbery', 'Drug Bust', 'Hostage Rescue'];

    const gunList = document.getElementById('gun-list');
    guns.forEach(gun => {
        const li = document.createElement('li');
        li.textContent = gun;
        li.addEventListener('click', () => {
            navigateToShootingRange(gun);
        });
        gunList.appendChild(li);
    });

    const missionList = document.getElementById('mission-list');
    missions.forEach(mission => {
        const li = document.createElement('li');
        li.textContent = mission;
        li.addEventListener('click', () => {
            startMission(mission);
        });
        missionList.appendChild(li);
    });
});

function navigateToShootingRange(gun) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `<h2>Shooting Range - ${gun}</h2><p>Practice your aim here!</p>`;
    // Add code to start shooting range
}

function startMission(mission) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `<h2>${mission}</h2><p>Complete the mission objectives to earn medals.</p>`;
    // Add code to start the mission
}
