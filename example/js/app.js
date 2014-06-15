var App = (function () {
    function App() {
        this.first = ko.observable(new Date().toDateString());
        this.second = ko.observable(new Date().toDateString());
        this.days = ko.computed(function () {
            return Math.round(Math.abs(moment(this.first()) - moment(this.second())) / (1000 * 60 * 60 * 24))
        }, this);
    }
    return App;
})();


this.app = new App();
ko.applyBindings(this.app);