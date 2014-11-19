@Subscribe = apply: (EmailId) ->
  #Email = $("#" + Email).val()
  Email = document.getElementById(EmailId).value
  return null if Email is ""
  params = b_dbbb567f463ec5fd082dcaa81_af54efd00e: ""
  action = "//eric-range.us9.list-manage.com/subscribe/post?u=dbbb567f463ec5fd082dcaa81&amp;id=af54efd00e&EMAIL=#{Email}"
  form = document.createElement("form")
  form.setAttribute "method", "post"
  form.setAttribute "action", action
  for key of params
    if params.hasOwnProperty(key)
      hiddenField = document.createElement("input")
      hiddenField.setAttribute "type", "hidden"
      hiddenField.setAttribute "name", key
      hiddenField.setAttribute "value", params[key]
      form.appendChild hiddenField
  document.body.appendChild form
  form.submit()
  return
