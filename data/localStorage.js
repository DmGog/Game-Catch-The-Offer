export const loadSettings = () => {
    const settings = localStorage.getItem('gameSettings');
    return settings ? JSON.parse(settings) : null;
};

export const saveSettings = (settings) => {
    localStorage.setItem('gameSettings', JSON.stringify(settings));
};