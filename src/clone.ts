import { copyFileSync } from 'fs';
import { constants } from 'fs/promises';
import {platform} from "os"

async function main() {
    const args = process.argv.slice(2);
    const [source, destination] = args;

    if (!source || !destination) {
        console.error('Missing arguments');
        process.exit(1);
    }

    if (source === destination) {
        console.error('Source and destination must be different');
        process.exit(1);
    }

    if (platform() === "darwin") {
        const cloneFileSync = require('rclonefile').cloneFileSync;
        cloneFileSync(source, destination);
    } else {
        copyFileSync(source, destination, constants.COPYFILE_FICLONE_FORCE);
    }

    console.log(`Cloned ${source} to ${destination}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});