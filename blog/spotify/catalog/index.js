const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, 'music');

main();

async function main() {
    const res = [];
    await listAllFiles(directoryPath, res);
    console.log("res is: " + res.length);

    const albums = new Map();
    res.forEach((dir) => {
        const split = dir.split('/');
        const track = split[split.length - 1];
        const album = split[split.length - 2];
        let tracks = albums.get(album);
        if(tracks == null) tracks = [];
        tracks.push(track);
        albums.set(album, tracks)
    });

    const json = [];
    albums.forEach((value, key) => {
       json.push({
           "album": key,
           "tracks": value
       })
    });

    console.log(JSON.stringify(json));
}

async function listAllFiles(dir, res) {
    if (fs.lstatSync(dir).isDirectory()) {
        const files = await fs.promises.readdir(dir)
        for (const file of files) {
            if (file === '.DS_Store') continue
            await listAllFiles(path.join(dir, file), res)
        }
    } else {
        res.push(dir)
    }
}
