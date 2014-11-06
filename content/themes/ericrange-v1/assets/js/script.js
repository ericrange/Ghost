var Modal = {
	subscribe: function () {
		document.querySelector("#subscribe-modal").toggle();
	}
};

var Subscribe = {

	apply: function () {
        if($("#subscribe-email").val() === "")
            return null;

        params = {
            "b_dbbb567f463ec5fd082dcaa81_af54efd00e": ""
        };
		method = "post";
		var form = document.createElement("form");
		form.setAttribute("method", method);
		form.setAttribute("action", "//eric-range.us9.list-manage.com/subscribe/post?u=dbbb567f463ec5fd082dcaa81&amp;id=af54efd00e&EMAIL=" + $("#subscribe-email").val());

		for (var key in params) {
			if (params.hasOwnProperty(key)) {
				var hiddenField = document.createElement("input");
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

$(function () {

});
