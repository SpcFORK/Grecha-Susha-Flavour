const r = router({

  "/": (r) => {
    let topContainer = div(
      
    )

      .att$('class', [
        'top-container',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
      ])

    return div(
      topContainer,
    )
  },

  // Working 404
  '/404': () => div(
    h1("404"),
    p("You've hit an error page!!"),
    div(a("Home").att$("href", "#"))
  )

});

entry.appendChild(r);