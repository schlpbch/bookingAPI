
export default class BookingStore {
  constructor (tabService) {
    this.tabService = tabService
    this._trips = null
    this._offercontainers = null
    this._prebookings = null
    this._bookings = null
    this._cancellation = null
    this._refund = null
  }

  get trips () {
    return this._trips
  }

  set trips (trips) {
    this._trips = trips
  }

  get offercontainers () {
    return this._offercontainers
  }

  set offercontainers (offercontainers) {
    this._offercontainers = offercontainers
  }

  get prebookings () {
    return this._prebookings
  }

  set prebookings (prebookings) {
    this._prebookings = prebookings
  }

  get bookings () {
    return this._bookings
  }

  set bookings (bookings) {
    this._bookings = bookings
  }

  get cancellation () {
    return this._cancellation
  }

  set cancellation (cancellation) {
    this._cancellation = cancellation
  }

  get refund () {
    return this._refund
  }

  set refund (refund) {
    this._refund = refund
  }
}
