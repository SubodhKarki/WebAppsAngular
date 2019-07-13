import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  // component decorator that makes this class a component
  selector: "pm-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: String = "Product List"; // binding with interpolation
  imageWidth: Number = 50;
  imageMargin: Number = 2;
  showImage: Boolean = false;
  errorMessage: String;

  _listFilter: string;
  // listFilter property into getter and setter below
  get listFilter(): string {
    // when data binding needs the value it will call the getter & get the value
    return this._listFilter;
  }
  set listFilter(value: string) {
    // if user modifies the value the data binding calls the setter, passing in the changed value
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products; //JS conditional operator to handle the possibility listFilter string is empty, null or undefined
    // perform filter method below
  }
  // get set for filter

  filteredProducts: IProduct[]; //filter product property to filter product array

  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    // class to set default value for complex properties
    // this.listFilter = "cart";
    // for default value.
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List:" + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); // case insensitive comparision
    return this.products.filter(
      (
        product: IProduct // return the filter list of products
      ) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    ); // convert into lower case an indexOf used to determine if filter text is found
  }

  toggleImage(): void {
    // Event Binding
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
