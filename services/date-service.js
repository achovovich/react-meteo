export function displayNow() {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}`;
}

export const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export function displayDay(date) {
    return getDay(date) + " / " + getMonth(date);
}

export function getDay(date) {
    return `${date.getDate().toString().padStart(2, "0")}`;
}

export function getMonth(date) {
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}`;
}
