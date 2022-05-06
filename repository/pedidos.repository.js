import { promises as fs } from "fs"

const { readFile, writeFile } = fs

async function readFileFunction() {
    return JSON.parse(await readFile("pedidos.json"))
}

async function writeFileFunction(obj) {
    await writeFile('pedidos.json', JSON.stringify(obj, null, 2))
}

export default {
    readFileFunction,
    writeFileFunction
}