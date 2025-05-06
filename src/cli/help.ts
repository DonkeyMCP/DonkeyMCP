// src/cli/help.ts
export function printHelp(): void {
  console.log(`
  📦 donkeymcp CLI
  
  Usage:
    donkeymcp [options]
  
  Options:
    -i, --init      Initialize configuration
    -v, --version   Show CLI version
    -h, --help      Show help info
  
  Examples:
    donkeymcp --init
    donkeymcp --version
    donkeymcp
    `);
}