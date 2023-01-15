import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-publisher',
  templateUrl: './edit-publisher.component.html',
  styleUrls: ['./edit-publisher.component.css']
})
export class EditPublisherComponent {
  topics: string[] = ['NEWS', 'ECONOMY', 'FASHION', 'SCIENCE', 'MUSIC', 'NATURE', 'OTHER']

  constructor(private route: ActivatedRoute,
              private router: Router) {}

}
