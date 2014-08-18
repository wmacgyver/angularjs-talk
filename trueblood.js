var myApp = angular.module('myApp', []);

myApp.factory('TrueBlood', function() {
    var TrueBlood = {};
    TrueBlood.cast = [
      {
        name: "Anna Paquin",
        character: "Sookie Stackhouse"
      },
      {
        name: "Stephen Moyer",
        character: "Bill Compton"
      },
      {
        name: "Sam Trammell",
        character: "Sam Merlotte"
      },
      {
        name: "Ryan Kwanten",
        character: "Jason Stackhouse"
      },
      {
        name: "Rutina Wesley",
        character: "Tara Thornton"
      },
      {
        name: "Alexander Skarsgård",
        character: "Eric Northman"
      },
      {
        name: "Chris Bauer",
        character: "Andy Bellefleur"
      },
      {
        name: "Nelsan Ellis",
        character: "Lafayette Reynolds"
      },
      {
        name: "Jim Parrack",
        character: "Hoyt Fortenberry"
      },
      {
        name: "Adina Porter",
        character: "Lettie Mae Daniels"
      },
      {
        name: "Carrie Preston",
        character: "Arlene Fowler Bellefleur"
      },
      {
        name: "Michael Raymond-James",
        character: "Rene Lenier"
      },
      {
        name: "William Sanderson",
        character: "Bud Dearborne"
      },
      {
        name: "Kristin Bauer van Straten",
        character: "Pam Swynford de Beaufort"
      },
      {
        name: "Bailey Noble",
        character: "Adilyn Bellefleur"
      },
      {
        name: "Karolina Wydra",
        character: "Violet Mazurski"
      },
      {
        name: "Joe Manganiello",
        character: "Alcide Herveaux"
      },
      {
        name: "Deborah Ann Woll",
        character: "Jessica Hamby"
      }
    ];
    return TrueBlood;
})

function TrueBloodCtrl($scope, TrueBlood) {
    $scope.trueBlood = TrueBlood;
}
