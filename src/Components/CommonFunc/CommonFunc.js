export const getAddedOnDate = () => {
    let today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1)
    const yyyy = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    today = mm + '-' + dd + '-' + yyyy + " " + hours + ':' + minutes + ':' + seconds;
    return today;
}