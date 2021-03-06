import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'rt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search-c.css']
})
export class SearchComponent implements OnInit {

  private work;
  works = [];
  hiddenLogo = false;
  keyWords = [];
  status;
  public hideShow: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  results(wordSearch) {
    if(wordSearch != '') {
      this.router.navigate(['/resultados', wordSearch]);
    }
  }

  showOrHideMenu() {
    this.hideShow = !this.hideShow ? true : false;

    if(this.hideShow) {
      
      document.querySelector('.m').classList.remove('_menu');
      document.querySelector('.m').classList.add('modal_menu');
    } else {
      document.querySelector('.m').classList.remove('modal_menu');
      document.querySelector('.m').classList.add('_menu');
    }
    //document.querySelector('.menu');
    
  }

  hideMenu() {
    if(this.hideShow) {
      document.querySelector('.m').classList.remove('modal_menu');
      document.querySelector('.m').classList.add('_menu');
    }
  }


}


