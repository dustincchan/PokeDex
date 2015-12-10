
var apiUtil = {
  fetchAllPokemons: function () {
    $.ajax({
      url: "api/pokemon",
      dataType: "json",
      success: function(data) {
        ApiActions.receiveAllPokemons(data);
      }
    })
  }
}

module.exports = apiUtil;
