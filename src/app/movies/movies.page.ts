import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { MoviesService } from '../services/movies.service';
import { NavController } from '@ionic/angular';






@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {


  movies:any[]=[];//keeping track of all the movies
  currentPage = 1;//keeping track of the pages
  imageBaseUrl = environment.images;
  
 //Injecting the service
  constructor(private movieService : MoviesService, private loadingCtrl : LoadingController) {}//https://ionicframework.com/docs/api/loading
  
  

  ngOnInit() {//lifecycle funcition of angular
    this.loadMovies();//Refactoring for presentation purposes
  }


  async loadMovies(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({//ionic UI controler //https://edupala.com/ionic-loading-example/?utm_content=cmp-true
      // a promise delivering more data in the future
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.movieService.getTopRatedMovies(this.currentPage).subscribe(res => {//Since its an observable to get the data from an observable we need to subscribe to it
      loading.dismiss();//displaying the loading before the http call and before dismissing it when we get the result
      this.movies.push(...res.results);
      console.log(res);
      event?.target.complete();
    })
  }

  loadMore(event:InfiniteScrollCustomEvent){//This event has a target which is the current page
    this.currentPage++;
    this.loadMovies(event);
  }

}
