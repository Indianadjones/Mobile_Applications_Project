import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
movie: any;

  //movie= null;
  //imageBaseUrl=environment.images;//accessing the imgages from the local environmt

  //constructor(private route: ActivatedRoute, private movieService: MoviesService) { }//this will give information about the ID part of the movies

  ngOnInit() {//in here I planned to by cliking on each movie from the menu to load a movie details page and load it's poster and information about the movie
    //since I ran into an error I couldn't fix it and left commented.
    
    //const id = this.route.snapshot.paramMap.get('id');
    
    //this.movieService.getMoviesDetails(id).subscribe((res) =>{
      //console.log(res);
    //this.movie = res;
    //});
 }
 //constructor(private str:Storage) {}

 //savedGenre:string="";
 //Fired when page is displayed to user.
 //async ionViewWillEnter() {

   //Get value from Storage, set it to savedStatus.
  // this.savedGenre = await this.str.get("Genre");
 //}

 openHomepage(){
  window.open(this.movie.homepage);//to open the homepage of the website
 }

}
