import {Component, Injectable, OnInit} from '@angular/core';
import {PublisherService} from "../publishers/publisher.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable()
export class HeaderComponent implements OnInit{
  allTopics: string[] = ['NEWS', 'ECONOMY', 'FASHION', 'SCIENCE', 'MUSIC', 'NATURE', 'OTHER'];
  form: NgForm;
  constructor(private publisherService: PublisherService,
              private router: Router) {
  }

   async ngOnInit() {
    await new Promise(f => setTimeout(f, 1000));
    this.publisherService.getAllTopics().subscribe(topics => {
      this.allTopics = topics;
    });
  }

  search(form: NgForm){
    this.form = form;
    this.publisherService.setSearchedPublisher(form.value.search);
    console.log(form.value.search);
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
    this.publisherService.setSearchedPublisher('');
    this.form.reset();
  }

  goToSignUpForm(){
    this.router.navigate(['/sign-up']);
  }
}
