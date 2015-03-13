"use strict";
/**
 * This module runs e2e test by setting up a module to make our
 * backend assertions e.g. mock the responses from our api before
 * lauching our actual application.
 * @main   sn.title.example.e2e
 * @module sn.title.example.e2e
 * @author SOON_
 */
angular.module("sn.title.example.e2e", ["sn.title.example", "ngMockE2E"])
    .run([
        "$httpBackend",
        function ($httpBackend) {

            $httpBackend.whenGET(/partials\/.*/).passThrough();

        }
    ]);
