import React from 'react'

export const Pagina1 = ({ data }) => {

    return(
        <div>
<h1>Pagina 1</h1>
<hr/>
<pre>

    { JSON.stringify( data, null, 2 ) }
</pre>
        </div>
    )
}