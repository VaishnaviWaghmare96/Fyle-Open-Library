import { Component, ViewChild } from '@angular/core';
import { UsersService } from './users.service';

interface Books {
  title : String,
  subtitle : String,
  author_name : string,
  publish_year : string,
  first_publish_year : string
  authors : String,
  name : String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersService]
})

export class AppComponent {
  title = 'Fyle Books Library';

  books: Books[];
  parameter: any;
  searchText: any;
  condition = true;

  page = 1;             //the initial page to display
  collectionSize = 250;  //total number of countries in the list
  pageSize = 10;        //size of the first page

  constructor(private user:UsersService){  }
  ngOnInit() {

  }

  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  }

  refreshData(){
    this.books = JSON.parse(localStorage.getItem('dataList'))
    .map((library, i) => ({id: i + 1, ...library}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  search(value: string) {
    console.log(value);
    this.searchText = value
    this.condition = true;

    this.user.getData(this.searchText).subscribe(data => {
      this.parameter = data.docs;
      console.log(this.parameter)
      localStorage.setItem('dataList', JSON.stringify(data.docs));
      this.refreshData(); // Display the first page  
    })
  }

  science() {
    console.log("science");
    this.condition = false;
    this.searchText = "science"
    this.user.getSubjectData(this.searchText).subscribe(data => {
      this.parameter = data.works;   
      console.log(this.parameter)
      localStorage.setItem('dataList', JSON.stringify(data.works));
      this.refreshData(); // Display the first page  
    })
  }

  math() {
    this.condition = false;
    this.searchText = "math"
    this.user.getSubjectData(this.searchText).subscribe(data => {
      this.parameter = data.works;   
      localStorage.setItem('dataList', JSON.stringify(data.works));
      this.refreshData(); // Display the first page  
    })
  }

  fiction() {
    this.condition = false;
    this.searchText = "fiction"
    this.user.getSubjectData(this.searchText).subscribe(data => {
      this.parameter = data.works;   
      localStorage.setItem('dataList', JSON.stringify(data.works));
      this.refreshData(); // Display the first page  
    })
  }

  war() {
    this.condition = false;
    this.searchText = "war"
    this.user.getSubjectData(this.searchText).subscribe(data => {
      this.parameter = data.works;   
      localStorage.setItem('dataList', JSON.stringify(data.works));
      this.refreshData(); // Display the first page  
    })
  }

  love() {
    this.condition = false;
    this.searchText = "love"
    this.user.getSubjectData(this.searchText).subscribe(data => {
      this.parameter = data.works; 
      localStorage.setItem('dataList', JSON.stringify(data.works));
      this.refreshData(); // Display the first page    
    })
  }
  
}