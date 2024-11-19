import { createdir, createfile1, createfile2, deletesai1, deletesai2 } from "../problem1.js";

createdir();
createfile1(() => {
    deletesai1();
});
createfile2(() => {
    deletesai2();
});
