export function cloneFileSync(source: string, destination: string): void {
  if (process.platform === 'darwin') {
    if (process.arch === 'x64') {
      const rclonefile = require('rclonefile-darwin-x64');
      return rclonefile.cloneFileSync(source, destination);
    } else {
      const rclonefile = require('rclonefile-darwin-arm64');
      return rclonefile.cloneFileSync(source, destination);
    }
  }

  throw new Error('Unsupported platform');
}
