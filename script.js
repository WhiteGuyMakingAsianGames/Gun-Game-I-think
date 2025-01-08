document.addEventListener('DOMContentLoaded', () => {
    const guns = ['Pistol', 'Shotgun', 'Rifle', 'Sniper', 'SMG'];
    const missions = [
        { name: 'Bank Heist', description: 'Rob the bank and get out alive!' },
        { name: 'Hostage Rescue', description: 'Rescue the hostages from the robbers.' },
        { name: 'Artifact Theft', description: 'Steal the ancient artifact without getting caught.' },
        { name: 'Drug Bust', description: 'Take down the drug operation.' },
        { name: 'VIP Escort', description: 'Protect the VIP during their travels.' }
    ];

    const gunList = document.getElementById('gun-list');
    guns.forEach(gun => {
        const li = document.createElement('li');
        li.textContent = gun;
        li.addEventListener('click', () => enterShootingRange(gun));
        gunList.appendChild(li);
    });

    const missionList = document.getElementById('mission-list');
    missions.forEach(mission => {
        const li = document.createElement('li');
        li.textContent = mission.name;
        li.addEventListener('click', () => startMission(mission));
        missionList.appendChild(li);
    });
});

function enterShootingRange(gun) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>Shooting Range - ${gun}</h2>
        <p>Complete the challenges to earn medals for your accuracy.</p>
        <button onclick="startGunChallenge('${gun}')">Start Challenge</button>
    `;
}

function startGunChallenge(gun) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>${gun} Challenge</h2>
        <p>Hit as many targets as you can with the ${gun}!</p>
        <button onclick="completeGunChallenge('${gun}')">Complete Challenge</button>
    `;
}

function completeGunChallenge(gun) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>${gun} Challenge Completed</h2>
        <p>Great job! You've completed the ${gun} challenge.</p>
    `;
}

function startMission(mission) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>${mission.name}</h2>
        <p>${mission.description}</p>
        <button onclick="completeMission('${mission.name}')">Complete Mission</button>
    `;
}

function completeMission(mission) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>${mission} Completed</h2>
        <p>Well done! You've completed the ${mission} mission.</p>
    `;
}
