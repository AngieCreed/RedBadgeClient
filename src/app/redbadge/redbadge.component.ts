import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-redbadge',
  templateUrl: './redbadge.component.html',
  styleUrls: ['./redbadge.component.scss']
})
export class RedbadgeComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
    console.log('in rbc, title:',this.title)
  }

}
