import {Component, Injectable, OnInit} from '@angular/core';
import {PublisherService} from "../publishers/publisher.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit{
  allTopics: string[] = ['NEWS', 'ECONOMY', 'FASHION', 'SCIENCE', 'MUSIC', 'NATURE', 'OTHER'];

  constructor(private publisherService: PublisherService,
              private router: Router,
              private route: ActivatedRoute) {
  }

   async ngOnInit() {
     // this.publisherService.getAllTopics().subscribe(data => {
     //   this.allTopics = data;
     // });
    await new Promise(f => setTimeout(f, 1000));
    this.publisherService.getAllTopics().subscribe(topics => {
      this.allTopics = topics;
    });
  }

  sortByTitle(){
    console.log('sorting by title')
    this.publisherService.sortByTitle();
  }

  sortByPrice(){
    this.publisherService.sortByPrice();
  }

  getByTopic(topic: string){
    this.publisherService.getByTopic(topic);
  }

  goHome(){
    this.router.navigate(['/periodicals']);
    this.publisherService.getByTopic('');
  }

  goToSignUpForm(){
    this.router.navigate(['/sign-up'], //{relativeTo: this.route}
    );
  }
}
