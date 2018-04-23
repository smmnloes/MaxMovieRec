import {Component, Input, OnInit} from '@angular/core';
import {SearchModel} from "./search-model";
import {QueryService} from "../../../query.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchModel: SearchModel;

  private sortCriteria: string[];


  @Input()
  genres: string[];

  constructor(private queryService: QueryService) {
    this.sortCriteria = [
      'Title', 'Year', 'Rating'
    ];

  }

  ngOnInit() {
    this.searchModel = new SearchModel("", "", [], null,
      null, null, ["", "", ""], "", null, 1, this.sortCriteria[0]);
  }

  onSubmit() {
    this.queryService.makeQuery(this.searchModel, true);
  }


  onClickSortBy() {
    if (this.queryService.lastQuery != null) {
      this.queryService.changeSortBy(this.searchModel.sort_by);
    }
  }

}
