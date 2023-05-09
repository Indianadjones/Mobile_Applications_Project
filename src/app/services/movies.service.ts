import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//to get API information
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

 export interface ApiResult{// to make the code more readable and understandable
  //https://jsonblob.com/
  //https://transform.tools/json-to-typescript this to generate the whole interface for me
  page:number;
  results: any[];
  total_pages:number;
  total_results: number;
 }

@Injectable({
  providedIn: 'root'
})
export class MoviesService {// in here we are going to inject information about movies

  constructor(private http: HttpClient) { }

  getTopRatedMovies(page = 1): Observable<ApiResult> {//Returning some API information
   return this.http.get<ApiResult>(
    `${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);//`` using this template literals
    //https://stackoverflow.com/questions/47057696/how-to-use-es6-template-literal-as-angular-component-input
  }

  getMoviesDetails(id : string) {//Returning some API information in this case the ID to give us more information about a specific movie

      return this.http.get(
        `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}` 
        );
    }

  }


