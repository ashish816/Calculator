
exports.add = function(req, res) {

  var firstString = req.param("firstnumber");
  var secondString = req.param("secondnumber");

  if (!firstString || !secondString || firstString== "" || secondString== "") {
    msg = "You need to provide values.";
    res.end(msg);
  }

  if (isNaN(firstString) || isNaN(secondString)) {
    msg = "You need to provide numbers.";
    res.end(msg);
  }

  var firstnumber = Number(req.param("firstnumber"));
  var secondNumber = Number(req.param("secondnumber"));

  data = firstnumber + secondNumber;
  res.end(data.toString());

  }
  exports.subtract = function(req, res) {

    var firstString = req.param("firstnumber");
    var secondString = req.param("secondnumber");

    if (!firstString || !secondString || firstString== "" || secondString== "") {
      msg = "You need to provide values.";
      res.end(msg);
    }

    if (isNaN(firstString) || isNaN(secondString)) {
      msg = "You need to provide numbers.";
      res.end(msg);
    }

    var firstnumber = Number(req.param("firstnumber"));
    var secondNumber = Number(req.param("secondnumber"));

    data = firstnumber - secondNumber;
    res.end(data.toString());
    }

    exports.divide = function(req, res) {

      var firstString = req.param("firstnumber");
      var secondString = req.param("secondnumber");

      if (!firstString || !secondString || firstString== "" || secondString== "") {
        msg = "You need to provide values.";
        res.end(msg);
      }

      if (isNaN(firstString) || isNaN(secondString)) {
        msg = "You need to provide numbers.";
        res.end(msg);
      }
      var firstnumber = Number(req.param("firstnumber"));
      var secondNumber = Number(req.param("secondnumber"));

              if (secondNumber ===0) {
                msg = "Divide by Zero";
                res.end(msg);
              }


      data = firstnumber/secondNumber;
      res.end(data.toString());
      }

      exports.multiply = function(req, res) {

        var firstString = req.param("firstnumber");
        var secondString = req.param("secondnumber");

        if (!firstString || !secondString || firstString== "" || secondString== "") {
          msg = "You need to provide values.";
          res.end(msg);
        }

        if (isNaN(firstString) || isNaN(secondString)) {
          msg = "You need to provide numbers.";
          res.end(msg);
        }

        var firstnumber = Number(req.param("firstnumber"));
        var secondNumber = Number(req.param("secondnumber"));

        data = firstnumber * secondNumber;
        res.end(data.toString());
        }
