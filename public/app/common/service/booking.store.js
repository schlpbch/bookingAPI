
export default class BookingStore{

  constructor(){
    this._trips = null
    this._offers = null
    this._prebooking = null
    this._booking = null
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

  get prebooking(){
    return this._prebooking;
  }

  set preeboking(preeboking){
    this._prebooking = preeboking;
  }

  get booking(){
    return this._booking;
  }

  set booking(booking){
    this._booking = booking;
  }
}
