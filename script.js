document.addEventListener('DOMContentLoaded', () => {
    const guns = ['Pistol', 'Shotgun', 'Rifle', 'Sniper', 'SMG'];
    const missions = ['Mission 1', 'Mission 2', 'Mission 3', 'Mission 4', 'Mission 5'];

    const gunList = document.getElementById('gun-list');
    guns.forEach(gun => {
        const li = document.createElement('li');
        li.textContent = gun;
        gunList.appendChild(li);
    });

    const missionList = document.getElementById('mission-list');
    missions.forEach(mission => {
        const li = document.createElement('li');
        li.textContent = mission;
        missionList.appendChild(li);
    });
});
