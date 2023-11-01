export class Order {
    constructor(
        public orderid?:number,
        public orderDate?:Date,
        public shipmentCharges?:number,
        public orderStatus:string="pending",
            public medications?:Array<OrderMedications>,
        public totalItems?:number,
        public itemsSubTotal?:number,
        public totalAmount?:number,
        public paymentStatus?:string,
        public paymentMethodTitle?:string,
        public email?:string,
        public pid?:number,
    ) {}
}

export class OrderMedications {
    constructor (
        public id?:number,
        public medicationsTitle?:string,
        public medicationsImg?:string,
        public brand?:string,
        public medicationsDescription?:string,
        public medicationsCategory?:string,
        public price?:number,
        public quantity?:number,
        public totalPrice?:number
    ) {}
}
