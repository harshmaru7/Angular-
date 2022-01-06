import { Component, OnInit } from '@angular/core';
import { FetchpostsService } from '../fetchposts.service';

@Component({
  selector: '[app-postlist]',
  templateUrl:'./postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 8;
  public posts = [] as any;
  public errorMsg:any;
  constructor(private _fetchpostsService: FetchpostsService) { }

  ngOnInit(): void {
    this.fetchPosts(); 
  }

  fetchPosts(): void {
    this._fetchpostsService.getPosts()
          .subscribe(data=> this.posts = data,
                      error =>this.errorMsg=error);
  }

  onTableDataChange(event:any){
    this.page = event;
    this.fetchPosts();
  }  

}
