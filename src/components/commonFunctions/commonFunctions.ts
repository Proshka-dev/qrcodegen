import { ISaveDataProps, IGetDataProps } from "./types";

function saveDataInLocalStorage(props: ISaveDataProps) {
    const dataInStorage = JSON.parse(localStorage.getItem(`${props.operationType}_data`) || '[]');
    dataInStorage.push({ date: props.date.getTime(), text: props.text });
    localStorage.setItem(`${props.operationType}_data`, JSON.stringify(dataInStorage));
}

function getDataFromLocalStorage(props: IGetDataProps) {
    const dataInStorage = JSON.parse(localStorage.getItem(`${props.operationType}_data`) || '[]', (key, value) => {
        if (key == 'date') return new Date(value);
        return value;
    });
    return dataInStorage;
}

function formatDate(date: Date) {
    let day = String(date.getDay());
    day = (day.length < 2) ? '0' + day : day;

    let month = String(date.getMonth());
    month = (month.length < 2) ? '0' + month : month;

    const year = date.getFullYear();

    let hours = String(date.getHours());
    hours = (hours.length < 2) ? '0' + hours : hours;

    let minutes = String(date.getMinutes());
    minutes = (minutes.length < 2) ? '0' + minutes : minutes;

    let seconds = String(date.getSeconds());
    seconds = (seconds.length < 2) ? '0' + seconds : seconds;

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

export { saveDataInLocalStorage, getDataFromLocalStorage, formatDate }