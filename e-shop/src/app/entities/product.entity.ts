export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public photo: string,
        public rates: number[],
        public description: string,
        public category: string,
        public manufacturer: string,
        public reference: string,
        public subcategory: string
    ) { }

}
