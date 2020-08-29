import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Repo} from './repo';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  private username: string;
  private accesstoken = 'ef2e71772b14584a987375aad192b574ec6cb7fe';

  constructor( private http: HttpClient) {
    this.username = "Caiseyann"
   }
  //getting github data
  getUser(username){
    return this.http.get<User>( "https://api.github.com/users/" + this.username + "?access_token=" + 'ef2e71772b14584a987375aad192b574ec6cb7fe');
  }
  getRepo(username){
    return this.http.get<Repo>("https://api.github.com/users/" + this.username + '/repos' + "?access_token=" + 'ef2e71772b14584a987375aad192b574ec6cb7fe')
  }
  updateProfile(username:string){
    this.username = username;
  }
}
