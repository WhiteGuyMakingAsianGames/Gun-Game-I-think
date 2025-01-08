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
        <p>Select your difficulty level and start the challenge:</p>
        <select id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        <button onclick="startGunChallenge('${gun}')">Start Challenge</button>
    `;
}

function startGunChallenge(gun) {
    const difficulty = document.getElementById('difficulty').value;
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>${gun} Challenge - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode</h2>
        <p>Complete the challenge with the ${gun}!</p>
        <canvas id="game-canvas" width="800" height="600"></canvas>
        <button onclick="completeGunChallenge('${gun}')">Complete Challenge</button>
    `;
    startGunMinigame(gun, difficulty);
}

function startGunMinigame(gun, difficulty) {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    // Example minigame logic
    const targets = [];
    const targetCount = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 10 : 15;
    for (let i = 0; i < targetCount; i++) {
        targets.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: 20, hit: false });
    }

    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        targets.forEach(target => {
            const dx = x - target.x;
            const dy = y - target.y;
            if (Math.sqrt(dx * dx + dy * dy) < target.radius) {
                target.hit = true;
                drawTargets();
            }
        });
    });

    function drawTargets() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        targets.forEach(target => {
            if (!target.hit) {
                ctx.beginPath();
                ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'red';
                ctx.fill();
                ctx.closePath();
            }
        });
    }

    drawTargets();
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
        <p>Select your difficulty level and start the mission:</p>
        <select id="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
        <button onclick="startMissionGame('${mission.name}')">Start Mission</button>
    `;
}

function startMissionGame(mission) {
    const difficulty = document.getElementById('difficulty').value;
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>${mission} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode</h2>
        <p>Complete the mission!</p>
        <canvas id="mission-canvas" width="800" height="600"></canvas>
        <button onclick="completeMission('${mission}')">Complete Mission</button>
    `;
    startMissionMinigame(mission, difficulty);
}

function startMissionMinigame(mission, difficulty) {
    const canvas = document.getElementById('mission-canvas');
    const ctx = canvas.getContext('2d');

    // Example minigame logic
    const obstacles = [];
    const obstacleCount = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 10 : 15;
    for (let i = 0; i < obstacleCount; i++) {
        obstacles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, width: 50, height: 50 });
    }

    function drawObstacles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        obstacles.forEach(obstacle => {
            ctx.fillStyle = 'black';
            ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        });
    }

    drawObstacles();
}

function completeMission(mission) {
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = `
        <h2>${mission} Completed</h2>
        <p>Well done! You've completed the ${mission} mission.</p>
    `;
}
