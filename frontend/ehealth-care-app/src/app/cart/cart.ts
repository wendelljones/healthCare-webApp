export class Cart {
    id: any;

    constructor(
        public mid: number,
        public name: string,
        public price: number,
        public description: string,
        public category: string,
        public image: string[],
        public qty: number
    ) {

    }

}
