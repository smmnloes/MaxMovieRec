export class DetailedDataModel {

  constructor(public credits:string[][],
              public budget:number,
              public originalLanguage:string,
              public productionCountries:string[],
              public releaseDate:string,
              public posterPath:string) {
  }
}
