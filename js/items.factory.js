angular.module('aplikacjaTestowa')
  .factory('Items', itemsFactroy);

  function itemsFactroy() {

    var items = [{
      column1: 'Treść kolumny 1',
      column2: 'Treść kolumny 2',
      column3: 'Treść kolumny 3',
      column4: 'Treść kolumny 4'
    }];

    return {
      getAll: function() {
        return items;
      },

      add: function(item) {
        items.push(item);
        return items;
      },

      remove: function(item) {
        var indexToDelete = items.indexOf(item);
        if(indexToDelete !== -1) {
          items.splice(indexToDelete, 1);
        }
        return items;
      }
    }


  }