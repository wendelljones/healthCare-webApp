
// map model class with entity class in backend...and entity class mapped to table...to map the json data.
export class Medications {

    constructor(
        public mid: number,
        public name: string,
        public price: string,
        public description: string,
        public category: string,
        public image: string,
        public qty: number)
        {

    }

}
