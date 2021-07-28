interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>
  readonly invoke: (channel: string, ...args: any[]) => Promise<any>
}

declare interface Window {
  electron: Readonly<ElectronApi>
  electronRequire?: NodeRequire
}
