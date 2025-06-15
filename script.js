function Rotate() {
    const elems = [document.getElementById("dir1"),document.getElementById("dir2"),document.getElementById("dir3"),document.getElementById("dir4")];
    const dirs = ["東", "南", "西", "北"];
    elems.forEach((elem, index) => {
        if (dirs.indexOf(elem.textContent) == 3) {
            elem.textContent = dirs[0];
        } else {
            elem.textContent = dirs[dirs.indexOf(elem.textContent) + 1];
        }
    });
}