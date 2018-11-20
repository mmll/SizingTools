import {Injectable} from '@angular/core';
import {LoadingComponent} from '../_components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private instances: { [key: string]: LoadingComponent } = {};

  public registerInstance(name: string, instance: LoadingComponent) {
    this.instances[name] = instance;
  }

  public removeInstance(name: string, instance: LoadingComponent) {
    if (this.instances[name] === instance) {
      delete this.instances[name];
    }
  }

  public hide(name: string) {
    if (this.instances[name]) {
      this.instances[name].hide();
    }
  }

  public show(name: string) {
    if (this.instances[name]) {
      this.instances[name].show();
    }
  }

}
