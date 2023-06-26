import { Inject, InjectionToken, Injectable } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('browser storage', {
  providedIn: 'root',
  factory: ()=> localStorage
})


@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor(@Inject(BROWSER_STORAGE) public storage:Storage) { }

  get(key:string) {
    return this.storage.getItem(key)
  }

  set(key:string, value:string) {
    return this.storage.setItem(key,value)
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
