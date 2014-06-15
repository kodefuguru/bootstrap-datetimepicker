; (function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery', 'moment', 'ko'], factory);
    } else {
        // AMD is not used - Attempt to fetch dependencies from scope.
        if (!jQuery) {
            throw 'bootstrap-datetimepicker for Knockout requires jQuery to be loaded first';
        } else if (!moment) {
            throw 'bootstrap-datetimepicker for Knockout requires moment.js to be loaded first';
        } else if (!ko) {
            throw 'bootstrap-datetimepicker for Knockout requires knockout.js to be loaded first';
        } else {
            factory(jQuery, moment, ko);
        }
    }
}


(function ($, moment, ko) {
    ko.bindingHandlers.datetext = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            console.log('text init');        
            var value = valueAccessor(), allBindings = allBindingsAccessor();
            var dateFormat = allBindingsAccessor.dateFormat || "M/D/YYYY";
            var strDate = ko.utils.unwrapObservable(value);
            if (strDate) {
                if (moment(strDate).year() > 1970) {
                    var date = moment(strDate).format(dateFormat);
                    $(element).text(date);
                } else {
                    $(element).text("-");
                }
            }
        },
        update: function (element, valueAccessor, allBindingsAccessor) {    
            console.log('text update');        
            var value = valueAccessor(), allBindings = allBindingsAccessor();
            var dateFormat = allBindingsAccessor.dateFormat || "M/D/YYYY";
            var strDate = ko.utils.unwrapObservable(value);
            if (strDate) {
                if (moment(strDate).year() > 1970) {
                    var date = moment(strDate).format(dateFormat);
                    $(element).text(date);
                } else {
                    $(element).text("-");
                }
            }
        }
    };
    ko.bindingHandlers.datevalue = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor);
            var value = valueAccessor(), allBindings = allBindingsAccessor();
            var dateFormat = allBindingsAccessor.dateFormat || "M/D/YYYY";
            var strDate = ko.utils.unwrapObservable(value);
            console.log(strDate);
            if (strDate) {
                var date = moment(strDate).format(dateFormat);
                $(element).val(date);
            }
            $(element).datetimepicker({ format: dateFormat });
        },
        update: function (element, valueAccessor, allBindingsAccessor) {
            ko.bindingHandlers.value.update(element, valueAccessor, allBindingsAccessor);
            var value = valueAccessor(), allBindings = allBindingsAccessor();
            var dateFormat = allBindingsAccessor.dateFormat || "M/D/YYYY";
            var strDate = ko.utils.unwrapObservable(value);
            console.log(strDate);
             if (strDate) {
                var date = moment(strDate).format(dateFormat);
                $(element).val(date);
           }
        }
    };
}))