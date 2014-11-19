var Modal, Subscribe;

Modal = {
  subscribe: function() {
    document.querySelector("#subscribe-modal").toggle();
  }
};

Subscribe = {
  apply: function(Email) {
    var action, form, hiddenField, key, method, params;
    if ($("#" + Email).val() === "") {
      return null;
    }
    params = {
      b_dbbb567f463ec5fd082dcaa81_af54efd00e: ""
    };
    method = "post";
    action = "//eric-range.us9.list-manage.com/subscribe/post?u=dbbb567f463ec5fd082dcaa81&amp;id=af54efd00e&EMAIL=" + $("#" + Email).val();
    form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", action);
    for (key in params) {
      if (params.hasOwnProperty(key)) {
        hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
      }
    }
    document.body.appendChild(form);
    form.submit();
  }
};
