import { makeAutoObservable } from "mobx";

export type AppTheme = 'light' | 'dark'

enum StorageKey {
    latestTheme = 'latestTheme'
}

export class ConfigStore {
    constructor() {
        makeAutoObservable(this)
        this.init()
    }

    public themeMode: AppTheme = 'dark'

    init () {
        const theme = this.getStorageKey(StorageKey.latestTheme)
        if (theme === 'dark' || theme === 'light') {
            this.setThemeMode(theme, false)
        }
    }

    public setThemeMode (newTheme: AppTheme, writeToStorage = true) {
        this.themeMode = newTheme
        if (writeToStorage) {
            this.setStorageKey(StorageKey.latestTheme, newTheme)
        }
    }

    private setStorageKey (key: StorageKey, value: string) {
        window.localStorage.setItem(key, value)
    }

    private getStorageKey (key: StorageKey) {
        return window.localStorage.getItem(key)
    }
}
