getImg = async () => {
    let res = (location.search).substring(1);
    return `https://img.chxc.cc${res}`;
}

delImg = async () => {
    let res = (location.search).substring(7);
    console.log(res);
    let rest = await fetch(`https://img.chxc.cc/api/manage/delete/${res}`);
    return rest;
}

getE = (id) => {
    return document.getElementById(id);
}

main = async () => {
    getE("img").src = await getImg();
    let rest = await delImg();
    console.log(rest);
}

main();