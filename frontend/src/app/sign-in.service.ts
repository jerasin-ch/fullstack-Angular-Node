import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import {
  SignInInterface,
  SignInResponse,
} from '../interfaces/sign-in.interface';

@Injectable()
export class SignInService {
  constructor(private http: HttpClient) {}

  async signIn(props: SignInInterface): Promise<SignInResponse> {
    return lastValueFrom(
      this.http.post<SignInResponse>('http://localhost:3000/auth/login', props)
    );
  }
}
