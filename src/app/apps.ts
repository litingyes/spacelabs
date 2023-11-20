
interface AppInfo {
  name: string
  description?: string
  path: string
  iconPath: string
}

export const apps: AppInfo[] = [
  {
    name: 'Setting',
    description: 'setting for space labs',
    path: '/setting',
    iconPath: '/svg/setting.svg'
  }
]