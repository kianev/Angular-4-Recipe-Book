import {Component} from "@angular/core";
import {DataStorageService} from "../../shared/data-storage.service";
import {Response} from "@angular/http";
import {AuthService} from "../../auth/auth.service";
import {HttpEvent} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, public authService: AuthService) {}

  onSaveData() {
   this.dataStorageService.storeRecipe()
     .subscribe(
       (response) => {
         console.log(response);
       }
   );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
