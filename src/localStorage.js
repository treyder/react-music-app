export const loadState = () => {
    try {
        const state = localStorage.getItem('react-music-app-state');
        if (state === null) {
            return undefined;
        }
        return JSON.parse(state);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('react-music-app-state', serializedState);
    } catch (err) {
        console.log(err);
    }
}