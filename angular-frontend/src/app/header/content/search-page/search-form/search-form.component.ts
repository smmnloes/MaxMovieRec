import {Component, OnInit} from '@angular/core';
import {QueryModel} from "./query-model";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  sortCriteria: string[] = ['Title', 'Year', 'Rating'];
  resultsPerPageOptions: number[] = [5, 10, 15, 20, 30, 50];
  queryModel: QueryModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
        this.queryModel = QueryModel.fromQueryParams(queryParams);
      }
    );
  }

  onSubmit() {
    this.queryModel.current_page = 1;
    this.refetch();
  }

  onClickSortBy() {
    this.refetch();
  }

  onClickResultsPerPage() {
    this.queryModel.current_page = 1;
    this.refetch();
  }

  refetch() {
       this.router.navigate(['/search'], {queryParams: JSON.parse(JSON.stringify(this.queryModel))});
  }

}
