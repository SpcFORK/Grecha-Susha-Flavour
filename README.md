# Grecha-Susha.js

![KashaHard](KashaHard.gif)

Dead-Simple Front-End JavaScript Framework. 
Originally designed for [emoteJAM](https://github.com/tsoding/emoteJAM).

Derived into a more complete framework by [Spectcow](https://spcfork.replit.app).

The name basically means [buckwheat](https://en.wikipedia.org/wiki/Buckwheat) and [land](https://en.wikipedia.org/wiki/land) in russian.


## Quick Start

https://tsoding.github.io/grecha.js/example.html

```html
<!DOCTYPE html>
<html>

<head>
  <title>Grecha.js</title>
</head>

<body>
  <div id="entry"></div>
  <script src="./grecha-sushsa.js"></script>
  <script>
    const kasha = img("Kasha.png");
    const kashaHard = img("KashaHard.gif");

    const r = router({
      "/": (r) => {
        const [count, setCount] = r.useState(0);
        const [hard, setHard] = r.useState(false);

        return div(
          h1("Grecha.js"),
          
          div(a("Foo").att$("href", "#/foo")),
          div(a("Bar").att$("href", "#/bar")),
          
          div(`Counter: ${count()}`),
          
          div(hard() ? kashaHard : kasha).onclick$(() => {
            setCount(count() + 1);
            setHard(!hard());
          }),
        )
      },
      
      "/foo": () => div(
        h1("Foo"),
        
        p(LOREM),
        
        div(a("Home").att$("href", "#")),
      ),
      
      "/bar": () => div(
        h1("Bar"),
        
        p(LOREM),
        
        div(a("Home").att$("href", "#"))
      )
      
    });
    
    entry.appendChild(r);
    
  </script>
</body>

</html>
```
