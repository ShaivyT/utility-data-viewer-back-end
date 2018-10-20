'use strict';

const fs = require('fs');

module.exports = app => {

    function parseData() {

        const utilData = fs.readFileSync('utilData.json');

        const data = JSON.parse(utilData);
        return data;
    }

    function getData(request, response) {

        const data = {
            "data": parseData()
        };

        response.json(data);
    }

    function getYears(request, response) {

        const data = parseData();
        let years = [];
        for (let i = 0; i < data.length; i++) {

            years.push(data[i].year);
        }
        const yearsObj = {
            "yearsArray": years
        }
        response.json(yearsObj);
    }

    function getMonths(request, response) {

        const data = parseData();
        let months = [];
        for (let i = 0; i < data.length; i++) {

            months.push(data[i].month);
        }
        const monthsObj = {
            "monthsArray": months
        }
        response.json(monthsObj);
    }

    function getKwhs(request, response) {

        const data = parseData();
        let kwhs = [];
        for (let i = 0; i < data.length; i++) {

            kwhs.push(data[i].kwh);
        }
        const kwhsObj = {
            "kwhsArray": kwhs
        }
        response.json(kwhsObj);
    }

    function getBills(request, response) {
        const data = parseData();
        let bills = [];
        for (let i = 0; i < data.length; i++) {

            bills.push(data[i].bill);
        }
        const billsObj = {
            "billsArray": bills
        }
        response.json(billsObj);
    }

    function getSavings(request, response) {
        const data = parseData();
        let savings = [];
        for (let i = 0; i < data.length; i++) {

            savings.push(data[i].savings);
        }
        const savingsObj = {
            "savingsArray": savings
        }
        response.json(savingsObj);
    }

    app.get('/api/getData', getData);
    app.get('/api/getYearsData', getYears);
    app.get('/api/getMonthsData', getMonths);
    app.get('/api/getKwhsData', getKwhs);
    app.get('/api/getBillsData', getBills);
    app.get('/api/getSavingsData', getSavings);

}