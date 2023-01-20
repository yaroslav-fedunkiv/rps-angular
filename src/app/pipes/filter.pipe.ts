import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchingFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText || typeof searchText !== 'string') {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText);
    });
  }
}
