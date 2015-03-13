"use strict";

describe("sn.title:title", function() {
    var element, $scope, $rootScope, errorText;

    beforeEach(module("sn.title"));

    beforeEach(inject(function ($httpBackend) {
        $httpBackend.whenGET(/.*/).respond(200);
    }));

    beforeEach(inject(function (_$rootScope_, $compile, $injector) {
        $rootScope = _$rootScope_;

        $scope = $rootScope.$new();

        errorText = $injector.get("ROUTE_CHANGE_ERROR_TITLE")

        element = "<title>My Site Name</title>";

        element = $compile(element)($scope);
        $scope.$digest();

    }));

    it("should render directive with correct title text", function(){
        $rootScope.$broadcast("$routeChangeSuccess", {
            $$route: {
                title: "foo"
            }
        })
        expect(element.html()).toEqual("foo - My Site Name");

        $rootScope.$broadcast("$routeChangeSuccess", {
            $$route: {
                title: undefined
            }
        })
        expect(element.html()).toEqual("My Site Name");
    });

    it("should render directive with error title text", function(){
        $rootScope.$broadcast("$routeChangeError")
        expect(element.html()).toEqual(errorText + " - My Site Name");
    });

});
