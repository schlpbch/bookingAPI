/**
 * Created by kevinkreuzer on 22.03.17.
 */

export default class ConnectionService {
    constructor(bookingStore, tabService, $http, errorLogService, authService) {
        this.bookingStore = bookingStore
        this.tabService = tabService
        this.$http = $http
        this.errorLogService = errorLogService
        this.authService = authService
    }

    getOffers(item) {
        let headers = this.authService.getAuthHeader()
        this.$http.get('../redirect_' + item._links.offers.href + '&age=42&reduction=none', {headers})
            .then((res) => {
                this.bookingStore.offers = res.data
                this.tabService.goToNextTab()
            }, (error) => {
                this.errorLogService.logError(error)
            })
    }

/*
[{"tripId":"trip-rec-context1","segments":[{"origin":{"id":"8507000","name":"Bern","date":"2017-06-14","time":"20:04"},"destination":{"id":"8507100","name":"Thun","date":"2017-06-14","time":"20:22"}}],"_links":{"self":{"href":"trips/trip-rec-context1"},"prices":{"title":"Request the cheapest prices for a trip.","href":"api/prices/trip-rec-context1"},"offers":{"title":"Request offers for a trip.","href":"api/offers?originId=8507000&destinationId=8503000&date=2017-06-14&time=20:04"},"link2WebshopB2C":{"title":"Link into Webshop B2C.","href":"https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?suche=true&ab=tr…PreviewMode=active&von=Thun&nach=Bern&datum=Sun%2C+14.06.2017&zeit=20%3A04"},"link2MobileB2C":{"title":"Link into Mobile App B2C.","href":"https://apptest.sbbmobile.ch/trip/offer?recon=T$A=1@O=Bern@L=8507000@a=128@$A=1@O=Thun@L=8507100@a=128@$201706142004$201706142156$&date=2017-06-14"}}},{"tripId":"trip-rec-context2","segments":[{"origin":{"id":"8507000","name":"Bern","date":"2017-06-14","time":"20:34"},"destination":{"id":"8507100","name":"Thun","date":"2017-06-14","time":"20:52"}}],"_links":{"self":{"href":"trips/trip-rec-context2"},"prices":{"title":"Request the cheapest prices for a trip.","href":"api/prices/trip-rec-context2"},"offers":{"title":"Request offers for a trip.","href":"api/offers?originId=8507000&destinationId=8503000&date=2017-06-14&time=20:34"},"deeplinkWebshopB2C":{"title":"Link into Webshop B2C.","href":"https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?suche=true&ab=tr…PreviewMode=active&von=Thun&nach=Bern&datum=Sun%2C+14.06.2017&zeit=20%3A34"},"deeplinkMobileB2C":{"title":"Link into Mobile App B2C.","href":"https://apptest.sbbmobile.ch/trip/offer?recon=T$A=1@O=Genève@L=8501008@a=128@$A=1@O=Bern@L=8507000@a=128@$201605161012$201605161156$IR 2517$&date=2017-06-14"}}}]
*/
    getPrice(trip) {
        let headers = this.authService.getAuthHeader()
        return trip._links.prices.href
        
        /*
        this.$http.get('../redirect_' + trip._links.prices.href, {headers})
        .then((res) => {
                 // debug
                console.log('getPrice ' + JSON.stringify(res.data))
        }, (error) => {
                this.errorLogService.logError(error)
        })
        */
    }
}
