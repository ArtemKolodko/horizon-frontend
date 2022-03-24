import { makeAutoObservable } from "mobx";

export type AppTheme = 'light' | 'dark'

export class ConfigStore {
    constructor() {
        makeAutoObservable(this)
    }

    public themeMode: AppTheme = 'dark'

    public setThemeMode (newTheme: AppTheme) {
        this.themeMode = newTheme
    }
}
