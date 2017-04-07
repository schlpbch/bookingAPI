
export default class BookingStore{

  constructor(tabService){
    this.tabService = tabService;
    this._trips = null
    this._offers = null
    this._prebookings = null
    this._bookings = null
    this._cancelation = null
  }

  get trips(){
    return this._trips;
  }

  set trips(trips){
    this._trips = trips;
  }

  get offers(){
    return this._offers;
  }

  set offers(offers){
    this._offers = offers;
  }

  get prebookings(){
    return this._prebookings;
  }

  set prebookings(prebookings){
    this._prebookings = prebookings;
  }

  get bookings(){
    return this._bookings;
  }

  set bookings(bookings){
    this._bookings = bookings;
  }

  get cancelation(){
    return this._cancellation
  }

  set cancelation(cancelation){
    this.cancelation = cancelation;
  }
}
